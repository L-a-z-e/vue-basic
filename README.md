# Vue Basic - Vue 3 입문 완전 가이드

**Vue 3** 프레임워크의 핵심 개념을 단계별로 학습하는 리포지토리입니다. 기초부터 고급까지 13개 챕터로 구성된 **실습 기반 학습 교재**입니다.

---

## 🎯 학습 목표

- ✅ **Vue 3 기초** - 템플릿, 반응형 데이터, 이벤트 핸들링
- ✅ **컴포넌트** - 재사용 가능한 UI 컴포넌트 작성
- ✅ **상태 관리** - 반응형 상태와 생명주기
- ✅ **고급 기능** - 지시어, 커스텀 훅, 폼 처리
- ✅ **최적화** - 성능 개선 및 디버깅
- ✅ **실전 프로젝트** - 실제 동작하는 애플리케이션

---

## 📚 학습 내용 구조

### Chapter 1-7: Vue 3 기초
**목표**: Vue 3의 기본 개념 습득

- **Chapter 1**: Vue 소개 및 설치
- **Chapter 2**: 템플릿 문법 (Mustache, 표현식)
- **Chapter 3**: 반응형 데이터 (ref, reactive)
- **Chapter 4**: 조건문 및 반복문 (v-if, v-for)
- **Chapter 5**: 이벤트 핸들링 (v-on, @)
- **Chapter 6**: 양방향 바인딩 (v-model)
- **Chapter 7**: 계산된 속성 (computed)

### Chapter 8-10: 컴포넌트와 고급 기능
**목표**: 컴포넌트 기반 개발 방식 학습

- **Chapter 8**: 컴포넌트 소개 및 props
- **Chapter 9**: 이벤트 emit과 양방향 통신
- **Chapter 10**: 슬롯 (Slots)

### Chapter 11-13: 고급 주제
**목표**: Vue 3 마스터

- **Chapter 11**: 라우팅 (Vue Router)
- **Chapter 12**: 상태 관리 (Pinia)
- **Chapter 13**: 폼 검증 및 실전 프로젝트

---

## 🏗 프로젝트 구조

```
vue-basic/
│
├── chapter2/                   # 템플릿 문법 기초
│   ├── hello-vue/             # Vite 기반 프로젝트 (권장)
│   │   ├── src/
│   │   │   ├── App.vue        # 루트 컴포넌트
│   │   │   ├── main.ts        # 진입점
│   │   │   └── components/    # 예제 컴포넌트
│   │   ├── package.json
│   │   ├── vite.config.ts     # Vite 빌드 설정
│   │   └── tsconfig.json      # TypeScript 설정
│   └── mustache/              # 간단한 HTML 예제
│
├── chapter3/                   # 반응형 데이터
│   └── (프로젝트 구조 동일)
│
├── chapter4-5/                 # 조건문, 이벤트
├── chapter6-7/                 # 양방향 바인딩, 계산 속성
├── chapter8-10/                # 컴포넌트, props, 슬롯
├── chapter11-13/               # 라우팅, 상태 관리, 폼 검증
│
└── README.md                   # 이 파일
```

---

## 🚀 빠른 시작

### 사전 요구사항

- **Node.js**: 18.0+ 버전
- **npm** 또는 **yarn**: 패키지 매니저
- **VS Code**: 추천 IDE (Volar 확장 설치)

### VS Code 필수 확장

프로젝트를 시작하기 전에 VS Code에 다음 확장을 설치하세요:

```
1. Volar (Vue Language Features)
2. TypeScript Vue Plugin (Volar)
3. ESLint
4. Prettier
5. Thunder Client (또는 Postman - 선택)
```

**설치 방법**: VS Code Extensions 마켓플레이스에서 검색하여 설치

### 1. 저장소 클론

```bash
git clone https://github.com/L-a-z-e/vue-basic.git
cd vue-basic
```

### 2. 챕터별 프로젝트 실행

```bash
# Chapter 2 예제 실행
cd chapter2/hello-vue
npm install
npm run dev

# http://localhost:5173 에서 확인
```

### 3. 개발 서버 실행

```bash
# Vite 개발 서버 시작 (Hot Module Replacement 지원)
npm run dev

# 브라우저에서 열리는 URL을 클릭하거나 터미널의 로컬 주소 입력
# 예: http://localhost:5173
```

