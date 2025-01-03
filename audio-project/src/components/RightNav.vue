<template>
    <h1>{{ msg + count }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
    name: "RightNav",
    components: {},
    setup() {
        const msg = ref('测试右边');

        return {
            msg
        }
    }
})
</script>

<style lang="scss" scoped>

</style>