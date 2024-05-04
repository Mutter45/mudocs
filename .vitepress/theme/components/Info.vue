<template>
  <div>
    {{ count }}
  </div>
  <button @click="count++">add</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "Info",
});
const count = ref(0);
defineExpose({
  count,
});
</script>
