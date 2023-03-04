<template>
    <div id="main-wrapper">
        <!-- <div id="background-image"> -->
        <img src="./help_support.png" id="background-image" alt="" srcset="">
        <!-- </div> -->
        <div class="fixed bottom-32 right-44">
            <IconsChatnow />
        </div>
        <div id="content-wrapper">
            <div id="heading_description">
                <div>Help & Support</div>
                <div>How can we help you?</div>
            </div>
            <div id="slider">
                <div id="left-arrow">
                    <IconsArrowleft />
                </div>
                <div id="slider-block-wrapper">
                    <div class="slider-block">
                        <IconsRocket />
                        <div id="heading">How Find24 works</div>
                        <div id="description">Getting Started,What services can I get?</div>
                    </div>
                    <div class="slider-block">
                        <IconsFind />
                        <div id="heading">Finding sellers</div>
                        <div id="description">Find by map, What services can I get?</div>
                    </div>
                    <div class="slider-block">
                        <IconsMoneyhand />
                        <div id="heading">Payments</div>
                        <div id="description">Secure Payment Processing, Multi-Currency Support</div>
                    </div>
                </div>
                <div id="right-arrow">
                    <IconsArrowright />
                </div>
            </div>
            <div id="faq-section">
                <div id="heading">
                    Frequently Asked Questions
                </div>
                <div id="faq">
                    <template v-for="faq in faqs">
                        <Disclosure v-slot="{ open }">
                            <DisclosureButton id="faq_question">
                                <span :class="open ? 'text-primary' : ''">
                                    {{ faq.question }}
                                </span>
                                <IconsArrowright :class="open ? '-rotate-90 transform' : 'rotate-90 transform'" />
                            </DisclosureButton>
                            <DisclosurePanel id="faq_answer">
                                {{ faq.answer }}
                            </DisclosurePanel>
                        </Disclosure>
                    </template>
                </div>
            </div>
            <div id="footer">
                <div id="images">
                    <IconsUser />

                    <IconsUser />
                    <IconsUser />
                </div>
                <div id="heading">Still have questions?</div>
                <div id="description">Can’t find the answers you are looking for? Chat to our friendly team</div>
                <button id="support_btn">Contact Support</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const faqs = [
    {
        id: 1,
        question: 'How does find24 ensure quality of work from freelancers?',
        answer: 'Find24 ensures quality of work from freelancers by providing clients with the ability to review freelancers\' profiles, work history, and ratings before hiring them. The platform also offers a dispute resolution process in case of any issues with the work delivered. Clients can leave feedback and ratings for freelancers, which helps other clients make informed decisions when hiring.'
    },
    {
        id: 2,
        question: 'How does find24 handle payments and transactions?',
        answer: 'Find24 handles payments and transactions through its secure payment system. Once a freelancer is hired for a project, the client places the funds for the project in escrow, and the funds are released to the freelancer once the project is completed and approved by the client. Find24 charges a small fee for each transaction to cover its operational costs.',
    },
    {
        id: 3,
        question: 'How do I find a freelancer for my project?',
        answer: 'To find a freelancer on a freelancing website, sign up for an account and post your project with details. Review proposals and choose a freelancer to work with, communicate and pay through the secure payment system. Finally, review and provide feedback after the project is completed.',
    },
    {
        id: 4,
        question: 'How do I communicate with a freelancer on Find24?',
        answer: 'To communicate with a freelancer on Find24, you can use the messaging system provided on the platform. Simply go to the project page and click on the "Messages" tab to send a message to the freelancer. You can discuss project details, ask questions, and share files through this system.',
    },
    {
        id: 5,
        question: 'How do I cancel a project on Find24?',
        answer: 'To cancel a project on Find24, log in to your account and go to the project page. From there, click on the "Cancel Project" button, and follow the prompts to confirm the cancellation. Keep in mind that there may be penalties or fees associated with cancelling a project, depending on the terms and conditions of the project agreement.',
    },
    {
        id: 6,
        question: 'How does find24 protect my personal and financial information?',
        answer: 'Find24 takes the security and privacy of its users very seriously. The platform uses SSL encryption to protect all user data and ensures that financial information is never shared with third parties. In addition, Find24 only accepts payment through trusted payment providers to ensure safe and secure transactions.',
    },
];
</script>
<style lang="postcss" scoped>
*::-webkit-scrollbar {
    @apply w-1;
}

