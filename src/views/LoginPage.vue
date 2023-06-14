<template>
  <div class="login-banner bg-style">
    <div class="container">
      <form class="row justify-content-center align-items-center"
      style="height: 100vh;"
      @submit.prevent="signIn">
        <div class="col-md-6 p-3 cus-bg-white rounded shadow">
          <h1 class="h3 mb-3 font-weight-normal text-center">管理員登入</h1>
          <div class="mb-2">
          <label for="input-email" class="sr-only">電子郵件</label>
          <input
              type="email"
              id="inputE-email"
              class="form-control"
              placeholder="service@isea.com"
              required
              v-model="user.username"
          />
          </div>
          <div class="mb-2">
          <label for="input-password" class="sr-only">密碼</label>
          <input
              type="password"
              id="input-password"
              class="form-control"
              required
              v-model="user.password"
          />
          </div>
          <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      // console.log(api);
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/dashboard/products');
          }
        });
    },
  },
};
</script>
