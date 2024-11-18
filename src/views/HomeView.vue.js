import { defineComponent, ref } from 'vue';
import InfoCard from '@/components/InfoCard.vue';
import FeatureCard from '@/components/FeatureCard.vue';
import PlanCard from '@/components/PlanCard.vue';
import LanguageSelect from '@/components/LanguageSelect.vue';
import Navbar from '@/components/Navbar.vue';
export default defineComponent({
    name: 'LandingPage',
    components: {
        InfoCard,
        FeatureCard,
        PlanCard,
        LanguageSelect,
        Navbar
    },
    setup() {
        const isModalOpen = ref(false);
        const modalSrc = ref('');
        const modalType = ref('');
        const openModal = (type, src) => {
            modalType.value = type;
            modalSrc.value = src;
            isModalOpen.value = true;
        };
        const closeModal = () => {
            isModalOpen.value = false;
        };
        return { isModalOpen, modalSrc, modalType, openModal, closeModal };
    },
    data() {
        return {
            priceFull: '$ 10',
            priceBasic: '$ 5',
            priceIntermediate: '$ 7',
            isLoading: ref(false)
        };
    },
    mounted() {
        this.getUserCountry();
    },
    methods: {
        getUserCountry() {
            this.isLoading = true;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition, this.handleError);
            }
            else {
                console.error("Geolocalização não é suportada por este navegador.");
            }
        },
        handleError(error) {
            console.error(`ERROR(${error.code}): ${error.message}`);
            this.isLoading = false;
        },
        showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const country = localStorage.getItem('country');
            if (country) {
                this.setPrice(country);
                this.isLoading = false;
                return;
            }
            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                .then((response) => response.json())
                .then((data) => {
                const country = data?.address.country;
                localStorage.setItem('country', country);
                this.setPrice(country);
                this.isLoading = false;
            })
                .catch((error) => {
                console.error('Erro ao obter o país:', error);
                this.isLoading = true;
            });
        },
        setPrice(country) {
            if (country === "Brasil") {
                this.priceBasic = 'R$ 5 BRL';
                this.priceIntermediate = "R$ 7 BRL";
                this.priceFull = "R$ 10 BRL";
            }
            else {
                this.priceBasic = '$ 5 USD';
                this.priceIntermediate = "$ 7 USD";
                this.priceFull = "$ 10 USD";
            }
        }
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            InfoCard,
            FeatureCard,
            PlanCard,
            LanguageSelect,
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Navbar;
    /** @type { [typeof __VLS_components.Navbar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen pt-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("text-center mb-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/LogoWebHulkTest.PNG"), alt: ("WebHulk Test Logo"), width: ("200"), height: ("200"), ...{ class: ("h-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl font-bold text-white mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xl text-emerald-100 max-w-3xl mx-auto mb-12") }, });
    (__VLS_ctx.$t('homeView.subTitle'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid md:grid-cols-3 gap-8") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.InfoCard;
    /** @type { [typeof __VLS_components.InfoCard, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ("Code"), title: ((__VLS_ctx.$t('homeView.sectionInfoCard.forDev.title'))), description: ((__VLS_ctx.$t('homeView.sectionInfoCard.forDev.content'))), }));
    const __VLS_8 = __VLS_7({ icon: ("Code"), title: ((__VLS_ctx.$t('homeView.sectionInfoCard.forDev.title'))), description: ((__VLS_ctx.$t('homeView.sectionInfoCard.forDev.content'))), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.InfoCard;
    /** @type { [typeof __VLS_components.InfoCard, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ("Webhook"), title: ((__VLS_ctx.$t('homeView.sectionInfoCard.testFromWebHooks.title'))), description: ((__VLS_ctx.$t('homeView.sectionInfoCard.testFromWebHooks.content'))), }));
    const __VLS_14 = __VLS_13({ icon: ("Webhook"), title: ((__VLS_ctx.$t('homeView.sectionInfoCard.testFromWebHooks.title'))), description: ((__VLS_ctx.$t('homeView.sectionInfoCard.testFromWebHooks.content'))), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.InfoCard;
    /** @type { [typeof __VLS_components.InfoCard, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ("Shield"), title: ((__VLS_ctx.$t('homeView.sectionInfoCard.safeEnviroment.title'))), description: ((__VLS_ctx.$t('homeView.sectionInfoCard.safeEnviroment.content'))), }));
    const __VLS_20 = __VLS_19({ icon: ("Shield"), title: ((__VLS_ctx.$t('homeView.sectionInfoCard.safeEnviroment.title'))), description: ((__VLS_ctx.$t('homeView.sectionInfoCard.safeEnviroment.content'))), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("bg-gradient-to-br from-emerald-900 to-emerald-1000 border-b border-t border-emerald-600 py-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-16 container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold text-white mb-6 text-center") }, });
    (__VLS_ctx.$t('homeView.sectionResourcePrincipal.title'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid md:grid-cols-3 gap-8") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.FeatureCard;
    /** @type { [typeof __VLS_components.FeatureCard, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ icon: ("Globe"), title: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.API.title'))), description: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.API.content'))), }));
    const __VLS_26 = __VLS_25({ icon: ("Globe"), title: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.API.title'))), description: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.API.content'))), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.FeatureCard;
    /** @type { [typeof __VLS_components.FeatureCard, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ icon: ("Zap"), title: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.connectionLocal.title'))), description: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.connectionLocal.content'))), }));
    const __VLS_32 = __VLS_31({ icon: ("Zap"), title: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.connectionLocal.title'))), description: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.connectionLocal.content'))), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.FeatureCard;
    /** @type { [typeof __VLS_components.FeatureCard, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ icon: ("Lock"), title: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.privacyGuaranteed.title'))), description: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.privacyGuaranteed.content'))), }));
    const __VLS_38 = __VLS_37({ icon: ("Lock"), title: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.privacyGuaranteed.title'))), description: ((__VLS_ctx.$t('homeView.sectionResourcePrincipal.privacyGuaranteed.content'))), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("mb-16 container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4 pt-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold text-white mb-6 text-center") }, });
    (__VLS_ctx.$t('homeView.sectionHowWorking.title'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center grid md:grid-cols-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.openModal('image', '@/assets/WebHulkTest.svg');
            } }, src: ("@/assets/WebHulkTest.svg"), ...{ class: ("rounded rounded-lg border border-emerald-600 cursor-zoom-in") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.openModal('video', '@/assets/WebHulkTestDashboard.mp4');
            } }, autoplay: (true), loop: (true), muted: (true), playsinline: (true), ...{ class: ("rounded rounded-lg border border-emerald-600 ml-4 cursor-zoom-in") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({ src: ("@/assets/WebHulkTestDashboard.mp4"), type: ("video/mp4"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg text-emerald-100 mt-4") }, });
    (__VLS_ctx.$t('homeView.sectionHowWorking.subTitle'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({ ...{ class: ("list-decimal list-inside text-lg text-emerald-100 mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.$t('homeView.sectionHowWorking.msgWebhookLocal.point'));
    (__VLS_ctx.$t('homeView.sectionHowWorking.msgWebhookLocal.content'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.$t('homeView.sectionHowWorking.msgRequestGET.point'));
    (__VLS_ctx.$t('homeView.sectionHowWorking.msgRequestGET.content'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("bg-gradient-to-br from-emerald-900 to-emerald-1000 border-b border-t border-emerald-600 pt-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-16 container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold text-white mb-6 text-center") }, });
    (__VLS_ctx.$t('homeView.sectionOurPlans.title'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid md:grid-cols-3 gap-8") }, });
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.PlanCard;
    /** @type { [typeof __VLS_components.PlanCard, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ title: ((__VLS_ctx.$t('homeView.sectionOurPlans.planBasic.title'))), description: ((__VLS_ctx.$t('homeView.sectionOurPlans.planBasic.subTitle'))), features: __VLS_ctx.$tm('homeView.sectionOurPlans.planBasic.benefits'), price: ((__VLS_ctx.priceBasic)), isLoading: ((__VLS_ctx.isLoading)), plan: ("basic"), }));
    const __VLS_44 = __VLS_43({ title: ((__VLS_ctx.$t('homeView.sectionOurPlans.planBasic.title'))), description: ((__VLS_ctx.$t('homeView.sectionOurPlans.planBasic.subTitle'))), features: __VLS_ctx.$tm('homeView.sectionOurPlans.planBasic.benefits'), price: ((__VLS_ctx.priceBasic)), isLoading: ((__VLS_ctx.isLoading)), plan: ("basic"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.PlanCard;
    /** @type { [typeof __VLS_components.PlanCard, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ title: ((__VLS_ctx.$t('homeView.sectionOurPlans.planIntermediate.title'))), description: ((__VLS_ctx.$t('homeView.sectionOurPlans.planIntermediate.subTitle'))), features: __VLS_ctx.$tm('homeView.sectionOurPlans.planIntermediate.benefits'), price: ((__VLS_ctx.priceIntermediate)), plan: ("intermediate"), isLoading: ((__VLS_ctx.isLoading)), isPrimary: (true), isOutline: (true), }));
    const __VLS_50 = __VLS_49({ title: ((__VLS_ctx.$t('homeView.sectionOurPlans.planIntermediate.title'))), description: ((__VLS_ctx.$t('homeView.sectionOurPlans.planIntermediate.subTitle'))), features: __VLS_ctx.$tm('homeView.sectionOurPlans.planIntermediate.benefits'), price: ((__VLS_ctx.priceIntermediate)), plan: ("intermediate"), isLoading: ((__VLS_ctx.isLoading)), isPrimary: (true), isOutline: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.PlanCard;
    /** @type { [typeof __VLS_components.PlanCard, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ title: ((__VLS_ctx.$t('homeView.sectionOurPlans.planFull.title'))), description: ((__VLS_ctx.$t('homeView.sectionOurPlans.planFull.subTitle'))), features: __VLS_ctx.$tm('homeView.sectionOurPlans.planFull.benefits'), price: ((__VLS_ctx.priceFull)), plan: ("full"), isLoading: ((__VLS_ctx.isLoading)), isPrimary: (true), }));
    const __VLS_56 = __VLS_55({ title: ((__VLS_ctx.$t('homeView.sectionOurPlans.planFull.title'))), description: ((__VLS_ctx.$t('homeView.sectionOurPlans.planFull.subTitle'))), features: __VLS_ctx.$tm('homeView.sectionOurPlans.planFull.benefits'), price: ((__VLS_ctx.priceFull)), plan: ("full"), isLoading: ((__VLS_ctx.isLoading)), isPrimary: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("text-center text-emerald-100") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('homeView.footer'));
    if (__VLS_ctx.isModalOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.closeModal) }, ...{ class: ("modal") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.closeModal) }, ...{ class: ("close") }, });
        if (__VLS_ctx.modalType === 'image') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("rounded rounded-lg border border-emerald-600 ml-4 modal-content") }, src: ("@/assets/WebHulkTest.svg"), });
        }
        else if (__VLS_ctx.modalType === 'video') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)({ ...{ class: ("rounded rounded-lg border border-emerald-600 ml-4 modal-content") }, autoplay: (true), loop: (true), muted: (true), playsinline: (true), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({ src: ("@/assets/WebHulkTestDashboard.mp4"), type: ("video/mp4"), });
        }
    }
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['pt-10'];
    __VLS_styleScopedClasses['py-16'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-20'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['h-auto'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['text-emerald-100'];
    __VLS_styleScopedClasses['max-w-3xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mb-12'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-36'];
    __VLS_styleScopedClasses['sm:px-10'];
    __VLS_styleScopedClasses['2xl:px-44'];
    __VLS_styleScopedClasses['sml:px-4'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['md:grid-cols-3'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['bg-gradient-to-br'];
    __VLS_styleScopedClasses['from-emerald-900'];
    __VLS_styleScopedClasses['to-emerald-1000'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-t'];
    __VLS_styleScopedClasses['border-emerald-600'];
    __VLS_styleScopedClasses['py-16'];
    __VLS_styleScopedClasses['mb-16'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-36'];
    __VLS_styleScopedClasses['sm:px-10'];
    __VLS_styleScopedClasses['2xl:px-44'];
    __VLS_styleScopedClasses['sml:px-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['md:grid-cols-3'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['mb-16'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-36'];
    __VLS_styleScopedClasses['sm:px-10'];
    __VLS_styleScopedClasses['2xl:px-44'];
    __VLS_styleScopedClasses['sml:px-4'];
    __VLS_styleScopedClasses['pt-16'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['md:grid-cols-2'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-emerald-600'];
    __VLS_styleScopedClasses['cursor-zoom-in'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-emerald-600'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['cursor-zoom-in'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-emerald-100'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['list-decimal'];
    __VLS_styleScopedClasses['list-inside'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-emerald-100'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['bg-gradient-to-br'];
    __VLS_styleScopedClasses['from-emerald-900'];
    __VLS_styleScopedClasses['to-emerald-1000'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-t'];
    __VLS_styleScopedClasses['border-emerald-600'];
    __VLS_styleScopedClasses['pt-16'];
    __VLS_styleScopedClasses['mb-16'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-36'];
    __VLS_styleScopedClasses['sm:px-10'];
    __VLS_styleScopedClasses['2xl:px-44'];
    __VLS_styleScopedClasses['sml:px-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['md:grid-cols-3'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-emerald-100'];
    __VLS_styleScopedClasses['modal'];
    __VLS_styleScopedClasses['close'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-emerald-600'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['modal-content'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-emerald-600'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['modal-content'];
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
//# sourceMappingURL=HomeView.vue.js.map