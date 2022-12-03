<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBarVue from "./components/NavBar.vue";
import HamburgerBarVue from "./components/HamburgerBar.vue";

// get width of window
let width = window.innerWidth;
window.onresize = () => {
  width = window.innerWidth;
};
</script>

<template>
  <div class="min-h-screen flex flex-col pt-0">
    <div>
      <NavBarVue v-if="(width > 768)"/>
      <HamburgerBarVue v-else />
    </div>

    <router-view v-slot="{ Component }" class="flex grow w-screen">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
