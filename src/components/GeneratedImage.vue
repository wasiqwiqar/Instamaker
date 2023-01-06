<template>
    <v-card>
        <template #title>
            <h1 class="text-xl font-bold mb-2" :style="`color: ${GeneralStore.styles.bgColor};`">Result</h1>
        </template>

        <div class="slide p-5 pr-9 flex flex-col justify-center" ref="toDownload" :style="computedSlide">
            <p class="">{{ GeneralStore.text }}</p>
            <div class="footerText" style="`color: ${GeneralStore.styles.textColor}">
                {{ GeneralStore.footerText }}
            </div>
            <div v-if="GeneralStore.styles.showNext" class="arrow"
                :style="`background: ${GeneralStore.styles.textColor}`">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                    <path :fill="GeneralStore.styles.bgColor" d="M20 34V14l10 10Z" />
                </svg>
            </div>
        </div>

        <button class="font-bold my-3 py-2 px-4 rounded hover:brightness-110 float-right"
            :style="`background: ${GeneralStore.styles.bgColor}; color: ${GeneralStore.styles.textColor}`"
            @click.left="GeneralStore.downloadImage(toDownload)">Save</button>
    </v-card>
</template>

<style lang="scss">
.slide {
    width: 100%;
    aspect-ratio: 1/1;
    width: 500px;
    height: 500px;
    overflow: hidden;
    position: relative;

    p {
        white-space: pre-line;
    }

    .footerText {
        font-size: 24px;
        position: absolute;
        bottom: 6px;
        text-align: start;
        padding: 10px;
        font-weight: 600;
    }

    .arrow {
        position: absolute;
        right: 3px;
        border-radius: 50%;
        transform: scale(0.75);
    }
}
</style>

<script setup>
import { ref, computed } from 'vue'
import { useGeneralStore } from '../stores/general'
const GeneralStore = useGeneralStore()
const toDownload = ref(null)



const computedSlide = computed(() => {
    let styles = GeneralStore.styles;

    let base = `background: ${styles.bgColor};`
    base += `color: ${styles.textColor};`
    base += `font-size: ${styles.fontSize}px;`
    base += `font-weight: ${styles.fontWeight};`
    base += `line-height: ${styles.lineHeight};`


    return base
})
</script>