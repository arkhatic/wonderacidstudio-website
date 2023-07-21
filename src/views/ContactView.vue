<script setup>
import emailjs from 'emailjs-com';
import { useToast } from 'vue-toastification';
import { ref, onMounted } from "vue";
import { getAllTexts } from "../db";

const toast = useToast();

const texts = ref([]);

const from_name = ref("");
const email = ref("");
const message = ref("");

function sendEmail(e) {
  console.log("sent")
  emailjs.send('service_n6iwgzp', 'template_93kn63q', { from_name: from_name.value, email: email.value, message: message.value }, 'gxZsYo91yUxcxAKr1')
  .then((result) => {
      toast.success('Email sent successfully!');
    }, (error) => {
      console.log(error.text);
    });
}
function copyText(text) {
  navigator.clipboard.writeText(text);
  toast.success('Copied to clipboard!');
}
onMounted(async () => {
  await getAllTexts().then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        for (let j in data[i]) {
          texts.value[j] = data[i][j];
          console.log(j);
        }
      }
    }
  });
});
</script>

<template>
  <div class="flex flex-col">
    <div class="overflow-x-hidden">
      <div
        class="flex justify-center items-center h-screen w-screen wave-up pt-[4.5rem]"
      >
        <h1 class="mb-32 w-2/3 text-center text-6xl font-black">
          {{ $i18n.locale == 'en' ? texts.titleEnglish : texts.titlePortuguese }}
        </h1>
      </div>
    </div>

    <div class="w-screen bg-black h-fit px-12 md:px-24 xl:px-48 py-32">
      <p class="text-white text-2xl text-center mt-4 font-bold">
        {{ $i18n.locale == 'en' ? texts.descriptionEnglish : texts.descriptionPortuguese }}
      </p>
    </div>

    <div class="h-fit w-screen blob-scene">
      <div class="mt-20 py-12 p-12 xl:pt-96 flex flex-col text-center justify-center items-center">
        <h1 class="text-5xl font-black mb-8 pt-[4.5rem]">{{ $i18n.locale == 'en' ? "Please contact us on Discord!" : "Contate-nos no Discord!"}}</h1>
        <div class="flex flex-col items-center md:flex-row justify-center w-full">
          <figure class="w-64 flex flex-col rounded-xl bg-[#282828] mb-8 md:mr-8 md:mb-0">
            <div class="bg-[#ccccb7] w-64 h-20 rounded-t-xl"></div>
            <div class="flex">
              <div class="p-2 rounded-full w-24 h-24 bg-[#282828] -mt-12 ml-4">
                <img class="w-full h-full rounded-full" 
                src="https://cdn.discordapp.com/avatars/416710158878769153/5dd40ca43f733fc14cfa2ba915f7387d.png?size=2048" 
                alt="" width="384" height="512">
              </div>
            </div>
            
            <div class="px-6 pb-6 text-left mb-0">
              <h1 class="text-2xl font-bold">Grão</h1> 
              <code class="flex items-center">
                grao 
                
                <div class="p-2 absolute ml-44 rounded-md bg-[#323232] cursor-pointer hover:bg-primary tooltip" @click="copyText('grao')">
                  <img src="@/assets/icons/copy.png" width="16" class="invert" alt="">
                </div>
              </code>
              
            </div>
          </figure>

          <figure class="w-64 flex flex-col rounded-xl bg-[#282828]">
            <div class="bg-[#140014] w-64 h-20 rounded-t-xl"></div>
            <div class="flex">
              <div class="p-2 rounded-full w-24 h-24 bg-[#282828] -mt-12 ml-4">
                <img class="w-full h-full rounded-full" 
                src="https://cdn.discordapp.com/avatars/614083942114525382/b07dcef11859ef6d62f98d429a27d5bd.png?size=2048" 
                alt="" width="384" height="512">
              </div>
            </div>
            
            <div class="px-6 pb-6 text-left mb-0">
              <h1 class="text-2xl font-bold">Marina</h1>
              <code class="flex items-center">
                marinayamamoto 
                <div class="p-2 absolute ml-44 rounded-md bg-[#323232] cursor-pointer hover:bg-primary" @click="copyText('marinayamamoto')">
                  <img src="@/assets/icons/copy.png" width="16" class="invert" alt="">
                </div>
              </code>
            </div>
          </figure>
        </div>
      </div>

      <div class="h-screen w-screen p-12 lg:p-96 flex flex-col text-center justify-center items-center blob">
        <h1 class="text-7xl font-black mb-8 pt-[4.5rem] hover:text-primary hover:underline">
          <a href="mailto:wonderacid@gmail.com">{{ $i18n.locale == 'en' ? "Or send us an email!" : "Ou envie um email!"}}</a>
        </h1>
      </div> 
    </div>
  </div>
</template>

<style scoped>
label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #282828;
  background: transparent;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input:focus, textarea:focus {
  background-color: #282828;
  outline: none;
}

.submitButton {
  background-color: #282828;
  color: white;
  font-size: 1.1rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 6px 8px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 6px 8px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.submitButton:hover {
  background-color: var(--color-primary);
}

.wave-up {
  background: #1e1e1e;
  background-image: url('@/assets/images/waves/waves-black-top.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
}

.blob-scene {
  background: #1e1e1e;
  background-image: url("@/assets/images/waves/waves-black-bottom.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
}

.blob {
  background: #1e1e1e;
  background-image: url("@/assets/images/waves/circle-scatter.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
}
</style>

