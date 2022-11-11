<script setup>
import { ref } from 'vue';
import TeamMember from '../components/TeamMember.vue';

const teams = [
  {
    name: "Head",
    members:  [
      {
        name: 'Luis "Shades"',
        role: 'Founder',
        image: 'https://i.pinimg.com/222x/a6/36/da/a636dacea7dc8c5e955256b83a13580d.jpg',
      },
      {
        name: 'Humberto "Grão"',
        role: 'COO',
        image: 'https://i.pinimg.com/222x/a6/36/da/a636dacea7dc8c5e955256b83a13580d.jpg',
      },
      {
        name: 'Nox "Nox"',
        role: 'CTO',
        image: 'https://i.pinimg.com/222x/a6/36/da/a636dacea7dc8c5e955256b83a13580d.jpg',
      },
      {
        name: 'João "Cold"',
        role: 'CFO',
        image: 'https://i.pinimg.com/222x/a6/36/da/a636dacea7dc8c5e955256b83a13580d.jpg',
      }
    ],
  },
  {
    name: "To the Moon",
    members: [
      {
        name: 'Arthur "Ark"',
        role: 'Lead musician, programmer',
        image: 'https://i.pinimg.com/222x/a6/36/da/a636dacea7dc8c5e955256b83a13580d.jpg',
      },
      {
        name: 'Lucas "LKZ"',
        role: 'Composer',
        image: 'https://i.pinimg.com/222x/a6/36/da/a636dacea7dc8c5e955256b83a13580d.jpg',
      },
      {
        name: 'Anna "Anny"',
        role: 'Game designer',
        image: 'https://i.pinimg.com/222x/a6/36/da/a636dacea7dc8c5e955256b83a13580d.jpg',
      }
    ]
  }
];
</script>

<template>
  <div class="team flex flex-col text-center">
    <div 
      class="" >
      <h1 
        class="font-black text-8xl" >
        Meet our team!
      </h1>
    </div>

    <div class="w-full h-full flex flex-col items-center">
      <div 
        v-for="team in teams"
        :key="team.name"
        class="mb-12 flex">

        <TeamMember
          v-for="member in team.members"
          :key="member.name"
          :name="member.name"
          :image="member.image"
          :role="member.role" >
        </TeamMember>
          <!-- <TeamMember
            v-for="member in team.members"
            :key="member.name"
            :name="member.name"
            :image="member.image"
            :role="member.role" /> -->
        
          <div class="w-96 bg-neutral-500 h-2 mb-12"></div>
      </div>
      
      
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
}
</style>