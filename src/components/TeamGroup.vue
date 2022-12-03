<script setup>
import { ref, toRefs } from "vue";
import TeamMember from "./TeamMember.vue";

const props = defineProps({
  name: String,
  members: Array,
  image: String,
});

const team = toRefs(props);

const selected = ref(false);
const handleSelect = () => {
  selected.value = !selected.value;
  console.log(selected.value);
};
</script>

<template>
  <div
    class="w-full max-h-fit flex flex-col mt-2 rounded-xl"
    :class="{ 'shadow-2xl': selected }"
  >
    <h2
      class="
        font-extrabold
        text-2xl
        bg-[#222222] hover:bg-[#202020] r
        py-6
        px-8
        rounded-2xl rounded-b-2xl
        border-b-2 border-b-neutral-200
        dark:border-b-neutral-700
        cursor-pointer
      "
      :class="{
        'rounded-b-none': selected,
      }"
      @click="handleSelect()"
    >
      {{ team.name.value }}
    </h2>

    <div class="flex flex-col" v-if="selected">
      <div
        class="flex max-w-full bg-[#222222] rounded-b-xl p-4 overflow-x-auto"
      >
        <TeamMember
          v-for="teamMember in team.members.value"
          :key="teamMember.name"
          :name="teamMember.name"
          :image="teamMember.profilePicture"
          :role="teamMember.role"
        >
        </TeamMember>
      </div>
    </div>
  </div>
</template>