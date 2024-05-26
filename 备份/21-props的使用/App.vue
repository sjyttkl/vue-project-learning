<template>
  <!-- 冒号 后面 表示是一个表达式  务看懂  -->
  <h2 a="1+1" :b="1+1" c="x" :d="x"> 测试 </h2>


  <!--  父 传数据到 子-->
  <Person a="哈哈"  :list3="6"/>
</template>

<script lang="ts" setup name="" App>


//JS 或 TS
import Person from "@/components/Person.vue";
import {ref, reactive} from "vue";
import {Persons} from "@/types";

let x = 9

let personlist = reactive<Persons>([
  {id: "daddly", name: "宋冬冬1", age: 60},
  {id: "daddly", name: "宋冬冬2", age: 60},
  {id: "daddly", name: "宋冬冬3", age: 60},
])

</script>
