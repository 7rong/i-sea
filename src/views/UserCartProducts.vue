<template>
  <LoadingComp :active="isLoading"></LoadingComp>
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
            style="line-height: 3rem;"></i>
          </div>
          <div class="position-absolute top-0 start-50
          translate-middle rounded-pill text-center
          bg-muted border border-2 border-muted"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-pencil-square fs-3 text-muted"
            style="line-height: 3rem;"></i>
          </div>
          <div class="position-absolute top-0 start-100
          translate-middle rounded-pill text-center
          bg-muted border border-2 border-muted"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-cash-coin fs-3 text-muted"
            style="line-height: 3rem;"></i>
          </div>
        </div>
      </div>
      <div class="col-md-10 mx-auto border py-3 border-1 rounded-3 mt-5 bg-white">
        <table class="table align-middle" v-if="carts.length">
          <thead class="sticky-top">
            <tr>
              <th style="width: 60px"></th>
              <th style="width: 150px;" class="d-md-table-cell d-none"></th>
              <th>行程</th>
              <th style="width: 80px">人數</th>
              <th class="text-end">單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts" :key="item.id">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm link-hover-white"
                @click="delCart(item)">
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
              <td class="d-md-table-cell d-none">
                <div style="background-size: cover; background-position: center; padding: 30% 0;"
                :style="{backgroundImage: `url(${item.product.imgUrl})`}"></div>
              </td>
              <td class="position-relative">
                <p class="text-secondary h6">
                  {{ item.product.title }}
                </p>
                <small class="text-light">{{ item.dateChosen }}</small>
              </td>
              <td>
                <label for="cart_unit">
                <input type="number"
                class="form-control border-0"
                id="cart_unit"
                    v-model.number="item.qty" min="1"
                    @change="updateCart(item)"
                    :disabled="item.id === this.state.isLoadingItem">
                  </label>
              </td>
              <td class="text-end">
                <p class="mb-0 fs-6" v-if="item.product.price === item.product.origin_price">
                  TWD <span class="text-primary h6">
                    {{ $filters.currency(item.product.origin_price) }}
                  </span>
                </p>
                <del class="text-muted mt-1 mb-0 fs-6"
                v-if="item.product.price !== item.product.origin_price">
                  {{ $filters.currency(item.product.origin_price) }}元
                </del>
                <p class="mb-0 fs-6" v-if="item.product.price !== item.product.origin_price">
                  TWD
                  <span class="text-danger h6">{{ $filters.currency(item.product.price) }}</span>
                  </p>
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-end">
                <del class="text-muted me-3 fs-6" v-if="hasDiscord">折扣前
                  <span> {{ $filters.currency(total) }}元</span></del>
                <strong v-if="hasDiscord">TWD <span class="h4 text-danger">
                  {{ $filters.currency(final_total) }}</span></strong>
                <strong v-if="!hasDiscord">TWD <span class="h4">
                  {{ $filters.currency(final_total) }}</span></strong>
                 <br>
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
                <button type="button"
                class="btn btn-secondary mt-3 w-100"
                  @click="goOrder()">
                  確認訂單
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
        <div v-else class="text-center py-3">
          <p class="fw-bold h5 text-muted mb-3">目前無行程，快來跟我們一起下潛吧！</p>
          <button class="btn btn-outline-secondary btn-sm" type="button"
          @click="goProducts">
            前往選購
          </button>
        </div>
        <!-- 金額 -->
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
        const data = res;
        data.content = `已將人數改為「${item.qty}」`;
        this.pushMsgState(data, '更新購物車');
        this.getCart();
        this.state.isLoadingItem = '';
      });
    },
    delCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http.delete(api)
        .then((res) => {
          console.log(res);
          this.emitter.emit('update-cart', item.id);
          const data = res;
          data.content = `已將「${item.product.title}」移除購物車`;
          this.pushMsgState(data, '刪除品項');
          this.getCart();
        });
    },
    goProducts() {
      this.$router.push('/products');
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then((res) => {
        console.log(res);
        this.hasDiscord = true;
        this.getCart();
      });
    },
    goOrder() {
      this.$router.push('/cart/order');
    },
  },
  created() {
    this.getCart();
  },
};
</script>
