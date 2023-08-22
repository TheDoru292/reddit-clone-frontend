<script setup>
    import { 
        mdiShieldOutline,
        mdiMessageOutline,
        mdiBellOutline,
        mdiPlus,
        mdiArrowBottomLeftThinCircleOutline,
        mdiBullhornVariantOutline,
        mdiChevronDown,
        mdiHome,
    } from "@mdi/js";
    import { ref } from "vue";
    import ProfileMenuVue from "./ProfileMenu.vue";

    const action = ref(null);
    const profileMenu = ref(false);
    const profileMenuDiv = ref(null);

    function changeAction(item) {
        action.value = item;
    }
    
    function handleProfileMenu() {
        if (profileMenu.value == true) {
            profileMenu.value = false;
        } else {
            profileMenu.value = true;
        }
    }
    
    const headerButtons = [
        {
            name: "Popular",
            svg: mdiArrowBottomLeftThinCircleOutline,
        },
        {
            name: "Moderation",
            svg: mdiShieldOutline,
        },
        {
            name: "Chat",
            svg: mdiMessageOutline,
        },
        {
            name: "Notification",
            svg: mdiBellOutline,
        },
        {
            name: "Create Post",
            svg: mdiPlus,
        }
    ]
</script>

<template>
    <header class="h-[49px] flex px-4 py-1 w-100 gap-4">
        <div class="flex items-center gap-5">
            <div class="h-full flex items-center justify-center gap-[6px]">
                <div class="bg-orange-400 w-8 h-8 rounded-full"></div>
                <h1 class="font-semibold font-['Noto Sans'] text-xl">reddit</h1>
            </div>
            <div class="flex h-[34px] w-[270px] gap-[6px] items-center cursor-pointer hover:outline outline-1 outline-gray-200 rounded-sm px-2">
                <MdiSvg>{{ mdiHome }}</MdiSvg>
                <p class="font-semibold flex-grow text-base">Home</p>
                <MdiSvg>{{ mdiChevronDown }}</MdiSvg>
            </div>
        </div>
        <div class="flex-grow">
            <input class="w-full h-full rounded-full border border-gray-200 bg-gray-100 px-2" type="text" placeholder="Search Reddit">
        </div>
        <div class="flex self-center items-center h-[32px] gap-2">
            <div
                class="cursor-pointer rounded-sm hover:bg-gray-200 p-1"
                v-for="item in headerButtons"
                @mouseover="changeAction(item.name)"
                @mouseleave="action = null"
            >
                <MdiSvg>{{ item.svg }}</MdiSvg>
                <span class="absolute top-[46px] bg-black text-white px-2 py-[2px] rounded-md text-sm font-bold" v-if="action === item.name">{{ item.name }}</span>
            </div>
            <div class="px-2 flex h-[32px] gap-2 font-bold bg-gray-200 hover:bg-gray-300 text-sm rounded-full items-center cursor-pointer">
                <MdiSvg :width="16">{{ mdiBullhornVariantOutline }}</MdiSvg>
                Advertise
            </div>
        </div>
        <div ref="profileMenuDiv" @click="handleProfileMenu" class="flex items-center gap-[6px] cursor-pointer w-[200px] hover:outline outline-1 outline-gray-200 rounded-sm px-2">
            <div class="w-[24px] h-[24px] bg-red-400 rounded-md"></div>
            <div class="flex flex-grow flex-col text-xs font-medium">
                <p class="font-bold">Jolly</p> 
                <p class="text-gray-400">1 karma</p>
            </div>
            <MdiSvg>{{ mdiChevronDown }}</MdiSvg>
        </div>
    </header>

    <div class="absolute flex flex-col py-3 top-[50px] right-[16px] bottom-[100px] hmd:bottom-[25px] hsm:bottom-0 w-[253px] max-h-[545px] rounded-sm bg-white overflow-auto" v-if="profileMenu">
        <ProfileMenuVue @close="handleProfileMenu" />
    </div>
</template>

<style scoped>
    /* h1 {
        font-family: 'Noto Sans';
        font-size: 19px;
        font-weight: 600;
    } */
</style>
