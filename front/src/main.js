// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import routers from './router/router'
import resource from 'vue-resource'
import VueQuillEditor from 'vue-quill-editor'
import App from './App'
import store from './store/index'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(resource);
Vue.use(VueQuillEditor);

Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