### 4. 프로덕션 빌드

```bash
# 타입 체크 및 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 📖 각 챕터 상세 설명

### Chapter 1: Vue 소개
**학습 시간**: 30분

Vue의 기본 개념과 특징을 이해합니다.

**핵심 개념**:
- Vue란 무엇인가?
- 선언형 UI 렌더링
- 반응형 데이터 바인딩
- 컴포넌트 기반 아키텍처

**실습**:
```bash
cd chapter1
npm install
npm run dev
```

---

### Chapter 2: 템플릿 문법
**학습 시간**: 1시간

**핵심 개념**:
- Mustache 문법 \(\{\{ \}\}\)
- 자바스크립트 표현식
- 메서드 및 computed 호출

**예제**:
```vue
<script setup>
const message = ref('Hello, Vue!')
const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <!-- Mustache 문법 -->
  <p>{{ message }}</p>
  
  <!-- 표현식 사용 가능 -->
  <p>{{ count * 2 }}</p>
  <p>{{ message.toUpperCase() }}</p>
  
  <!-- 메서드 호출 -->
  <button @click="increment">Count: {{ count }}</button>
</template>
```

**실습 프로젝트**:
```bash
cd chapter2/hello-vue
npm run dev
```

- `src/components/MustacheExample.vue` - Mustache 문법 실습
- `src/components/ExpressionExample.vue` - 표현식 실습

---

### Chapter 3: 반응형 데이터
**학습 시간**: 1.5시간

**핵심 개념**:
- `ref()` - 원시 타입 반응형 래퍼
- `reactive()` - 객체 반응형 변환
- `.value` 접근
- 깊은 반응형 vs 얕은 반응형

**핵심 비교**:

| 기능 | ref | reactive |
|------|-----|---------|
| 원시 타입 | ✅ | ❌ |
| 객체/배열 | ✅ | ✅ |
| 재할당 | ✅ | ❌ |
| 템플릿에서 `.value` | 자동 언래핑 | - |

**실습**:
```typescript
// ref 사용
const count = ref(0)
const name = ref('Vue')

// 스크립트에서 접근
count.value++
console.log(name.value)

// 템플릿에서는 .value 생략 가능
// {{ count }} // 자동으로 count.value

// reactive 사용
const user = reactive({
  name: 'John',
  age: 30,
  email: 'john@example.com'
})

// 값 변경 (직접 수정)
user.name = 'Jane'
user.age = 25
```

---

### Chapter 4: 조건문 (v-if, v-show)
**학습 시간**: 1시간

**핵심 개념**:
- `v-if` - 조건부 렌더링
- `v-else-if` - 다중 조건
- `v-else` - 기본값
- `v-show` - CSS 토글

**v-if vs v-show 비교**:

| 특성 | v-if | v-show |
|------|------|--------|
| 초기 렌더링 | 느림 (조건 체크) | 빠름 (항상 렌더링) |
| 토글 성능 | 빠름 | 느림 |
| 이벤트 리스너 | 재생성됨 | 유지됨 |
| 추천 상황 | 조건이 자주 변함 | 자주 토글할 때 |

**실습**:
```vue
<script setup>
const isLoggedIn = ref(false)
const role = ref('user')
</script>

<template>
  <!-- v-if 사용 -->
  <div v-if="isLoggedIn">
    <p>환영합니다!</p>
  </div>
  <div v-else>
    <p>로그인하세요</p>
  </div>

  <!-- v-else-if 다중 조건 -->
  <div v-if="role === 'admin'">Admin 페이지</div>
  <div v-else-if="role === 'user'">사용자 페이지</div>
  <div v-else>게스트 페이지</div>

  <!-- v-show: CSS 토글 -->
  <div v-show="isLoggedIn" style="display: none;">
    숨겨진 콘텐츠
  </div>
</template>
```

---

### Chapter 5: 반복문 (v-for)
**학습 시간**: 1시간

**핵심 개념**:
- `v-for` 기본 사용
- 배열 반복
- 객체 반복
- 인덱스 접근
- Key 바인딩

**주의사항**:

```vue
<script setup>
const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
])

