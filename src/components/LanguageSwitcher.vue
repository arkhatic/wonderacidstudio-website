<template>
  <!-- language switcher -->
  <button
    class=" rounded-lg h-6 ml-4 text-[#505050] font-bold"
    @click="handleSelected()"
  >
    {{ $i18n.locale === 'pt' ? 'EN' : 'PT' }}
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'


const { t, locale } = useI18n({ useScope: 'global' })
const lang = ref('pt')

function handleSelected() {
  lang.value = lang.value === 'pt' ? 'en' : 'pt';
  locale.value = lang.value;
}
</script>


