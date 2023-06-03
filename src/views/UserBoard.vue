<template>
  <Navbar></Navbar>
  <div class="position-relative">
    <ToastList class="container mt-3"></ToastList>
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
};
</script>