*::-webkit-scrollbar-track {
    @apply bg-gray-100;
}

*::-webkit-scrollbar-thumb {
    @apply bg-gray-300 rounded-xl;
}

#main-wrapper {
    @apply h-full w-full;
    @apply flex flex-col justify-start;
    @apply relative;
    @apply z-10;
    @apply overflow-y-auto;

    #background-image {
        @apply absolute;
        @apply top-0;
        @apply right-0;
        @apply h-72;
        @apply w-full;

        @apply bg-opacity-50;
        @apply z-20;
    }

    #content-wrapper {
        @apply flex flex-col items-center;
        @apply z-20;

        >#heading_description {
            @apply pt-10;
            @apply rounded-tr-4xl text-center;

            >:nth-child(1) {
                @apply text-[40px];
                @apply font-bold;
                @apply text-white;
            }

            >:nth-child(2) {
                @apply text-base;
                @apply text-white;
            }
        }

        >#slider {
            @apply flex flex-row justify-between items-center;
            @apply w-full;
            @apply h-72;
            @apply gap-x-16;
            @apply mt-14;
            @apply rounded-tr-4xl;
            @apply px-14;
            @apply bg-transparent;

            >#slider-block-wrapper {
                @apply flex flex-row justify-between items-center;
                @apply gap-x-10;
                @apply w-full;
                @apply h-full;

                >.slider-block {
                    @apply flex flex-col items-center;
                    @apply pt-12 pb-12 px-6;
                    @apply w-[280px];
                    @apply h-[280px];
                    @apply bg-white;
                    @apply rounded-3xl;
                    @apply shadow-xl;
                    @apply hover:text-primary;

                    >svg {
                        @apply w-[74px];
                        @apply h-[72px];
                        @apply mb-6;
                    }

                    >#heading {
                        @apply text-xl font-medium text-black;
                        @apply mb-2;
                    }

                    >#description {
                        @apply text-base text-center text-dove-gray;
                    }
                }
            }

        }

        #faq-section {
            @apply w-full;
            @apply px-[136px];
            @apply mt-14;
            @apply flex flex-col items-center;

            >#heading {
                @apply text-4xl;
                @apply font-medium;
            }

            >#faq {
                @apply flex flex-col items-center;
                @apply w-full;
                @apply mt-8;

                >#faq_question {
                    @apply w-full h-20;
                    @apply pb-4;
                    @apply flex flex-row justify-between items-center;
                    @apply text-xl font-medium;
                    @apply border-b border-gray-300;

                    >svg {
                        @apply text-dove-gray w-4 h-4;
                    }
                }

                >#faq_answer {
                    @apply w-full;
                    @apply text-base text-dove-gray;
                    @apply pt-4 pb-4;
                }

            }
        }

        #footer {
            @apply h-full w-full;
            @apply flex flex-col justify-between items-center;
            @apply gap-x-14;
            @apply pl-32 pr-32 mt-14 mb-20;

            >#images {
                @apply flex flex-row justify-center items-center;
                @apply h-20 w-full;

                >svg {
                    @apply w-[72px] h-[72px];
                }
            }

            >#heading {
                @apply text-2xl;
                @apply font-medium;
            }

            >#description {
                @apply text-base text-dove-gray;
                @apply mb-2;
            }

            >#support_btn {
                @apply w-44;
                @apply h-14;
                @apply bg-primary;
                @apply rounded-3xl;
                @apply flex flex-row justify-center items-center;
                @apply text-white;
                @apply font-medium;
                @apply text-base;
            }
        }
    }
}
</style>