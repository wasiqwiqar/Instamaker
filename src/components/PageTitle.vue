<template>
    <div class="flex flex-column justify-center m-2 no-select">
        <span class="text-xl  p-2 rounded"
            :style="`background: ${GeneralStore.styles.bgColor}; color: ${GeneralStore.styles.textColor}`">
            {{ title }}
        </span>
    </div>
</template>

<script setup>
import { useGeneralStore } from '../stores/general';
const GeneralStore = useGeneralStore();

defineProps({
    title: {
        type: String,
        default: 'Page Title'
    }
})
</script>