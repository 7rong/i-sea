<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true"
  ref="toast"
  :class="`bg-${msg.style}`">
    <div class="toast-header">
      <strong class="me-auto">{{ msg.title }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body text-white" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  name: 'ToastMsg',
  props: [
    'msg',
  ],
  mounted() {
    const toast = new Toast(this.$refs.toast, {
      delay: 5000,
    });
    toast.show();
  },
};
</script>
