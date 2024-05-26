<template>
  <div class="person">
    <h1>watchEffect</h1>
    <h1>需求：当水温达到60度，或水位达到80C时候，给服务器发请求</h1>
    <h2>当前水温：{{ temp }} </h2>
    <h2>当前水位：{{ height }}</h2>
    <button @click="changeTemp"> 点我温度变化</button>
    <button @click="changeHeight"> 点我水位变化</button>
  </div>

</template>

<script lang="ts" setup ,name="Person">
import {ref, reactive, watch, watchEffect} from "vue"

//数据
let temp = ref(0)
let height = ref(0)

//方法
function changeTemp() {
  temp.value += 10
}

function changeHeight() {
  height.value += 10
}

//监视watchEffect,监控指标数据多的情况
watchEffect(() => {
  console.log(" @!") //刚开始就启动
  if (temp.value >= 60 || height.value >= 80) {
    console.log(" 给服务器发请求")
  }

})


//
// //监视 watch实现
// watch([temp, height], (value) => {
//   //从value中获取 最新的水温和水位
//   let [newTemp, newHeight] = value
//   if (newTemp >= 60 || newHeight >= 80) {
//     console.log(" 给服务器发请求")
//   }
// })


</script>


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