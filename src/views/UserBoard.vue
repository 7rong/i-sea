<template>
  <div class="position-relative scroll-top cus-bg-patterns
  d-flex flex-column justify-content-between"
  style="min-height: 100vh;">
    <div>
      <Navbar style="z-index:1100;" class="fixed-top"></Navbar>
      <ToastList></ToastList>
      <router-view></router-view>
    </div>
    <Footer class="mt-auto"></Footer>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import pushMsgState from '@/methods/pushMsgState';
import ToastList from '@/components/ToastList.vue';
import Navbar from '../components/UserNavbar.vue';
import Footer from '../components/UserFooter.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Navbar,
    ToastList,
    Footer,
  },
  provide() {
    return {
      emitter,
      pushMsgState,
    };
  },
  updated() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
};
</script>
