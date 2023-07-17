<template>
  <LoadingComp :active="isLoading"/>
  <div class="container py-3">
    <div class="row gy-3 mt-3">
      <div class="col-md-8 mx-auto">
        <div class="position-relative m-4">
          <div class="progress" style="height: 3px;">
            <div class="progress-bar bg-primary" role="progressbar" style="width: 100%;"
            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="position-absolute top-0 start-0
          translate-middle rounded-pill text-center
          bg-primary border border-2 border-primary"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-cart-check fs-3 text-white"
            style="line-height: 2.7rem;"/>
          </div>
          <div class="position-absolute top-0 start-50
          translate-middle rounded-pill text-center
          bg-primary border border-2 border-primary"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-pencil-square fs-3 text-white"
            style="line-height: 2.8rem;"/>
          </div>
          <div class="position-absolute top-0 start-100
          translate-middle rounded-pill text-center
          bg-muted border border-3 border-primary"
          v-if="order.is_paid === false"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-cash-coin fs-3 text-muted"
            style="line-height: 3rem;"/>
          </div>
          <div class="position-absolute top-0 start-100
          translate-middle rounded-pill text-center
          bg-primary border border-2 border-primary"
          v-else
          style="width: 3rem; height:3rem;">
            <i class="bi bi-cash-coin fs-3 text-white"
            style="line-height: 3rem;"/>
          </div>
        </div>
      </div>
      <div v-if="orderCatch" class="col-md-10 mx-auto border p-4 border-1 rounded-3 mt-5 bg-white">
        <p class="text-center text-muted fw-bold m-0">載入訂單錯誤，請稍後再試</p>
      </div>
      <div v-else class="col-md-10 mx-auto border p-4 border-1 rounded-3 mt-5 bg-white">
        <form @submit.prevent="payOrder">
          <table class="table align-middle">
            <thead>
              <tr>
                <th style="width: 150px;" class="d-md-table-cell d-none"></th>
                <th>選購行程</th>
              </tr>
            </thead>
            <tbody class="text-secondary">
              <tr v-for="item in order.products" :key="item.id">
                <td class="d-md-table-cell d-none">
                  <div style="background-size: cover; background-position: center; padding: 30% 0;"
                  :style="{backgroundImage: `url(${item.product.imgUrl})`}"></div>
                </td>
                <td>
                  <div class="row gy-2">
                    <div class="col-12">
                      <p class="text-secondary h6 mb-0">
                        {{ item.product.title }}
                      </p>
                      <small class="text-light">{{ item.dateChosen }}</small>
                    </div>
                    <div class="col-6">
                      {{ item.qty }} / {{ item.product.unit }}
                    </div>
                    <div class="col-6 text-end">
                      TWD {{ $filters.currency(item.final_total) }}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="2" class="text-end">總計： {{ $filters.currency(order.total) }} 元</td>
            </tr>
            </tfoot>
          </table>
          <table class="table mb-0">
            <tbody>
              <tr>
              <th style="word-break:keep-all;">訂單編號</th>
              <td>{{ orderId }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td style="word-break:break-all;">{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>Line ID</th>
              <td>{{ order.user.lineId }}</td>
            </tr>
            <tr>
              <th>電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
            </tbody>
            <tfoot>
              <tr class="text-center">
                <td colspan="2" class="border-0 p-0" >
                  <button type="submit" class="btn btn-secondary mt-4 w-100"
                  v-if="order.is_paid === false"
                  >確認付款去</button>
                  <router-link to="/products" class="btn btn-secondary mt-4 w-100"
                  v-else>繼續看行程</router-link>
                </td>
              </tr>
            </tfoot>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
        products: {},
      },
      orderId: '',
      isLoading: false,
      orderCatch: false,
    };
  },
  inject: [
    'pushMsgState',
  ],
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.order = res.data.order;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.orderCatch = !err.response.data.success;
        });
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.getOrder();
            const data = {
              data: {},
            };
            data.data.success = res.data.success;
            data.content = '期待與您相見的那天！';
            this.pushMsgState(data, '付款');
          }
        })
        .catch((err) => {
          const data = {
            data: {},
          };
          data.data.success = err.response.data.success;
          data.data.message = '系統錯誤，請稍後再試';
          this.pushMsgState(data, '付款');
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
