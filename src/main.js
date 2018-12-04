// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'
import serviceConstants from './resources/serviceConstants'
import 'bootstrap';

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.http.options=serviceConstants.http_options;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
