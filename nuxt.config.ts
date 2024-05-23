// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  devtools: { enabled: true },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      login: '/login',
      callback: '/',
      include: undefined,
      exclude: ['/course/chapter/1-chapter-1/*'],
      cookieRedirect: true,
    }
  },
});
