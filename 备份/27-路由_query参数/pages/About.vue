<template>
  <div class="about">
    <h2>大家好，欢迎来到全学历小区</h2>
  </div>
</template>
<!--路由组件一般放在pages 或 views中-->
<script setup lang="ts" name="About">
import {onMounted, onUnmounted} from 'vue'

onMounted(() => {
  console.log("About组件 挂载了")
})

onUnmounted(() => {
  console.log("About组件 卸载了")
})
</script>

<style scoped>

</style>