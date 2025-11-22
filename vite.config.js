import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: '/MAIN.html',
    },
    build: {
        rollupOptions: {
            input: {
                main: 'MAIN.html',
            },
        },
    },
})
