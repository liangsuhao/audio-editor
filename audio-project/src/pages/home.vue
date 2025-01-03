<template>
    <div class="main">
        <!-- <div class="">
            <audio controls :src="audioSrc" />
        </div> -->
        <user-title></user-title>
        <div class="content">
            <left-nav></left-nav>
            <right-nav></right-nav>
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent, reactive, toRefs, onMounted } from 'vue'
    import UserTitle from "../components/UserTitle.vue";
    import LeftNav from "../components/LeftNav.vue";
    import RightNav from "../components/RightNav.vue";

    export default defineComponent({
        name: "home",
        components: {
            UserTitle,
            LeftNav,
            RightNav
        },
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

<style lang="scss" scoped>
    .main {
        height: 100%;
        width: 100%;
        background-color: #4B5563;
    }
</style>