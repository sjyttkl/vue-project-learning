<template>
  <div class="person">
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeName">修改名称</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person.vue",
  data(){
    return{
      name:"宋冬冬",
      age:18,
      tel:'13732231079---'
    }
  },
  methods:{
    showTel(){
      alert(this.tel)
    },
    changeAge(){
      this.age +=1
    },
    changeName(){
      this.name="zhang-san"
    }
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
button{
  margin: 0 5px;
}
</style>