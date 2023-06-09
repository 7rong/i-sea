import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/backend/LoginPage.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/backend/DashboardPage.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/DashboardProducts.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/backend/DashboardCoupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/backend/DashboardOrders.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('../views/frontend/UserBoard.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/frontend/UserHome.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/frontend/UserProducts.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/frontend/UserProductDetail.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/frontend/UserCart.vue'),
        children: [
          {
            path: 'products',
            component: () => import('../views/frontend/UserCartProducts.vue'),
          },
          {
            path: 'order',
            component: () => import('../views/frontend/UserCartOrder.vue'),
          },
          {
            path: 'checkout/:orderId',
            component: () => import('../views/frontend/UserCartCheckout.vue'),
          },
        ],
      },
      {
        path: 'faq',
        component: () => import('../views/frontend/UserFAQ.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
