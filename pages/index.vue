<template>
  <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
    <div id="home-page">
      <div id="site-links">
        <h2>{{ $t('SITE.CONTENT') }} :</h2>
        <ul>
          <li>
            <NuxtLink :to="localePath('cv')">{{ $t('CV.MESSAGE') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('projects')">{{ $t('PROJECTS.MESSAGE') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('blog')">{{ $t('BLOG.MESSAGE') }}</NuxtLink
            ><!--<a href="{rssFeedFile}">{{ $t('RSS.FEED') }}</a>-->
          </li>
          <li>
            <NuxtLink :to="localePath('contact')">{{ $t('CONTACT.MESSAGE') }}</NuxtLink>
          </li>
        </ul>
      </div>

      <h2 id="blog-title">
        <a href="/blog">{{ $t('RECENT.ARTICLES') }}</a>
      </h2>
      <!-- <ol>
          {posts.map((post: IPost) => (
            <li key={post.fields.slug}>
              <Post {...post} />
            </li>
          ))}
        </ol>-->
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
const titleCode = 'INDEX.PAGE.TITLE';
const descriptionCode = 'INDEX.PAGE.DESCRIPTION';
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';

#home-page {
  #site-links {
    a {
      color: black;
    }
  }

  #blog-title {
    margin-top: 2em;
  }

  ol {
    list-style-type: none;
  }
}
</style>
