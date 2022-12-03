<script>
import emailjs from 'emailjs-com';
import { useToast } from 'vue-toastification';
const toast = useToast();

export default {
  methods: {
    sendEmail(e) {
      emailjs.sendForm('service_n6iwgzp', 'template_93kn63q', this.$refs.form, 'gxZsYo91yUxcxAKr1')
        .then((result) => {
          toast.success('Email sent successfully!');
        }, (error) => {
          console.log(error.text);
        });
    },
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="overflow-x-hidden">
      <div
        class="flex justify-center items-center h-screen w-screen wave-up pt-[4.5rem]"
      >
        <h1 class="mb-32 w-2/3 text-center text-6xl font-black">
          We can help you develop your game.
        </h1>
      </div>
    </div>

    <div class="w-screen bg-primary h-fit px-12 md:px-24 xl:px-48 py-32">
      <h1 class="font-black text-5xl lg:text-6xl text-center text-black">
        We are not only a game studio, <br />
        but a freelancing agency.
      </h1>

      <p class="text-black text-2xl text-center mt-4 font-bold">
        We provide a wide range of services, from 3D models to lore and
          documentation.
      </p>
    </div>

    <div class="h-screen w-screen p-12 xl:p-96 flex flex-col text-center justify-center items-center blob-scene">
      <h1 class="text-6xl font-black mb-8 pt-[4.5rem]">Send us an email!</h1>

      <form @submit.prevent="sendEmail" ref="form" class="w-5/6">
        <label>Name</label>
        <input 
          type="text" 
          name="name"
          placeholder="Your Name"
        >
        <label>Email</label>
        <input 
          type="email"
          name="email"
          placeholder="Your Email"
          >
        <label>Message</label>
        <textarea 
          name="message"
          cols="30" rows="5"
          placeholder="Message">
        </textarea>
        
        <input type="submit" value="Send">
      </form>
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

input[type=submit] {
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

input[type=submit]:hover {
  background-color: var(--color-primary);
}

.wave-up {
  background: #1e1e1e;
  background-image: url('@/assets/images/waves/wave-top.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
}

.blob-scene {
  background: #1e1e1e;
  background-image: url("@/assets/images/waves/wave-bottom.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
}
</style>