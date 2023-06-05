<template>
  <Navbar style="z-index:1100;"></Navbar>
  <div class="position-relative scroll-top">
    <ToastList></ToastList>
    <router-view/>
  </div>
  <Footer></Footer>
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
