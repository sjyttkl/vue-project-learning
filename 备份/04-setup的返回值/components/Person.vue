<template>
  <div class="person">
    <!--  <h2>姓名：{{a}}</h2>-->
    <!--  <h2>年龄：{{b}}</h2>-->
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeName">修改名称</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person.vue",

  beforeCreate() {
    console.log("beforeCreate")
  },
  setup() {
    console.log("setup")
    console.log("@@", this) //setup函数中的this是undefined,vue3中已经开始弱化this了
    //数据，原来是写在data中，此时name,age,tel 都不是相应式的数据
    let name = '张三' // 注意此时的name不是相应式的
    let age = 18 // 注意此时的age不是相应式的
    let tel = 13732231079 // 注意此时的tel不是相应式的
    // return {a:name,b:age}


    //方法
    function changeName() {
      // console.log(1)
      name = 'zhang--san'//注意：这样修改了，页面是没有变化的，因为不是响应式
     console.log(name)// name确实式改了，但是name不是响应式的

    }

    function changeAge() {
      age += 1
      console.log(age)
    }

    function showTel() {
      alert(tel)
    }
    //将数据和方法交出去，摸板才能使用
    return {name, age, changeAge, changeName, showTel}

    //setup也可以是一个渲染函数
    // return function () {
    //   return "哈哈"
    // }
    // return  ()=> {
    //   return "哈哈"
    // }
    // return ()=> "哈哈"
  }
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