<template>
  <LoadingComp :active="isLoading"/>
  <div class="container pt-3 pb-5">
    <div class="row gy-3 mt-3">
      <div class="col-md-8 mx-auto">
        <div class="position-relative m-4">
          <div class="progress" style="height: 3px;">
            <div class="progress-bar" role="progressbar" style="width: 0%;"
            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="position-absolute top-0 start-0
          translate-middle rounded-pill text-center
          bg-muted border border-3 border-primary"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-cart-check fs-3 text-primary"
            style="line-height: 2.7rem;"/>
          </div>
          <div class="position-absolute top-0 start-50
          translate-middle rounded-pill text-center
          bg-muted border border-2 border-muted"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-pencil-square fs-3 text-muted"
            style="line-height: 2.8rem;"/>
          </div>
          <div class="position-absolute top-0 start-100
          translate-middle rounded-pill text-center
          bg-muted border border-2 border-muted"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-cash-coin fs-3 text-muted"
            style="line-height: 3rem;"/>
          </div>
        </div>
      </div>
      <div class="col-md-10 mx-auto border py-3 border-1 rounded-3 mt-5 bg-white">
        <table class="table align-middle mb-0" v-if="carts.length">
          <thead class="sticky-top">
            <tr>
              <th colspan="5">選購行程</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts" :key="item.id">
              <td style="width: 60px">
                <button type="button" class="btn btn-outline-danger btn-sm link-hover-white"
                @click="delCart(item)">
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
              <td class="d-md-table-cell d-none" style="width: 150px;">
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
                  <div class="col-lg-3 col-5 mt-auto">
                    <label for="cart_unit" class="d-flex align-items-center">
                      <small style="word-break:keep-all;" class="me-2">人數：</small>
                      <input type="number"
                      class="form-control border-0 p-0"
                      id="cart_unit"
                      v-model.number="item.qty" min="1"
                      @change="updateCart(item)"
                      :disabled="item.id === state.isLoadingItem">
                    </label>
                  </div>
                  <div class="col-lg-9 col-7 d-flex align-items-center justify-content-end">
                    <p class="mb-0 fs-6" v-if="item.product.price === item.product.origin_price">
                      TWD <span class="text-primary h6">
                        {{ $filters.currency(item.product.origin_price) }}
                      </span>
                    </p>
                    <div v-if="item.product.price !== item.product.origin_price"
                    class="row cols-row-2 text-end">
                      <del class="text-muted mb-0 fs-6">
                        {{ $filters.currency(item.product.origin_price) }}元
                      </del>
                      <p class="mb-0 fs-6">
                        TWD
                        <span class="text-danger h5">
                          {{ $filters.currency(item.product.price) }}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-end">
                <del class="text-muted me-3 fs-6" v-if="hasDiscord">折扣前
                  <span> {{ $filters.currency(total) }}元</span></del>
                <p v-if="hasDiscord" class="m-0">TWD <span class="h4 text-danger">
                  {{ $filters.currency(final_total) }}</span></p>
                <p v-if="!hasDiscord" class="m-0">TWD <span class="h4">
                  {{ $filters.currency(final_total) }}</span></p>
                <label for="cart_coupon">
                  <div class="input-group input-group-sm mt-2">
                      <input type="text" class="form-control border-bottom"
                      placeholder="請輸入優惠碼" id="cart_coupon"
                      v-model="coupon_code">
                      <button class="btn btn-outline-secondary" type="button"
                      @click="addCouponCode">
                        套用
                      </button>
                  </div>
                </label>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="text-center">
              <td colspan="5" class="border-0">
                <router-link to="/cart/order" class="btn btn-secondary mt-3 w-100">
                  確認訂單
                </router-link>
              </td>
            </tr>
          </tfoot>
        </table>
        <div v-else class="text-center py-3">
          <p class="fw-bold h5 text-muted mb-3">
            <span v-if="cartCatch">購物車載入錯誤，請稍後再試</span>
            <span v-else>目前無行程，快來跟我們一起下潛吧！</span>
          </p>
          <router-link to="/products" class="btn btn-outline-secondary btn-sm">
            前往選購
          </router-link>
        </div>
      </div>
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
      hasDiscord: false,
      state: {
        isLoadingItem: '',
      },
      cartCatch: false,
    };
  },
  inject: ['pushMsgState', 'emitter'],
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
        })
        .catch((err) => {
          this.isLoading = false;
          this.cartCatch = !err.response.data.success;
        });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const newCart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.state.isLoadingItem = item.id;
      this.$http.put(api, { data: newCart })
        .then((res) => {
          const data = res;
          data.content = `已將人數改為「${item.qty}」`;
          this.pushMsgState(data, '更新購物車');
          this.getCart();
          this.state.isLoadingItem = '';
        })
        .catch((err) => {
          const data = {
            data: {},
          };
          data.data.success = err.response.data.success;
          data.data.message = '系統錯誤，請稍後再試';
          this.pushMsgState(data, '更新購物車');
        });
    },
    delCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http.delete(api)
        .then((res) => {
          this.emitter.emit('update-cart', item.id);
          const data = res;
          data.content = `已將「${item.product.title}」移除購物車`;
          this.pushMsgState(data, '刪除品項');
          this.getCart();
        })
        .catch((err) => {
          const data = {
            data: {},
          };
          data.data.success = err.response.data.success;
          data.data.message = '系統錯誤，請稍後再試';
          this.pushMsgState(data, '刪除品項');
        });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon })
        .then((res) => {
          if (!res.data.success) {
            const data = {
              data: {},
            };
            data.data.success = res.data.success;
            data.data.message = res.data.message;
            this.pushMsgState(data, '使用優惠券');
          } else {
            this.hasDiscord = true;
            this.getCart();
          }
        })
        .catch((err) => {
          const data = {
            data: {},
          };
          data.data.success = err.response.data.success;
          data.data.message = '系統錯誤，請稍後再試';
          this.pushMsgState(data, '使用優惠券');
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
