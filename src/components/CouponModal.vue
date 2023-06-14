<template>
  <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-white">{{ tempCoupon.modalTitle }}優惠券</h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題
            <input type="text" class="form-control" id="title" v-model="tempCoupon.title"
                   placeholder="請輸入標題"></label>
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼
            <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code"
                   placeholder="請輸入優惠碼"></label>
          </div>
          <div class="mb-3">
            <label for="due_date">到期日
            <input type="date" class="form-control" id="due_date"
            v-model="due_date"></label>
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比
            <input type="number" class="form-control" id="price"
              v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比"></label>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <label class="form-check-label" for="is_enabled">
              <input class="form-check-input" type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled" id="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-outline-primary"
                  @click="$emit('update-coupon', tempCoupon)">確定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  name: 'couponModal',
  data() {
    return {
      tempCoupon: {
      },
      due_date: '',
    };
  },
  props: {
    coupon: {
      type: Object,
      default() { return {}; },
    },
  },
  emits: ['update-coupon'],
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      const date = new Date(this.tempCoupon.due_date * 1000).toLocaleDateString('en-CA');
      this.due_date = date;
    },
    due_date() {
      const dateTime = new Date(this.due_date);
      const timestamp = Math.floor(dateTime / 1000);
      this.tempCoupon.due_date = timestamp;
    },
  },
  mixins: [modalMixin],
};
</script>
