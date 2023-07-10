<template>
  <div class="modal fade"
  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true"
  ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">刪除項目</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"/>
        </div>
        <div class="modal-body">
          <p class="fs-5 mt-3 text-center">
            是否要刪除
          </p>
          <p v-if="delItem.title">「 {{ delItem.title }} 」？</p>
          <p v-else>「 訂單編號： {{ delItem.id }} 」？</p>
          <p class="text-end mb-0">＊請注意刪除產品無法復原＊</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger"
          @click="$emit('del-item')">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    delItem: {},
  },
  data() {
    return {
      modal: {},
    };
  },
  mixins: [modalMixin],
};
</script>
