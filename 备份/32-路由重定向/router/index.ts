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
                    name: "xiangxi",
                    // path: "detail/:id/:title/:content?",
                    path: "detail",
                    component: Detail,
                    //第一种写法：将路由收到的所有params参数作为props传给路由组件
                    //props:true, // 相当于 <Detail id=? title=? content=?>   ，2️⃣ detail 中需要有：defineProps

                    //第二种写法，可以自己决定将什么作为props给路由组件
                    props(route) {
                        // console.log(route)
                        return route.query
                    }
                    //第三种写法，对象写法，可以自己决定将什么数据传给路由组件
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300
                    // }
                }
            ]
        }, {
            path: "/",
            redirect: '/home'
        }]
})

//暴露出去 router
export default router