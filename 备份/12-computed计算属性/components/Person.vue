<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名: <input type="text" v-model="lastName"><br>
    <button @click="changFullName">将全名改为 li-si</button><br>
    <button @click="changFullName2">将全名改为 li-si</button><br>
    <br>
    全名1：<span>{{ firstName }} - {{ lastName }}</span><br>
    全名2：<span>{{ fullName }}</span>

  </div>

</template>

<script lang="ts" setup ,name="Person">
import {ref, computed} from "vue"
import get = Reflect.get;
import set = Reflect.set;

let firstName = ref("张")
let lastName = ref("三")



//注意区分 方法和计算属性的区别
let fullName2 = computed({
//只要有变化，就会重新计算；没有变化，则不会计算
  get(){
      return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
  },
  set(val){
    // 这里val 是fullName2变化传入来的值，changFullName
    console.log("set")
    const [str1,str2] = val.split("-")
    firstName.value = str1
    lastName.value = str2
  }
})

//注意区分 方法和计算属性的区别
let fullName = computed(() => {
//只要有变化，就会重新计算；没有变化，则不会计算
  return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
})

function changFullName() {
  console.log(fullName.value)
  fullName2.value = "li-si"
  // fullName.value = "li-si"//不行
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