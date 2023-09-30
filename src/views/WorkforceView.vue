<template>
  <div class="about flex-col p-10 pt-0">
    <div
      class="w-full h-fit flex flex-col py-64 items-center justify-center"
    >
      <h1 class="text-center text-7xl xl:text-8xl font-black text-primary">
        {{ $i18n.locale == 'en' ? workforceTexts.mainTitleEnglish : workforceTexts.mainTitlePortuguese }}
      </h1>
      <p class="text-xl mt-4 text-center">
        {{ $i18n.locale == 'en' ? workforceTexts.textEnglish : workforceTexts.textPortuguese }}
      </p>
    </div>

    <div
      class="mx-auto px-10 w-full md:w-fit grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="w-[14rem] h-[14rem] flex flex-col justify-between bg-[#f2f2f2] dark:bg-[#222222] rounded-xl shadow-xl hover:shadow-none"
      >
        <div
            :style="{ backgroundImage: 'url(' + project.image + ')' }"
            class="h-full bg-cover bg-center rounded-t-[inherit]"
        ></div>
        
        <div class="text-center h-[4rem] flex-col justify-center flex">
          <h1 class="font-extrabold text-xl">
            {{ project.name }}
          </h1>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getMembers, getProjects, getAllTexts } from "../db";

const workforceTexts = ref({});
const loading = ref(true);
const projects = ref([]);

projects.value = [
  {
    name: "Ghost Party",
    image: "https://st2.depositphotos.com/3837271/8403/i/450/depositphotos_84032988-stock-photo-lead-by-example-sign.jpg",
  },
  {
    name: "Asarenp",
    image: "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
  },
  {
    name: "Ghost Party",
    image: "https://st2.depositphotos.com/3837271/8403/i/450/depositphotos_84032988-stock-photo-lead-by-example-sign.jpg",
  },
  {
    name: "Asarenp",
    image: "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
  },
  {
    name: "Ghost Party",
    image: "https://st2.depositphotos.com/3837271/8403/i/450/depositphotos_84032988-stock-photo-lead-by-example-sign.jpg",
  },
  {
    name: "Asarenp",
    image: "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
  },
  {
    name: "Ghost Party",
    image: "https://st2.depositphotos.com/3837271/8403/i/450/depositphotos_84032988-stock-photo-lead-by-example-sign.jpg",
  },
  {
    name: "Asarenp",
    image: "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
  },
]

onMounted(async () => {
  await getAllTexts().then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (i == 4) {
        for (let j in data[i]) {
          workforceTexts.value[j] = data[i][j];
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
