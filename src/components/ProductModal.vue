<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title">
            <span>{{ tempProduct.modalTitle }}產品</span>
          </h5>
          <button type="button" class="btn-close btn-close-white"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-1">
                <label for="image" class="form-label">輸入主要圖片網址
                <input type="text" class="form-control" id="image"
                        placeholder="請輸入圖片連結"
                        v-model="tempProduct.imgUrl"></label>
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
              <!-- 多圖 -->
              <hr>
              <div class="mb-1">
                <label for="image0" class="form-label">新增圖一
                <input type="text" class="form-control" id="image0" placeholder="新增圖一"
                v-model="images.image0"></label>
              </div>
              <div class="mb-1">
                <label for="image1" class="form-label">新增圖二
                <input type="text" class="form-control" id="image1" placeholder="新增圖二"
                v-model="images.image1"></label>
              </div>
              <div class="mb-3">
                <label for="image2" class="form-label">新增圖三
                <input type="text" class="form-control" id="image2" placeholder="新增圖三"
                v-model="images.image2"></label>
              </div>
              <!-- 多圖end -->
              <hr>
              <div class="mb-1">
                <label for="date0" class="form-label">日期一
                <input type="text" class="form-control" id="date0" placeholder="日期一"
                v-model="date.date0"></label>
              </div>
              <div class="mb-1">
                <label for="date1" class="form-label">日期二
                <input type="text" class="form-control" id="date1" placeholder="日期二"
                v-model="date.date1"></label>
              </div>
              <div class="mb-3">
                <label for="date2" class="form-label">日期三
                <input type="text" class="form-control" id="date2" placeholder="日期三"
                v-model="date.date2"></label>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題
                <input type="text" class="form-control"
                id="title" placeholder="請輸入標題"
                v-model="tempProduct.title"></label>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-4">
                  <label for="location" class="form-label">地點
                  <input type="text" class="form-control" id="location" placeholder="請輸入地點"
                  v-model="tempProduct.location"></label>
                </div>
                <div class="mb-3 col-md-4">
                  <label for="category" class="form-label">分類
                  <input type="text" class="form-control" id="category"
                  placeholder="請輸入分類"
                  v-model="tempProduct.category"></label>
                </div>
                <div class="mb-3 col-md-4">
                  <label for="unit" class="form-label">單位
                  <input type="text" class="form-control" id="unit" placeholder="請輸入單位"
                  v-model="tempProduct.unit"></label>
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價
                  <input type="number" class="form-control"
                  id="origin_price" placeholder="請輸入原價"
                  v-model.number="tempProduct.origin_price"></label>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價
                  <input type="number" class="form-control" id="price" placeholder="請輸入售價"
                  v-model.number="tempProduct.price"></label>
                </div>
              </div>
              <hr>
              <div class="mb-3">
                <label for="description" class="form-label">產品描述
                <textarea type="text" class="form-control"
                id="description" placeholder="請輸入產品描述"
                v-model="tempProduct.description"
                style="height: 100px;"></textarea></label>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容
                <textarea type="text" class="form-control"
                id="content" placeholder="請輸入產品說明內容"
                v-model="tempProduct.content" style="height: 200px;"></textarea></label>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <label class="form-check-label" for="is_enabled">
                    <input class="form-check-input" type="checkbox"
                          :true-value="1"
                          :false-value="0"
                          id="is_enabled"
                          v-model="tempProduct.is_enabled">
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
          <button type="button" class="btn btn-outline-info"
          @click="$emit('emit-product',tempProduct)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      const [a, b, c] = this.tempProduct.date;
      this.date.date0 = a;
      this.date.date1 = b;
      this.date.date2 = c;
      if (!this.tempProduct.images) {
        this.tempProduct.images = [];
      }
      const [d, e, f] = this.tempProduct.images;
      this.images.image0 = d;
      this.images.image1 = e;
      this.images.image2 = f;
    },
    date: {
      handler() {
        const dateAry = Object.values(this.date);
        this.tempProduct.date = dateAry;
      },
      deep: true,
    },
    images: {
      handler() {
        const imagesAry = Object.values(this.images);
        this.tempProduct.images = imagesAry;
      },
      deep: true,
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {
        modalTitle: '新增',
      },
      date: {
        date0: '',
        date1: '',
        date2: '',
      },
      images: {
        image0: '',
        image1: '',
        image2: '',
      },
    };
  },
  methods: {
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(api, formData).then((res) => {
        if (res.data.success) {
          this.tempProduct.imgUrl = res.data.imgUrl;
        }
      });
    },
  },
  mixins: [modalMixin],
};
</script>

<style scoped>
.form-label{
  width: 100%;
}
</style>
