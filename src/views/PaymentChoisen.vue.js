import { defineComponent, reactive } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    name: 'PaymentChoisen',
    data() {
        return reactive({
            plano: ''
        });
    },
    mounted() {
        this.plano = useRoute().params.plan.toString();
    },
    setup() {
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-full bg-emerald-900") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center	align-middle pt-5 text-white text-4xl") }, });
    (__VLS_ctx.plano);
    if (__VLS_ctx.plano == 'free') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ ...{ class: ("h-[900px] w-[650px]") }, src: ("https://d786d1be.sibforms.com/serve/MUIFAMLbEF5RT0pS_sTySZmBZpWUzxzWdxpNwF2x2BtyDK7CNWg0crkahURzRZbcYMUJTA6BBxW7e6U2nemXDmgo_JAPgumr6jjadyr8dWjAnn640oUSq7-OYKqXsCqonZbWh3sbLFxFQelQQea3R6WTXIBnapLfzLB4TXEJDe9tCcutDMOKqtxO0KRWP28hdOpFfyZnBpP3HE-f"), frameborder: ("0"), scrolling: ("auto"), allowfullscreen: (true), ...{ style: ({}) }, });
    }
    else if (__VLS_ctx.plano == 'full') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ ...{ class: ("h-[900px] w-[650px]") }, src: ("https://d786d1be.sibforms.com/serve/MUIFAEAxbcFYTM3Ngi1eCzrcV82tfx6PPfMz3IE4BwSShKhaA_Wj-Nd7Z8MpFBugH8_yTwHLOB96lbwNa8OnQiX6Td9hNE2Iq1Tp3LjwbY_axO5_C9PTtxGcTJ36831-VsXi7Tp-cpvbPZib_d0SszHWtCOsVTPwqsplXMiN1nvaNa7jmdCEmjkQUJDspTUMArx2vmSWvQPRRKX6"), frameborder: ("0"), scrolling: ("auto"), allowfullscreen: (true), ...{ style: ({}) }, });
    }
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['bg-emerald-900'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['align-middle'];
    __VLS_styleScopedClasses['pt-5'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-4xl'];
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