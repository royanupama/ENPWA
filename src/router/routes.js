import ErosMain from '@/components/ErosMain'

const Subscription=resolve=>{
  require.ensure(['@/components/Subscription'],()=>{
    resolve(require('@/components/Subscription'));
  });
};

export const routes= [
    {
      path: '/',
      name: 'ErosMain',
      component: ErosMain
    },{
      path: '/subscribe',
      name: 'Subscription',
      component: Subscription
    }
  ];
