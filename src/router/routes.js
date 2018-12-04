import ErosMain from '@/components/Eros-Main'

const Subscription=resolve=>{
  require.ensure(['@/components/Eros-Subscription'],()=>{
    resolve(require('@/components/Eros-Subscription'));
  });
};

export const routes= [
    {
      path: '/',
      name: 'Eros-Main',
      component: Eros-Main
    },{
      path: '/subscribe',
      name: 'Eros-Subscription',
      component: Eros-Subscription
    }
  ];
