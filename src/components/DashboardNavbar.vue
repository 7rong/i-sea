<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand font-cherry text-primary" href="#">ISEA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between"
            id="navbarNav"
            ref="dashboardNavbar">
              <div class="navbar-nav fw-bold">
                <router-link to="/dashboard/products" class="nav-link px-3"
                @click="toggleCollapse">產品</router-link>
                <router-link to="/dashboard/orders"
                class="nav-link px-3"
                @click="toggleCollapse">訂單</router-link>
                <router-link to="/dashboard/coupons" class="nav-link px-3"
                @click="toggleCollapse">優惠券</router-link>
              </div>
              <div class="navbar-nav fw-bold">
                <a href="#" @click.prevent="logout" class="nav-link px-3">登出</a>
              </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login');
          }
        });
    },
    toggleCollapse() {
      this.$refs.dashboardNavbar.classList.remove('show');
    },
  },
};
</script>
