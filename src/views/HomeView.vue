<template>

    <Navbar />

    <div class="min-h-screen pt-10">

        <div class="py-16">
            <header class="text-center mb-20">
                <div class="flex justify-center mb-6">
                    <img src="../assets/LogoWebHulkTest.PNG" alt="WebHulk Test Logo" width="200" height="200"
                        class="h-auto" />
                </div>

                <h1 class="text-4xl font-bold text-white mb-4">Webhook Test</h1>
                <p class="text-xl text-emerald-100 max-w-3xl mx-auto mb-12">
                    {{ $t('homeView.subTitle') }}
                </p>

                <section class="container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4">
                    <div class="grid md:grid-cols-3 gap-8">
                        <InfoCard icon="Code" :title="$t('homeView.sectionInfoCard.forDev.title')"
                            :description="$t('homeView.sectionInfoCard.forDev.content')" />

                        <InfoCard icon="Webhook" :title="$t('homeView.sectionInfoCard.testFromWebHooks.title')"
                            :description="$t('homeView.sectionInfoCard.testFromWebHooks.content')" />

                        <InfoCard icon="Shield" :title="$t('homeView.sectionInfoCard.safeEnviroment.title')"
                            :description="$t('homeView.sectionInfoCard.safeEnviroment.content')" />
                    </div>
                </section>
            </header>

            <section
                class="bg-gradient-to-br from-emerald-900 to-emerald-1000 border-b border-t border-emerald-600 py-16">
                <div class="mb-16 container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4">
                    <h2 class="text-2xl font-semibold text-white mb-6 text-center">{{
                        $t('homeView.sectionResourcePrincipal.title') }}</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <FeatureCard icon="Globe" :title="$t('homeView.sectionResourcePrincipal.API.title')"
                            :description="$t('homeView.sectionResourcePrincipal.API.content')" />

                        <FeatureCard icon="Zap" :title="$t('homeView.sectionResourcePrincipal.connectionLocal.title')"
                            :description="$t('homeView.sectionResourcePrincipal.connectionLocal.content')" />

                        <FeatureCard icon="Lock"
                            :title="$t('homeView.sectionResourcePrincipal.privacyGuaranteed.title')"
                            :description="$t('homeView.sectionResourcePrincipal.privacyGuaranteed.content')" />
                    </div>
                </div>
            </section>



            <section class="mb-16 container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4 pt-16">
                <h2 class="text-2xl font-semibold text-white mb-6 text-center">
                    {{ $t('homeView.sectionHowWorking.title') }}</h2>
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
                    {{ $t('homeView.sectionHowWorking.subTitle') }}:
                </p>
                <ol class="list-decimal list-inside text-lg text-emerald-100 mt-2">
                    <li>
                        <strong>{{ $t('homeView.sectionHowWorking.msgWebhookLocal.point') }}:</strong>
                        {{ $t('homeView.sectionHowWorking.msgWebhookLocal.content') }}
                    </li>
                    <li>
                        <strong>{{ $t('homeView.sectionHowWorking.msgRequestGET.point') }}:</strong>
                        {{ $t('homeView.sectionHowWorking.msgRequestGET.content') }}
                    </li>
                </ol>
            </section>


            <section
                class="bg-gradient-to-br from-emerald-900 to-emerald-1000 border-b border-t border-emerald-600 pt-16">
                <div class="mb-16 container mx-auto px-36 sm:px-10 2xl:px-44 sml:px-4">
                    <h2 class="text-2xl font-semibold text-white mb-6 text-center">{{
                        $t('homeView.sectionOurPlans.title') }}</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <PlanCard :title="$t('homeView.sectionOurPlans.planBasic.title')"
                            :description="$t('homeView.sectionOurPlans.planBasic.subTitle')"
                            :features="($tm('homeView.sectionOurPlans.planBasic.benefits') as any[])"
                            :price="priceBasic" :isLoading="isLoading" plan="basic" />

                        <PlanCard :title="$t('homeView.sectionOurPlans.planIntermediate.title')"
                            :description="$t('homeView.sectionOurPlans.planIntermediate.subTitle')"
                            :features="($tm('homeView.sectionOurPlans.planIntermediate.benefits') as any[])" :price="priceIntermediate"
                            plan="intermediate" :isLoading="isLoading" isPrimary isOutline />

                        <PlanCard :title="$t('homeView.sectionOurPlans.planFull.title')"
                            :description="$t('homeView.sectionOurPlans.planFull.subTitle')"
                            :features="($tm('homeView.sectionOurPlans.planFull.benefits') as any[])" :price="priceFull"
                            plan="full" :isLoading="isLoading" isPrimary />
                    </div>
                </div>
            </section>


            <footer class="text-center text-emerald-100">
                <p>{{ $t('homeView.footer') }}</p>
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
            </video>
        </template>
    </div>
</template>

<script lang="ts">
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
                this.priceBasic = 'R$ 5 BRL'
                this.priceIntermediate = "R$ 7 BRL";
                this.priceFull = "R$ 10 BRL";
            } else {
                this.priceBasic = '$ 5 USD'
                this.priceIntermediate = "$ 7 USD";
                this.priceFull = "$ 10 USD";
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