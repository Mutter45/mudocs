<script setup lang="ts">
defineOptions({
  name: 'PageInfo',
})
defineProps<{
  readTime: number
  words: number
}>()
</script>

<template>
  <div class="text-red">
    阅读时间: {{ readTime }}
  </div>
  <div class="text-red">
    文章字数: {{ words }}
  </div>
</template>
