<template>
  <div class="about items-center flex-col p-10 pt-0">
    <div class="w-2/3 h-fit flex flex-col py-64 items-center justify-center">
      <h1 class="text-center text-7xl xl:text-8xl font-black text-primary">
        {{
          $i18n.locale == "en"
            ? workforceTexts.mainTitleEnglish
            : workforceTexts.mainTitlePortuguese
        }}
      </h1>
      <p class="text-2xl mt-4 text-center">
        {{
          $i18n.locale == "en"
            ? workforceTexts.textEnglish
            : workforceTexts.textPortuguese
        }}
      </p>
    </div>

    <div
      class="mx-auto px-10 w-full md:w-fit grid grid-cols-2 gap-8 lg:grid-cols-3 justify-center items-center"
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
    name: "GIF",
    image:
      "https://firebasestorage.googleapis.com/v0/b/wonder-acid.appspot.com/o/other%2FC%C3%B3pia%20de%204.gif?alt=media&token=8b3c1e30-aad0-41a3-a501-45faae62f386&_gl=1*dw76c3*_ga*MzQzODk1NjM3LjE2ODk5NjI1MzU.*_ga_CW55HF8NVT*MTY5NjM1NzkyNi4zLjEuMTY5NjM1ODI5NS41OS4wLjA.",
  },
  {
    name: "GIF",
    image:
      "https://firebasestorage.googleapis.com/v0/b/wonder-acid.appspot.com/o/other%2FC%C3%B3pia%20de%20444.gif?alt=media&token=f251be12-ca09-4a3d-8179-39c8a0aa221d&_gl=1*cvb2y2*_ga*MzQzODk1NjM3LjE2ODk5NjI1MzU.*_ga_CW55HF8NVT*MTY5NjM1NzkyNi4zLjEuMTY5NjM1ODM0Ni44LjAuMA..",
  },
  {
    name: "GIF",
    image:
      "https://firebasestorage.googleapis.com/v0/b/wonder-acid.appspot.com/o/other%2FC%C3%B3pia%20de%20mosca.gif?alt=media&token=f19ee781-13b2-4c76-80b9-6ca9258d842f&_gl=1*1wnycv5*_ga*MzQzODk1NjM3LjE2ODk5NjI1MzU.*_ga_CW55HF8NVT*MTY5NjM1NzkyNi4zLjEuMTY5NjM1ODM1Ny42MC4wLjA.",
  },
];

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
