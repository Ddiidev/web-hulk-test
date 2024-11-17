<template>
    <div class="min-h-screen">
        <div class="container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4 py-16">
            <header class="text-center mb-20">
                <div class="flex justify-center mb-6">
                    <img src="../assets/LogoWebHulkTest.PNG" alt="WebHulk Test Logo" width="200" height="200"
                        class="h-auto" />
                </div>
                <h1 class="text-4xl font-bold text-white mb-4">Webhook Test Service</h1>
                <p class="text-xl text-emerald-100 max-w-3xl mx-auto mb-12">
                    O WebHulkTest é a solução ideal para desenvolvedores que necessitam testar APIs que respondem de
                    forma
                    assíncrona através de webhooks.
                </p>
                <div class="grid md:grid-cols-3 gap-8">
                    <InfoCard icon="Code" title="Para Desenvolvedores"
                        description="Projetado para cenários em que você ainda não possui um serviço próprio em produção e está realizando testes em ambiente local." />
                    <InfoCard icon="Webhook" title="Teste de Webhooks"
                        description="Simule e valide respostas de webhook de plataformas como Stripe, PayPal e outras APIs assíncronas." />
                    <InfoCard icon="Shield" title="Ambiente Seguro"
                        description="Oferece um ambiente seguro e eficiente para testar, acelerando seu processo de desenvolvimento e testes." />
                </div>
            </header>
            <section class="mb-16">
                <h2 class="text-2xl font-semibold text-white mb-6 text-center">Recursos Principais</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <FeatureCard icon="Globe" title="API Flexível"
                        description="Faça requisições para verificar o status do seu webhook" />
                    <FeatureCard icon="Zap" title="Conexão Local"
                        description="Conecte-se ao seu webhook local enquanto a aba estiver aberta" />
                    <FeatureCard icon="Lock" title="Privacidade Garantida"
                        description="Todos os posts são apagados após 3 minutos de leitura" />
                </div>
            </section>
            <section class="mb-16">
                <h2 class="text-2xl font-semibold text-white mb-6 text-center">Nossos Planos</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <RouterLink to="/payment/free">
                        <PlanCard title="Plano Grátis" description="Perfeito para começar"
                            :features="['50 requisições na API por dia', 'Até 5 posts no webhook por dia', 'Privacidade e segurança padrão']"
                            price="Grátis" />
                    </RouterLink>

                    <RouterLink to="/payment/full">
                        <PlanCard title="Plano Full" description="Para usuários avançados"
                            :features="['50 requisições na API por minuto', '150 posts no webhook por minuto', 'Privacidade e segurança avançadas']"
                            :price="price" isPrimary />
                    </RouterLink>
                </div>
            </section>
            <footer class="text-center text-emerald-100">
                <p>&copy; 2024 WebHulkTest Test Service. Todos os direitos reservados.</p>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InfoCard from '@/components/InfoCard.vue';
import FeatureCard from '@/components/FeatureCard.vue';
import PlanCard from '@/components/PlanCard.vue';
import { RouterLink } from 'vue-router'

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
        getUserCountry(): void {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition, this.handleError);
            } else {
                console.error("Geolocalização não é suportada por este navegador.");
            }
        },

        handleError(error: GeolocationPositionError): void {
            console.error(`ERROR(${error.code}): ${error.message}`);
        },

        showPosition(position: GeolocationPosition): void {
            const latitude: number = position.coords.latitude;
            const longitude: number = position.coords.longitude;

            const country = localStorage.getItem('country');
            if (country){
                this.setPrice(country)
                return;
            }

            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                .then((response) => response.json())
                .then((data) => {
                    const country: string = data?.address.country;
                    localStorage.setItem('country', country);
                    this.setPrice(country);
                })
                .catch((error) => {
                    debugger;
                    console.error('Erro ao obter o país:', error);
                });
        },

        setPrice(country: string): void {
            if (country === "Brasil") {
                this.price = "R$ 5 BRL";
            } else if (country === "Argentina") {
                this.price = "$ 1,50 USD";
            } else {
                this.price = "$ 5 USD";
            }
        }
    }
});
</script>

<style scoped></style>