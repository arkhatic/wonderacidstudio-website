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
  <div class="about flex-col p-8 pt-0">
    <div class="h-fit flex px-56 py-48">
      <h1 class="w-[36rem] text-xl font-mono text-primary">The Studio</h1>

      <div class="w-full">
        <h1 class="font-extrabold text-5xl text-primary">
          WonderAcid fuses inovation and technology to create new and exciting
          games.
        </h1>
        <p class="text-xl mt-4">
          WonderAcid is a game development studio and freelancing agency based
          in Brazil. Founded in 2019 by an university friends group, we focus on creating our own games and helping people who are developing their
          own, with industry leading performance and quality.
        </p>
      </div>
    </div>

    <div class="flex justify-center">
      <div
        v-for="headMember in head"
        :key="headMember.id"
        class="
          w-[32rem]
          h-[12rem]
          flex flex-row
          justify-between
          bg-[#f2f2f2] dark:bg-[#222222] 
          rounded-xl
          shadow-xl
          mr-8
          hover:shadow-none
        "
      >
        <div class="p-12 w-1/2">
          <h1 class="text-xl font-mono">{{ headMember.role }}</h1>
          <h1 class="font-extrabold text-3xl">{{ headMember.name }}</h1>
        </div>

        <div
          :style="{ backgroundImage: 'url(' + headMember.profilePicture + ')' }"
          class="w-1/2 h-48 bg-cover bg-center rounded-r-[inherit]"
        >
        </div>
      </div>
    </div>

    <div class="h-fit flex px-56 pt-48 mb-48">
      <h1 class="w-[36rem] text-xl font-mono text-primary">The Teams</h1>

      <div class="w-full">
        <TeamGroup
          v-for="project in projects"
          :key="project.id"
          :name="project.name"
          :members="project.members"
          :image="project.coverImage"
        />
      </div>
    </div>
  </div>
</template>

