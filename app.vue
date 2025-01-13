<script setup>
const { data } = await useFetch("/api/hello");
</script>

<template>
  <div>
    <h1>{{ data.message }}</h1>
  </div>
</template>
