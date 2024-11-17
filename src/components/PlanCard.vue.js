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
        }
    },
    components: {
        CheckIcon
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            CheckIcon
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (([__VLS_ctx.isPrimary ? 'bg-gradient-to-br from-emerald-700 to-emerald-600 border border-emerald-500' : 'bg-gradient-to-br from-emerald-800 to-emerald-700 border-emerald-600'])) }, ...{ class: ("rounded-lg p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: (([__VLS_ctx.isPrimary ? 'text-white' : 'text-emerald-100'])) }, ...{ class: ("text-2xl") }, });
    (__VLS_ctx.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-emerald-200") }, });
    (__VLS_ctx.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("space-y-2 mb-6") }, });
    for (const [feature, index] of __VLS_getVForSourceType((__VLS_ctx.features))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), ...{ class: ("flex items-center text-emerald-100") }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.CheckIcon;
        /** @type { [typeof __VLS_components.CheckIcon, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("h-6 w-6 text-green-500") }, }));
        const __VLS_2 = __VLS_1({ ...{ class: ("h-6 w-6 text-green-500") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        (feature);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: (([__VLS_ctx.isPrimary ? 'text-white' : 'text-emerald-100'])) }, ...{ class: ("text-2xl font-bold mb-4") }, });
    (__VLS_ctx.price);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: (([__VLS_ctx.isPrimary ? 'bg-white hover:bg-emerald-100 text-emerald-800' : 'bg-emerald-600 text-white hover:bg-emerald-500'])) }, ...{ class: ("w-full py-2 rounded") }, });
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['text-emerald-200'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['text-emerald-100'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['w-6'];
    __VLS_styleScopedClasses['text-green-500'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded'];
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
//# sourceMappingURL=PlanCard.vue.js.map