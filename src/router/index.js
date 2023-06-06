import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardPage.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/DashboardProducts.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/DashboardCoupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/DashboardOrders.vue'),
      },
      {
        path: 'article',
        component: () => import('../views/DashboardArticle.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/UserHome.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/UserProducts.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProductDetail.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue'),
        children: [
          {
            path: 'products',
            component: () => import('../views/UserCartProducts.vue'),
          },
          {
            path: 'order',
            component: () => import('../views/UserCartOrder.vue'),
          },
          {
            path: 'checkout/:orderId',
            component: () => import('../views/UserCartCheckout.vue'),
          },
        ],
      },
      {
        path: 'faq',
        component: () => import('../views/UserFAQ.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
