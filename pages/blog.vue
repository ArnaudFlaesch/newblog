<template>
  <div>
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <ol id="articles-list">
        <!-- {posts?.map((post: IPost) => (
          <li key={post.fields.slug}>
            <Post {...post} />
          </li>
        ))} -->
      </ol>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const titleCode = 'BLOG.PAGE.TITLE';
const descriptionCode = 'BLOG.PAGE.DESCRIPTION';
</script>

<style lang="scss" scoped>
#articles-list {
  list-style-type: none;
}
</style>
