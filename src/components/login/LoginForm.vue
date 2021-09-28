<script setup lang="ts">
import { IUserLoginForm } from "/@/model/views/login";
import { useRouter } from "vue-router";
const privateRouter = useRouter();

const loginForm: IUserLoginForm = {
  userName: "",
  password: ""
};

// 登录
function onLogin() {
  privateRouter.push({
    path: "/dashboard"
  });
}
</script>

<template>
  <div class="user-form form-position form-card">
    <el-form :model="loginForm" label-width="80px">
      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="loginForm.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="text" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" class="w100" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
    <!-- <div class="form-button">
      <el-button type="primary" class="login-button" @click="onLogin">登录</el-button>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.user-form {
  width: 400px;
  height: 400px;
  padding: 20px;
  background: $color-white;
  .form-button {
    text-align: center;
    .login-button {
      width: 150px;
    }
  }
}
.form-position {
  position: absolute;
  top: 20%;
  right: 10%;
}
.form-card {
  border-radius: $border-radius-sm;
  box-shadow: $box-shadow;
}
</style>
