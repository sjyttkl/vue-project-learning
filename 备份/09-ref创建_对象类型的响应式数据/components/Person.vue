<template>
  <div class="person">

    <h2>一辆 {{ car.brand }}车,价值{{ car.price }} 万元</h2>
    <button @click="changePrice"> 修改汽车的价格</button>
  </div>
  <br>
  <h2>游戏列表</h2>
  <ul>
    <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    <button @click="changeFirstGame">修改第一呃游戏的名字</button>
  </ul>
  <br>

</template>

<script lang="ts" setup ,name="Person">
import {ref, reactive} from "vue"
// reactive 对象形式的响应式返回，包裹


//数据
let car = ref({
  brand: '奔驰', price: 100
})
let games = ref([
  {id: '1', name: "王者荣耀"},
  {id: '2', name: "元神"},
  {id: '3', name: "三国志"},
  {id: '4', name: "西游记"},
])
// let name= reactive('张三') 错误

let obj = reactive({name: "san"})

// ref 表面上 可以处理 基础数据类型和对象数据类型，实际上ref针对对象类型的数据，也是调用reactive

//方法
function changePrice() {
  car.value.price += 10
}

function changeFirstGame() {
  games.value[0].name = " 三国志战略版"
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