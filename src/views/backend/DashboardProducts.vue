<template>
  <LoadingComp :active="isLoading"></LoadingComp>
  <div class="text-end">
      <button class="btn btn-primary" type="button"
      @click="openModal(true)">新增產品</button>
  </div>
  <table class="table mt-4">
      <thead>
          <tr>
            <th width="90">分類</th>
            <th>產品名稱</th>
            <th width="100" class="d-none d-md-table-cell">原價</th>
            <th width="100" class="d-none d-md-table-cell">售價</th>
            <th width="80">是否啟用</th>
            <th width="110">編輯</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="d-none d-md-table-cell">
                {{ $filters.currency(item.origin_price) }}
            </td>
            <td class="d-none d-md-table-cell">
                {{ $filters.currency(item.price) }}
            </td>
            <td>
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span class="text-muted" v-else>未啟用</span>
            </td>
            <td class="text-end">
                <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)">刪除</button>
                </div>
            </td>
          </tr>
          <tr v-if="!products.length">
            <td colspan="6" class="text-center py-3">目前尚無商品</td>
          </tr>
      </tbody>
    </table>
    <PaginationComp :pages="pagination"
    @emit-page="getProducts" v-if="products.length"></PaginationComp>
    <ProductModal ref="productModal"
    :product="tempProduct"
    @emit-product="updateProduct"
    ></ProductModal>
    <DelModal ref="delModal"
    :delItem="tempProduct"
    @del-item="deleteProduct"></DelModal>
</template>

<script>
import PaginationComp from '@/components/PaginationComp.vue';
import DelModal from '@/components/DelModal.vue';
import ProductModal from '../../components/ProductModal.vue';

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
    PaginationComp,
  },
  inject: ['pushMsgState'],
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
          date: [],
          images: [],
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
        this.getProducts();
        const data = res;
        data.content = `已儲存商品「${item.title}」`;
        this.pushMsgState(data, '更新');
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
