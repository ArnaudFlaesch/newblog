import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
const sw = process.env.SW === 'true';
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
    strategies: sw ? 'injectManifest' : 'generateSW',
    srcDir: sw ? 'service-worker' : undefined,
    filename: sw ? 'sw.ts' : undefined,
    registerType: 'autoUpdate',
    manifest: {
      name: 'Arnaud Flaesch',
      short_name: 'AF',
      background_color: '#fafafa',
      theme_color: '#1976d2',
      start_url: '/',
      display: 'minimal-ui',
      icon: '/public/images/favicon.png'
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
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
