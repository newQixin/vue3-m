import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin({
            include: [
                'src/**/*.js',
                'src/**/*.ts',
                'src/**/*.vue',
                'src/*.js',
                'src/*.ts',
                'src/*.vue'
            ]
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import 'src/assets/variable.less';`
                },
                javascriptEnabled: true
            }
        }
    }
})
