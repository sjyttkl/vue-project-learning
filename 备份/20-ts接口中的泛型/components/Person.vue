<template>
  <div class="person">
    ？？？
  </div>

</template>

<script lang="ts" setup ,name="Person">

// @符号表示 src目录
import {PersonInter, Persons} from '@/types'
// import {type PersonInter} from '@/types'

let person: PersonInter = {id: "daddly", name: "宋冬冬", age: 60}

//泛型
let personlists: Persons = [
  {id: "daddly", name: "宋冬冬1", age: 60},
  {id: "daddly", name: "宋冬冬2", age: 60},
  {id: "daddly", name: "宋冬冬3", age: 60},
]

let personlist: Array<PersonInter> = [
  {id: "daddly", name: "宋冬冬1", age: 60},
  {id: "daddly", name: "宋冬冬2", age: 60},
  {id: "daddly", name: "宋冬冬3", age: 60},
]

</script>

<!--scoped 局布样式-->
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