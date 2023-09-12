<template>
    <div class="layout-container">
        <div class="slide">
            <Menu></Menu>
        </div>
        <div class="main">
            <router-view>

            </router-view>
        </div>
    </div>

</template>

<script setup lang="ts">

import Menu from "@/components/Menu.vue";

</script>

<style scoped>
.layout-container {
    display: flex;
    height: 100vh;

    .slide {
        width: 30%;
        flex-direction: row-reverse;
        flex-wrap: wrap;
    }

    .main {
        width: 70%;
    }
}


</style>