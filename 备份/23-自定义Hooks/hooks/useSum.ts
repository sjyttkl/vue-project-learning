import {ref, reactive,computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
import axios from 'axios' //需要手动安装  npm i axios



export default function () {
// https://dog.ceo/api/breed/pembroke/images/random
//数据
  let sum = ref(0)
  let bigSum = computed(()=>{
    return sum.value*10
  })

//方法
  function add() {
    sum.value += 1
  }
//想外面提供东西
    return {sum, add,bigSum}
}