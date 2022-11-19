<script setup>
import { ref, toRefs, onMounted } from "vue";

const props = defineProps({
  name: String,
  role: String,
  image: String,
});
const member = toRefs(props);

const hover = ref(false);
const handleHover = () => {
  hover.value = !hover.value;
};
</script>

<template>
  <div class="flex">
    <div
      :style="{ backgroundImage: 'url(' + member.image.value + ')' }"
      class="
        h-48
        w-48
        bg-cover bg-center
        m-4
        rounded-xl
        shadow-2xl
        hover:shadow-none
        cursor-pointer
      "
      @mouseenter="handleHover"
      @mouseleave="handleHover"
    >
      <div
        v-if="hover"
        class="
          flex flex-col
          justify-center
          align-center
          text-center
          h-full
          w-full
          bg-black/50
          rounded-[inherit]
        "
      >
        <h2 class="px-4 text-2xl text-white font-extrabold">
          {{ member.name.value }}
        </h2>
        <h3 class="text-xl font-mono font-bold">{{ member.role.value }}</h3>
      </div>
    </div>
  </div>
</template>

