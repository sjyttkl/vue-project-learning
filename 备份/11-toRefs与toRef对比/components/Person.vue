<template>
  <div class="person">
    <h1>姓名：{{ person.name }}</h1>
    <h1>姓名：{{ name }}</h1>
    <h1>年龄：{{ person.age }}</h1>
    <h1>年龄：{{ age }}</h1>
    <button @click="changeName">修改名称</button>
    <button @click="changAge">修改年龄</button>
  </div>

</template>

<script lang="ts" setup ,name="Person">
import {ref, reactive, toRefs,toRef} from "vue"
// toRefs,toRef 都是把响应式对象里的东西拿出来，而且还具备响应式的能力
let person = reactive({
  name: '宋冬冬',
  age: 20
})

let {name, age} = toRefs(person) //变成ref
let n1 = toRef(person,"name") //变成ref ,一个一个的取


console.log(name)
console.log(age)

//方法
function changeName() {
  person.name += "!"
  name.value += "~"

  console.log(name.value, person.name)

}

function changAge() {
  person.age += 1
  age.value += 1
  console.log(age.value, person.age)

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