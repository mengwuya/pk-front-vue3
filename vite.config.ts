import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCSS = (await import('unocss/vite')).default

  return {
    plugins: [
      VueRouter(),
      vue(),
      vueJsx(),
      UnoCSS(),
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        imports: [
          'vue',
          VueRouterAutoImports,
          {
            'vue-router/auto': ['useLink', 'useRoute', 'useRouter']
          },
          '@vueuse/core'
        ]
      }),
      Components({
        directoryAsNamespace: true,
        collapseSamePrefixes: true
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
