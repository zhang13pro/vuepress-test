import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("lg-js-03", defineAsyncComponent(() => import("D:/w/knife-docs/docs/.vuepress/components/lg-js-03.vue")))
}
