<script setup>
import { ref, toRefs, onMounted } from "vue";

const props = defineProps(["member"]);

const { member } = toRefs(props);

const hover = ref(false);
const havePhoto = ref(member.value.profilePicture);
const overlay = ref(false);

const handleHover = () => {
  hover.value = !hover.value;
};

const toggleOverlay = () => {
  overlay.value = !overlay.value;
  havePhoto.value = overlay.value ? "black" : member.value.profilePicture;
  console.log(overlay.value);
};
</script>

<template>
  <div class="flex">
    <div
      :style="{
        backgroundImage: 'url(' + havePhoto + ')',
      }"
      class="bg-cover bg-center rounded-xl shadow-2xl cursor-pointer"
      :class="{
        'h-[32rem] w-48': overlay,
        'h-48 w-48': !overlay,
        'bg-opacity-0': overlay,
        'hover:shadow-none': !overlay,
      }"
      @mouseenter="handleHover"
      @mouseleave="handleHover"
      @click="toggleOverlay"
    >
      <div
        v-if="hover && !overlay"
        class="flex flex-col justify-center align-center text-center h-full w-full bg-black/50 backdrop-blur-sm rounded-[inherit]"
      >
        <h2 class="px-4 text-2xl text-white font-extrabold">
          {{ member.name }}
        </h2>
        <h3 class="text-xl font-mono font-bold">{{ member.primaryRole }}</h3>
      </div>

      <div
        v-if="overlay"
        class="flex flex-col justify-start items-center text-center h-full w-full p-4 bg-black/50 backdrop-blur-sm rounded-[inherit]"
      >
        <h2 class="px-4 text-xl text-white font-extrabold">
          {{ member.name }}, {{ member.age }} 
        </h2>
        
        <div class="w-1/2 bg-stone-400 h-1 my-2"></div>

        <p class="text-md font-title font-extrabold text-primary">{{  member.head ? "Head" : "" }}</p>
        <h3 class="text-sm font-mono font-bold" v-for="role in member.roles">
          {{ role }}
        </h3>

        <div class="w-1/2 bg-stone-400 h-1 my-2"></div>

        <p>
          {{ $i18n.locale === "en" ? member.about : member.aboutPortuguese }}
        </p>

        <div class="w-1/2 bg-stone-400 h-1 my-2"></div>

        <div class="imageGrid">
          <img v-for="image in member.images" :src="image" alt="" class="w-20 my-4">
        </div>

        <div class="w-1/2 bg-stone-400 h-1 my-2"></div>

        <a v-for="link in member.links" :href="link" target="_blank" class="font-mono linkText">
          {{ link }}
        </a>

      </div>
    </div>
  </div>
</template>

<style scoped>
.linkText {
  font-size: 10px;
}
</style>