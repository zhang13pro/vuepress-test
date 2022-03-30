import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("List", defineAsyncComponent(() => import("D:/w/knife-docs/docs/.vuepress/components/List.vue")))
}
