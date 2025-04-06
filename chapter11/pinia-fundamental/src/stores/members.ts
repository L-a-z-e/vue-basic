import { defineStore } from "pinia";
import type { Member } from "@/interface";

interface State {
    memberList: Map<number, Member>;
}

export const useMembersStore = defineStore("members", {
    state: (): State => {
        return {
            memberList: new Map<number, Member>()
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
        prepareMemberList(): void {
            let memberList = new Map<number, Member>();
            const memberListJSONStr = sessionStorage.getItem("memberList");

            if (memberListJSONStr != undefined) {
                const memberListJSON = JSON.parse(memberListJSONStr);
                memberList = new Map<number, Member>(memberListJSON);
            }
            this.memberList = memberList;
        },
        insertMember(member: Member): void {
            this.memberList.set(member.id, member);
            const memberListJSONStr = JSON.stringify([...this.memberList]);
            sessionStorage.setItem("memberList", JSON.stringify(memberListJSONStr));
        }
    }
})