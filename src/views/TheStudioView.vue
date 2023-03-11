<template>
  <div class="about flex-col p-10 pt-0">
    <div
      class="w-full h-fit flex flex-col lg:flex-row px-10 sm:px-14 md:px-18 lg:px-24 xl:px-56 py-36 lg:py-48"
    >
      <h1
        class="lg:w-[24rem] xl:w-[36rem] mb-2 lg:mb-none text-xl font-mono text-primary"
      >
        Studio
      </h1>

      <div class="w-full">
        <h1 class="font-extrabold text-3xl sm:text-5xl text-primary">
          {{ $i18n.locale == 'en' ? teamTexts.titleEnglish : teamTexts.titlePortuguese }}
        </h1>
        <p class="text-xl mt-4">
          {{ $i18n.locale == 'en' ? teamTexts.descriptionEnglish : teamTexts.descriptionPortuguese }}
        </p>
      </div>
    </div>

    <div
      class="mx-auto px-10 w-full md:w-fit grid grid-cols-1 gap-8 lg:grid-cols-2 justify-center items-center"
    >
      <div
        v-for="headMember in headMembers"
        :key="headMember.id"
        class="xl:w-[32rem] lg:w-full md:min-w-[28rem] max-w-[32rem] min-w-fit h-[12rem] flex flex-row justify-between bg-[#f2f2f2] dark:bg-[#222222] rounded-xl shadow-xl hover:shadow-none"
      >
        <div class="p-12 w-1/2 flex-col justify-center flex h-full">
          <h1 class="text-lg sm:text-xl font-mono">{{ headMember.primaryRole }}</h1>
          <h1 class="font-extrabold text-xl sm:text-3xl">
            {{ headMember.name }}
          </h1>
        </div>

        <div
          :style="{ backgroundImage: 'url(' + headMember.profilePicture + ')' }"
          class="w-1/2 h-48 bg-cover bg-center rounded-r-[inherit]"
        ></div>
      </div>
    </div>

    <div
      class="w-full px-10 sm:px-10 md:px-18 lg:px-24 xl:px-56 py-36 lg:py-48"
    >
      <h1
        class="lg:w-[24rem] xl:w-[36rem] mb-2 lg:mb-none text-xl font-mono text-primary"
      >
        Devs
      </h1>
      <!-- filter by project -->
      <div class="my-4">
        <button 
          class="bg-[#222222] rounded-2xl shadow-xl hover:shadow-none px-4 py-2 border border-transparent hover:border-primary mr-2"
          @click="filterByProject(null)"
          :class="selectedProject == null ? 'bg-primary' : ''"
        >
          {{ $i18n.locale == 'en' ? 'All' : 'Todos' }}
        </button>

        <button 
          v-for="project in projects"
          :key="project.id"
          class="bg-[#222222] rounded-2xl shadow-xl hover:shadow-none px-4 py-2 border border-transparent hover:border-primary mr-2"
          @click="filterByProject(project)"
          :class="selectedProject == project ? 'bg-primary' : ''"
        >
          {{ project.name }}
        </button>
      </div>


      <div class="w-full complexGrid">
        <div v-if="selectedProject == null" v-for="member in members">
          <TeamMember :member="member" />
        </div>

        <div v-else v-for="member in selectedMembers">
          <TeamMember :member="member" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getMembers, getProjects, getAllTexts } from "../db";
import TeamMember from "../components/TeamMember.vue";

const projects = ref([]);
const selectedProject = ref(null);

const members = ref([]);
const selectedMembers = ref([]);

const headMembers = ref([]);

const teamTexts = ref({});

const loading = ref(true);

function filterByProject(project) {
  selectedProject.value = project;
  
  if (project == null) {
    selectedMembers.value = members.value;
  } else {
    selectedMembers.value = [];
    for (let i in members.value) {
      if (memberExistsInProject(members.value[i])) {
        selectedMembers.value.push(members.value[i]);
      }
    }
  }
}

function memberExistsInProject(member) {
  for (let i in selectedProject.value.members) {
    if (selectedProject.value.members[i] == member.id) {
      return true;
    }
  }
}

onMounted(async () => {
  await getMembers().then((data) => {
    for (let i in data) {
      if (data[i].verified == true) {
        members.value.push(data[i]);
        
        if (data[i].head == true) {
          headMembers.value.push(data[i]);
        }
      }
    }
  });

  await getProjects().then((data) => {
    for (let i in data) {
      projects.value.push(data[i]);
    }
  });

  await getAllTexts().then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (i == 3) {
        for (let j in data[i]) {
          teamTexts.value[j] = data[i][j];
        }
      }
    }
  });
  loading.value = false;

});
</script>

<style scoped>
.complexGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;
}
</style>
