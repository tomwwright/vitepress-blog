<script setup lang="ts">
import { data } from '../posts.data.mts'
</script>

<template>
  <ul>
    <li v-for="{ title, url, date, excerpt } of data">
      <h1>{{ title }}</h1>
      <p>{{ date.string }} {{ url }}</p>
      <div
        v-if="excerpt"
        v-html="excerpt"
      ></div>
    </li>
  </ul>
</template>