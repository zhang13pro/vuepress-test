import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("test", defineAsyncComponent(() => import("D:/w/vuepress-test/docs/.vuepress/components/test.vue")))
}
