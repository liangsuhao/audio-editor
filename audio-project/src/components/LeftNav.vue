<template>
    <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
    name: "LeftNav",
    components: {},
    setup() {
        const msg = ref('测试左边');

        return {
            msg
        }
    }
})
</script>

<style lang="scss" scoped>

</style>