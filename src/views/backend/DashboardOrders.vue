<template>
  <LoadingComp :active="isLoading"></LoadingComp>
  <table class="table mt-4">
    <thead>
    <tr>
      <th>購買時間</th>
      <th>Email</th>
      <th>購買款項</th>
      <th>應付金額</th>
      <th>是否付款</th>
      <th>編輯</th>
    </tr>
    </thead>
    <tbody>
        <template v-for="(item, key) in orders" :key="key">
          <tr :class="{'text-secondary': !item.is_paid}">
            <td>{{ $filters.date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ $filters.currency(item.total) }}</td>
            <td>
              <div class="form-check form-switch">
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                    v-model="item.is_paid">
                  <div class="d-none d-md-block">
                    <span v-if="item.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </div>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm"
                @click="openOrderModal(item)">檢視</button>
                <button class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)">刪除</button>
              </div>
            </td>
          </tr>
        </template>
        <tr v-if="!orders.length">
          <td colspan="6" class="text-center py-3">目前尚無訂單</td>
        </tr>
    </tbody>
  </table>
  <OrderModal :order="tempOrder" ref="orderModal"></OrderModal>
  <DelModal :delItem="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
  <Pagination v-if="orders.length" :pages="pagination" @emit-page="getOrders"></Pagination>
</template>

<script>
import Pagination from '@/components/PaginationComp.vue';
import OrderModal from '@/components/OrderModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      orders: [],
      tempOrder: {},
      pagination: {},
      currentPage: 1,
    };
  },
  components: {
    Pagination,
    OrderModal,
    DelModal,
  },
  inject: ['pushMsgState'],
  methods: {
    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.orders = res.data.orders;
        this.pagination = res.data.pagination;
        this.isLoading = false;
      });
    },
    openOrderModal(item) {
      this.tempOrder = { ...item };
      this.$refs.orderModal.showModal();
    },
    openDelModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delModal.showModal();
    },
    delOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http.delete(api).then((res) => {
        const data = res;
        data.content = `已移除訂單「${this.tempOrder.id}」`;
        this.pushMsgState(data, '刪除');
        this.getOrders();
        this.$refs.delModal.hideModal();
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
