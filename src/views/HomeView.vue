<script setup>
import { ref, onMounted, onBeforeUnmount, onUpdated } from 'vue';

const projects = [
  {
    title: "To the moon",
    description: "A game about a quite interesting journey through space.",
    image: "https://wallpaperboat.com/wp-content/uploads/2020/04/dark-minimalist-02.jpg",
  },
  {
    title: "Field of Souls",
    description: "Embrace on a dark fantasy trip for freeing the sealed souls.",
    image: "https://wallpaperboat.com/wp-content/uploads/2020/04/dark-minimalist-04.jpg",
  },
  {
    title: "The Dark Knight",
    description: "Even the thicknest armor can desguise the knight's suffer.",
    image: "https://wallpaperboat.com/wp-content/uploads/2020/04/dark-minimalist-03.jpg",
  },
  {
    title: "Solo of the Sea",
    description: "Alone in the sea, the sailor is the only one who can save the world.",
    image: "https://wallpaperboat.com/wp-content/uploads/2020/04/dark-minimalist-07.jpg",
  },
];

const projectRef = ref(projects[0]);
const index = ref(0);

const next = () => {
  index.value = (index.value + 1) % projects.length;
  projectRef.value = projects[index.value];
};

const prev = () => {
  index.value = (index.value - 1 + projects.length) % projects.length;
  projectRef.value = projects[index.value];
};

const handleDotClick = (i) => {
  clearInterval(interval);
  index.value = i;
  projectRef.value = projects[index.value];
  interval;
};

const interval = setInterval(next, 5000);

onMounted(() => {
  interval;
});

onBeforeUnmount(() => {
  clearInterval(interval);
});

</script>

<template>
  <div class="flex grow z-10 home">
    <div 
      class="grow flex w-full rounded-3xl no-repeat bg-cover bg-center shadow-2xl"
      v-bind:style="{ backgroundImage: 'url(' + projectRef.image + ')' }" >

      <div class="w-full grow justify-end items-center rounded-3xl pb-16 flex flex-col bg-gradient-to-t from-black via-[rgba(0, 0, 0, 0.7)] backdrop-grayscale hover:backdrop-grayscale-0">
        <div class="flex flex-row justify-start items-end w-full px-16">
          <div class="flex flex-col justify-self-end items-start">
            <h1 class="text-9xl font-black text-display text-white">
              {{ projectRef.title }}
            </h1>

            <div class="h-1 w-96 my-4 bg-white"></div>
            <h2 class="text-3xl font-bold text-display text-white">
              {{ projectRef.description }}
            </h2>

            <!-- dots that follow project index -->
            <div class="flex flex-row justify-start items-center mt-6">
              <div 
                v-for="(project, i) in projects" 
                :key="i" 
                class="h-5 w-5 rounded-full border-2 border-white mr-3 cursor-pointer hover:scale-125"
                v-bind:class="{ 'bg-white': i === index }"
                @click="handleDotClick(i)"
              ></div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<style scoped>

</style>