// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/image", '@nuxtjs/device', 'nuxt-swiper', '@vueuse/nuxt',],
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-08-08",
  app: {
    head: {
      link: [
        {
          href: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css',
          rel: 'stylesheet'
        }
      ]
    }
  }
})