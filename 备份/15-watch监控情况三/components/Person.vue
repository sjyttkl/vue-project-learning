<template>
  <div class="person">
    <h1>情况san：监视 【reactivate】定义的 【对象类型】 数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名称</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改全部</button>
    <br>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changMe">点我修改 obj.a.b.c</button>
  </div>

</template>

<script lang="ts" setup ,name="Person">
import {ref, reactive, watch} from "vue"

//对象数据
let person = reactive({name: '宋冬冬', age: 10})
let obj = reactive({a: {b: {c: 6666}}})

//方法
function changeName() {
  person.name += " 牛逼！！ "
}

function changeAge() {
  person.age += 1
}

function changePerson() {
  // person = reactive({name: '宋冬冬 !+ ', age: 33}) //不行
  // person = {name: '宋冬冬 !+ ', age: 33}//不行
  Object.assign(person, {name: '宋冬冬 !+ ', age: 33}) //可以

}

function changMe() {
  obj.a.b.c = 999
}

//监视 监视 【ref】定义的 【对象类型】  数据, 监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启第三个变化。
const stopWatch = watch(person, (newValue, oldValue) => {
  console.log("person变化了 ", newValue, " ", oldValue)

}, {deep: true, immediate: true})


//监视，情况三，监视reactive 定义的 【对象类型】数据，，deep是强制打开的。
watch(obj, (newValue, oldValue) => {
  console.log("obj变化了 ", newValue, " ", oldValue)

} ) //{deep: true, immediate: true}

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