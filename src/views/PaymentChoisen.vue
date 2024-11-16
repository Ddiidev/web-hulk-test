<template>
  <div class="bg-emerald-900">
    
    <div class="text-center	align-middle pt-5 text-white text-4xl">
      Plano {{ plano }}
    </div>
    
    <iframe class="h-svh w-[650px]" src="https://d786d1be.sibforms.com/serve/MUIFAAarejUFOHArxrKFbnjhG9TgjUFCGu5w10jYy6cHUFgk2heJfrORHLoakGmi68MKdchoCjT3fy3JBnuzZB5xHVwiJeFjCmZ8GQgHwvjuo5wDPVLRDGWaVq4TijVIfcmzX4fom8KVZ59KZWf-THzaUvM2t9IO1sXjvHCSix9P8fPf92zMoNFyQ3C9FCI83y8ROCYZyN4rooKf" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'PaymentChoisen',
  data() {
    return reactive<{plano: string}>({
      plano: ''
    })
  },
  mounted() {
    const route = useRoute();
    this.plano = route.params.plan.toString();
  },
  setup() {
    
  }
});
</script>