<template>
  <div class="my-5 row justify-content-center">
    <div class="col-6">
      <v-form v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">電子信箱：</label>
          <v-field id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email" rules="email|required"
            v-model="form.user.email"
          />
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
};
</script>
