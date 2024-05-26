<template>
  <div class="person">
    <h1>情况四：监视 【reactivate】定义的 里的 【基本类型和对象类型】 数据</h1>
    <h1>情况四：监视 【reactivate】定义的 里的 【基本类型和对象类型】 数据</h1>
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


//watch 情况四，监视响应式对象中的某个属性（基本类型），且不是响应式对象，则需要写成函数形式
// watch(()=>{return person.name }, (newValue, oldValue) => {
//   console.log('person name变化了', newValue, oldValue)
// })


// 这里的car是对象，可以写。需要写成函数式； 所以要是监督某个属性，大力推进使用 函数形式
watch(()=>{return person.car }, (newValue, oldValue) => {
  console.log('person.car变化了', newValue, oldValue)
},{deep:true})

// function changePerson() {
//   // person = reactive({name: '宋冬冬 !+ ', age: 33}) //不行
//   // person = {name: '宋冬冬 !+ ', age: 33}//不行
//   Object.assign(person, {name: '宋冬冬 !+ ', age: 33}) //可以
//
// }

function changMe() {
  obj.a.b.c = 999
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