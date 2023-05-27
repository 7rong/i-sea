<template>
    <div class="container mt-5">
        <form class="row justify-content-center"
        @submit.prevent="signIn">
        <div class="col-md-6">
            <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
            <div class="mb-2">
            <label for="input-email" class="sr-only">Email address
            <input
                type="email"
                id="inputE-email"
                class="form-control"
                placeholder="Email address"
                required
                v-model="user.username"
            /></label>
            </div>
            <div class="mb-2">
            <label for="input-password" class="sr-only">Password
            <input
                type="password"
                id="input-password"
                class="form-control"
                placeholder="Password"
                required
                v-model="user.password"
            /></label>
            </div>
            <div class="text-end mt-4">
            <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
            </div>
        </div>
        </form>
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
            this.emitter.emit('push-msg', {
              style: 'success',
              title: '登入成功',
            });
          } else {
            this.emitter.emit('push-msg', {
              style: 'danger',
              title: '登入失敗',
              content: '請輸入正確的帳號密碼',
            });
          }
        });
    },
  },
};
</script>
