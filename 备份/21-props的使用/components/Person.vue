<template>
  <div class="person">
    <ul>
      <li v-for="item in list2" key="p.id" > {{ item.name }} --- {{ item.age }}</li>
    </ul>
  </div>

</template>

<script lang="ts" setup ,name="Person">
import {defineProps,withDefaults} from 'vue'
import {Persons} from  '@/types'

//只接受list
// defineProps([ "list2"])


//接受list + 限制类型
// defineProps<{list2:Persons}>()


//接受list + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{list2?:Persons}>(),{
  list2:() =>[{id:"3223",name:"冬冬",age:40}]
})


//
// //接受a，同时将proos保存起来
// let x = defineProps(['a'])
// console.log(x.a)

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