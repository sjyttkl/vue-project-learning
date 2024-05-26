<template>
  <div class="person">
    <h2>当前求和：{{ sum }}</h2>
    <button @click="add"> sum 修改</button>
  </div>


</template>

<script lang="ts" setup ,name="Person">
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'


let sum = ref(0)

function add() {
  sum.value += 1
}

//创建
console.log("创建")

//挂载
onBeforeMount(() => {
  console.log("挂载前")
})
onMounted(() => {
  console.log("子---挂载完毕")//子先执行
})

onBeforeUpdate(() => {
  console.log("更新前")
})

onUpdated(() => {
  console.log("更新完毕")


})

onBeforeUnmount(() => {
  console.log("卸载前")

})
onUnmounted(() => {
  console.log("卸载完毕")

})


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