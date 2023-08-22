<script setup>
    import {
        mdiAccountCircle,
        mdiEyeOutline,
        mdiCash,
        mdiShieldAccountOutline,
        mdiCompass,
        mdiHelpCircle,
        mdiPlus,
        mdiInformation,
        mdiBookOpenBlankVariant,
        mdiLogoutVariant,
        mdiBullhornVariantOutline
    } from "@mdi/js";
    import { onMounted, ref, onUnmounted, defineEmits, defineProps} from "vue";

    const objRef = ref();
    const count = ref(0);
    const emit = defineEmits(['close']);

    function handleClick(e) {
        if(count.value != 0 && objRef.value && !objRef.value.contains(e.target)) {
            emit('close');
        }

        count.value++;
    }

    onMounted(() => {
        document.addEventListener("click", handleClick);
    });

</script>

<template>
    <div ref="objRef">
        <div class="flex items-center gap-2 text-gray-500 h-[40px] px-4">
            <MdiSvg>{{ mdiAccountCircle }}</MdiSvg>
            <p class="font-bold text-sm">My Stuff</p>
        </div>
        <div class="flex flex-col border-b pb-[12px] mb-[12px]">
            <div class="flex items-center text-sm font-bold pl-12 pr-4 h-[40px] hover:bg-gray-100">
                <p>Online Status</p>
            </div>
            <div class="flex items-center text-sm font-bold pl-12 pr-4 h-[40px] hover:bg-gray-100">
                <p>Profile</p>
            </div>
            <div class="flex items-center text-sm font-bold pl-12 pr-4 h-[40px] hover:bg-gray-100">
                <p>Create Avatar</p>
            </div>
            <div class="flex items-center text-sm font-bold pl-12 pr-4 h-[40px] hover:bg-gray-100">
                <p>User Settings</p>
            </div>
            </div>
        <div class="flex items-center gap-2 text-gray-500 h-[40px] px-4">
            <MdiSvg>{{ mdiEyeOutline }}</MdiSvg>
            <p class="font-bold text-sm">View Options</p>
        </div>
        <div class="flex flex-col border-b pb-[12px] mb-[12px]">
            <div class="flex items-center text-sm font-bold pl-12 pr-4 h-[40px] hover:bg-gray-100">
                <p>Mod View</p>
            </div>
            <div class="flex items-center text-sm font-bold pl-12 pr-4 h-[40px] hover:bg-gray-100">
                <p>Dark Mode</p>
            </div>
        </div>
        <div class="flex flex-col border-b pb-[12px] mb-[12px] overflow-y-auto">
            <div class="flex items-center text-sm font-bold gap-2 px-4 h-[40px] hover:bg-gray-100">
                <MdiSvg>{{ mdiPlus }}</MdiSvg>
                <p class="font-bold text-sm">Create a Community</p>
            </div>
            <div class="flex items-center text-sm font-bold gap-2 px-4 h-[40px] hover:bg-gray-100">
                <MdiSvg>{{ mdiBullhornVariantOutline }}</MdiSvg>
                <p class="font-bold text-sm">Advertise on Reddit</p>
            </div>
            <div class="flex items-center text-sm gap-2 px-4 h-[40px] hover:bg-gray-100">
                <MdiSvg>{{ mdiCash }}</MdiSvg>
                <div class="flex flex-col">
                    <p class="font-bold text-sm">Coins</p>
                    <p class="text-xs">0 coins</p>
                </div>
            </div>
            <div class="flex items-center text-sm font-bold gap-2 px-4 h-[40px] hover:bg-gray-100">
                <MdiSvg>{{ mdiShieldAccountOutline }}</MdiSvg>
                <p class="font-bold text-sm">Premium</p>
            </div>
            <div class="flex items-center text-sm font-bold gap-2 px-4 h-[40px] hover:bg-gray-100">
                <MdiSvg>{{ mdiCompass }}</MdiSvg>
                <p class="font-bold text-sm">Explore</p>
            </div>
            <div class="flex items-center text-sm font-bold gap-2 px-4 h-[40px] hover:bg-gray-100">
                <MdiSvg>{{ mdiHelpCircle }}</MdiSvg>
                <p class="font-bold text-sm">Help Center</p>
            </div>
            <div class="flex items-center text-sm font-bold gap-2 px-4 h-[40px] hover:bg-gray-100">
                <MdiSvg>{{ mdiInformation }}</MdiSvg>
                <p class="font-bold text-sm">More</p>
            </div>
            <div class="flex items-center text-sm font-bold gap-2 px-4 h-[40px] hover:bg-gray-100">
                <MdiSvg>{{ mdiBookOpenBlankVariant }}</MdiSvg>
                <p class="font-bold text-sm">Terms of Service</p>
            </div>
            </div>
            <div class="flex items-center text-sm font-bold gap-2 px-4 h-[40px] hover:bg-gray-100">
                <MdiSvg>{{ mdiLogoutVariant }}</MdiSvg>
                <p class="font-bold text-sm">Log out</p>
            </div>
        </div>
</template>

<style scoped>

</style>