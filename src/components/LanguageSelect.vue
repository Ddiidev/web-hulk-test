<template>
    <div class="relative inline-block text-left">
        <div>
            <button @click="toggleDropdown" class="flex items-center justify-between w-[230px] text-white border border-green-500 rounded-md px-4 py-2">
                <span>{{ selectedLanguage }}</span>
                <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z" /></svg>
            </button>
        </div>

        <div v-if="isDropdownOpen" class="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div @click="selectLanguage('pt_BR')" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-100 cursor-pointer">
                    <img src="@/assets/icons/br.png" alt="Português" class="w-5 h-5 mr-2" />
                    Português (BR)
                </div>
                <div @click="selectLanguage('en_US')" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-100 cursor-pointer">
                    <img src="@/assets/icons/us.png" alt="English" class="w-5 h-5 mr-2" />
                    English
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LanguageSelect',
    emits: {
        'languageSelected': (language: string) =>{}
    },
    data() {
        return {
            isDropdownOpen: false,
            selectedLanguage: 'Selecione o idioma',
        };
    },
    mounted() {
        const currentLocale = localStorage.getItem('currentLocale')
        
        if (currentLocale){
            this.selectLanguage(currentLocale);
        } else {
            this.selectLanguage('en_US');
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectLanguage(language: string) {
            this.selectedLanguage = language === 'pt_BR' ? 'Português (BR)' : 'English';
            this.isDropdownOpen = false;
            localStorage.setItem('currentLocale', language)

            this.$i18n.locale = language;
            this.$emit('languageSelected', language);
        },
    },
});
</script>