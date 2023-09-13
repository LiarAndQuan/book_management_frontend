<template>
    <div class="layout-container">
        <div class="slide">
            <AdminMenu></AdminMenu>
        </div>
        <div class="main">
            <div class="main-container">
                <router-view>

                </router-view>
            </div>

        </div>
    </div>

</template>

<script lang="ts" setup>

import AdminMenu from "@/components/AdminMenu.vue";
</script>

<style scoped>
.layout-container {

    display: flex;
    height: 100vh;

    .slide {
        margin: 70px auto;
        width: 20%;

        flex-wrap: wrap;

    }

    .main {
        width: 80%;

        .main-container {
            margin: 100px auto;
        }
    }
}


</style>