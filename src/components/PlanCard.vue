<template>
  <div
    :class="[isPrimary ? 'bg-gradient-to-br from-emerald-700 to-emerald-600 border border-emerald-500' : 'bg-gradient-to-br from-emerald-800 to-emerald-700 border border-emerald-600']"
    class="rounded-lg p-4">
    <div class="mb-6">
      <h3 :class="[isPrimary ? 'text-white' : 'text-emerald-100']" class="text-2xl">{{ title }}</h3>
      <p class="text-emerald-200">{{ description }}</p>
    </div>
    <ul class="space-y-2 mb-6">
      <li v-for="(feature, index) in features" :key="index" class="flex items-center text-emerald-100">
        <CheckIcon class="h-6 w-6 text-green-500" /> {{ feature }}
      </li>
    </ul>
    <span v-if="isLoading" :class="[isLoading ? 'loader text-2xl font-bold mb-4' : '']"></span>
    <p v-else :class="[isPrimary ? 'text-white' : 'text-emerald-100']" class="text-2xl font-bold mb-4">{{ price }}</p>
    <RouterLink :to="`/payment/${plan}`">
      <button
        :class="[isPrimary ? 'bg-white hover:bg-emerald-100 text-emerald-800' : 'bg-emerald-600 text-white hover:bg-emerald-500']"
        class="w-full py-2 rounded">
        Escolher Plano</button>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CheckIcon } from '@heroicons/vue/24/outline';

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
    },
    plan: String,
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CheckIcon
  }
});
</script>


<style scoped>
.loader {
  width: 32px;
  height: 32px;
  border: 5px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;
}

.loader:after {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  border: 5px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: scaleUp 1s linear infinite;
}

@keyframes scaleUp {
  0% {
    transform: translate(-50%, -50%) scale(0)
  }

  60%,
  100% {
    transform: translate(-50%, -50%) scale(1)
  }
}

@keyframes pulse {

  0%,
  60%,
  100% {
    transform: scale(1)
  }

  80% {
    transform: scale(1.2)
  }
}
</style>