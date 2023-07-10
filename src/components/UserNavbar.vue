<template>
  <nav class="navbar navbar-expand-md navbar-dark"
  :class="{'bg-primary':navbarColor, 'shadow':navbarColor}" style="transition: all .5s;">
    <div class="container-fluid">
      <h1 class="font-cherry text-white nav-brand">
        <router-link to="/home" class="px-3 nav-link">ISEA</router-link>
      </h1>
      <!-- 漢堡選單 -->
      <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded=false
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 連結 -->
      <div class="collapse navbar-collapse
      justify-content-between" id="navbarNav" ref="navbarCollapse">
        <div class="navbar-nav fw-bold" style="text-shadow: .5px .5px 1px #00000033;">
          <router-link to="/home" class="nav-link px-3"
          @click="toggleCollapse">首頁</router-link>
          <router-link to="/products" class="nav-link px-3"
          @click="toggleCollapse">所有行程</router-link>
          <router-link to="/faq" class="nav-link px-3"
          @click="toggleCollapse">常見問題</router-link>
        </div>
        <div class="navbar-nav" style="text-shadow: .5px .5px 1px #00000033;">
          <router-link @click="toggleCollapse"
          to="/cart/products" class="nav-link px-3">
            <span class="d-md-none">購物車</span>
            <div class="d-none d-md-block position-relative">
              <i class="bi bi-cart fs-3"></i>
              <span class="position-absolute
              translate-middle badge rounded-pill bg-danger"
              style="top:20%;">
                {{ cartNum }}
                <span class="visually-hidden">products number in cart</span>
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cartNum: '',
      navbarColor: false,
    };
  },
  inject: ['emitter'],
  methods: {
    toggleCollapse() {
      this.$refs.navbarCollapse.classList.remove('show');
    },
    getCarts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.cartNum = res.data.data.carts.length;
      });
    },
    windowScroll() {
      if (window.scrollY > 10) {
        this.navbarColor = true;
      } else {
        this.navbarColor = false;
      }
    },
  },
  created() {
    this.getCarts();
  },
  mounted() {
    this.emitter.on('update-cart', this.getCarts);
    window.addEventListener('scroll', this.windowScroll);
  },
};
</script>
