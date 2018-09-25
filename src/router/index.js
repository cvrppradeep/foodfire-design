import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import signup from '@/components/signup'
import details from '@/components/details'
import chicster1 from '@/components/chicster1'
import sign from '@/components/sign'
import product from '@/components/product'

import details1 from '@/components/details1'
import delivery from '@/components/delivery'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: '/product/:id',
      name: 'product',
      component: product
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: delivery
    },
    {

      path: '/chicster1',
      name: 'chicster1',
      component: chicster1
    },
    {
      path: '/details1',
      name: 'details1',
      component: details1
    },

    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})
