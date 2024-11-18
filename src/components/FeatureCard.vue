<template>
  <div class="bg-gradient-to-br from-emerald-800 to-emerald-700 border border-emerald-600 rounded-lg p-4">
    <div class="flex items-center justify-center mb-2">
      <component :is="iconComponent" class="h-8 w-8 text-emerald-300" />
    </div>
    <h3 class="text-white text-lg">{{ title }}</h3>
    <p class="text-emerald-100">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { GlobeAltIcon, BoltIcon, LockClosedIcon } from '@heroicons/vue/24/outline';


export default defineComponent({
  name: 'FeatureCard',
  props: {
    icon: String,
    title: String,
    description: String,
  },
  setup(props) {
    const iconComponent = computed(() => {
      switch (props.icon) {
        case 'Globe': return GlobeAltIcon;
        case 'Zap': return BoltIcon;
        case 'Lock': return LockClosedIcon;
        default: return null;
      }
    });
    return { iconComponent };
  }
});
</script>

<style scoped>
/* Adicione estilos customizados aqui, se necessário */
</style>
