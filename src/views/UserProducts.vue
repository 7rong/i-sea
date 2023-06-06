<template>
  <LoadingComp :active="isLoading"></LoadingComp>
  <div class="products-banner bg-style d-flex justify-content-center align-items-center">
    <h2 class="text-white border border-3 border-white px-4 py-2">{{ categoryItem }}</h2>
  </div>
  <div class="container-fluid py-5 cus-bg-patterns">
    <div class="row justify-content-center g-4">
      <div class="col-lg-3 col-12">
        <div class="input-group mb-3">
          <input type="search" class="form-control" aria-label="search"
          aria-describedby="search" v-model="cacheSearch"
          placeholder="海豚、綠島...">
          <a href="#" class="input-group-text link-secondary"
          @click.prevent="searchProducts">
            <i class="bi bi-search" id="search"></i>
            <span class="visually-hidden">search</span>
          </a>
        </div>
        <ul class="list-unstyled d-flex justify-content-around flex-lg-column">
          <li class="bg-transparent">
            <a href="#" class="category-item text-decoration-none py-2"
            :class="{ active: this.categoryItem === '所有商品'}"
            ref="categoryItem"
            @click.prevent="filterProducts('所有商品')">所有商品</a>
          </li>
          <li class="bg-transparent">
            <a href="#" class="category-item text-decoration-none py-2"
            :class="{ active: this.categoryItem === '國外潛旅'}"
            ref="categoryItem"
            @click.prevent="filterProducts('國外潛旅')">國外潛旅</a>
          </li>
          <li class="bg-transparent">
            <a href="#" class="category-item text-decoration-none py-2"
            :class="{ active: this.categoryItem === '國內潛旅'}"
            ref="categoryItem"
            @click.prevent="filterProducts('國內潛旅')">國內潛旅</a>
          </li>
          <li class="bg-transparent">
            <a href="#" class="category-item text-decoration-none py-2"
            :class="{ active: this.categoryItem === '一日玩水'}"
            ref="categoryItem"
            @click.prevent="filterProducts('一日玩水')">一日玩水</a>
          </li>
          <li class="bg-transparent">
            <a href="#" class="category-item text-decoration-none py-2"
            :class="{ active: this.categoryItem === '我的最愛'}"
            ref="categoryItem"
            @click.prevent="filterProducts('我的最愛')">
              我的最愛</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-8">
        <div class="row row-cols-1 g-2 g-lg-3">
          <div class="col" v-for="item in productsFilter" :key="item.id">
            <div class="card product-card position-relative">
              <div class="row g-0">
                <div class="col-md-4">
                  <div class="product-img bg-style position-relative"
                  :style="{backgroundImage: `url(${item.imgUrl})`}">
                  <i class="bi bi-search fs-2 product-search-icon
                  position-absolute text-white text-center
                  translate-middle top-50 start-50"></i>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body h-100 text-secondary
                  d-flex flex-column justify-content-between">
                    <div>
                      <h5 class="card-title mb-1">{{ item.title }}</h5>
                      <small>
                        <i class="bi bi-geo-alt-fill"></i>
                        {{ item.location }}</small>
                      <small class="card-text me-5 mt-2 d-block text-muted">
                        {{ item.description }}
                      </small>
                    </div>
                    <div class="d-flex justify-content-end">
                      <div class="h6 mb-0" v-if="item.price === item.origin_price">
                        TWD <span class="text-primary h5">
                          {{ $filters.currency(item.origin_price) }}
                        </span>
                      </div>
                      <del class="h6 text-muted mt-1 me-2 mb-0"
                      v-if="item.price !== item.origin_price">
                        原價 {{ $filters.currency(item.origin_price) }} 元
                      </del>
                      <div class="h6 mb-0" v-if="item.price !== item.origin_price">
                        TWD
                        <span class="text-danger h5">{{ $filters.currency(item.price) }}</span>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="stretched-link"
                    @click.prevent="getDetail(item.id)">
                      <span class="visually-hidden product-hover"
                     >查看更多</span></a>
                    <!-- favorite -->
                    <button type="button"
                      class="btn btn-outline-primary rounded-circle fs-4
                      position-absolute fav-btn"
                      :class="{ active: favoriteIdList.includes(item.id) }"
                      @click.prevent.stop="toggleFavorite(item)"
                    >
                      <i class="bi bi-suit-heart" />
                    </button>
                    <!-- <button type="button" class="btn btn-outline-primary"
                    @click="addCart(item.id)"
                    :disabled="this.status.loadingItemId === item.id">
                      <div class="spinner-border spinner-border-sm text-light" role="status"
                        v-if="this.status.loadingItemId === item.id">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div v-else><i class="bi bi-cart"></i></div>
                    </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import favorite from '@/methods/favorite';

export default {
  data() {
    return {
      isLoading: false,
      products: [],
      productsFilter: [],
      status: {
        loadingItemId: '',
      },
      favoriteIdList: favorite.getFavorite() || [],
      categoryItem: '所有商品',
      cacheSearch: '',
    };
  },
  inject: [
    'emitter',
    'pushMsgState',
  ],
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.productsFilter = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    filterProducts(category) {
      this.categoryItem = category;
      if (category === '所有商品') {
        this.productsFilter = this.products;
      } else if (category === '我的最愛') {
        const newArr = this.products.filter((item) => this.favoriteIdList.includes(item.id));
        this.productsFilter = newArr;
      } else {
        const newArr = this.products.filter((item) => item.category === category);
        this.productsFilter = newArr;
      }
    },
    searchProducts() {
      this.categoryItem = '我的搜尋';
      const newArr = this.products.filter((item) => {
        const str = item.title + item.location + item.description;
        return str.match(this.cacheSearch);
      });
      this.productsFilter = newArr;
      this.cacheSearch = '';
    },
    getDetail(id) {
      this.$router.push(`/product/${id}`);
    },
    toggleFavorite(item) {
      if (this.favoriteIdList.includes(item.id)) {
        this.favoriteIdList.splice(this.favoriteIdList.indexOf(item.id), 1);
        this.pushMsgState({
          data: { success: true },
        }, '移除我的最愛');
      } else {
        this.favoriteIdList.push(item.id);
        this.pushMsgState({
          data: { success: true },
        }, '加入我的最愛');
      }
      favorite.setFavorite(this.favoriteIdList);
      this.emitter.emit('update-favorite', this.favoriteIdList);
    },
    addCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItemId = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.status.loadingItemId = '';
          this.pushMsgState(res, '加入購物車');
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
