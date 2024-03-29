<template>
  <LoadingComp :active="isLoading"/>
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
            :class="{ active: categoryItem === '所有行程'}"
            @click.prevent="categoryItem = '所有行程'">所有<p class="d-md-inline">行程</p></a>
          </li>
          <li class="bg-transparent">
            <a href="#" class="category-item text-decoration-none py-2"
            :class="{ active: categoryItem === '國外潛旅'}"
            @click.prevent="categoryItem = '國外潛旅'">國外<p class="d-md-inline">潛旅</p></a>
          </li>
          <li class="bg-transparent">
            <a href="#" class="category-item text-decoration-none py-2"
            :class="{ active: categoryItem === '國內潛旅'}"
            @click.prevent="categoryItem = '國內潛旅'">國內<p class="d-md-inline">潛旅</p></a>
          </li>
          <li class="bg-transparent">
            <a href="#" class="category-item text-decoration-none py-2"
            :class="{ active: categoryItem === '一日玩水'}"
            @click.prevent="categoryItem = '一日玩水'">一日<p class="d-md-inline">玩水</p></a>
          </li>
          <li class="bg-transparent">
            <a href="#" class="category-item text-decoration-none py-2"
            :class="{ active: categoryItem === '我的最愛'}"
            @click.prevent="categoryItem = '我的最愛'">
              我的<p class="d-md-inline">最愛</p></a>
          </li>
        </ul>
      </div>
      <div v-if="!productsFilter.length" class="col-lg-8">
        <p class="text-center text-muted fw-bold pt-4">暫無行程，繼續看看吧！</p>
      </div>
      <div v-else class="col-lg-8">
        <div class="row row-cols-1 gy-3">
          <div class="col" v-for="item in productsFilter" :key="item.id">
            <div class="card product-card position-relative">
              <div class="row gx-0">
                <div class="col-md-4">
                  <div class="product-img bg-style position-relative"
                  :style="{backgroundImage: `url(${item.imgUrl})`}">
                  <i class="bi bi-search fs-2 product-search-icon
                  position-absolute text-white text-center
                  translate-middle top-50 start-50"/>
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
                      <small class="card-text mt-2 d-block text-muted">
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
                    <router-link :to="`/product/${item.id}`" class="stretched-link">
                      <span class="visually-hidden product-hover"
                     >查看更多</span></router-link>
                    <button type="button"
                      class="btn btn-outline-primary rounded-circle fs-4
                      position-absolute fav-btn"
                      :class="{ active: favoriteIdList.includes(item.id) }"
                      @click.prevent.stop="toggleFavorite(item)">
                      <i class="bi bi-suit-heart" />
                    </button>
                </div>
              </div>
            </div>
          </div>
          <p v-if="productsCatch" class="text-center p-5 text-muted fw-bold">
            {{ productsCatchMsg }} 請稍後重試！
          </p>
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
      status: {
        loadingItemId: '',
      },
      favoriteIdList: favorite.getFavorite() || [],
      categoryItem: localStorage.getItem('categoryItem'),
      cacheSearch: '',
      productsCatch: false,
      productsCatchMsg: '',
    };
  },
  inject: [
    'pushMsgState',
    'emitter',
  ],
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.productsCatch = true;
          this.productsCatchMsg = err.response.data.message;
        });
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
    toggleFavorite(item) {
      if (this.favoriteIdList.includes(item.id)) {
        this.favoriteIdList.splice(this.favoriteIdList.indexOf(item.id), 1);
        this.pushMsgState({
          data: { success: true },
          content: `將「${item.title}」移除我的最愛`,
        }, '移除');
      } else {
        this.favoriteIdList.push(item.id);
        this.pushMsgState({
          data: { success: true },
          content: `將「${item.title}」加入我的最愛`,
        }, '加入');
      }
      favorite.setFavorite(this.favoriteIdList);
      this.emitter.emit('update-favorite');
    },
  },
  computed: {
    productsFilter() {
      let filterResult = [];
      if (this.categoryItem === '所有行程') {
        filterResult = this.products;
      } else if (this.categoryItem === '我的最愛') {
        const newArr = this.products.filter((item) => this.favoriteIdList.includes(item.id));
        filterResult = newArr;
      } else {
        const newArr = this.products.filter((item) => item.category === this.categoryItem);
        filterResult = newArr;
      }
      return filterResult;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
