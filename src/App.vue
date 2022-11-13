<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col p-8 pt-0">
    <header class="h-[4.5rem] w-full flex-row flex items-center justify-between">
      <div class="flex">
        <RouterLink to="/" class="logo flex items-center">
          <img alt="studio logo" src="@/assets/images/logo-squared-gray.png" class="h-10" />
          <!-- <p class="font-normal text-2xl font-display ml-2 text-white">WonderAcid</p> -->
        </RouterLink>
      </div>

      <nav class="links">
        <RouterLink to="/" class="navLink">
          PROJECTS
        </RouterLink>

        <RouterLink to="/team" class="navLink">
          TEAM
        </RouterLink>

        <RouterLink to="/about" class="navLink">
          ABOUT
        </RouterLink>

        <RouterLink to="/contact" class="navLink">
          CONTACT
        </RouterLink>

      </nav>

        <nav class="flex">
          <a href="https://discord.gg/WONDERACID">
            <img alt="discord logo" src="@/assets/icons/discord.svg" class="h-6 w-6 mx-1.5 hover:scale-105" />
          </a>

          <a href="https://twitter.com/wonderacid">
            <img alt="twitter logo" src="@/assets/icons/twitter.svg" class="h-6 w-6 mx-1.5 hover:scale-105" />
          </a>

          <a href="https://www.instagram.com/wonderacid/">
            <img alt="instagram logo" src="@/assets/icons/instagram.svg" class="h-6 w-6 mx-1.5 hover:scale-105" />
          </a>

          <a href="https://www.youtube.com/channel/UCZ1Z1YQ1Q9Z0Z9Z0Z9Z0Z9Z0">
            <img alt="youtube logo" src="@/assets/icons/youtube.svg" class="h-6 w-6 mx-1.5 hover:scale-105" />
          </a>
        </nav>
    </header>

    <router-view v-slot="{ Component }" class="flex grow">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  
</template>

<style scoped>
.links .navLink {
  margin: 0.5rem;
  font-family: "Barlow Semi Condensed";
  font-weight: 500;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
}
.links .navLink:hover {
  background-color: #ededed;
}

.links .router-link-exact-active {
  background-color: #ededed;
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.links .router-link-exact-active:hover {
  box-shadow: none;
}

@media (prefers-color-scheme: dark) {
  .links .navLink:hover {
    background-color: rgb(40, 40, 40);
  }
  .links .router-link-exact-active {
    background-color: rgb(40, 40, 40);
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 6px 8px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 6px 8px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
