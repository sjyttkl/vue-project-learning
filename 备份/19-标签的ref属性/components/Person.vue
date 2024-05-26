<template>
  <div class="person">
    <h1>标签ref属性</h1>
    <h1>中国</h1>
    <h2 ref="title">北京</h2>
    <h3 >尚硅谷</h3>
    <button @click="showLog"> 点我输出h2这个元素</button>
  </div>

</template>

<script lang="ts" setup ,name="Person">
import {ref, reactive, watch, watchEffect,defineExpose} from "vue"

//创建一个title，用于存储ref标记的内容
let title= ref()
let a= ref()
let b= ref()
let c= ref()




function  showLog(){
  console.log(title.value)
  // console.log(document.getElementById("title")) //不推荐写 id
}
defineExpose({a,b,c}) //表示可以暴露出去，给父页面

</script>

<!--scoped 局布样式-->
<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px
}

button {
  margin: 0 5px;
}
</style>