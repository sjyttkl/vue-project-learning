<template>
  <div class="person">
    <h1>情况一：监视 【ref】定义的 【基本类型】  数据</h1>
  <h2>当前求和为：{{sum}}</h2>
    <button @click="changSum"> 点击我 sum +1</button>
  </div>

</template>

<script lang="ts" setup ,name="Person">
import {ref, watch} from "vue"

//数据
let sum = ref(0)

//方法
function  changSum(){
  sum.value +=1
}



//监视
const stopWatch = watch(sum,(newValue,oldValue)=>{
  console.log("变化了 ",newValue," ",oldValue)
  if(sum.value>10){
    stopWatch()//停止监控
  }
})
// console.log(stopWatch())

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