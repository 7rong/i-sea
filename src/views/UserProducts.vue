<template>
  <LoadingComp :active="isLoading"></LoadingComp>
  <div class="row">
    <div class="col-lg-3 col-12">
      category list
    </div>
    <div class="col">
      <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
        <div class="col" v-for="item in products" :key="item.id">
          <div class="card h-100">
            <h5 class="card-title text-center">{{ item.title }}</h5>
            <div style="background-size: cover; background-position: center;
            padding: 50% 0;"
            :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
            <div class="card-body">
              <p class="card-text">{{ item.description }}</p>
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
              <div class="h5" v-if="item.price">
                現在只要<span class="text-danger">{{ item.price }}</span>元</div>
              <button type="button" class="btn btn-outline-secondary">
                  查看更多
              </button>
              <button type="button" class="btn btn-outline-danger"
                      >
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      allProducts: [],
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
