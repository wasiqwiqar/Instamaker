import { defineStore } from "pinia";
import { ref, watch, onMounted } from "vue";
import html2canvas from "html2canvas";

export const useGeneralStore = defineStore('general', () => {
    const text = ref('Hello World');
    const footerText = ref(`Footer Text © ${new Date().getFullYear()}`);

    const styles = ref({
        fontSize: 72,
        fontWeight: "800",
        textColor: '#ffffff',
        textAlignment: 'left',
        bgColor: '#FF7575',
        lineHeight: 1,
        showNext: true,
    })

    // deep watch styles and save to localstorage
    watch(styles, (val) => {
        localStorage.setItem('styles', JSON.stringify(val));
    }, { deep: true });

    // load styles from localstorage
    onMounted(() => {
        const stylesFromStorage = localStorage.getItem('styles');
        if (stylesFromStorage) {
            styles.value = JSON.parse(stylesFromStorage);
        }
    });

    // watch text and save to localstorage
    watch(text, (val) => {
        localStorage.setItem('text', val);
    });

    watch(footerText, (val) => {
        localStorage.setItem('footerText', val);
    });

    // load text from localstorage
    onMounted(() => {
        const textFromStorage = localStorage.getItem('text');
        if (textFromStorage) {
            text.value = textFromStorage;
        }

        const footerTextFromStorage = localStorage.getItem('footerText');
        if (footerTextFromStorage) {
            footerText.value = footerTextFromStorage;
        }
    });


    function downloadImage(el, name = 'slide.png') {
        html2canvas(el, { scale: 3 }).then(canvas => {
            const a = document.createElement('a');
            a.href = canvas.toDataURL("image/png");
            a.download = name;
            a.click();
        });
    }
    return {
        footerText, text, styles, downloadImage
    }
});