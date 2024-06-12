<!--.vitepress/theme/MyLayout.vue-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import VPSwitchAppearance from "vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue";
import ArticleLayout from "./layouts/ArticleLayout.vue";
import ArticleListLayout from "./layouts/ArticleListLayout.vue";

import { useData } from 'vitepress'

const { frontmatter } = useData()

const { Layout } = DefaultTheme
</script>

<template>
  <ArticleLayout v-if="frontmatter.layout === 'post'">
    <template #aside-bottom>
      <VPSwitchAppearance />
    </template>
  </ArticleLayout>

  <ArticleListLayout v-if="frontmatter.layout === 'blog'">
    <template #aside-bottom>
      <VPSwitchAppearance />
    </template>
  </ArticleListLayout>

  <Layout v-else>
    <template #doc-before>
      <p>doc-before</p>
    </template>
    <template #aside-bottom>
      <VPSwitchAppearance />
    </template>
  </Layout>
</template>