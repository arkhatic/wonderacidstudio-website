<script setup>
import { ref, onMounted, onBeforeUnmount, onUpdated } from "vue";
import { getProjects } from "../db";

const projects = ref([]);
const hovered = ref(false);
const projectRef = ref([]);
const loading = ref(true);
const index = ref(0);

const handleHover = () => {
  hovered.value = !hovered.value;
};

const next = () => {
  index.value = (index.value + 1) % projects.value.length;
  projectRef.value = projects.value[index.value];
};

const prev = () => {
  index.value =
    (index.value - 1 + projects.value.length) % projects.value.length;
  projectRef.value = projects.value[index.value];
};

const handleDotClick = (i) => {
  clearInterval(interval);
  index.value = i;
  projectRef.value = projects.value[index.value];
  interval;
};

const interval = setInterval(next, 5000);

onMounted(async () => {
  interval;
  await getProjects().then((data) => {
    for (let i in data) {
      projects.value.push(data[i]);
    }
  });
  loading.value = false;
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="flex grow z-10 home">
    <div
      v-if="loading"
      class="
        grow
        flex
        w-full
        rounded-3xl
        bg-[#282828]
        shadow-2xl
        border-2 border-neutral-600
        justify-center
        items-center
        text-center
      "
    >
      <h1 class="text-6xl font-extrabold text-white">
        Loading... <br />
        Please wait!
      </h1>
    </div>

    <div
      v-else
      @mouseenter="handleHover"
      @mouseleave="handleHover"
      class="
        grow
        flex
        w-full
        rounded-3xl
        no-repeat
        bg-cover bg-center
        shadow-2xl
      "
      v-bind:style="{ backgroundImage: 'url(' + projectRef.coverImage + ')' }"
    >
      <div
        class="
          w-full
          grow
          justify-end
          items-center
          rounded-3xl
          pb-12
          flex flex-col
          bg-gradient-to-t
          backdrop-grayscale
          hover:backdrop-grayscale-0
        "
        :class="{
          'from-black': !hovered,
          'via-[rgba(0, 0, 0, 0.7)]': !hovered,
          'from-transparent': hovered,
        }"
      >
        <div class="flex flex-row justify-start items-end w-full px-12">
          <div class="flex flex-col justify-self-end items-start">
            <h1 class="text-6xl font-black text-display text-white">
              {{ projectRef.name }}
            </h1>

            <div class="h-1 w-96 my-2 bg-white"></div>
            <h2 class="text-xl font-bold text-display text-white">
              {{ projectRef.description }}
            </h2>

            <!-- dots that follow project index -->
            <div class="flex flex-row justify-start items-center mt-4">
              <div
                v-for="(project, i) in projects"
                :key="i"
                class="
                  h-5
                  w-5
                  rounded-full
                  border-2 border-white
                  mr-3
                  cursor-pointer
                  hover:scale-125
                "
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