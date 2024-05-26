<template>
  <div class="person">
    <!--  <h2>姓名：{{a}}</h2>-->
    <!--  <h2>年龄：{{b}}</h2>-->
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeName">修改名称</button>


  </div>
</template>

<script lang="ts" ,name="Person">
export default {
  name: "Person.vue",

  beforeCreate() {
    console.log("beforeCreate")
  },

  setup() {

  }
}
</script>

<script lang="ts" setup> //setup标识，则默认可以返回
import {ref} from 'vue' //这里谁要响应式，则直接用ref包裹下


let name = ref('宋冬冬') // 利用ref创建，基本类型的响应式数据
let age = ref(18)
let tel = 13732231079
let address = "中国"
console.log(1, name)
console.log(2, age)
console.log(3, tel)
console.log(4, address)

function changeName() {
  // console.log(1)
  name.value = 'zhang--san'//注意：这样修改了，页面是没有变化的，因为不是响应式
  console.log(name)// name确实式改了，但是name不是响应式的

}

function changeAge() {
  age.value += 1 //需用用 age.value才能 有响应式的变化
  console.log(age)
}

function showTel() {
  alert(tel)
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