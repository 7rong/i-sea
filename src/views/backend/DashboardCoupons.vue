<template>
  <LoadingComp :active="isLoading"/>
  <div>
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="openModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>優惠碼</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in coupons" :key="item.code">
        <td>{{ item.title }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >編輯</button>
            <button type="button" class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)"
            >刪除</button>
          </div>
        </td>
      </tr>
      <tr v-if="!coupons.length">
        <td colspan="5" class="text-center py-3">目前尚無優惠券</td>
      </tr>
      </tbody>
    </table>
    <CouponModal ref="couponModal"
    :coupon="tempCoupon"
    @update-coupon="updateCoupon"/>
    <DelModal ref="delModal"
    :delItem="tempCoupon"
    @del-item="deleteCoupon"/>
  </div>
</template>

<script>
import DelModal from '@/components/DelModal.vue';
import CouponModal from '@/components/CouponModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      tempCoupon: {},
      coupons: [],
    };
  },
  components: {
    CouponModal,
    DelModal,
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
        this.isNew = isNew;
        this.tempCoupon = { modalTitle: '新增' };
      } else {
        this.isNew = isNew;
        this.tempCoupon = { ...item, modalTitle: '編輯' };
      }
      this.$refs.couponModal.showModal();
    },
    updateCoupon(item) {
      this.tempCoupon = item;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let method = 'post';

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        method = 'put';
      }
      this.$http[method](api, { data: this.tempCoupon }).then((res) => {
        this.getCoupons();
        this.$refs.couponModal.hideModal();
        if (this.isNew) {
          const data = res;
          data.content = `已將「${item.title}」加入優惠券`;
          this.pushMsgState(data, '新增');
        } else {
          const data = res;
          data.content = `已儲存「${item.title}」內容變更`;
          this.pushMsgState(data, '編輯');
        }
      });
    },
    openDelModal(item) {
      this.tempCoupon = { ...item };
      this.$refs.delModal.showModal();
    },
    deleteCoupon() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.$http.delete(api).then((res) => {
        this.getCoupons();
        this.$refs.delModal.hideModal();
        const data = res;
        data.content = `已移除優惠券「${this.tempCoupon.title}」`;
        this.pushMsgState(data, '刪除');
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
