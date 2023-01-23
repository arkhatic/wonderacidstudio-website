<template>
  <div class="flex flex-col">
    <div class="flex flex-col circle-scatter h-screen justify-center items-center px-8 lg:px-24">
      <a class="text-5xl lg:text-6xl font-black text-center flex-col hover:text-primary hover:underline" href="#forms">
        {{ $i18n.locale == 'en' ? texts.textEnglish : texts.textPortuguese }}
      </a>
    </div>

    <div class="h-screen flex flex-col justify-center items-center bg-black" id="forms">
      <h1 class="text-3xl font-extrabold">{{ $i18n.locale == 'en' ? "Please fill the form." : "Preencha o formulário abaixo." }}</h1>
      <form>
        <input type="text" v-model="name" name="name" placeholder="Name">
        <input type="email" v-model="email" name="email" placeholder="Email">
        <input type="number" v-model="age" name="age" placeholder="Age">
        <input type="text" v-model="profilePicture" name="profilePicture" placeholder="Profile Picture">
        <input type="text" v-model="about" name="about" placeholder="About (English)">
        <input type="text" v-model="aboutPortuguese" name="about" placeholder="About (Portuguese)">
        <!-- radial buttons -->
        <div class="radio">
          <h3>Gender</h3>
          <input type="radio" v-model="pronouns" value="He/His">He/His
          <input type="radio" v-model="pronouns" value="She/Her">She/Her
          <input type="radio" v-model="pronouns" value="They/Their">They/Their
        </div>

        <div class="radio">
          <h3>Links</h3>
          
          <div v-for="(link, i) in links" class="flex mt-2.5">
            <button class="bg-[#303030] hover:bg-green-700 font-mono px-4 py-1 rounded-md mr-2.5" @click="links.push('')" type="button">+</button>
            <button class="bg-[#303030] hover:bg-red-700 font-mono px-4 rounded-md" @click="links.splice(i, 1)">-</button>
            <input type="text" v-model="links[i]" name="links" placeholder="Link" style="margin: 0; background-color: #303030; height: 2rem; margin-left: 10px;">
          </div>
        </div>

        <div class="radio">
          <h3>Images</h3>
          
          <div v-for="(image, i) in images" class="flex mt-2.5">
            <button class="bg-[#303030] hover:bg-green-700 font-mono px-4 py-1 rounded-md mr-2.5" @click="images.push('')" type="button">+</button>
            <button class="bg-[#303030] hover:bg-red-700 font-mono px-4 rounded-md" @click="images.splice(i, 1)">-</button>
            <input type="text" v-model="images[i]" name="images" placeholder="Link" style="margin: 0; background-color: #303030; height: 2rem; margin-left: 10px;">
          </div>
        </div>
        <button class="submitButton" type="button" value="Submit" @click="saveNewMember()">Submit</button>
      </form>
    </div>

    <div class="h-screen circle-scatter-backwards">

    </div>
  </div>
</template>

<style scoped>
.circle-scatter {
  background-image: url("@/assets/images/waves/waves-black-top.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.circle-scatter-backwards {
  background-image: url("@/assets/images/waves/waves-black-bottom.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

form {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
}

.radio {
  background: #282828;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0 20px 0;
}

form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background: #282828;
  border-radius: 5px;
}

form input[type=radio] {
  width: 20px;
  padding: 10px;
  margin: 10px 0;
  background: #282828;
  border-radius: 5px;
  color: black;
}

.submitButton {
  width: 100%;
  padding: 10px;
  /* margin: 10px 0; */
  background: #282828;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
.submitButton:hover {
  background: #fff;
  color: #282828;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { getAllTexts, addMember, saveMember } from "../db";

const texts = ref([]);
const name = ref("");
const email = ref("");
const age = ref("");
const profilePicture = ref("");
const about = ref("");
const aboutPortuguese = ref("");
const pronouns = ref("");
const links = ref(['']);
const images = ref(['']);

async function saveNewMember() {
  await addMember().then(async (id) => {
    await saveMember({
      id: id,
      verified: false,
      head: false,
      email: email.value,

      name: name.value,
      pronouns: pronouns.value,
      age: age.value,
      profilePicture: profilePicture.value,
      about: about.value,
      aboutPortuguese: aboutPortuguese.value,

      links: links.value,
      images: images.value,
      roles: []
    });
  })
}

onMounted(async () => {
  await getAllTexts().then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (i == 1) {
        for (let j in data[i]) {
          texts.value[j] = data[i][j];
          console.log(texts.value[j]);
        }
      }
    }
  });
});

</script>
