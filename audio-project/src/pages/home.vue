<template>
    <div>
        <div class="">
            <audio controls :src="audioSrc" />
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent, reactive, toRefs, onMounted } from 'vue'

    export default defineComponent({
        name: "home",
        components: {},
        setup() {
            const state = reactive({
                audioSrc: new URL('../assets/audio/11.wav', import.meta.url).href ,
            })

            onMounted(()=>{
                loadFile();
            })

            const loadFile = async () => {
                await fetch(state.audioSrc).then((response)=>response.blob()).then((res) => {
                    let blob = new Blob([res]);
                    console.log("lsh", blob);
                })
            }

            return {
                ...toRefs(state)
            }
        }

        
    })
</script>