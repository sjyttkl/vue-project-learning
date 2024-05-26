<template>
  <ul class="news-list">
    <li>编号：{{route.query.id}}</li>
    <li>标题：{{route.query.title}}</li>
    <li>内容：{{route.query.content}}</li>
  </ul>
</template>

<script setup lang="ts" name="About">

//hooks
import {useRoute} from 'vue-router'
import {toRefs} from 'vue'
let route = useRoute()

//直接从响应式对象中解构，则直接失去响应式。若不想失去响应式的则需要
let {query} = toRefs(useRoute()) //结构代码，上面可以直接用query.id .title
console.log("@", route)
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  line-height: 30px;
}
</style>