<template>
  <div class="flex flex-col">
    <div class="flex flex-col circle-scatter h-screen justify-center items-center px-8 lg:px-24">
      <a class="text-5xl lg:text-6xl font-black text-center flex-col hover:text-primary hover:underline" href="#forms">
        {{ $i18n.locale == 'en' ? texts.textEnglish : texts.textPortuguese }}
      </a>
    </div>

    <div class="min-h-screen flex flex-col justify-center items-center bg-black">
      <div v-if="isRegistered() == false" class="min-h-screen flex flex-col justify-center items-center" id="forms">
        <h1 class="text-3xl font-extrabold">{{ $i18n.locale == 'en' ? "Please fill the form." : "Preencha o formulário abaixo." }}</h1>
        <form>
          <input type="text" v-model="name" name="name" :placeholder="$i18n.locale == 'en' ? 'Name' : 'Nome'">
          <input type="email" v-model="email" name="email" placeholder="Email">
          <input type="number" v-model="age" name="age" :placeholder="$i18n.locale == 'en' ? 'Age' : 'Idade'">
          <input type="text" v-model="discord" name="discord" placeholder="Discord ID">
          <input type="text" v-model="profilePicture" name="profilePicture" :placeholder="$i18n.locale == 'en' ? 'Profile picture link' : 'Link da foto de perfil'">
          <input type="text" v-model="about" name="about" :placeholder="$i18n.locale == 'en' ? 'About you' : 'Sobre você'">
          <input type="text" class="no-padding" v-model="aboutTechnical" name="about" :placeholder="$i18n.locale == 'en' ? 'About your work' : 'Sobre suas competências'">
          <div style="
            background-color: #2c1230;
            padding: 5px;
            border-radius: 0 0 5px 5px;
            display: flex;
            align-items: center;
          ">
            <span class="material-symbols-rounded" style="padding: 15px">
            info
            </span>
            <label for="about">
              {{  $i18n.locale == 'en' ? 'Write here about the specificities about what you do (Programing languages, art and animation styles, etc)' : 'Escreva aqui as especificidades daquilo que você faz (linguagens de programação, estilos de arte e animação, etc)' }}
            </label>
          </div>
          
          <!-- radial buttons -->
          <div class="radio" style="margin-top: 20px;">
            <h3>{{ $i18n.locale == "en" ? "Gender" : "Gênero" }}</h3>
            <input type="radio" v-model="pronouns" value="He/His">{{ $i18n.locale == "en" ? "He/His" : "Ele/Dele" }}
            <input type="radio" v-model="pronouns" value="She/Her">{{ $i18n.locale == "en" ? "He/His" : "Ela/Dela" }}
            <input type="radio" v-model="pronouns" value="They/Their">{{ $i18n.locale == "en" ? "He/His" : "Outro" }}
          </div>

          <div class="radio"> 
              <h3>{{ $i18n.locale == 'en' ? "Roles" : "Cargos" }}</h3>
              <!-- list of checkboxes for each role -->
              <div>
                <button 
                  v-for="(role, i) in roles"
                  :key="role"
                  class="bg-[#222222] rounded-2xl px-4 py-2 border border-transparent hover:border-primary m-2"
                  @click="addRole(role, i)"
                  :class="selectedRoles[i] == role ? 'bg-primary' : ''"
                  type="button"
                >
                  {{ role }}
                </button>
              </div>
            
          </div>

          <div class="radio">
            <h3>Links</h3>
            
            <div v-for="(link, i) in links" class="flex mt-2.5">
              <button class="bg-[#303030] hover:bg-green-700 font-mono px-4 py-1 rounded-md mr-2.5" @click="links.push('')" type="button">+</button>
              <button class="bg-[#303030] hover:bg-red-700 font-mono px-4 rounded-md" @click="() => { if (links.length > 1) { links.splice(i, 1) } }" type="button">-</button>
              <input type="text" v-model="links[i]" name="links" placeholder="Link" style="margin: 0; background-color: #303030; height: 2rem; margin-left: 10px;">
            </div>
          </div>

          <div class="radio">
            <h3>{{ $i18n.locale == 'en' ? "Images" : "Imagens" }}</h3>
            
            <div v-for="(image, i) in images" class="flex mt-2.5">
              <button class="bg-[#303030] hover:bg-green-700 font-mono px-4 py-1 rounded-md mr-2.5" @click="images.push('')" type="button">+</button>
              <button class="bg-[#303030] hover:bg-red-700 font-mono px-4 rounded-md" @click="() => { if (images.length > 1) { images.splice(i, 1) } }" type="button">-</button>
              <input type="text" v-model="images[i]" name="images" placeholder="Link" style="margin: 0; background-color: #303030; height: 2rem; margin-left: 10px;">
            </div>
          </div>
          <button class="submitButton" type="button" value="Submit" @click="saveNewMember()">
            {{ $i18n.locale == 'en' ? "Submit" : "Enviar" }}
          </button>
        </form>
      </div>

      <div v-else>
        <h1 class="text-6xl font-extrabold">
          {{ $i18n.locale == 'en' ? "Your form has been already submitted." : "Seu formulário já foi enviado." }}
        </h1>
      </div>
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

form input[type=radio], form input[type=checkbox]  {
  width: 20px;
  padding: 10px;
  margin: 10px 0;
  background: #282828;
  border-radius: 5px;
  color: black;
}

.no-padding {
  margin-bottom: 0;
  border-radius: 5px 5px 0 0;
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
import { getAllTexts, addMember, saveMember, getAllRoles } from "../db";

const texts = ref([]);
const name = ref("");
const email = ref("");
const age = ref("");
const discord = ref("");

const profilePicture = ref("");
const about = ref("");
const aboutTechnical = ref("");
const pronouns = ref("");
const links = ref(['']);
const images = ref(['']);

const roles = ref([]);
const selectedRoles = ref([]);

async function saveNewMember() {
  const currentDate = new Date();
  const date = currentDate.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  let rr = selectedRoles.value.filter((role) => role != null);
  await addMember().then(async (id) => {
    await saveMember({
      id: id,
      verified: false,
      head: false,
      email: email.value,

      discord: discord.value,
      registrationDate: date,

      name: name.value,
      pronouns: pronouns.value,
      age: age.value,
      profilePicture: profilePicture.value,
      about: about.value,
      aboutTechnical: aboutTechnical.value,

      links: links.value,
      images: images.value,
      roles: rr,
    }).then(() => {
      window.localStorage.setItem("registered", "true");

      name.value = "";
      email.value = "";
      age.value = "";
      discord.value = "";
      profilePicture.value = "";
      about.value = "";
      aboutTechnical.value = "";
      pronouns.value = "";
      links.value = [''];
      images.value = [''];
      roles.value = [];
      selectedRoles.value = [];
    })
  })
}

function addRole(role, position) {
  if (selectedRoles.value.includes(role)) {
    selectedRoles.value[position] = null;
  } else {
    selectedRoles.value[position] = role;
  }
  console.log(selectedRoles.value);
}

function isRegistered() {
  if (window.localStorage.getItem("registered") == "true") {
    return true;
  } else {
    return false;
  }
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

  await getAllRoles().then((data) => {
    for (let i = 0; i < data.length; i++) {
      for (let j in data[i]) {
        for (let k in data[i][j]) {
          roles.value.push(data[i][j][k]);
        }
      }
    }
    selectedRoles.value = Array(roles.value.length).fill(null);
  });
  // if localStorage item exists, then the user has already registered
  if (window.localStorage.getItem("registered") == null) {
    window.localStorage.setItem("registered", "false");
  }
});

</script>