const user = reactive({
  name: 'John',
  age: 30,
  email: 'john@example.com'
})
</script>

<template>
  <!-- 배열 반복 -->
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>

  <!-- 배열 + 인덱스 -->
  <div v-for="(item, index) in items" :key="item.id">
    {{ index }}: {{ item.name }}
  </div>

  <!-- 객체 반복 -->
  <div v-for="(value, key) in user" :key="key">
    {{ key }}: {{ value }}
  </div>

  <!-- 범위 반복 (1부터 10까지) -->
  <span v-for="n in 10" :key="n">{{ n }} </span>
</template>
```

**⚠️ Key의 중요성**:
```vue
<!-- ❌ 잘못된 예: key 없음 -->
<li v-for="item in items">{{ item }}</li>

<!-- ⚠️ 경고: index를 key로 사용 (목록 수정 시 문제) -->
<li v-for="(item, index) in items" :key="index">
  {{ item }}
</li>

<!-- ✅ 올바른 예: 고유 ID를 key로 사용 -->
<li v-for="item in items" :key="item.id">
  {{ item.name }}
</li>
```

---

### Chapter 6: 이벤트 핸들링 (@)
**학습 시간**: 1시간

**핵심 개념**:
- `v-on` / `@` 이벤트 바인딩
- 메서드 호출
- 이벤트 수정자 (modifiers)
- 키 수정자 (key modifiers)

**이벤트 수정자**:

| 수정자 | 설명 | 예제 |
|--------|------|------|
| `.stop` | 이벤트 전파 중지 | `@click.stop` |
| `.prevent` | 기본 동작 방지 | `@submit.prevent` |
| `.self` | 자신에게서만 트리거 | `@click.self` |
| `.once` | 한 번만 실행 | `@click.once` |

**실습**:
```vue
<script setup>
const count = ref(0)
const handleClick = () => count.value++
const handleSubmit = (e) => console.log('submitted', e)
</script>

<template>
  <!-- 메서드 호출 -->
  <button @click="handleClick">Count: {{ count }}</button>

  <!-- 인라인 표현식 -->
  <button @click="count++">증가</button>

  <!-- 이벤트 객체 전달 -->
  <button @click="handleSubmit($event)">Submit</button>

  <!-- 이벤트 수정자 -->
  <form @submit.prevent="handleSubmit">
    <input type="text" />
    <button type="submit">제출</button>
  </form>

  <!-- 키 수정자 -->
  <input @keydown.enter="handleSubmit" />
  <input @keydown.space="handleClick" />

  <!-- 마우스 수정자 -->
  <button @click.right="handleClick">오른쪽 클릭</button>
</template>
```

---

### Chapter 7: 양방향 바인딩 (v-model)
**학습 시간**: 1시간

**핵심 개념**:
- `v-model` - 양방향 데이터 바인딩
- 텍스트 입력
- 체크박스
- 라디오 버튼
- 선택 리스트

**실습**:
```vue
<script setup>
const message = ref('')
const checked = ref(false)
const selected = ref('apple')
const fruits = ref([])
</script>

<template>
  <!-- 텍스트 입력 -->
  <input v-model="message" placeholder="메시지 입력" />
  <p>입력값: {{ message }}</p>

  <!-- 텍스트 영역 -->
  <textarea v-model="message"></textarea>

  <!-- 체크박스 (단일) -->
  <input type="checkbox" v-model="checked" />
  <p>체크됨: {{ checked }}</p>

  <!-- 체크박스 (다중) -->
  <label>
    <input type="checkbox" value="apple" v-model="fruits" />
    Apple
  </label>
  <label>
    <input type="checkbox" value="banana" v-model="fruits" />
    Banana
  </label>
  <p>선택: {{ fruits }}</p>

  <!-- 라디오 버튼 -->
  <label>
    <input type="radio" value="apple" v-model="selected" />
    Apple
  </label>
  <label>
    <input type="radio" value="banana" v-model="selected" />
    Banana
  </label>
  <p>선택: {{ selected }}</p>

  <!-- 선택 목록 -->
  <select v-model="selected">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="orange">Orange</option>
  </select>
