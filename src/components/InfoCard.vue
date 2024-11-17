<template>
  <div class="bg-gradient-to-br from-emerald-800 to-emerald-700 border border-emerald-600 rounded-lg p-4">
    <div class="flex items-center justify-center mb-2">
      <component :is="iconComponent" :class="`h-8 w-8 text-emerald-300 ${extendCss}`" />
    </div>
    <h3 class="text-white text-lg">{{ title }}</h3>
    <p class="text-emerald-100">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { CodeBracketIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
import IconWebHook from '@/assets/Icons/IconWebHook.vue';

export default defineComponent({
  name: 'InfoCard',
  data() {
    return {
      extendCss: this.$props.icon == 'Webhook' ? 'fill-emerald-300' : ''
    }
  },
  props: {
    icon: String,
    title: String,
    description: String,
  },
  components: {
    IconWebHook
  },
  setup(props: any) {
    const iconComponent = computed(() => {
      switch (props.icon) {
        case 'Code': return CodeBracketIcon;
        case 'Webhook': return IconWebHook;
        case 'Shield': return ShieldCheckIcon;
        default: return null;
      }
    });
    return { iconComponent };
  }
});
</script>

<style scoped></style>
