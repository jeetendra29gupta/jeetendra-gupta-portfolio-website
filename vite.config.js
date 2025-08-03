import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    base: '/jeetendra-gupta-portfolio-website/',
    server: {
        host: '0.0.0.0',
        port: 9191,
    }
})
