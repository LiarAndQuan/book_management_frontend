<template>
    <div class="back">
        <div class="login-container">
            <div class="title">
                欢迎使用图书管理系统
            </div>
            <el-form label-width="80px">
                <el-form-item label="用户名">

                    <el-input v-model=user.username class="input-box" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model=user.password class="input-box" placeholder="密码" show-password></el-input>

                </el-form-item>
                <div>
                    <el-button class="bu" type="primary" @click="login1">登录</el-button>
                </div>
            </el-form>

        </div>
    </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {login} from "@/api/login.ts";
import {useRouter} from "vue-router";

let user = ref({
    username: '',
    password: ''
})
let router = useRouter();

function login1() {
    login(user.value).then(
        (response) => {
            user.value = response.data
            localStorage.setItem('user', JSON.stringify(user.value));
            if (user.value.isAdmin == 1) {
                router.push("/admin/1");
            } else {
                router.push("/user/1");
            }
        }
    )
}

</script>

<style scoped>

.login-container {
    width: 500px;
    height: 300px;
    margin: 300px auto;
    border: black solid 1px;
    border-radius: 10px;
}

.title {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    margin: 30px auto;
}

.bu {
    margin-left: 220px;
    margin-top: 20px;
}

.input-box {
    margin-right: 20px;
}

.back {
    height: 100vh;
    background-image: url("../assets/R.jpg");
    background-size: cover;
    overflow: hidden;
}


</style>