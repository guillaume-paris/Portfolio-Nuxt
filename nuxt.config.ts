// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  plugins: [
    { src: "~/plugins/fontawesome.js", ssr: false} 
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
})
