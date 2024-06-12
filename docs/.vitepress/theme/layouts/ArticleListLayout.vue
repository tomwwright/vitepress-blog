<script setup>
import Content from "../components/Content.vue";
import ArticleList from "../components/ArticleList.vue";
</script>

<template>
  <div class="Layout">
    <Content>
      <template #doc-after>
        <ArticleList />
      </template>
    </Content>
  </div>
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>