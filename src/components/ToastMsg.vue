<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true"
  ref="toast">
      <div class="toast-header">
        <span class="p-2 rounded me-2 d-inline-block" :class="`bg-${msg.style}`"></span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" v-if="msg.content">
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
