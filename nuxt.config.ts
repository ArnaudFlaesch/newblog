import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/styles.scss', '~/assets/global.scss'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-graphql-client',
    '@vite-pwa/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    }
  ],
  'graphql-client': {
    clients: {
      default: {
        headers: { 'user-agent': 'node.js' },
        host: 'https://api.github.com/graphql',
        token: {
          type: 'Bearer',
          name: 'Authorization',
          value: process.env.PORTFOLIO_GITHUB_TOKEN
        }
      }
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default'
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },

  pwa: {
    // https://pwa.nuxtjs.org/manifest
    // Manifest adds Web App Manifest with no pain.
    manifest: {
      name: 'SportsWire',
      short_name: 'SportsWire',
      description: 'Up-to-date Sports News and Analysis App.',
      theme_color: '#6a5acd',
      lang: 'en',
      background_color: '#6a5acd'
    },
    // https://pwa.nuxtjs.org/icon
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512] //Array of sizes to be generated (Square).These are the default values
    },
    // https://pwa.nuxtjs.org/meta
    // Meta easily adds common meta tags into your project with zero-config needed.
    meta: {
      name: 'SportsWire',
      description: 'Up-to-date Sports News and Analysis App.',
      author: 'Vino Samari',
      theme_color: '#6a5acd',
      nativeUi: true,
      appleStatusBarStyle: 'black',
      mobileAppIOS: true
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
});
