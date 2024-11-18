import { defineComponent, computed } from 'vue';
import { GlobeAltIcon, BoltIcon, LockClosedIcon } from '@heroicons/vue/24/outline';
export default defineComponent({
    name: 'FeatureCard',
    props: {
        icon: String,
        title: String,
        description: String,
    },
    setup(props) {
        const iconComponent = computed(() => {
            switch (props.icon) {
                case 'Globe': return GlobeAltIcon;
                case 'Zap': return BoltIcon;
                case 'Lock': return LockClosedIcon;
                default: return null;
            }
        });
        return { iconComponent };
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-gradient-to-br from-emerald-800 to-emerald-700 border border-emerald-600 rounded-lg p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center mb-2") }, });
    const __VLS_0 = ((__VLS_ctx.iconComponent));
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("h-8 w-8 text-emerald-300") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("h-8 w-8 text-emerald-300") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-white text-lg") }, });
    (__VLS_ctx.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-emerald-100") }, });
    (__VLS_ctx.description);
    __VLS_styleScopedClasses['bg-gradient-to-br'];
    __VLS_styleScopedClasses['from-emerald-800'];
    __VLS_styleScopedClasses['to-emerald-700'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-emerald-600'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['text-emerald-300'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-emerald-100'];
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
//# sourceMappingURL=FeatureCard.vue.js.map