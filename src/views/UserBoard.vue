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
import Navbar from '../components/UserNavbar.vue';

export default {
  data() {
    return {
    };
  },
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
};
</script>
