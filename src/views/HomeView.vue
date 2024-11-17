<template>
    <div class="min-h-screen">
        <div class="py-16">
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

                <section class="container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4">
                    <div class="grid md:grid-cols-3 gap-8">
                        <InfoCard icon="Code" title="Para Desenvolvedores"
                            description="Projetado para cenários em que você ainda não possui um serviço próprio em produção e está realizando testes em ambiente local." />
                        <InfoCard icon="Webhook" title="Teste de Webhooks"
                            description="Simule e valide respostas de webhook de plataformas como Stripe, PayPal e outras APIs assíncronas." />
                        <InfoCard icon="Shield" title="Ambiente Seguro"
                            description="Oferece um ambiente seguro e eficiente para testar, acelerando seu processo de desenvolvimento e testes." />
                    </div>
                </section>
            </header>


            <section
                class="bg-gradient-to-br from-emerald-900 to-emerald-1000 border-b border-t border-emerald-600 py-16">
                <div class="mb-16 container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4">
                    <h2 class="text-2xl font-semibold text-white mb-6 text-center">Recursos Principais</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <FeatureCard icon="Globe" title="API Flexível"
                            description="Faça requisições para verificar o status do seu webhook" />
                        <FeatureCard icon="Zap" title="Conexão Local"
                            description="Conecte-se ao seu webhook local enquanto a aba estiver aberta" />
                        <FeatureCard icon="Lock" title="Privacidade Garantida"
                            description="Todos os posts são apagados após 3 minutos de leitura" />
                    </div>
                </div>
            </section>



            <section class="mb-16 container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4 pt-16">
                <h2 class="text-2xl font-semibold text-white mb-6 text-center">Como funciona!</h2>
                <div class="flex items-center grid md:grid-cols-2">
                    <img src="@/assets/WebHulkTest.svg"
                        class="rounded rounded-lg border border-emerald-600 cursor-zoom-in"
                        @click="openModal('image', '@/assets/WebHulkTest.svg')"
                        style="width: 85%; height: auto; object-fit: cover; ">

                    <video autoplay loop muted playsinline
                        class="rounded rounded-lg border border-emerald-600 ml-4 cursor-zoom-in"
                        @click="openModal('video', '@/assets/WebHulkTestDashboard.mp4')"
                        style="width: 97%; height: auto; object-fit: cover;">
                        <source src="@/assets/WebHulkTestDashboard.mp4" type="video/mp4">
                    </video>
                </div>

                <p class="text-lg text-emerald-100 mt-4">
                    Você pode receber suas mensagens de duas maneiras:
                </p>
                <ol class="list-decimal list-inside text-lg text-emerald-100 mt-2">
                    <li>
                        <strong>Webhook Local:</strong> Implemente um webhook local (com exemplos prontos
                        disponíveis) e configure no WebHulkTest. Enquanto a aba do navegador estiver aberta, todas
                        as mensagens recebidas serão direcionadas para seu webhook local, proporcionando um teste
                        semelhante ao ambiente de produção.
                    </li>
                    <li>
                        <strong>Requisição GET:</strong> Realize uma requisição GET simples à WebHulkTestApi para
                        receber todas as novas mensagens. Este método é mais limitado, pois os dados serão agrupados
                        em uma lista e enviados em uma única resposta, porém é mais simples e te dá um
                        possibilidades de fazer qualquer coisa com WebHulkTest, muito além da proposta inicial.
                    </li>
                </ol>
            </section>


            <section
                class="bg-gradient-to-br from-emerald-900 to-emerald-1000 border-b border-t border-emerald-600 pt-16">
                <div class="mb-16 container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4">
                    <h2 class="text-2xl font-semibold text-white mb-6 text-center">Nossos Planos</h2>
                    <div class="grid md:grid-cols-2 gap-8">
                        <PlanCard title="Plano Grátis" description="Perfeito para começar"
                            :features="['50 requisições na API por dia', 'Até 5 posts no webhook por dia', 'Privacidade e segurança padrão']"
                            price="Grátis" plan="free" />

                        <PlanCard title="Plano Full" description="Para usuários avançados"
                            :features="['50 requisições na API por minuto', '150 posts no webhook por minuto', 'Privacidade e segurança avançadas']"
                            :price="price" plan="full" :isLoading="isLoading" isPrimary />
                    </div>
                </div>
            </section>


            <footer class="text-center text-emerald-100">
                <p>&copy; 2024 WebHulkTest Test Service. Todos os direitos reservados.</p>
            </footer>
        </div>
    </div>


    <div v-if="isModalOpen" class="modal" @click="closeModal">
        <span class="close" @click="closeModal">&times;</span>
        <template v-if="modalType === 'image'">
            <img class="rounded rounded-lg border border-emerald-600 ml-4 modal-content"
                src="@/assets/WebHulkTest.svg" />
        </template>
        <template v-else-if="modalType === 'video'">
            <video class="rounded rounded-lg border border-emerald-600 ml-4 modal-content" autoplay loop muted
                playsinline>
                <source src="@/assets/WebHulkTestDashboard.mp4" type="video/mp4">
                Seu navegador não suporta a tag de vídeo.
            </video>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import InfoCard from '@/components/InfoCard.vue';
import FeatureCard from '@/components/FeatureCard.vue';
import PlanCard from '@/components/PlanCard.vue';
import { RouterLink } from 'vue-router'
// import WebHulkTestApresentation from '@/assets/WebHulkTestApresentation.vue';

export default defineComponent({
    name: 'LandingPage',
    components: {
        InfoCard,
        FeatureCard,
        PlanCard
    },
    setup() {
        const isModalOpen = ref(false);
        const modalSrc = ref('');
        const modalType = ref('');

        const openModal = (type: string, src: string) => {
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
            price: '$ 5 ',
            isLoading: ref(false)
        };
    },
    mounted() {
        this.getUserCountry();
    },
    methods: {
        getUserCountry(): void {
            this.isLoading = true;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition, this.handleError);
            } else {
                console.error("Geolocalização não é suportada por este navegador.");
            }
        },

        handleError(error: GeolocationPositionError): void {
            console.error(`ERROR(${error.code}): ${error.message}`);
            this.isLoading = false;
        },

        showPosition(position: GeolocationPosition): void {
            const latitude: number = position.coords.latitude;
            const longitude: number = position.coords.longitude;

            const country = localStorage.getItem('country');
            if (country) {
                this.setPrice(country)
                this.isLoading = false;
                return;
            }

            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                .then((response) => response.json())
                .then((data) => {
                    const country: string = data?.address.country;
                    localStorage.setItem('country', country);
                    this.setPrice(country);

                    this.isLoading = false;
                })
                .catch((error) => {
                    console.error('Erro ao obter o país:', error);
                    this.isLoading = true;
                });
        },

        setPrice(country: string): void {
            if (country === "Brasil") {
                this.price = "R$ 5 BRL";
            } else {
                this.price = "$ 5 USD";
            }
        }
    }
});
</script>

<style scoped>
.modal {
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
}

.modal-content {
    max-width: 90%;
    max-height: 90%;
}

.close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: white;
    font-size: 40px;
    cursor: pointer;
}
</style>