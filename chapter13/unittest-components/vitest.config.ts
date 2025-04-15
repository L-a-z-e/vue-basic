// import { fileURLToPath, URL } from 'node:url';
// import path from 'node:path';
// import { defineConfig } from 'vitest/config';
// import vue from '@vitejs/plugin-vue'; // Vue 플러그인 직접 임포트
//
// // 경로 계산 (이 파일 위치 기준)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const srcPath = path.resolve(__dirname, 'src');
// console.log('[vitest.config.ts] Independent config - Calculated srcPath:', srcPath); // 경로 확인 로그 추가
//
// export default defineConfig({
//   // Vitest에 필요한 플러그인 직접 명시
//   plugins: [
//     vue(), // .vue 파일 처리를 위해 필요
//   ],
//   test: {
//     globals: true,
//     environment: 'jsdom', // Vue 컴포넌트 테스트 환경
//     // exclude: [...configDefaults.exclude, 'e2e/**'], // 필요하면 기본값 사용 가능
//   },
//   // alias 설정 직접 명시
//   resolve: {
//     alias: {
//       '@': srcPath,
//     },
//   },
// });
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'
import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
    },
    resolve: {
      alias: {
        // vite.config.ts와 동일한 방식으로 정의
        // '@': fileURLToPath(new URL('./src', import.meta.url))
        '@': path.resolve(__dirname, 'src'),
      }
    }
  })
)
