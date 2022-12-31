import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'All Products',
      component: () => import('../views/ProductsListView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductDetailView.vue'),
      props : true
    }
  ]
})

export default router
