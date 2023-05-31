<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">
            <span>{{ tempArticle.modalTitle }}文章</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="title">標題
                <input type="text" class="form-control"
                id="title" placeholder="請輸入標題"
                v-model="tempArticle.title"></label>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="tag" class="form-label">標籤
                  <input type="text" class="form-control" id="tag" placeholder="請輸入單位"
                  v-model="tempArticle.tag"></label>
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="author" class="form-label">作者
                  <input type="text" class="form-control"
                  id="author" placeholder="請輸入原價"
                  v-model="tempArticle.author"></label>
                </div>
                <!-- <div class="mb-3 col-md-6">
                  <label for="create_at" class="form-label">創作時間
                  <input type="date" class="form-control" id="create_at" placeholder="請輸入售價"
                  v-model="create_at"></label>
                </div> -->
              </div>
              <hr>
              <div class="mb-3">
                <label for="description" class="form-label">產品描述
                <textarea type="text" class="form-control"
                id="description" placeholder="請輸入產品描述"
                v-model="tempArticle.description"></textarea></label>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容
                <textarea type="text" class="form-control"
                id="content" placeholder="請輸入產品說明內容"
                v-model="tempArticle.content"></textarea></label>
              </div>
              <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址
                <input type="text" class="form-control" id="image"
                  placeholder="請輸入圖片連結"
                  v-model="tempArticle.image"></label>
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                  <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  @change="uploadFile"></label>
                </div>
                <img class="img-fluid" alt="">
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <label class="form-check-label" for="isPublic">
                  <input class="form-check-input" type="checkbox"
                    :true-value="true"
                    :false-value="false"
                    v-model="tempArticle.isPublic" id="isPublic">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
                  data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="btn btn-primary"
          @click="$emit('emit-article',tempArticle)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      tempArticle: { modalTitle: '新增' },
      create_at: '',
    };
  },
  props: {
    Article: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    Article() {
      this.tempArticle = this.Article;
    },
  },
  methods: {
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(api, formData).then((res) => {
        if (res.data.success) {
          this.tempArticle.image = res.data.imageUrl;
        }
      });
    },
  },
  mixins: [modalMixin],
};
</script>
