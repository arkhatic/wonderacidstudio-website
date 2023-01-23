<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
import { getAllTexts } from "../db";

const texts = ref({});
const loading = ref(true);

onMounted(async () => {
  await getAllTexts().then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (i == 2) {
        for (let j in data[i]) {
          texts.value[j] = data[i][j];
          console.log(j, data[i][j]);
        }
      }
    }
  });
  loading.value = false;
});

const socials = [
  {
    name: "Discord",
    link: "https://discord.gg/WONDERACID",
    icon: "discord.svg",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/wonderacid",
    icon: "twitter.svg",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/wonderacid/",
    icon: "instagram.svg",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCZ1Z1YQ1Q9Z0Z9Z0Z9Z0Z9Z0",
    icon: "youtube.svg",
  },
];

const selected = ref(false);
const handleSelected = () => {
  selected.value = !selected.value;
};
</script>

<template>
  <aside class="fixed h-screen z-50 bg-black bg-opacity-25 backdrop-blur-xl" :class="{ 'w-64': selected === true, 'w-0': selected === false }">
    <div v-if="selected" class="h-full">
      <div class="w-full h-[4.5rem] flex pt-4 pl-8 ">
        <svg
          @click="handleSelected"
          data-testid="pause"
          class="w-10 h-10 hover:rotate-180 cursor-pointer"
          fill="#8f8f8f"
          stroke="#8f8f8f"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
    
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M6 18L18 6M6 6l12 12">
          </path>
        </svg>
      </div>

      <div class="h-full flex flex-col justify-center items-center -mt-[4.5rem] links" v-if="loading == false">
        <h1 class="text-2xl font-black">Menu</h1>
        <RouterLink
          to="/"
          class="navLink"
          @click="handleSelected"
        >
          {{ texts.textsPortuguese[0] }}
        </RouterLink>
        <RouterLink
          to="/studio"
          class="navLink"
          @click="handleSelected"
        >
          {{ texts.textsPortuguese[1] }}
        </RouterLink>

        <RouterLink
          to="/join"
          class="navLink"
          @click="handleSelected"
        >
          {{ texts.textsPortuguese[2] }}
        </RouterLink>

        <RouterLink
          to="/contact"
          class="navLink"
          @click="handleSelected"
        >
          {{ texts.textsPortuguese[3] }}
        </RouterLink>

        <h1 class="text-2xl font-black mt-4">Links</h1>
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          class="navLink flex items-center justify-center"
          rel="noreferrer noopener" target="_blank"
          @click="handleSelected"
        >
          <img :src="('src/assets/icons/' + social.icon)" class="w-6 h-6 mr-3" />
          <p>{{ social.name }}</p>
        </a>
      </div>
    </div>
  </aside>

  <header
    class="fixed z-40 backdrop-blur-lg h-[4.5rem] w-full flex-row flex items-center justify-between px-8"
  >
    <div class="w-full flex justify-between items-center">
      <img src="@/assets/icons/bars.svg" class="h-10 w-10 hover:rotate-180 cursor-pointer" @click="handleSelected()"/>
      <RouterLink to="/"><h1 class="font-black text-2xl" id="title">WonderAcid</h1></RouterLink>
      <RouterLink to="/"><img src="@/assets/images/logo-rounded.png" class="h-10 w-10" /></RouterLink>
    </div>

  </header>

</template>

<style scoped>
.links .navLink {
  margin: 0.25rem;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
}

.links .navLink .router-link-exact-active:hover {
  box-shadow: none;
}

.links .navLink:hover {
  background-color: rgba(0, 0, 0, 0.20);
}

.links .router-link-exact-active {
  background-color: rgba(0, 0, 0, 0.20);
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 6px 8px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 6px 8px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

</style>