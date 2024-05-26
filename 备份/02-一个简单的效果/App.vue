<template>
  <!--html 组件结构-->
  <div class="app">
    <h1>宋冬冬，九天</h1>
    <Person/>
  </div>
</template>

<script lang="ts">
//JS 或 TS
import Person from "@/components/Person.vue";

export default {
  name: "App",//组件名称
  components:{Person}//注册组件
}
</script>

<!--组件样式-->
<style >

 .app{
   background-color: #ddd;
   box-shadow: 0 0 10px;
   border-radius: 10px;
   padding: 20px;
 }
</style>