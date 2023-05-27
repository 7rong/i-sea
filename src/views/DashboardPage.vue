<template>
    <Navbar></Navbar>
    <div class="container mt-3 position-relative">
      <ToastList></ToastList>
      <router-view/>
    </div>
</template>

<script>
import emitter from '@/methods/emitter';
import pushMsgState from '@/methods/pushMsgState';
import ToastList from '@/components/ToastList.vue';
import Navbar from '../components/DashboardNavbar.vue';

export default {
  components: {
    Navbar,
    ToastList,
  },
  provide() {
    return {
      emitter,
      pushMsgState,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login');
        }
      });
  },
};
</script>
