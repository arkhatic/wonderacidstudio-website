<script setup>
import { onMounted } from 'vue';
import { showData, addData } from '../database/databaseInit'

onMounted(() => {
  showData();
});
</script>

<template>
  <div class="about">
    <h1>Dashboard</h1>
  </div>
</template>