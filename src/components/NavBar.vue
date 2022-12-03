<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header
    class="fixed z-40 backdrop-blur-lg h-[4.5rem] w-full flex-row flex items-center justify-between px-8"
  >
    <div class="flex">
      <RouterLink to="/" class="logo flex items-center">
        <img
          alt="studio logo"
          src="@/assets/images/logo-squared.png"
          class="h-10"
        />
        <!-- <p class="font-normal text-2xl font-display ml-2 text-white">WonderAcid</p> -->
      </RouterLink>
    </div>

    <nav class="links">
      <RouterLink to="/" class="navLink"> PROJECTS </RouterLink>

      <RouterLink to="/studio" class="navLink"> THE STUDIO </RouterLink>

      <RouterLink to="/join" class="navLink"> JOIN US </RouterLink>

      <RouterLink to="/contact" class="navLink"> CONTACT </RouterLink>
    </nav>

    <nav class="flex">
      <a href="https://discord.gg/WONDERACID" rel="noreferrer noopener" target="_blank">
        <img
          alt="discord logo"
          src="@/assets/icons/discord.svg"
          class="h-6 w-6 mx-1.5 hover:scale-105"
        />
      </a>

      <a href="https://twitter.com/wonderacid" rel="noreferrer noopener" target="_blank">
        <img
          alt="twitter logo"
          src="@/assets/icons/twitter.svg"
          class="h-6 w-6 mx-1.5 hover:scale-105"
        />
      </a>

      <a href="https://www.instagram.com/wonderacid/" rel="noreferrer noopener" target="_blank">
        <img
          alt="instagram logo"
          src="@/assets/icons/instagram.svg"
          class="h-6 w-6 mx-1.5 hover:scale-105"
        />
      </a>

      <a href="https://www.youtube.com/channel/UCZ1Z1YQ1Q9Z0Z9Z0Z9Z0Z9Z0" rel="noreferrer noopener" target="_blank">
        <img
          alt="youtube logo"
          src="@/assets/icons/youtube.svg"
          class="h-6 w-6 ml-1.5 hover:scale-105"
        />
      </a>
    </nav>
  </header>
</template>

<style scoped>
.links .navLink {
  margin: 0.5rem;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
}

.links .router-link-exact-active:hover {
  box-shadow: none;
}

.links .navLink:hover {
  background-color: rgb(40, 40, 40);
}

.links .router-link-exact-active {
  background-color: #282828;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 6px 8px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 6px 8px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>