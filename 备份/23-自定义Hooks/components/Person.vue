<template>
  <div class="person">
    <h2>当前求和：{{ sum }} , 放到10倍后 {{bigSum}}</h2>
    <button @click="add"> sum 修改 +1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog"> 再来一只小狗</button>
  </div>


</template>

<script lang="ts" setup ,name="Person">

import sumSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'
import useSum from "@/hooks/useSum";

const {sum, add,bigSum} = useSum()
const {dogList, getDog} = useDog()

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

img {
  height: 200px;
  margin: 10px;
}
</style>