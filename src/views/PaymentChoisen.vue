<template>
  <Navbar />

  <div class="h-full bg-emerald-900 pt-16">
    <div class="text-center	align-middle pt-5 text-white text-4xl">
      {{ planLang }}
    </div>

    <div v-if="language == 'en_US'">
      <iframe v-if="plano == 'basic'" class="h-[900px] w-[650px]"
        src="https://d786d1be.sibforms.com/serve/MUIFACYYeeLlnMHP8K98dbwIi6ND_Me8_NeAfM3-gtz6ie6nWWCWtvcCh0pcQjqJC7DFDFqjCGc4hzzJ6Zm7cNAwOg_gd-4SoifJsWgFsKfQFSQnlN4KAV8FNwGFW3hoAwAPKG7oBUUp3zAGvgO0iqWu0buvKcXuHrPQc669ZB0uaNZxqcyCo9R3-jBEtI0RvEaVVUKxztNsec6S"
        frameborder="0" scrolling="auto" allowfullscreen
        style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>

      <iframe v-else-if="['full', 'intermediate'].includes(plano)" class="h-[900px] w-[650px]"
        src="https://d786d1be.sibforms.com/serve/MUIFAGuzHSJ3A7c0h5MOu6uRrd9bWbRcFwmAq1FwLB0DuEmgkln9yXjEnmwK0voVD6SvQPDRnKrk5Qaxqq-XB9N-wbBgbRSWsoXke75in1IL8XWuBBdTWuhZXSLgUWvO17J3mw71goHQlU7urnKMNcJz_h-vskDeGCM3UffctRDz3UTR0Drua0wjB2Ojoaiy1uKyXU0DuNuneDkr"
        frameborder="0" scrolling="auto" allowfullscreen
        style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
    </div>
    <div v-else>
      <iframe v-if="plano == 'basic'" class="h-[900px] w-[650px]"
        src="https://d786d1be.sibforms.com/serve/MUIFAMLbEF5RT0pS_sTySZmBZpWUzxzWdxpNwF2x2BtyDK7CNWg0crkahURzRZbcYMUJTA6BBxW7e6U2nemXDmgo_JAPgumr6jjadyr8dWjAnn640oUSq7-OYKqXsCqonZbWh3sbLFxFQelQQea3R6WTXIBnapLfzLB4TXEJDe9tCcutDMOKqtxO0KRWP28hdOpFfyZnBpP3HE-f"
        frameborder="0" scrolling="auto" allowfullscreen
        style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>

      <iframe v-else-if="['full', 'intermediate'].includes(plano)" class="h-[900px] w-[650px]"
        src="https://d786d1be.sibforms.com/serve/MUIFAEAxbcFYTM3Ngi1eCzrcV82tfx6PPfMz3IE4BwSShKhaA_Wj-Nd7Z8MpFBugH8_yTwHLOB96lbwNa8OnQiX6Td9hNE2Iq1Tp3LjwbY_axO5_C9PTtxGcTJ36831-VsXi7Tp-cpvbPZib_d0SszHWtCOsVTPwqsplXMiN1nvaNa7jmdCEmjkQUJDspTUMArx2vmSWvQPRRKX6"
        frameborder="0" scrolling="auto" allowfullscreen
        style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';


export default defineComponent({
  name: 'PaymentChoisen',
  components: {
    Navbar
  },
  data() {
    const language = localStorage.getItem('currentLocale')?.toString() ?? 'en'

    return reactive<{ plano: string, language: Ref<string>, planLang: Ref<string> }>({
      plano: '',
      language: ref(language),
      planLang: ref('')
    })
  },
  methods: {
    handleLocalStorageChange(cEvent: Event) {
      const e = (cEvent as CustomEvent).detail;
      if (e.key === 'currentLocale') {
        this.language = e.newValue;
        this.setLang();
      }
    },
    setLang() {
      const language = localStorage.getItem('currentLocale')?.toString() ?? 'en'

      if (language == 'en_US') {
        this.planLang = `Plan ${this.plano}`
      } else if (this.plano == 'basic') {
        this.planLang = `Plano básico`
      } else if (this.plano == 'intermediate') {
        this.planLang = `Plano intermediário`
      } else {
        this.planLang = `Plano completo`
      }
    }
  },
  mounted() {
    this.plano = useRoute().params.plan.toString();
    window.addEventListener('localstorageChange', this.handleLocalStorageChange);
    this.setLang();
  },
  unmounted() {
    window.removeEventListener('localstorageChange', this.handleLocalStorageChange);
  }
});
</script>