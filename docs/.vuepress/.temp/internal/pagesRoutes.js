import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-378d3c02","/ts/1.html",{"title":"01 | 如何快速搭建 TypeScript 学习开发环境？"},["/ts/1","/ts/1.md"]],
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
