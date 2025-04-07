import { defineStore } from "pinia";
import type { Member } from "@/interface";

interface State {
    memberList: Map<number, Member>;
    isLoading: boolean;
}

let _database: IDBDatabase;
async function getDatabase(): Promise<IDBDatabase> {
    const promise = new Promise<IDBDatabase>(
        (resolve, reject) => {
            if(_database != undefined){
                resolve(_database);
            } else {
                const request = window.indexedDB.open("asyncdb", 1);
                request.onupgradeneeded = (event) => {
                    const target = event.target as IDBRequest;
                    const database = target.result as IDBDatabase;
                    database.createObjectStore("members", {keyPath: "id"});
                }
                request.onsuccess = (event) => {
                    const target = event.target as IDBRequest;
                    _database = target.result as IDBDatabase;
                    resolve(_database);
                };
                request.onerror = (event) => {
                    console.log("Error: DB를 열 수 없습니다.", event);
                    reject(new Error("Error: DB를 열 수 없습니다."));
                }
            }
        }
    );
    return promise;
}

export const useMembersStore = defineStore("members", {
    state: (): State => {
        return {
            memberList: new Map<number, Member>(),
            isLoading: true,
        };
    },
    getters: {
        getById: (state: State) => {
            return (id: number): Member => {
                return state.memberList.get(id) as Member;
            }
        },
        isMemberListEmpty: (state: State) => {
            return state.memberList.size == 0;
        }
    },
    actions: {
        initList(): void {
            this.memberList.set(1, {id: 1, name: "user1", email: "user1@email.com", points: 35, note: "신규 가입" });
            this.memberList.set(2, {id: 2, name: "user2", email: "user1@email.com", points: 35});
        },
        addMember(member: Member): void {
            this.memberList.set(member.id, member);
        },
        async prepareMemberList(): Promise<boolean> {
            const database = await getDatabase();
            const promise = new Promise<boolean>(
                (resolve, reject) => {
                    const transaction = database.transaction("members", "readonly");
                    const objectStore = transaction.objectStore("members");
                    const memberList = new Map<number, Member>();
                    const request = objectStore.openCursor();

                    request.onsuccess = (event) => {
                        const target = event.target as IDBRequest;
                        const cursor = target.result as IDBCursorWithValue;

                        if (cursor) {
                            const id = cursor.key as number;
                            const member = cursor.value as Member;
                            memberList.set(id, member);
                            cursor.continue();
                        }

                    };

                    transaction.oncomplete = () => {
                        this.memberList = memberList;
                        this.isLoading = false;
                        resolve(true);
                    };

                    transaction.onerror = (event) => {
                        console.log("Error: 데이터 취득 실패", event);
                        reject(new Error("Error: 데이터 취득 실패"));
                    };
                }
            );
            return promise;
        },
        async insertMember(member: Member): Promise<boolean> {
            const memberAdd: Member = {
                ...member
            };

            const database = await getDatabase();
            const promise = new Promise<boolean>(
                (resolve, reject) => {
                    const transaction = database.transaction("members", "readwrite");
                    const objectStore = transaction.objectStore("members");
                    objectStore.put(memberAdd);

                    transaction.oncomplete = () => {
                        resolve(true);
                    };
                    transaction.onerror = (event) => {
                        console.log("Error: 데이터 등록 실패", event);
                        reject(new Error("Error: 데이터 등록 실패"));
                    };
                }
            )
            return promise;
        }
    }
})