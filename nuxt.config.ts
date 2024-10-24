import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { siteUrl, title } from './data/SiteData';
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/styles.scss', '~/assets/global.scss'],
  site: {
    url: siteUrl,
    name: title
  },
  app: {
    head: {
      title: title,
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'nuxt-graphql-client',
    '@nuxtjs/seo',
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
      failOnError: false,
      routes: ['/sitemap.xml']
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
