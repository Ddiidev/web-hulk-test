<template>
    <nav
        class="fixed w-full left-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white border-b border-emerald-600 p-4 pt-0 z-50">
        <div class="flex justify-between items-center">
            <h1 class="text-xl font-bold"></h1>
            <LanguageSelect class="pt-5 pr-5" />
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LanguageSelect from './LanguageSelect.vue';

export default defineComponent({
    components: {
        LanguageSelect
    }
})

</script>