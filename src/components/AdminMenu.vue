<template>
    <div class="menu-container">
        <h2 class="menu-title">菜单</h2>
        <div class="aaa">
            当前用户:{{ user.name }}
            <el-button class="botu" @click="submit">
                退出登录
            </el-button>
        </div>
        <div class="menu-item-container">
            <el-menu
                class="el-menu-vertical-demo"
                default-active="1"
                router
            >
                <el-menu-item index="1">
                    <el-icon>
                        <document/>
                    </el-icon>
                    <span>所有图书</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <location/>
                    </el-icon>
                    <span>添加图书</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon>
                        <icon-menu/>
                    </el-icon>
                    <span>删除图书</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting/>
                    </el-icon>
                    <span>借还记录</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <el-icon>
                        <setting/>
                    </el-icon>
                    <span>修改信息</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>

</template>

<script lang="ts" setup>

import {Document, Location, Menu as IconMenu, Setting,} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";

let router = useRouter();
let user = JSON.parse(localStorage.getItem("user"));

function submit() {
    localStorage.removeItem("user");
    router.push('/');
}
</script>

<style>

.menu-container {

    .menu-title {
        width: 100%;
    }

    .menu-item-container {
        width: 70%;
    }
}

.botu {
    margin-left: 30px;
}

.aaa {
    margin: 20px auto;
    padding-left: 10px;
}

</style>