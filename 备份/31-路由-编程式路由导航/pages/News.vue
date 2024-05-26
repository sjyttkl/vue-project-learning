<template>
  <div class="news">
    <!--导航区 -->
    <ul>

      <li v-for="news in newsList  " :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <!--        第二种写法-->
        <RouterLink
            :to="{name:'xiangxi',
        query:{
          id:news.id,
          title:news.title,
          content:news.content
        }}">{{ news.title }}
        </RouterLink>

      </li>
    </ul>
    <!--    展示区-->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>


<script setup lang="ts" name="News">
import {ref, reactive} from 'vue'
import {RouterView, RouterLink, useRouter} from 'vue-router'

const newsList = reactive([
  {id: '001', title: '十种抗癌食物', content: "西兰花"},
  {id: '002', title: '如何一夜暴富', content: "学IT"},
  {id: '003', title: '震惊，万万没有想到', content: "明天是周一"},
  {id: '004', title: '好消息 ! 好消息 !', content: "发工资了"},
])


const router = useRouter()

interface NewsInter {
  id: string,
  title: string,
  content: string
}

function showNewsDetail(news: NewsInter) {
  router.push({//这里也可以用replace
    name: 'xiangxi',
    query: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  })
}

</script>

<!--<script>-->
<!--export default {-->
<!--  name: "News "-->
<!--}-->
<!--</script>-->

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.new ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}

.news li::marker {
  color: #64967E;
}

.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>