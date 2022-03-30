import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"测试"},["/index.html","/readme.md"]],
  ["v-198d0bf5","/js/1.html",{"title":"01 | 代码基本功测试（上）：JS 的数据类型你了解多少？"},["/js/1","/js/1.md"]],
  ["v-1847770d","/js/10.html",{"title":"10 | 数组排序（上）：如何用 JS 实现各种数组排序？"},["/js/10","/js/10.md"]],
  ["v-19fc4fac","/js/11.html",{"title":"11 | 数组排序（下）：sort 排序方法的实现原理"},["/js/11","/js/11.md"]],
  ["v-1bb1284b","/js/12.html",{"title":"12 | 进阶练习：带你手写 JS 数组多个方法的底层实现"},["/js/12","/js/12.md"]],
  ["v-1d6600ea","/js/13.html",{"title":"13 | 异步编程（上）：JS 异步编程都有哪些方案？"},["/js/13","/js/13.md"]],
  ["v-1f1ad989","/js/14.html",{"title":"14 | 异步编程（中）：如何深入理解异步编程的核心 Promise？"},["/js/14","/js/14.md"]],
  ["v-20cfb228","/js/15.html",{"title":"15 | 异步编程（下）：如何理解 Generator、Async/await 等异步编程的语法糖？"},["/js/15","/js/15.md"]],
  ["v-22848ac7","/js/16.html",{"title":"16 | 进阶练习（上）：怎样轻松实现一个 EventEmitter？"},["/js/16","/js/16.md"]],
  ["v-24396366","/js/17.html",{"title":"17 | 进阶练习（下）：如何实现符合 Promise/A+ 规范的 Promise？"},["/js/17","/js/17.md"]],
  ["v-25ee3c05","/js/18.html",{"title":"18 | 垃圾回收：释放内存，提升浏览器页面性能"},["/js/18","/js/18.md"]],
  ["v-27a314a4","/js/19.html",{"title":"19 | 事件轮询：如何理解浏览器中的 EventLoop？"},["/js/19","/js/19.md"]],
  ["v-1b41e494","/js/2.html",{"title":"02 | 代码基本功测试（下）：如何实现一个深浅拷贝？"},["/js/2","/js/2.md"]],
  ["v-4d2db24e","/js/20.html",{"title":"20 | 原理解析：JS 代码是如何被浏览器引擎编译、执行的？"},["/js/20","/js/20.md"]],
  ["v-4ee28aed","/js/21.html",{"title":"21 | 引擎进阶（上）：探究宏任务 & 微任务的运行机制"},["/js/21","/js/21.md"]],
  ["v-5097638c","/js/22.html",{"title":"22 | 引擎进阶（下）：如何理解 Process.nextTick 的原理？"},["/js/22","/js/22.md"]],
  ["v-524c3c2b","/js/23.html",{"title":"彩蛋 1 | 如何应对大厂面试官的灵魂拷问？"},["/js/23","/js/23.md"]],
  ["v-540114ca","/js/24.html",{"title":"彩蛋 2 | 前端开发如何有针对性地学习算法？"},["/js/24","/js/24.md"]],
  ["v-55b5ed69","/js/25.html",{"title":"结束语 | 面向未来，我们该如何提升自己？"},["/js/25","/js/25.md"]],
  ["v-1cf6bd33","/js/3.html",{"title":"03 | 继承实现：探究 JS 常见的 6 种继承方式"},["/js/3","/js/3.md"]],
  ["v-1eab95d2","/js/4.html",{"title":"04 | 继承进阶：如何实现 new、apply、call、bind 的底层逻辑？"},["/js/4","/js/4.md"]],
  ["v-20606e71","/js/5.html",{"title":"05 | 函数那些事：JS 闭包难点剖析"},["/js/5","/js/5.md"]],
  ["v-22154710","/js/6.html",{"title":"06 | 进阶练习：带你一起实现 JSON.Stringify 方法"},["/js/6","/js/6.md"]],
  ["v-23ca1faf","/js/7.html",{"title":"07 | 数组原理（上）：帮你梳理眼花缭乱的数组 API"},["/js/7","/js/7.md"]],
  ["v-257ef84e","/js/8.html",{"title":"08 | 数组原理（中）：如何理解 JS 的类数组？"},["/js/8","/js/8.md"]],
  ["v-2733d0ed","/js/9.html",{"title":"09 | 数组原理（下）：实现数组扁平化的 6 种方式"},["/js/9","/js/9.md"]],
  ["v-2d0a9a6d","/js/",{"title":"开篇词 | 打好 JS 基石，走稳前端进阶之路"},["/js/index.html","/js/readme.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
