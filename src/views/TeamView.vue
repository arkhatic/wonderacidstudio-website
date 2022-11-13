<script setup>
import { ref, onMounted } from "vue";
import * as db from "../db";
import TeamGroup from "../components/TeamGroup.vue";

const projects = ref([]);
const head = ref([]);
const loading = ref(true);

onMounted(async () => {
  await db.getHead().then((data) => {
    for (let i in data) {
      head.value.push(data[i]);
    }
  });
  await db.getProjects().then((data) => {
    for (let i in data) {
      projects.value.push(data[i]);
    }
  });
  loading.value = false;
});
</script>

<template>
  <div class="team flex flex-col align-center no-scrollbar" >
    <div class="">
      <h1 class="font-black text-8xl pb-4 text-center">Meet our team!</h1>
    </div>

    <TeamGroup :name="'Head'" :members="head" />

    <div class="w-full h-full flex flex-col">
      <div
        v-for="project in projects"
        :key="project.id"
        class="mb-8 flex flex-col"
      >
        <TeamGroup :name="project.name" :members="project.members" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
}
</style>