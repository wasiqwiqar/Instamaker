<template>
    <div class="m-2 border p-3 rounded flex flex-col">
        <div class="text-xl font-bold mb-2" :style="`color: ${GeneralStore.styles.bgColor};`">
            <slot name="title" />
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>
import { useGeneralStore } from '../stores/general';
const GeneralStore = useGeneralStore();
</script>