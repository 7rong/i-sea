<template>
  <div class="toast-container pe-3 toast-pos">
    <ToastMsg v-for="(message, key) in messages" :key="key"
    :msg="message"></ToastMsg>
  </div>
</template>

<script>
import ToastMsg from '@/components/ToastMsg.vue';

export default {
  components: { ToastMsg },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-msg', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
