<template>
  <LoadingComp :active="isLoading"></LoadingComp>
  <div class="row">
    <div class="col-md-9">
        <table class="table align-middle">
          <thead class="sticky-top">
            <tr>
              <th></th>
              <th style="width: 150px;"></th>
              <th>品名</th>
              <th style="width: 130px">數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts" :key="item.id">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="delCart(item)">
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
              <td>
                <div style="background-size: cover; background-position: center; padding: 30% 0;"
                :style="{backgroundImage: `url(${item.product.imageUrl})`}"></div>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success">
                  已套用優惠券
                </div>
              </td>
              <td>
                <label for="cart_unit">
                  <div class="input-group input-group-sm">
                    <input type="number" class="form-control" id="cart_unit"
                    v-model.number="item.qty" min="1"
                    @change="updateCart(item)"
                    :disabled="item.id === this.state.isLoadingItem">
                    <div class="input-group-text">/ {{ item.product.unit }}</div>
                  </div>
                </label>
              </td>
              <td class="text-end">
                <del>原價：${{ $filters.currency(item.product.origin_price) }}</del><br>
                <small class="text-success">
                  現在只要：${{ $filters.currency(item.product.price) }}
                </small>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-outline-secondary" type="button"
        @click="deleteAll"
        v-if="this.carts.length !== 0">
          清空購物車
        </button>
        <button class="btn btn-outline-secondary" type="button"
        @click="goProducts"
        v-else>
          選購行程
        </button>
    </div>
    <div class="col">
      <h4>訂單明細</h4>
      <hr>
      <p>原價 <span>${{ $filters.currency(total) }}</span></p>
      <hr>
      <strong><span>總計</span> ${{ $filters.currency(final_total) }}</strong>
      <label for="cart_coupon">
        <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" id="cart_coupon"
            v-model="coupon_code">
            <button class="btn btn-outline-secondary" type="button"
            @click="addCouponCode">
              套用優惠碼
            </button>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      total: '',
      final_total: '',
      isLoading: false,
      coupon_code: '',
      state: {
        isLoadingItem: '',
      },
    };
  },
  inject: ['pushMsgState'],
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.total = res.data.data.total;
          this.final_total = res.data.data.final_total;
          this.isLoading = false;
        });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const newCart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.state.isLoadingItem = item.id;
      this.$http.put(api, { data: newCart }).then((res) => {
        this.pushMsgState(res, '更新購物車');
        this.getCart();
        this.state.isLoadingItem = '';
      });
    },
    delCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http.delete(api)
        .then((res) => {
          console.log(res);
          this.pushMsgState(res, '刪除品項');
          this.getCart();
        });
    },
    deleteAll() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(api).then((res) => {
        console.log(res);
        this.getCart();
      });
    },
    goProducts() {
      this.$router.push('/user/products');
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then((res) => {
        console.log(res);
        this.getCart();
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
