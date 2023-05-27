<template>
  <LoadingComp :active="isLoading">
    <div class="loadingio-spinner-ripple-lmh4mlln0v9"><div class="ldio-w9lf8z91sj">
  <div></div><div></div>
  </div></div>
  </LoadingComp>
  <div class="text-end">
      <button class="btn btn-primary" type="button"
      @click="openModal(true)">新增產品</button>
  </div>
  <table class="table mt-4">
      <thead>
          <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
              {{ item.origin_price }}
          </td>
          <td class="text-right">
              {{ item.price }}
          </td>
          <td>
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
              <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)">刪除</button>
              </div>
          </td>
          </tr>
      </tbody>
    </table>
    <ProductModal ref="productModal"
    :product="tempProduct"
    @emit-product="updateProduct"
    ></ProductModal>
    <DelModal ref="delModal"
    :delProduct="tempProduct"
    @del-product="deleteProduct"></DelModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';
import DelModal from '../components/DelModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {
          modalTitle: '新增',
        };
      } else {
        this.tempProduct = { ...item, modalTitle: '編輯' };
      }
      this.isNew = isNew;
      const productComp = this.$refs.productModal;
      productComp.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      console.log(item);
      // 預設為新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';

      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        productComponent.hideModal();
        if (res.data.success) {
          this.getProducts();
          this.emitter.emit('push-msg', {
            style: 'success',
            title: '更新成功',
          });
        } else {
          this.emitter.emit('push-msg', {
            style: 'danger',
            title: '更新失敗',
            content: res.data.message.join('、'),
          });
        }
      });
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delComp = this.$refs.delModal;
      delComp.showModal();
    },
    deleteProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      const delComp = this.$refs.delModal;
      this.$http.delete(api).then((res) => {
        console.log(res.data.message);
        delComp.hideModal();
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style type="text/css">
  @keyframes ldio-w9lf8z91sj {
    0% {
      top: 96px;
      left: 96px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 18px;
      left: 18px;
      width: 156px;
      height: 156px;
      opacity: 0;
    }
  }.ldio-w9lf8z91sj div {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ldio-w9lf8z91sj 1s cubic-bezier(0,0.2,0.8,1) infinite;
  }.ldio-w9lf8z91sj div:nth-child(1) {
    border-color: #e90c59;
    animation-delay: 0s;
  }
  .ldio-w9lf8z91sj div:nth-child(2) {
    border-color: #46dff0;
    animation-delay: -0.5s;
  }
  .loadingio-spinner-ripple-lmh4mlln0v9 {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-w9lf8z91sj {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-w9lf8z91sj div { box-sizing: content-box; }
  /* generated by https://loading.io/ */
</style>
