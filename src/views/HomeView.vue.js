import { defineComponent } from 'vue';
import InfoCard from '@/components/InfoCard.vue';
import FeatureCard from '@/components/FeatureCard.vue';
import PlanCard from '@/components/PlanCard.vue';
export default defineComponent({
    name: 'LandingPage',
    components: {
        InfoCard,
        FeatureCard,
        PlanCard
    },
    data() {
        return {
            price: '$ ? '
        };
    },
    mounted() {
        this.getUserCountry();
    },
    methods: {
        getUserCountry() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition, this.handleError);
            }
            else {
                console.error("Geolocalização não é suportada por este navegador.");
            }
        },
        handleError(error) {
            console.error(`ERROR(${error.code}): ${error.message}`);
        },
        showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const country = localStorage.getItem('country');
            if (country) {
                this.setPrice(country);
                return;
            }
            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                .then((response) => response.json())
                .then((data) => {
                const country = data?.address.country;
                localStorage.setItem('country', country);
                this.setPrice(country);
            })
                .catch((error) => {
                debugger;
                console.error('Erro ao obter o país:', error);
            });
        },
        setPrice(country) {
            if (country === "Brasil") {
                this.price = "R$ 5 BRL";
            }
            else if (country === "Argentina") {
                this.price = "$ 1,50 USD";
            }
            else {
                this.price = "$ 5 USD";
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
            PlanCard
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4 py-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("text-center mb-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/LogoWebHulkTest.PNG"), alt: ("WebHulk Test Logo"), width: ("200"), height: ("200"), ...{ class: ("h-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl font-bold text-white mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xl text-emerald-100 max-w-3xl mx-auto mb-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid md:grid-cols-3 gap-8") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.InfoCard;
    /** @type { [typeof __VLS_components.InfoCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ("Code"), title: ("Para Desenvolvedores"), description: ("Projetado para cenários em que você ainda não possui um serviço próprio em produção e está realizando testes em ambiente local."), }));
    const __VLS_2 = __VLS_1({ icon: ("Code"), title: ("Para Desenvolvedores"), description: ("Projetado para cenários em que você ainda não possui um serviço próprio em produção e está realizando testes em ambiente local."), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.InfoCard;
    /** @type { [typeof __VLS_components.InfoCard, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ("Webhook"), title: ("Teste de Webhooks"), description: ("Simule e valide respostas de webhook de plataformas como Stripe, PayPal e outras APIs assíncronas."), }));
    const __VLS_8 = __VLS_7({ icon: ("Webhook"), title: ("Teste de Webhooks"), description: ("Simule e valide respostas de webhook de plataformas como Stripe, PayPal e outras APIs assíncronas."), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.InfoCard;
    /** @type { [typeof __VLS_components.InfoCard, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ("Shield"), title: ("Ambiente Seguro"), description: ("Oferece um ambiente seguro e eficiente para testar, acelerando seu processo de desenvolvimento e testes."), }));
    const __VLS_14 = __VLS_13({ icon: ("Shield"), title: ("Ambiente Seguro"), description: ("Oferece um ambiente seguro e eficiente para testar, acelerando seu processo de desenvolvimento e testes."), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("mb-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold text-white mb-6 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid md:grid-cols-3 gap-8") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.FeatureCard;
    /** @type { [typeof __VLS_components.FeatureCard, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ("Globe"), title: ("API Flexível"), description: ("Faça requisições para verificar o status do seu webhook"), }));
    const __VLS_20 = __VLS_19({ icon: ("Globe"), title: ("API Flexível"), description: ("Faça requisições para verificar o status do seu webhook"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.FeatureCard;
    /** @type { [typeof __VLS_components.FeatureCard, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ icon: ("Zap"), title: ("Conexão Local"), description: ("Conecte-se ao seu webhook local enquanto a aba estiver aberta"), }));
    const __VLS_26 = __VLS_25({ icon: ("Zap"), title: ("Conexão Local"), description: ("Conecte-se ao seu webhook local enquanto a aba estiver aberta"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.FeatureCard;
    /** @type { [typeof __VLS_components.FeatureCard, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ icon: ("Lock"), title: ("Privacidade Garantida"), description: ("Todos os posts são apagados após 3 minutos de leitura"), }));
    const __VLS_32 = __VLS_31({ icon: ("Lock"), title: ("Privacidade Garantida"), description: ("Todos os posts são apagados após 3 minutos de leitura"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("mb-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold text-white mb-6 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid md:grid-cols-2 gap-8") }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ to: ("/payment/free"), }));
    const __VLS_38 = __VLS_37({ to: ("/payment/free"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.PlanCard;
    /** @type { [typeof __VLS_components.PlanCard, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ title: ("Plano Grátis"), description: ("Perfeito para começar"), features: ((['50 requisições na API por dia', 'Até 5 posts no webhook por dia', 'Privacidade e segurança padrão'])), price: ("Grátis"), }));
    const __VLS_44 = __VLS_43({ title: ("Plano Grátis"), description: ("Perfeito para começar"), features: ((['50 requisições na API por dia', 'Até 5 posts no webhook por dia', 'Privacidade e segurança padrão'])), price: ("Grátis"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ to: ("/payment/full"), }));
    const __VLS_50 = __VLS_49({ to: ("/payment/full"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.PlanCard;
    /** @type { [typeof __VLS_components.PlanCard, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ title: ("Plano Full"), description: ("Para usuários avançados"), features: ((['50 requisições na API por minuto', '150 posts no webhook por minuto', 'Privacidade e segurança avançadas'])), price: ((__VLS_ctx.price)), isPrimary: (true), }));
    const __VLS_56 = __VLS_55({ title: ("Plano Full"), description: ("Para usuários avançados"), features: ((['50 requisições na API por minuto', '150 posts no webhook por minuto', 'Privacidade e segurança avançadas'])), price: ((__VLS_ctx.price)), isPrimary: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("text-center text-emerald-100") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-36'];
    __VLS_styleScopedClasses['sm:px-10'];
    __VLS_styleScopedClasses['2xl:px-44'];
    __VLS_styleScopedClasses['sml:px-4'];
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
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['md:grid-cols-3'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['mb-16'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['md:grid-cols-3'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['mb-16'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['md:grid-cols-2'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['text-center'];
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
//# sourceMappingURL=HomeView.vue.js.map