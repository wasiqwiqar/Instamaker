<template>
    <!-- Toggle button component that uses v-model-->
    <div class="flex items-center">
        <div class="relative">
            <span @click="$emit('update:modelValue', !modelValue)">
                <div v-if="modelValue" :class="modelValue">
                    <div class="w-10 h-5 rounded-full shadow-inner" :style="`background: ${bgColor}`"></div>
                    <div class="dot absolute left-5 top-0.5 bg-white w-4 h-4 rounded-full shadow"></div>
                </div>
                <div v-else>
                    <div class="bg-gray-300 w-10 h-5 rounded-full shadow-inner"></div>
                    <div class="dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full shadow"></div>
                </div>
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useGeneralStore } from '../stores/general';
const GeneralStore = useGeneralStore();
const bgColor = computed(() => GeneralStore.styles.bgColor);

defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>