</template>
```

---

### Chapter 8: 계산된 속성 (Computed)
**학습 시간**: 1시간

**핵심 개념**:
- `computed()` - 캐시된 계산 속성
- 읽기 전용 computed
- 쓰기 가능한 computed
- 메서드와의 차이

**Computed vs 메서드**:

| 특성 | Computed | 메서드 |
|------|----------|--------|
| 캐싱 | ✅ 자동 | ❌ |
| 반응성 | ✅ | ✅ |
| 성능 | 빠름 (캐시) | 느림 (매번 실행) |
| 값으로 사용 | ✅ | ❌ (함수 호출 필요) |

**실습**:
```typescript
// 읽기 전용 computed
const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})

// 쓰기 가능한 computed
const fullNameWritable = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

// 사용
console.log(fullName.value)  // "John Doe"
fullNameWritable.value = "Jane Smith"  // setter 호출
console.log(firstName.value)  // "Jane"
```

---

### Chapter 9-10: 컴포넌트
**학습 시간**: 2시간

**핵심 개념**:
- 컴포넌트 생성 및 사용
- Props - 부모에서 자식으로 데이터 전달
- Emit - 자식에서 부모로 이벤트 전달
- Slots - 컴포넌트 확장성

**Props 예제**:
```vue
<!-- Parent.vue -->
<template>
  <MyComponent 
    title="Hello" 
    :count="5"
    @update="handleUpdate"
  />
</template>

<!-- MyComponent.vue -->
<script setup lang="ts">
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})

const emit = defineEmits<{
  update: [value: number]
}>()

