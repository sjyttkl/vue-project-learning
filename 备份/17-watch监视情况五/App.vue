<template>
<Person/>
</template>

<script lang="ts">
//JS 或 TS
import Person from "@/components/Person.vue";

export default {
  name: "App",//组件名称
  components:{Person}//注册组件
}
</script>
