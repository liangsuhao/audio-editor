<template>
    <div>
        index
        <button @click="toLogin">登录</button>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function toLogin(){
    router.push({
        name: 'home'
    })
}
</script>