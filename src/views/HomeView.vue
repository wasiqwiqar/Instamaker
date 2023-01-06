<template>
    <page-title title="quick quick quick" />
    <div class="flex justify-center">
        <GeneratedImage />
        <v-card>
            <template #title>
                <h1 class="text-xl font-bold" :style="`color: ${GeneralStore.styles.bgColor};`">Configuration</h1>
            </template>
            <div class="flex justify-between">
                <!-- Background -->
                <div class="flex flex-col p-1">
                    <label class="w-full">Background</label>
                    <input class="my-2 border rounded" type="color" v-model="GeneralStore.styles.bgColor">
                </div>
                <!-- Text Color -->
                <div class="flex flex-col p-1">
                    <label class="w-full">Text</label>
                    <input class="my-2 border rounded" type="color" v-model="GeneralStore.styles.textColor">
                </div>
                <!-- Show Next -->
                <div class="flex flex-col p-1">
                    <label class="w-full">Next Icon</label>
                    <label for="showNext" class="customCheckbox">
                        <toggle-button class="my-2" v-model="GeneralStore.styles.showNext" />
                    </label>
                </div>
            </div>
            <div class="flex justify-between">
                <!-- Text Size -->
                <div class="flex flex-col p-1">
                    <label class="w-full">Text Size</label>
                    <input class="my-2 border rounded p-2" type="number" v-model="GeneralStore.styles.fontSize">
                </div>
                <!-- Text Weights -->
                <div class="flex flex-col p-1">
                    <label class="w-full">Text Weight</label>
                    <select class="my-2 border rounded p-2" v-model="GeneralStore.styles.fontWeight">
                        <option value="normal">Normal</option>
                        <option value="bold">Bold</option>
                        <option value="bolder">Bolder</option>
                        <option value="lighter">Lighter</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                        <option value="900">900</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-col p-1">
                <label class="w-full">Text</label>
                <textarea class="my-2  p-2 border rounded" cols="30" rows="10" v-model="GeneralStore.text"></textarea>
            </div>
            <div class="flex flex-col p-1">
                <label class="w-full">Footer Text</label>
                <input class="my-2 p-2 border rounded" type="text" v-model="GeneralStore.footerText">
            </div>
        </v-card>
    </div>
</template>


<script setup>
import GeneratedImage from '../components/GeneratedImage.vue'
import ToggleButton from '../components/ToggleButton.vue'
import { useGeneralStore } from '../stores/general'
const GeneralStore = useGeneralStore()

</script>