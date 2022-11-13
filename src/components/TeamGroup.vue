<script setup>
import { ref, toRefs, onMounted } from "vue";
import TeamMember from "./TeamMember.vue";

const props = defineProps({
  name: String,
  members: Array,
});

const team = toRefs(props);

const selected = ref(false);
const handleSelect = () => {
  selected.value = !selected.value;
  console.log(selected.value);
};
</script>

<template>
  <div class="w-full h-full flex flex-col mt-2">
    <h2
      class="
        font-extrabold
        text-4xl
        bg-[#282828]
        py-6
        px-8
        rounded-2xl rounded-b-2xl
        border-b-2 border-b-neutral-600
        cursor-pointer
      "
      :class="{
        'rounded-b-none': selected,
        'border-b-neutral-600': selected,
        'shadow-2xl': selected,
      }"
      @click="handleSelect()"
    >
      {{ team.name.value }}
    </h2>

    <div class="flex flex-col" v-if="selected">
      <div
        class="flex max-w-1/3 bg-[#282828] rounded-b-2xl px-4"
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