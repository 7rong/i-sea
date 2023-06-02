<template>
  <div class="my-5 row justify-content-center">
    <div class="col-6">
      <v-form v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <!-- eslint-disable-next-line jsx-a11y/label-has-associated-control -->
          <!-- <label htmlFor="email" class="form-label">Email</label> -->
          <v-field id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="service@isea.com" rules="email|required"
            v-model="form.user.email"/>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <!-- <label for="name" class="form-label">姓名</label> -->
          <v-field id="name" name="姓名" type="text" class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="王小美" rules="required"
            v-model="form.user.name"></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <!-- <label for="tel" class="form-label">電話</label> -->
          <v-field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="0987123456" :rules="isPhone"
                   v-model="form.user.tel"></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <!-- <label for="address" class="form-label">地址</label> -->
          <v-field id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }"
                   placeholder="請輸入地址" rules="required"
                   v-model="form.user.address"></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">留言
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
            v-model="form.message"></textarea></label>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
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
  methods: {
    createOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(api, { data: order }).then((res) => {
        console.log(res);
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
    },
  },
};
</script>
