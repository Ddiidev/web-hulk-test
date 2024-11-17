<template>
  <div class="h-full bg-emerald-900">
    <div class="text-center	align-middle pt-5 text-white text-4xl">
      Plano {{ plano }}
    </div>

    <iframe v-if="plano == 'free'" class="h-[900px] w-[650px]"
      src="https://d786d1be.sibforms.com/serve/MUIFAMLbEF5RT0pS_sTySZmBZpWUzxzWdxpNwF2x2BtyDK7CNWg0crkahURzRZbcYMUJTA6BBxW7e6U2nemXDmgo_JAPgumr6jjadyr8dWjAnn640oUSq7-OYKqXsCqonZbWh3sbLFxFQelQQea3R6WTXIBnapLfzLB4TXEJDe9tCcutDMOKqtxO0KRWP28hdOpFfyZnBpP3HE-f"
      frameborder="0" scrolling="auto" allowfullscreen
      style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>

    <iframe v-else-if="plano == 'full'" class="h-[900px] w-[650px]"
      src="https://d786d1be.sibforms.com/serve/MUIFAEAxbcFYTM3Ngi1eCzrcV82tfx6PPfMz3IE4BwSShKhaA_Wj-Nd7Z8MpFBugH8_yTwHLOB96lbwNa8OnQiX6Td9hNE2Iq1Tp3LjwbY_axO5_C9PTtxGcTJ36831-VsXi7Tp-cpvbPZib_d0SszHWtCOsVTPwqsplXMiN1nvaNa7jmdCEmjkQUJDspTUMArx2vmSWvQPRRKX6"
      frameborder="0" scrolling="auto" allowfullscreen
      style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'PaymentChoisen',
  data() {
    return reactive<{ plano: string }>({
      plano: ''
    })
  },
  mounted() {
    this.plano = useRoute().params.plan.toString();
  },
  setup() {

  }
});
</script>