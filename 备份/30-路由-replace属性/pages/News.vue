<template>
  <div class="news">
    <!--导航区 -->
    <ul>
      <!--      <li><a href="#">新闻001</a></li>-->
      <!--      <li><a href="#">新闻002</a></li>-->
      <!--      <li><a href="#">新闻003</a></li>-->
      <!--      <li><a href="#">新闻004</a></li>-->

      <li v-for="news in newsList  " :key="news.id">
        <!--        <a href="#">{{ news.title }}</a>-->
        <!--        第一种写法-->
        <!--        <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`"> {{ news.title }}-->
        <!--        </RouterLink>-->

        <!--        第二种写法-->
        <RouterLink
            :to="{name:'xiangxi',
        query:{
          id:news.id,
          title:news.title,
          content:news.content
        }}">{{ news.title }}</RouterLink>

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
import {RouterView, RouterLink} from 'vue-router'

const newsList = reactive([
  {id: '001', title: '十种抗癌食物', content: "西兰花"},
  {id: '002', title: '如何一夜暴富', content: "学IT"},
  {id: '003', title: '震惊，万万没有想到', content: "明天是周一"},
  {id: '004', title: '好消息 ! 好消息 !', content: "发工资了"},
])


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