function increment() {
  emit('update', props.count + 1)
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">증가</button>
  </div>
</template>
```

**Slots 예제**:
```vue
<!-- Card.vue (슬롯 정의) -->
<template>
  <div class="card">
    <div class="header">
      <slot name="header">기본 헤더</slot>
    </div>
    <div class="body">
      <slot>기본 본문</slot>
    </div>
    <div class="footer">
      <slot name="footer">기본 푸터</slot>
    </div>
  </div>
</template>

<!-- 사용 -->
<Card>
  <template #header>
    <h1>제목</h1>
  </template>
  
  <p>본문 내용</p>
  
  <template #footer>
    <p>푸터</p>
  </template>
</Card>
```

---

### Chapter 11: 라우팅 (Vue Router)
**학습 시간**: 2시간

**핵심 개념**:
- 라우터 설정
- 동적 라우트
- 중첩 라우트
- 프로그래매틱 네비게이션

**기본 설정**:
```typescript
// router.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: UserDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

---

### Chapter 12: 상태 관리 (Pinia)
**학습 시간**: 2시간

**핵심 개념**:
- Pinia 스토어
- State, Getters, Actions
- 상태 공유

**기본 패턴**:
```typescript
// stores/counter.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  return { count, doubleCount, increment }
})

// 컴포넌트에서 사용
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
// counter.count, counter.doubleCount, counter.increment() 접근
```

---

### Chapter 13: 폼 검증 및 실전 프로젝트
**학습 시간**: 3시간

**핵심 개념**:
- 폼 데이터 검증
- VeeValidate 또는 커스텀 검증
- 에러 메시지 표시
- 전송 처리

**커스텀 검증 예제**:
```vue
<script setup>
const form = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

const errors = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

function validate() {
  errors.email = validateEmail(form.email) ? '' : '유효한 이메일이 아닙니다'
  errors.password = form.password.length >= 8 ? '' : '8자 이상이어야 합니다'
  errors.confirmPassword = form.password === form.confirmPassword ? '' : '비밀번호가 일치하지 않습니다'
  
  return !errors.email && !errors.password && !errors.confirmPassword
}

function handleSubmit() {
  if (validate()) {
    console.log('폼 제출:', form)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <input v-model="form.email" type="email" placeholder="이메일" />
      <span class="error" v-if="errors.email">{{ errors.email }}</span>
    </div>
    <button type="submit">제출</button>
  </form>
</template>
```

---

## 💡 학습 팁

### 1. 단계적 학습
- 각 챕터를 순서대로 진행
- 직접 코드를 작성하며 학습
- 예제를 수정해가며 실험

### 2. 실습 방식
```
이론 학습 → 기본 예제 작성 → 변형 및 실험 → 미니 프로젝트
```

### 3. 개발 중 주의점

```typescript
// ❌ 잘못된 패턴
const state = ref({ count: 0 })
const count = state.value  // 반응성 손실!

// ✅ 올바른 패턴
const state = reactive({ count: 0 })
const { count } = toRefs(state)  // 반응성 유지
```

### 4. VS Code 디버깅
```bash
# package.json에 소스맵 추가
npm run dev -- --sourcemap
```

그 후 VS Code의 "Run and Debug" 탭에서 Chrome 연결 설정

---

## 🧪 실습 순서

### Week 1: Vue 기초 (12시간)
```
Day 1-2: Chapter 1-2 (Vue 소개, 템플릿 문법)
Day 3-4: Chapter 3 (반응형 데이터)
Day 5: Chapter 4-5 (조건문, 반복문)
```

### Week 2: Vue 심화 (12시간)
```
Day 1: Chapter 6 (이벤트)
Day 2: Chapter 7 (양방향 바인딩)
Day 3: Chapter 8 (계산된 속성)
Day 4-5: Chapter 9-10 (컴포넌트)
```

### Week 3: 실전 활용 (12시간)
```
Day 1-2: Chapter 11 (라우팅)
Day 3: Chapter 12 (상태 관리)
Day 4-5: Chapter 13 (폼 검증 + 프로젝트)
```

---

## 🐛 일반적인 오류와 해결법

### 1. 반응성 잃음 (Reactivity Loss)

```typescript
// ❌ 문제: 배열 인덱스로 직접 할당
const items = ref(['a', 'b', 'c'])
items.value[0] = 'd'  // 반응성 없음

// ✅ 해결: set() 사용
import { set } from 'vue'
set(items.value, 0, 'd')

// 또는 배열 메서드 사용
items.value.splice(0, 1, 'd')
```

### 2. 무한 루프 (Infinite Loop)

```typescript
// ❌ 문제: 계산된 속성이 자신을 수정
const computed = computed(() => {
  count.value++  // 무한 루프!
  return count.value
})

// ✅ 해결: 부작용 없는 순수 함수
const computed = computed(() => {
  return count.value * 2
})
```

### 3. Key 경고 (v-for Key Warning)

```typescript
// ❌ index를 key로 사용 (목록 수정 시 문제)
<div v-for="(item, index) in items" :key="index">
  {{ item }}
</div>

// ✅ 고유 ID 사용
<div v-for="item in items" :key="item.id">
  {{ item.name }}
</div>
```

### 4. Props 수정 경고 (Props Mutation)

```typescript
// ❌ props 직접 수정
<script setup>
const props = defineProps<{ count: number }>()
props.count++  // 경고!
</script>

// ✅ 이벤트 emit
<script setup>
const emit = defineEmits<{ update: [value: number] }>()
function increment() {
  emit('update', props.count + 1)
}
</script>
```

---

## 📚 추천 학습 리소스

### 공식 문서
- [Vue 3 공식 문서](https://vuejs.org/)
- [Vue Router 가이드](https://router.vuejs.org/)
- [Pinia 문서](https://pinia.vuejs.org/)

### 실무 패턴
- [Vue.js Best Practices](https://github.com/vuejs/awesome-vue)
- [TypeScript + Vue.js](https://github.com/microsoft/TypeScript/wiki/TypeScript-and-Babel)

---

## 📖 핵심 개념 요약

### 반응형 데이터의 원리

Vue 3의 반응형은 **JavaScript Proxy**를 사용합니다:

```typescript
// 내부적으로 이렇게 동작
const target = { count: 0 }
const handler = {
  get(target, property) {
    console.log(`${property} 접근`)
    return target[property]
  },
  set(target, property, value) {
    console.log(`${property}을 ${value}로 설정`)
    target[property] = value
    // UI 업데이트 트리거
  }
}
const reactive = new Proxy(target, handler)
```

### 생명주기 (Lifecycle)

```
생성 → 장착 → 업데이트 → 언마운트

setup()
  ↓
onBeforeMount()
  ↓
onMounted()  ← DOM 접근 가능
  ↓
onBeforeUpdate()
  ↓
onUpdated()  ← 업데이트 완료
  ↓
onBeforeUnmount()
  ↓
onUnmounted()
```
