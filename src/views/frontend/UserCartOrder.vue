<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="position-relative m-4">
          <div class="progress" style="height: 3px;">
            <div class="progress-bar" role="progressbar" style="width: 50%;"
            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="position-absolute top-0 start-0
          translate-middle rounded-pill text-center
          bg-primary border border-2 border-primary"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-cart-check fs-3 text-white"
            style="line-height: 2.7rem;"/>
          </div>
          <div class="position-absolute top-0 start-50
          translate-middle rounded-pill text-center
          bg-muted border border-3 border-primary"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-pencil-square fs-3 text-primary"
            style="line-height: 2.8rem;"/>
          </div>
          <div class="position-absolute top-0 start-100
          translate-middle rounded-pill text-center
          bg-muted border border-2 border-muted"
          style="width: 3rem; height:3rem;">
            <i class="bi bi-cash-coin fs-3 text-muted"
            style="line-height: 3rem;"/>
          </div>
        </div>
      </div>
      <div class="col-md-10 mx-auto border py-3 border-1 rounded-3 mt-5 bg-white">
        <VForm v-slot="{ errors }" @submit="createOrder" class="p-3">
          <div class="row gy-3">
            <div class="col-md-6">
              <label for="name" class="form-label">姓名*</label>
              <VField id="name" name="姓名" type="text" class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="王小美" rules="required"
              v-model="form.user.name"/>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-md-6">
              <label for="tel" class="form-label">電話*</label>
              <VField id="tel" name="電話" type="tel" class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="0987123456" :rules="isPhone"
                v-model="form.user.tel"/>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-md-6">
              <label htmlFor="email" class="form-label">Email*</label>
              <VField id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="service@isea.com" rules="email|required"
              v-model="form.user.email"/>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-md-6">
              <label for="lineId" class="form-label">Line ID*</label>
                <small class="text-info ps-2">未來創建群組使用</small>
                <VField id="lineId" name="LineID" type="text" class="form-control"
                :class="{ 'is-invalid': errors['LineID'] }"
                rules="required"
                v-model="form.user.lineId"/>
                <ErrorMessage name="LineID" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-12">
              <label for="payment" class="form-label">付款方式*</label>
              <VField
              id="payment"
              name="付款方式"
              class="form-control"
              :class="{ 'is-invalid': errors['付款方式'] }"
              rules="required"
              v-model="form.user.payment"
              as="select">
                <option value="" disabled>請選擇付款方式</option>
                <option value="linePay">Line Pay</option>
                <option value="ATM">ATM</option>
                <option value="creditCard">信用卡/簽帳金融卡</option>
              </VField>
              <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-12">
              <label for="message" class="form-label">留言</label>
                <textarea name="" id="message" class="form-control"
                v-model="form.message" style="resize: none; height: 80px;"/>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-secondary w-100 mt-4">前往結帳</button>
          </div>
        </VForm>
      </div>
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
          lineId: '',
          payment: '',
          address: 'none',
        },
        message: '',
      },
    };
  },
  inject: ['emitter', 'pushMsgState'],
  methods: {
    createOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(api, { data: order })
        .then((res) => {
          this.emitter.emit('update-cart');
          const id = res.data.orderId;
          this.$router.push(`/cart/checkout/${id}`);
        })
        .catch((err) => {
          const data = {
            data: {},
          };
          data.data.success = err.response.data.success;
          data.data.message = '系統錯誤，請稍後再試';
          this.pushMsgState(data, '建立訂單');
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
    },
  },
};
</script>
