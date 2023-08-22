<script setup>
    import {
        mdiHome,
        mdiArrowBottomLeftThinCircleOutline,
        mdiChartBoxOutline,
        mdiPlus,
        mdiBellOutline,
        mdiShieldAccountOutline,
        mdiTshirtCrewOutline,
    } from "@mdi/js";
    import {onMounted, ref, defineEmits} from "vue";

    const elementObj = ref();
    const count = ref(0);
    const emit = defineEmits(['close']);

    function handleClick(e) {
        if(count.value != 0 && elementObj.value && !elementObj.value.contains(e.target)) {
            emit('close');
        }

        count.value++;
    }

    onMounted(() => {
        document.addEventListener('click', handleClick)
    })

</script>

<template>
    <div ref="elementObj" class="flex flex-col gap-3">
        <div class="px-6">
            <input class="border w-full px-1 py-0.5 bg-gray-100 text-gray-900" placeholder="Filter"/>
        </div>

        <div class="px-6">
            <p class="text-[12px] uppercase text-gray-600">Favorites</p>
        </div>

        <div>
            <p class="px-6 pb-1 text-[12px] uppercase text-gray-600">Moderating</p>
            <div class="flex flex-col text-[14px] text-gray-900">
                <div class="px-6 py-1.5 hover:bg-gray-100">
                    <p>Mod Queue</p>
                </div>
                <div class="px-6 py-1.5 hover:bg-gray-100">
                    <p>Modmail</p>
                </div>
                <div class="px-6 py-1.5 hover:bg-gray-100">
                    <p>r/Mod</p>
                </div>
            </div>
        </div>

        <div>
            <p class="px-6 pb-1 text-[12px] uppercase text-gray-600">Your communities</p>
        
            <div class="flex flex-col text-[14px] text-gray-900">
                <div class="flex items-center gap-2 px-6 py-2 hover:bg-gray-100">
                    <div class="w-6 h-6 bg-red-400 rounded-full shrink-0"></div>
                    <p class="flex-grow">r/Anime</p>
                    <svg class="w-6 h-6 fill-transparent stroke-black cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
                    </svg>
                </div>
            </div>
        </div>

        <div>
            <p class="px-6 pb-1 text-[12px] uppercase text-gray-600">Feeds</p>

            <div class="flex flex-col text-[14px] text-gray-900">
                <div class="flex items-center gap-2 px-6 py-2 hover:bg-gray-100">
                    <MdiSvg>{{ mdiHome }}</MdiSvg>
                    <p>Home</p>
                </div>
                <div class="flex items-center gap-2 px-6 py-2 hover:bg-gray-100">
                    <MdiSvg>{{ mdiArrowBottomLeftThinCircleOutline }}</MdiSvg>
                    <p>Popular</p>
                </div>
                <div class="flex items-center gap-2 px-6 py-2 hover:bg-gray-100">
                    <MdiSvg>{{ mdiChartBoxOutline }}</MdiSvg>
                    <p>All</p>
                </div>
            </div>
        </div>

        <div>
            <p class="px-6 pb-1 text-[12px] uppercase text-gray-600">Other</p>

            <div class="flex flex-col text-[14px] text-gray-900">
                <div class="flex items-center gap-2 px-6 py-2 hover:bg-gray-100">
                    <div class="w-6 h-6 bg-red-400 rounded-full shrink-0"></div>
                    <p>User Settings</p>
                </div>
                <div class="flex items-center gap-2 px-6 py-2 hover:bg-gray-100">
                    <div class="w-6 h-6 bg-red-400 rounded-full shrink-0"></div>
                    <p>Messages</p>
                </div>
                <div class="flex items-center gap-2 px-6 py-2 hover:bg-gray-100">
                    <MdiSvg>{{ mdiPlus }}</MdiSvg>
                    <p>Create Post</p>
                </div>
                <div class="flex items-center gap-2 px-6 py-2 hover:bg-gray-100">
                    <MdiSvg>{{ mdiBellOutline }}</MdiSvg>
                    <p>Notifications</p>
                </div>
                <div class="flex items-center gap-2 px-6 py-2 hover:bg-gray-100">
                    <MdiSvg>{{ mdiShieldAccountOutline }}</MdiSvg>
                    <p>Premium</p>
                </div>
                <div class="flex items-center gap-2 px-6 py-2 hover:bg-gray-100">
                    <MdiSvg>{{ mdiTshirtCrewOutline }}</MdiSvg>
                    <p>Avatar</p>
                </div>
            </div>
        </div>
    </div>
</template>