<template>
  <div class="person">
    <h1>情况五：监视 上述多个数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c1 }}</h2>
    <button @click="changeName">修改名称</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改全部车</button>
    <br>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changMe">点我修改 obj.a.b.c</button>
  </div>

</template>

<script lang="ts" setup ,name="Person">
import {ref, reactive, watch} from "vue"

//对象数据
let person = reactive({name: '宋冬冬', age: 10, car: {c1: '本田', c2: "宝马"}})
let obj = reactive({a: {b: {c: 6666}}})

//方法
function changeName() {
  person.name += " 牛逼！！ "
}

function changeAge() {
  person.age += 1
}

function changeC1() {
  person.car.c1 = '奥迪'
}

function changeC2() {
  person.car.c2 = '大众'
}

function changeCar() {
  person.car = {c1: '本田1', c2: "宝马2"}
}

//监视，情况五：监视上述多个数据
watch([()=>person.name,()=>person.car.c1],(newValue,oldValue)=>{
  console.log("person car 变化了 ",newValue,oldValue)

},{deep:true})
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