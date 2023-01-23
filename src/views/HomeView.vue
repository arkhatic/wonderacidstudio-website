<script setup>
import { ref, onMounted, onBeforeUnmount, onUpdated } from "vue";
import { getProjects } from "../db";

let width = window.innerWidth;

const projects = ref([]);
const hovered = ref(false);
const projectRef = ref([]);
const loading = ref(true);
const index = ref(0);

window.onresize = () => {
  width = window.innerWidth;
};

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
  <div class="flex mt-0 grow z-10 home p-0 pt-0">
    <div
      v-if="loading"
      class="
        grow
        flex
        w-full
        rounded-none
        bg-[#282828]
        shadow-2xl
        border-2 border-neutral-600
        justify-center
        items-center
        text-center
      "
    >
      <img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_medium.gif" alt="">
    </div>

    <div
      v-else
      @mouseenter="handleHover"
      @mouseleave="handleHover"
      class="
        grow
        flex
        w-full
        rounded-[inherit]
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
          rounded-[inherit]
          pb-12
          flex flex-col
          bg-gradient-to-t
          from-black
          via-[rgba(0, 0, 0, 0.7)]
        "
      >
        <div
          class="
            flex flex-row
            justify-center
            sm:justify-start
            items-end
            w-full
            px-12
          "
        >
          <div class="flex flex-col justify-self-end items-start">
            <h1
              class="
                w-fit
                text-5xl
                xl:text-6xl
                font-black
                text-display 
              "
            >
              {{ projectRef.name }}
            </h1>

            <div class="h-1 w-full my-2 bg-[#eaeaea] bg-opacity-60"></div>

            <h2
              class="
                w-fit
                text-lg
                xl:text-xl
                lg:text-xl
                font-bold
                text-display 
              "
            >
              {{ $i18n.locale === 'en' ? projectRef.description : projectRef.descriptionPortuguese }}
            </h2>

            <!-- dots that follow project index -->
            <div v-if="width > 768" class="flex flex-row justify-start items-center mt-4">
              <div
                v-for="(project, i) in projects"
                :key="i"
                class="
                  h-5
                  w-5
                  rounded-full
                  mr-3
                  cursor-pointer
                  hover:scale-125
                  bg-white
                "
                v-bind:class="{ 'bg-opacity-60': i === index, 'bg-opacity-10': i !== index }"
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