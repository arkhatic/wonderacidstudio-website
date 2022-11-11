<script setup>
import { ref, toRefs } from 'vue'

const props = defineProps({
  name: String,
  role: String,
  image: String,
})
const member = toRefs(props);

const hover = ref(false);
const handleHover = () => {
  hover.value = !hover.value;
};

</script>

<template>
  <div class="my-12 flex">
    <div 
      :style="{ backgroundImage: 'url(' + member.image + ')' }"
      class="h-56 w-56 bg-cover bg-center mx-4 rounded-full shadow-2xl"
      @mouseenter="handleHover"
      @mouseleave="handleHover" > 

      <div 
        v-if="hover"
        class="flex flex-col justify-center align-center text-center h-full w-full bg-black/50 rounded-[inherit]">
        <h2 class="px-4 text-4xl text-white font-extrabold">{{ member.name}}</h2>
        <h3 class="text-2xl text-secondary font-bold">{{ member.role}}</h3>
      </div>
    </div>
  </div>
</template>

