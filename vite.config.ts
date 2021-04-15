import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import ViteFonts from 'vite-plugin-fonts'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    ViteFonts({
      google: {
        preconnect: false,
        display: 'block',
        families: [
          {
            name: 'Prompt',
            styles: 'wght@300;400',
            defer: true,
          },
        ],
      },
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      webp: {
        quality: 75,
      },
      mozjpeg: {
        quality: 65,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
          {
            removeEmptyAttrs: false,
          },
        ],
      },
    }),
  ],
})
