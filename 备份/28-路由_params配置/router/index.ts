// 需要安装 ：npm i vue-router

//第一步：创建一个路由器，并暴露出去
import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

//引入一个一个可能要呈现的路由组件
import Home from "@/pages/Home.vue"
import News from "@/pages/News.vue"
import About from "@/pages/About.vue"
import Detail from "@/pages/Detail.vue"


//第二步：创建路由器
const router = createRouter({
    history: createWebHistory(),//路由器的工作模式（后面会讲）
    routes: [{
        name: 'zhuye',
        path: "/home",
        component: Home
    },
        {
            name: 'guanyu',
            path: "/about",
            component: About
        },
        {
            name: 'xinwen',
            path: "/news",
            component: News,
            children: [
                {
                    //子集，不用写 / 号
                    name:"xiangxi",
                    path: "detail/:id/:title/:content?",
                    component: Detail,
                }
            ]
        }]
})

//暴露出去 router
export default router