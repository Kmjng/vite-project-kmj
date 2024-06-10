export default {
  root: "src",
  build: {
      outDir: "../dist",
  },
  optimizeDeps: {
    include: ['vite-project-kmj'] // 프로젝트에서 사용하는 패키지 이름을 명시
  }
};
