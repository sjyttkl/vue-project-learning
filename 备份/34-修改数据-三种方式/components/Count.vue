<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <h2>欢迎来到：{{ countStore.school }}</h2>
    <h2>当前地址式：：{{ countStore.address }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import {ref,reactive} from "vue";

//引入useCountSotre
import {useCountStore} from '@/store/count'


//useCountStore，得到一个专门保存的count相关的store
const countStore = useCountStore()
//以下两种方式都可以拿到state中的数据
console.log('@@@ ',countStore.sum)
console.log('@@@ ',countStore.$state.sum)


// 数据
let n = ref(1) // 用户选择的数字

// 方法
function add(value) {
  //第一种修改方式
  // countStore.sum += 1
  // countStore.address = '浙江杭州'
  // countStore.school = '浙江大学'
    // 第二种修改方式
    //  countStore.$patch({
    //   sum:888,
    //   school:'尚硅谷',
    //   address:'北京'
    // })

    // 第三种修改方式
    countStore.increment(n.value)

}

function minus() {
  countStore.sum -= 1
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 5px;
  height: 25px;
}
</style>