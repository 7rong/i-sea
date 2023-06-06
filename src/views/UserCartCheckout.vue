<template>
  <LoadingComp :active="isLoading"></LoadingComp>
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
            style="line-height: 3rem;"></i>
          </div>
          <div class="position-absolute top-0 start-50
          translate-middle rounded-pill text-center
          bg-primary border border-2 border-primary"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-pencil-square fs-3 text-white"
            style="line-height: 3rem;"></i>
          </div>
          <div class="position-absolute top-0 start-100
          translate-middle rounded-pill text-center
          bg-muted border border-3 border-primary"
          v-if="order.is_paid === false"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-cash-coin fs-3 text-muted"
            style="line-height: 3rem;"></i>
          </div>
          <div class="position-absolute top-0 start-100
          translate-middle rounded-pill text-center
          bg-primary border border-2 border-primary"
          v-else
          style="width: 3rem; height:3rem;">
            <i class="bi bi-cash-coin fs-3 text-white"
            style="line-height: 3rem;"></i>
          </div>
        </div>
      </div>
      <div class="col-md-10 mx-auto border p-4 border-1 rounded-3 mt-5 bg-white">
        <form @submit.prevent="payOrder">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>品名</th>
                <th>數量</th>
                <th class="text-end">單價</th>
              </tr>
            </thead>
            <tbody class="text-secondary">
            <tr v-for="item in order.products" :key="item.id">
              <td>
                <p class="h6">
                  {{ item.product.title }}
                </p>
                <small class="text-light">{{ item.dateChosen }}</small>
              </td>
              <td>{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="text-end">{{ $filters.currency(item.final_total) }}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="2" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(order.total) }}</td>
            </tr>
            </tfoot>
          </table>
          <table class="table mb-0">
            <tbody>
              <tr>
              <th>訂單編號</th>
              <td>{{ orderId }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>Line ID</th>
              <td>{{ order.user.lineId }}</td>
            </tr>
            <tr>
              <th>訂購人電話</th>
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
                  <button class="btn btn-secondary mt-4 w-100"
                  v-if="order.is_paid === false"
                  >確認付款去</button>
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
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.order = res.data.order;
        this.isLoading = false;
      });
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(api).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
