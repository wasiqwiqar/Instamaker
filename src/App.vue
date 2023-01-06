<script setup>
import { useGeneralStore } from './stores/general';
const GeneralStore = useGeneralStore();
console.log("[App.vue]", `Hello world from Electron ${process.versions.electron}!`)
</script>

<template>
  <div class="header" :style="`background: ${GeneralStore.styles.bgColor}; color: ${GeneralStore.styles.textColor}`">
    <div class="no-select logo">
      <a href="https://github.com/wasiqwiqar/" class="font-bold text-center" target="_blank">
        <h2>
          Instamaker
        </h2>
      </a>
    </div>
  </div>
  <router-view />
</template>
