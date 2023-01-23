<template>
  <div class="absolute bg-back w-96 h-96">

  </div>
</template>

<script setup>
import { ref } from 'vue' 

const enabled = ref(false)

function toggle() {
  enabled.value = !enabled.value
}
</script>