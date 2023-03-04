<template>
    <div id="main-wrapper">
        <div id="header">
            <div id="heading">
                Request's History <span id="history_count">(95+)</span>
            </div>
            <div id="sorting">
                <!-- das -->
                <select value="Recent First">
                    <option value="recent_first">Recent First</option>
                </select>
            </div>
        </div>
        <div id="content-wrapper">
            <div class="content-row">
                <div>
                    <div>
                        <IconsUser />
                    </div>
                    <div>
                        <div class="name">Teddy Gibbs</div>
                        <div class="role">Gardener</div>
                        <div class="rating_reviews">
                            <div class="ratings">
                                <IconsStar />
                                <IconsStar />
                                <IconsStar />
                                <IconsStar />
                                <IconsStar />
                            </div>
                            <div>
                                5.0
                            </div>
                            <div>
                                (2394 Reviews)
                            </div>
                            <div>

                            </div>
                        </div>
                        <div>$31 to $50</div>
                    </div>
                </div>
                <div>
                    <div>8 Dec 2022 8:00 pm</div>
                    <div>
                        <button class="msg_btn">Message</button>
                        <button class="cancel_btn">Cancel request</button>
                    </div>
                </div>
            </div>

        </div>
        <div id="footer">
            <button>See More +</button>
        </div>
    </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
*::-webkit-scrollbar {
    @apply w-5px;
}

*::-webkit-scrollbar-track {
    @apply bg-primarylight;
}

*::-webkit-scrollbar-thumb {
    @apply bg-primary rounded-xl;
}

#main-wrapper {
    @apply h-full;
    /* @apply p-4; */
    @apply flex flex-col justify-between;
}

#header {
    @apply flex flex-row justify-between;
    @apply px-16;
    @apply pt-10 pb-8;
    /* @apply mb-4; */

    >#heading {
        /* @apply w-32; */
        @apply text-primary text-xl font-medium text-left;
    }

    >#sorting {
        @apply w-32;

        >select {
            @apply w-full;
            @apply text-primary text-sm font-medium text-left;
            /* @apply border-1 border-black; */
            @apply border-none;
            @apply rounded-md;
            @apply px-2;
            @apply py-1;
        }
    }
}

#content-wrapper {
    /* @apply text-cod-gray text-xl font-medium text-left;
    @apply pl-10;
    @apply pt-10 pb-8;
    @apply mb-4; */
    @apply h-full;
    @apply pt-7;
    @apply border-t-1 border-b-1 border-black;
    @apply flex flex-col;
    @apply overflow-y-auto;

    >.content-row {
        @apply flex flex-row justify-between items-center;
        @apply px-14;
        @apply h-[107px];

        >:nth-child(1) {
            @apply h-full;
            @apply flex flex-row justify-start items-center;
            @apply gap-x-4;

            >:nth-child(1) {
                /* Image */
                @apply w-[107px] h-[107px];

                >svg {
                    @apply w-full h-full;
                }
            }

            >:nth-child(2) {
                /* Name and stuff */
                @apply flex flex-col;

                >.name {
                    @apply font-medium text-xl;
                }

                >.role {
                    @apply text-base font-normal;
                }

                >.rating_reviews {
                    @apply text-base;
                    @apply flex flex-row;
                    @apply gap-x-2;

                    >.ratings {
                        @apply flex flex-row items-center;
                        @apply text-sm font-normal;

                        >svg {
                            @apply w-3 h-3;
                            @apply text-primary;
                        }
                    }
                }

                >:nth-child(4) {
                    @apply text-sm font-medium text-dove-gray;
                }
            }
        }

        >:nth-child(2) {
            @apply h-full;
            @apply flex flex-col justify-start items-center;
            @apply gap-y-4;

            >:nth-child(1) {
                @apply text-sm font-medium text-dove-gray;
                @apply w-full;
                @apply text-right;
                @apply pr-1;
            }

            >:nth-child(2) {
                @apply flex flex-row justify-end items-center;
                @apply gap-x-4;

                >button {
                    @apply text-cod-gray text-sm font-normal text-left;
                    @apply border-1;
                    @apply rounded-full;
                    @apply px-4;
                    @apply py-3;
                }

                >.msg_btn {
                    @apply bg-primary;
                    @apply text-white;
                }

                >.cancel_btn {
                    @apply bg-white;
                    @apply border-1 border-black;
                }
            }
        }
    }

}

#footer {
    @apply text-cod-gray text-xl font-medium text-left;
    @apply pl-10;
    @apply pt-10 pb-8;

    /* @apply mb-4; */
    >button {
        @apply text-cod-gray text-sm font-medium text-left;
        @apply border-1;
        @apply rounded-full;
        @apply px-4;
        @apply py-3;
        @apply hover:text-primary hover:bg-primarylight;
    }

}
</style>