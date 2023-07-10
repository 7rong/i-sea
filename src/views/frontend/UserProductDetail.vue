<template>
  <LoadingComp :active="isLoading"/>
  <p v-if="productCatch" style="line-height: 50vh;" class="text-center text-muted fw-bold">
    商品載入錯誤，請稍後重試</p>
  <div v-else>
    <img :src="product.imgUrl" class="d-block w-100" alt="主圖"
    v-if="!product.images" style="height: 500px; object-fit: cover;">
    <!-- 輪播 -->
    <div id="product-img" class="carousel slide" data-bs-ride="carousel" v-else>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img :src="product.imgUrl" class="d-block w-100" alt="主圖"
          style="object-fit: cover; height: 500px;">
        </div>
        <div class="carousel-item" data-bs-interval="3000"
        v-for="img in product.images" :key="img">
          <img :src="img" class="d-block w-100" alt="圖片"
          style="object-fit: cover; height: 500px;">
        </div>
      </div>
      <button class="carousel-control-prev" type="button"
      data-bs-target="#product-img" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button"
      data-bs-target="#product-img" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container-fluid pb-3 pt-5 cus-bg-patterns">
      <div class="row justify-content-center">
        <article class="col-md-7 text-secondary">
          <div class="d-flex justify-content-between">
            <h2 class="mb-1">{{ product.title }}</h2>
            <button type="button"
              class="btn btn-outline-primary rounded-circle fs-4
              fav-btn"
              :class="{ active: favoriteIdList.includes(product.id) }"
              @click.prevent.stop="toggleFavorite(product)">
              <i class="bi bi-suit-heart" />
            </button>
          </div>
          <small class="text-muted">
            <i class="bi bi-geo-alt-fill"></i>
            {{ product.location }}</small>
          <div class="pb-5 mt-3">{{ product.description }}</div>
          <!-- date start -->
          <div class="row g-0 pb-5">
            <div class="col" v-for="date in product.date" :key="date">
              <button type="button" class="btn btn-outline-secondary h-100
              w-100 rounded-0 border-start-0 border-end-0"
              @click="this.dateChosen = date"
              :class="{ active: this.dateChosen === date }">
                {{ date }}
              </button>
            </div>
          </div>
          <div style="white-space: pre-line" class="pb-5">
            {{ product.content }}</div>
          <p class="border-top border-secondary pt-3 text-primary fw-bold mb-1">取消政策</p>
          <ul class="text-primary">
            <li>所選日期 60 天（含）之前取消，收取手續費 0%</li>
            <li>所選日期 30-60 天之間取消，收取手續費 50%</li>
            <li>所選日期 0-30 天之間取消，收取手續費 100%</li>
          </ul>
        </article>
        <div class="col-md-3 position-relative">
          <div class="card text-center sticky-md-top mb-3 aside-pos">
            <div class="card-body">
              <h3 class="card-text h6 mb-0"
              v-if="product.price === product.origin_price">
                TWD <span class="text-primary h5">
                {{ $filters.currency(product.origin_price) }}
                </span> 元
              </h3>
              <del class="fs-6 text-muted ms-2"
              v-if="product.price !== product.origin_price">
                原價 {{ $filters.currency(product.origin_price) }} 元
              </del>
              <h3 class="card-text h6 mb-0" v-if="product.price !== product.origin_price">
                TWD<span class="text-danger h4">{{ $filters.currency(product.price) }}</span>
                元
              </h3>
              <div class="d-flex justify-content-around align-items-center flex-md-column mt-3">
                <label for="product_qty" class="form-label mb-0 mb-md-2 go-cart-btn">
                  <div class="input-group my-auto">
                    <input type="number" class="form-control" min="1"
                    aria-describedby="number" id="product_qty"
                    v-model="product.qty">
                    <span class="input-group-text" id="number">/ {{ product.unit }}</span>
                  </div>
                </label>
                <button type="button" class="btn btn-outline-danger go-cart-btn link-hover-white"
                  @click.prevent="addCart(product.id, this.dateChosen, product.qty)"
                  :disabled="this.addCartId === product.id"
                  v-if="this.addCartId !== product.id &&
                  this.status.loadingItemId !== product.id">
                  <span class="d-none pe-2 d-md-inline-block">加入購物車</span>
                  <i class="bi bi-cart"></i>
                </button>
                <button type="button" class="btn btn-outline-light go-cart-btn"
                v-else-if="this.status.loadingItemId === product.id">
                  <div class="spinner-border spinner-border-sm text-white" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
                <button type="button" class="btn btn-outline-secondary go-cart-btn"
                @click.prevent="goCart"
                  v-else>
                  <router-link to="/cart/products" class="link-primary link-hover-white">
                    <span class="d-none pe-4 d-md-inline-block">前往購物車</span>
                    <i class="bi bi-cart-check "></i>
                  </router-link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cus-bg-lighter" v-if="!productsCatch">
      <div class="container py-3">
        <h3 class="text-primary h5 mb-3 ms-1">你可能喜歡</h3>
        <div class="row row-cols-md-3 row-cols-1 gy-3">
          <div class="col"
          v-for="item in similarProducts" :key="item.id">
            <div class="card h-100">
              <div :style="{'background-image': `url(${item.imgUrl})`}"
              class="bg-style rounded-top" style="height: 150px;"></div>
              <div class="card-body d-flex flex-column justify-content-between">
                <div class="mb-3">
                  <h5 class="card-title text-primary">{{ item.title }}</h5>
                  <small class="text-muted">
                  <i class="bi bi-geo-alt-fill"></i>
                    {{ item.location }}</small>
                  <p class="card-text text-secondary">{{ item.description }}</p>
                </div>
                <router-link :to="`/product/${item.id}`" class="btn btn-outline-primary w-100"
                @click="getDetail(item.id)">
                  詳細行程
                </router-link>
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
      id: '',
      dateChosen: '',
      product: {},
      products: [],
      addCartId: '',
      status: {
        loadingItemId: '',
      },
      favoriteIdList: favorite.getFavorite() || [],
      productCatch: false,
      productsCatch: false,
    };
  },
  inject: [
    'pushMsgState',
    'emitter',
  ],
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.product = res.data.product;
            this.product.qty = 1;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.productCatch = true;
          console.log(err);
        });
    },
    addCart(id, date, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
        dateChosen: date,
      };
      if (date) {
        this.status.loadingItemId = id;
        this.$http.post(api, { data: cart })
          .then((res) => {
            console.log(res);
            this.status.loadingItemId = '';
            this.addCartId = id;
            this.emitter.emit('update-cart', id);
            const data = res;
            data.content = `將「${this.product.title}」加入購物車`;
            this.pushMsgState(data, '加入');
          })
          .catch((err) => {
            const data = {
              data: {},
            };
            data.data.success = err.response.data.success;
            data.data.message = '系統錯誤，請稍後再試';
            this.pushMsgState(data, '加入');
          });
      } else {
        this.pushMsgState({
          data: { success: false, message: ['請選擇日期'] },
        }, '加入購物車');
      }
    },
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          }
        })
        .catch((err) => {
          this.productsCatch = true;
          console.log(err);
        });
    },
    getDetail(id) {
      this.dateChosen = '';
      this.id = id;
      this.getProduct();
    },
    toggleFavorite(item) {
      if (this.favoriteIdList.includes(item.id)) {
        this.favoriteIdList.splice(this.favoriteIdList.indexOf(item.id), 1);
        this.pushMsgState({
          data: { success: true },
          content: `將「${this.product.title}」移除我的最愛`,
        }, '移除');
      } else {
        this.favoriteIdList.push(item.id);
        this.pushMsgState({
          data: { success: true },
          content: `將「${this.product.title}」加入我的最愛`,
        }, '加入');
      }
      favorite.setFavorite(this.favoriteIdList);
    },
  },
  computed: {
    similarProducts() {
      let Arr = this.products.filter(
        (item) => item.category.match(this.product.category) && item.id !== this.id,
      );
      const newArr = [];
      if (Arr > 3) {
        for (let i = 0; i < 3; i += 1) {
          const index = Math.floor(Math.random() * Arr.length);
          const item = Arr[index];
          Arr.splice(index, 1);
          newArr.push(item);
        }
        Arr = newArr;
      }
      return Arr;
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
    this.getProducts();
    this.status.loadingItemId = '';
  },
};
</script>
