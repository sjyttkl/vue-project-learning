import {ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
import axios from 'axios' //需要手动安装  npm i axios


//默认函数表达方式
export default function () {
    // https://dog.ceo/api/breed/pembroke/images/random
//数据
    let dogList = reactive(['https:\\/\\/images.dog.ceo\\/breeds\\/pembroke\\/n02113023_3913.jpg'])


//方法
    async function getDog() {
        try {
            let result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
            console.log(result.data.message)
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }

    }
    //钩子，刚来就变化下
    onMounted(() => {
        getDog()
    })

    //想外面提供东西
    return {dogList, getDog}
}
