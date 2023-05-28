<template>
  <LoadingComp :active="isLoading"></LoadingComp>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/user/cart">購物車</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
      </article>
      <div class="col-4">
        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>
        <label for="product_qty" class="form-label">
          <input type="number" id="product_qty"
          class="form-control"
          v-model="product.qty">
        </label>
        <button type="button" class="btn btn-outline-danger"
          @click.prevent="addCart(product.id, product.qty)"
          :disabled="this.status.loadingItemId === product.id"
          v-if="this.status.loadingItemId !== product.id">
          加入購物車
        </button>
        <button type="button" class="btn btn-outline-secondary"
          v-else>
          前往購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      id: '',
      product: {},
      status: {
        loadingItemId: '',
      },
    };
  },
  inject: ['pushMsgState'],
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.product = res.data.product;
          this.product.qty = 1;
        }
      });
    },
    addCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.isLoading = true;
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.isLoading = false;
          this.status.loadingItemId = id;
          this.pushMsgState(res, '加入購物車');
          console.log(res);
        });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
    this.status.loadingItemId = '';
  },
};
</script>
