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
    <div class="w-full h-fit flex flex-col lg:flex-row px-10 sm:px-14 md:px-18 lg:px-24 xl:px-56 py-36 lg:py-48">
      <h1 class="lg:w-[24rem] xl:w-[36rem] mb-2 lg:mb-none text-xl font-mono text-primary">The Studio</h1>

      <div class="w-full">
        <h1 class="font-extrabold text-3xl sm:text-5xl text-primary">
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

    <div class="flex mx-auto w-full md:w-fit grid grid-cols-1 gap-8 lg:grid-cols-2 justify-center">
      <div
        v-for="headMember in head"
        :key="headMember.id"
        class="
          xl:w-[32rem] lg:w-full
          md:min-w-[28rem]
          max-w-[32rem]
          min-w-fit
          
          h-[12rem]
          flex flex-row
          justify-between
          bg-[#f2f2f2] dark:bg-[#222222] 
          rounded-xl
          shadow-xl
          hover:shadow-none
        "
      >
        <div class="p-12 w-1/2">
          <h1 class="text-lg sm:text-xl font-mono">{{ headMember.role }}</h1>
          <h1 class="font-extrabold text-xl sm:text-3xl">{{ headMember.name }}</h1>
        </div>

        <div
          :style="{ backgroundImage: 'url(' + headMember.profilePicture + ')' }"
          class="w-1/2 h-48 bg-cover bg-center rounded-r-[inherit]"
        >
        </div>
      </div>
    </div>

    <div class="w-full h-fit flex flex-col lg:flex-row px-0 sm:px-10 md:px-18 lg:px-24 xl:px-56 py-36 lg:py-48">
      <h1 class="lg:w-[24rem] xl:w-[36rem] mb-2 lg:mb-none text-xl font-mono text-primary">The Teams</h1>

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

