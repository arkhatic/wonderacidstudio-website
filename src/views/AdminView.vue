<script setup>
import { onMounted, ref } from "vue";
import * as db from "../db";

const projects = ref([]);
const head = ref([]);
const loading = ref(true);

onMounted(async () => {
  head.value = await db.getHead();
  projects.value = await db.getProjects();
  loading.value = false;
});
</script>

<template>
  <div
    class="
      flex
      grow
      flex-col
      font-mono
      bg-[#222222]
      rounded-2xl
      border-2 border-neutral-600
      p-12
    "
  >
    <div
      v-if="loading"
      class="flex grow w-full h-full justify-center items-center"
    >
      <h2 class="text-6xl font-extrabold text-primary">Loading...</h2>
    </div>

    <div v-else class="flex flex-col grow w-full h-full">
      <!-- TODO: finish dashbaord -->

      <div
        v-for="project in projects"
        :key="project.id"
        class="flex flex-col justify-center items-center w-96 h-48 rounded-xl"
        :style="{ backgroundImage: 'url(' + project.coverImage + ')' }"
      >
        >
        <image :src="project.coverImage" class="w-64 h-64 rounded-2xl" />
        <h2 class="text-4xl font-extrabold text-white">{{ project.name }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>