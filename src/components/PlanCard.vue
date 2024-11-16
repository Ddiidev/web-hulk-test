<template>
    <div :class="[isPrimary ? 'bg-gradient-to-br from-emerald-700 to-emerald-600 border border-emerald-500' : 'bg-gradient-to-br from-emerald-800 to-emerald-700 border-emerald-600']" class="rounded-lg p-4">
      <div class="mb-6">
        <h3 :class="[isPrimary ? 'text-white' : 'text-emerald-100']" class="text-2xl">{{ title }}</h3>
        <p class="text-emerald-200">{{ description }}</p>
      </div>
      <ul class="space-y-2 mb-6">
        <li v-for="(feature, index) in features" :key="index" class="flex items-center text-emerald-100">
          <Check class="h-5 w-5 mr-2 text-emerald-300" /> {{ feature }}
        </li>
      </ul>
      <p :class="[isPrimary ? 'text-white' : 'text-emerald-100']" class="text-2xl font-bold mb-4">{{ price }}</p>
      <button :class="[isPrimary ? 'bg-white hover:bg-emerald-100 text-emerald-800' : 'bg-emerald-600 text-white hover:bg-emerald-500']" class="w-full py-2 rounded">Escolher Plano</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
//   import { Check } from 'lucide-vue';
  
  export default defineComponent({
    name: 'PlanCard',
    props: {
      title: String,
      description: String,
      features: Array,
      price: String,
      isPrimary: {
        type: Boolean,
        default: false
      }
    },
    components: {
    //   Check
    }
  });
  </script>
  
  <style scoped>
  /* Adicione estilos customizados aqui, se necessário */
  </style>
  