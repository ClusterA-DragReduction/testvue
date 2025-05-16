import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/my-vue-app/', // 修改为你的仓库名称
  build: {
    outDir: 'docs' // 将输出目录改为docs
  }
})
