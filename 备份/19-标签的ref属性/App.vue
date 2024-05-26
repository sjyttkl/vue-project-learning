<template>
  <h2 ref="title">你好</h2>
    <button @click="showLog"> 点我输出h2这个元素</button>
<Person ref="ren"/>
</template>

<script lang="ts" setup name=""App>


//JS 或 TS
import Person from "@/components/Person.vue";
import {ref} from "vue";

let title= ref()
let ren = ref()

function  showLog(){
  console.log(title.value)
  console.log(ren.value)
  // console.log(document.getElementById("title")) //不推荐写 id
}

//
// export default {
//   name: "App",//组件名称
//   components:{Person}//注册组件
// }
</script>
