<template>
    <div class="layout-container">
        <div class="slide">
            <AdminMenu></AdminMenu>
        </div>
        <div class="main">
            <div class="header">
                当前用户:&nbsp;&nbsp;{{ user.name }}
                <el-button class="logout" @click="submit">
                    登出
                </el-button>
            </div>
            <div class="main-container">
                <router-view>

                </router-view>
            </div>

        </div>
    </div>

</template>

<script lang="ts" setup>

import AdminMenu from "@/components/AdminMenu.vue";
import {useRouter} from "vue-router";

let router = useRouter();
let user = JSON.parse(localStorage.getItem("user"));

function submit() {
    localStorage.removeItem("user");
    router.push('/');
}

</script>

<style scoped>
.layout-container {

    display: flex;
    height: 100vh;

    .slide {

        width: 20%;

    }

    .main {
        width: 80%;

        .main-container {
            margin: 50px auto;
        }

        padding-left: 100px;
    }
}

.header {
    padding-left: 800px;
    margin-top: 40px;
}

</style>