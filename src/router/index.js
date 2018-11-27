import Vue from 'vue'
import Router from 'vue-router'
import ErosMain from '@/components/ErosMain'

const Subscription=resolve=>{
  require.ensure(['@/components/Subscription'],()=>{
      resolve(require('@/components/Subscription'));
  });
}

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ErosMain',
      component: ErosMain
    },{
      path: '/subscribe',
      name: 'Subscription',
      component: Subscription
    }
  ]
});
