import { defineComponent } from 'vue';
export default defineComponent({
    name: 'LanguageSelect',
    data() {
        return {
            isDropdownOpen: false,
            selectedLanguage: 'Selecione o idioma',
        };
    },
    mounted() {
        const currentLocale = localStorage.getItem('currentLocale');
        if (currentLocale) {
            this.selectLanguage(currentLocale);
        }
        else {
            this.selectLanguage('en_US');
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectLanguage(language) {
            this.selectedLanguage = language === 'pt_BR' ? 'Português (BR)' : 'English';
            this.isDropdownOpen = false;
            localStorage.setItem('currentLocale', language);
            this.$i18n.locale = language;
            this.$emit('languageSelected', language);
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative inline-block text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleDropdown) }, ...{ class: ("flex items-center justify-between w-[230px] text-white border border-green-500 rounded-md px-4 py-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.selectedLanguage);
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("w-5 h-5 ml-2") }, fill: ("currentColor"), viewBox: ("0 0 20 20"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"), });
    if (__VLS_ctx.isDropdownOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-1") }, role: ("menu"), "aria-orientation": ("vertical"), "aria-labelledby": ("options-menu"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isDropdownOpen)))
                        return;
                    __VLS_ctx.selectLanguage('pt_BR');
                } }, ...{ class: ("flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-100 cursor-pointer") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/Icons/br.png"), alt: ("Português"), ...{ class: ("w-5 h-5 mr-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isDropdownOpen)))
                        return;
                    __VLS_ctx.selectLanguage('en_US');
                } }, ...{ class: ("flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-100 cursor-pointer") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/Icons/us.png"), alt: ("English"), ...{ class: ("w-5 h-5 mr-2") }, });
    }
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['w-[230px]'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-green-500'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['ml-2'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['w-56'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['ring-1'];
    __VLS_styleScopedClasses['ring-black'];
    __VLS_styleScopedClasses['ring-opacity-5'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['hover:bg-green-100'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['hover:bg-green-100'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['mr-2'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
//# sourceMappingURL=LanguageSelect.vue.js.map