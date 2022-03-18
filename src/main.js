import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'vant/lib/index.css'
// 导入矢量图标
import '../public/iconfont/iconfont.css'
// import vueSeamlessScroll from 'vue-seamless-scroll'
// 按需导入vantUI组件库
// import {
//   Button,
//   Popup,
//   Cell,
//   Divider,
//   NavBar,
//   Icon,
//   Field, 
//   CellGroup,
//   } from 'vant'
  // 按需导入ant-design-vue UI组件库
  import { Button, Icon, message,Upload } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';
// Vue.component("Button",Button)
// ____________________________
  // vant的按需注册
Vue.use(Button)
// Vue.use(Popup)
Vue.use(Icon)
Vue.use(Upload)
// Vue.use(Cell)
// Vue.use(Divider)
// Vue.use(NavBar)
// Vue.use(Icon)
// Vue.use(Field)
// Vue.use(CellGroup)
// Vue.use(VueSeamlessScroll)
Vue.config.productionTip = false
// nt-design-vue全局消息
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
