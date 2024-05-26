<template>
  <div class="app">
    <!--   导航区 -->
    <Header/>
    <div class="navigate">
      <!--      <a href="" class="active">首页</a>-->
      <!--      <a href="">新闻</a>-->
      <!--      <a href="">关于</a>-->
      <RouterLink to="/home" activate-class="active">首页</RouterLink>
      <RouterLink to="/news" activate-class="active">新闻</RouterLink>
      <RouterLink to="/about" activate-class="active">关于</RouterLink>
    </div>
    <!--  展示区  -->
    <div class="main-content">
      <!--      此处以后可能要展示各种组件-->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
//JS 或 TS
import {RouterView, RouterLink,} from "vue-router";
import Header from './component/Header.vue'
</script>
<style>
/*APP*/
/*.title {*/
/*  text-align: center;*/
/*  word-spacing: 5px;*/
/*  margin: 30px 0;*/
/*  height: 70px;*/
/*  background-image: linear-gradient(45deg, gray, white);*/
/*  border-radius: 10px;*/
/*  box-shadow: 0 0 2px;*/
/*  font-size: 30px;*/
/*}*/

.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.navigate a.active {
  background-color: #64967E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: "Mishafi Gold";
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>
