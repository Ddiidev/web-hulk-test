import { defineComponent, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
export default defineComponent({
    name: 'PaymentChoisen',
    components: {
        Navbar
    },
    data() {
        const language = localStorage.getItem('currentLocale')?.toString() ?? 'en';
        return reactive({
            plano: '',
            language: ref(language),
            planLang: ref('')
        });
    },
    methods: {
        handleLocalStorageChange(cEvent) {
            const e = cEvent.detail;
            if (e.key === 'currentLocale') {
                this.language = e.newValue;
                this.setLang();
            }
        },
        setLang() {
            const language = localStorage.getItem('currentLocale')?.toString() ?? 'en';
            if (language == 'en_US') {
                this.planLang = `Plan ${this.plano}`;
            }
            else if (this.plano == 'basic') {
                this.planLang = `Plano básico`;
            }
            else if (this.plano == 'intermediate') {
                this.planLang = `Plano intermediário`;
            }
            else {
                this.planLang = `Plano completo`;
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
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Navbar
        },
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Navbar;
    /** @type { [typeof __VLS_components.Navbar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-full bg-emerald-900 pt-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center	align-middle pt-5 text-white text-4xl") }, });
    (__VLS_ctx.planLang);
    if (__VLS_ctx.language == 'en_US') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        if (__VLS_ctx.plano == 'basic') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ ...{ class: ("h-[900px] w-[650px]") }, src: ("https://d786d1be.sibforms.com/serve/MUIFACYYeeLlnMHP8K98dbwIi6ND_Me8_NeAfM3-gtz6ie6nWWCWtvcCh0pcQjqJC7DFDFqjCGc4hzzJ6Zm7cNAwOg_gd-4SoifJsWgFsKfQFSQnlN4KAV8FNwGFW3hoAwAPKG7oBUUp3zAGvgO0iqWu0buvKcXuHrPQc669ZB0uaNZxqcyCo9R3-jBEtI0RvEaVVUKxztNsec6S"), frameborder: ("0"), scrolling: ("auto"), allowfullscreen: (true), ...{ style: ({}) }, });
        }
        else if (['full', 'intermediate'].includes(__VLS_ctx.plano)) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ ...{ class: ("h-[900px] w-[650px]") }, src: ("https://d786d1be.sibforms.com/serve/MUIFAGuzHSJ3A7c0h5MOu6uRrd9bWbRcFwmAq1FwLB0DuEmgkln9yXjEnmwK0voVD6SvQPDRnKrk5Qaxqq-XB9N-wbBgbRSWsoXke75in1IL8XWuBBdTWuhZXSLgUWvO17J3mw71goHQlU7urnKMNcJz_h-vskDeGCM3UffctRDz3UTR0Drua0wjB2Ojoaiy1uKyXU0DuNuneDkr"), frameborder: ("0"), scrolling: ("auto"), allowfullscreen: (true), ...{ style: ({}) }, });
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        if (__VLS_ctx.plano == 'basic') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ ...{ class: ("h-[900px] w-[650px]") }, src: ("https://d786d1be.sibforms.com/serve/MUIFAMLbEF5RT0pS_sTySZmBZpWUzxzWdxpNwF2x2BtyDK7CNWg0crkahURzRZbcYMUJTA6BBxW7e6U2nemXDmgo_JAPgumr6jjadyr8dWjAnn640oUSq7-OYKqXsCqonZbWh3sbLFxFQelQQea3R6WTXIBnapLfzLB4TXEJDe9tCcutDMOKqtxO0KRWP28hdOpFfyZnBpP3HE-f"), frameborder: ("0"), scrolling: ("auto"), allowfullscreen: (true), ...{ style: ({}) }, });
        }
        else if (['full', 'intermediate'].includes(__VLS_ctx.plano)) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ ...{ class: ("h-[900px] w-[650px]") }, src: ("https://d786d1be.sibforms.com/serve/MUIFAEAxbcFYTM3Ngi1eCzrcV82tfx6PPfMz3IE4BwSShKhaA_Wj-Nd7Z8MpFBugH8_yTwHLOB96lbwNa8OnQiX6Td9hNE2Iq1Tp3LjwbY_axO5_C9PTtxGcTJ36831-VsXi7Tp-cpvbPZib_d0SszHWtCOsVTPwqsplXMiN1nvaNa7jmdCEmjkQUJDspTUMArx2vmSWvQPRRKX6"), frameborder: ("0"), scrolling: ("auto"), allowfullscreen: (true), ...{ style: ({}) }, });
        }
    }
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['bg-emerald-900'];
    __VLS_styleScopedClasses['pt-16'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['align-middle'];
    __VLS_styleScopedClasses['pt-5'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['h-[900px]'];
    __VLS_styleScopedClasses['w-[650px]'];
    __VLS_styleScopedClasses['h-[900px]'];
    __VLS_styleScopedClasses['w-[650px]'];
    __VLS_styleScopedClasses['h-[900px]'];
    __VLS_styleScopedClasses['w-[650px]'];
    __VLS_styleScopedClasses['h-[900px]'];
    __VLS_styleScopedClasses['w-[650px]'];
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
//# sourceMappingURL=PaymentChoisen.vue.js.map