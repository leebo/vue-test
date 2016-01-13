import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './app'
import Foo from './components/Foo'
import Hello from './components/Hello'
import IP from './components/IP'

Vue.use(VueResource)
Vue.use(VueRouter)
/* eslint-disable no-new */

var router = new VueRouter()
router.map({
  '/foo': {
    component: Foo
  },
  '/hello': {
    component: Hello
  },
  '/ip': {
    component: IP
  }
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')
