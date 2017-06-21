// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};
Vue.config.productionTip = false

Vue.component('navbar', require('./components/header/Navbar'));
Vue.component('list', require('./components/todo/List'));
Vue.component('task', require('./components/todo/Task.vue'));
Vue.component('create-task', require('./components/todo/CreateTask'));
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
