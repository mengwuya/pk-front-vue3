<template>
  <h1 class="text-3xl font-bold underline">{{ x }}-{{ y }}</h1>
</template>

<script setup lang="ts">
const { x, y } = useMouseInElement()
console.log(x, y)
</script>

<style scoped></style>
