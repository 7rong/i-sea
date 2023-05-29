<template>
  <LoadingComp :active="isLoading"></LoadingComp>
  <div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未起用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)"
            >刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <couponModal ref="couponModal"
    :coupon="tempCoupon"
    @update-coupon="updateCoupon"/>
  </div>
</template>

<script>
import couponModal from '../components/CouponModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      tempCoupon: {},
      coupons: [],
    };
  },
  components: {
    couponModal,
  },
  inject: ['pushMsgState'],
  methods: {
    getCoupons() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.coupons = res.data.coupons;
        this.isLoading = false;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = { modalTitle: '新增' };
      } else {
        this.tempCoupon = { ...item, modalTitle: '編輯' };
      }
      this.$refs.couponModal.showModal();
    },
    updateCoupon(item) {
      this.tempCoupon = item;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      this.$http.post(api, { data: this.tempCoupon }).then((res) => {
        this.getCoupons();
        this.pushMsgState(res, '新增');
      });
      this.$refs.couponModal.hideModal();
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
