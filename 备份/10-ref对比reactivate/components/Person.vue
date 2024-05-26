<template>
  <div class="person">

    <h2>一辆 {{ car.brand }}车,价值{{ car.price }} 万元</h2>
    <button @click="changeBrand"> 修改汽车的品牌</button>
    <button @click="changePrice"> 修改汽车的价格</button>
    <button @click="changeCar"> 修改汽车</button>
  </div>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="changeSum"> 点我sum+1</button>
  <br>

  <br>

</template>

<script lang="ts" setup ,name="Person">
import {ref, reactive} from "vue"

//数据
// let car = ref({
//   brand: '奔驰', price: 100
// })
let car = reactive({
  brand: '奔驰', price: 100
})

let sum = ref(0)


//方法
function changePrice() {
  car.price += 10
  // car.value.price += 10
}

function changeCar() {
  // car = {brand: '奥拓',price:2} //不行，页面不更新
  // car = reactive({brand: '奥拓',price:2}) //新的响应式对象，也不行。页面不更新
  Object.assign(car, {brand: '奥拓', price: 2}) // 页面可以更新

  // car.value = {brand: '奥拓', price: 2} //value必须是响应式的。
}

function changeBrand() {
  car.brand = "本田"
  // car.value.brand = "本田"
}

function changeSum() {
  sum.value += 1
  // sum = ref(9) ,不行
}


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