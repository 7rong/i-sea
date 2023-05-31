<template>
  <LoadingComp :active="isLoading"></LoadingComp>
  <div class="text-end">
      <button class="btn btn-primary" type="button"
      @click="openModal(true)">新增文章</button>
  </div>
  <table class="table mt-4">
    <thead>
        <tr>
        <th width="120">標籤</th>
        <th>標題</th>
        <th width="120">作者</th>
        <th width="120">創作日期</th>
        <th width="100">是否公開</th>
        <th width="200">編輯</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in articles" :key="item.create_at">
        <td>{{ item.tag }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>
        <td>{{ create_at }}</td>
        <td>
            <span class="text-success" v-if="item.isPublic">公開</span>
            <span class="text-muted" v-else>不公開</span>
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
      <tr v-if="!articles.length">
        <td colspan="6" class="py-3 text-center">目前尚無文章</td>
      </tr>
    </tbody>
  </table>
    <PaginationComp :pages="pagination"
    @emit-page="getArticles" v-if="articles.length"></PaginationComp>
    <ArticleModal ref="articleModal"
    :Article="tempArticle"
    @emit-Article="updateArticle"
    ></ArticleModal>
    <DelModal ref="delModal"
    :delItem="tempArticle"
    @del-item="deleteArticle"></DelModal>
</template>

<script>
import PaginationComp from '@/components/PaginationComp.vue';
import DelModal from '@/components/DelModal.vue';
import ArticleModal from '../components/ArticleModal.vue';

export default {
  data() {
    return {
      articles: [],
      pagination: {},
      isLoading: false,
      tempArticle: { modalTitle: '新增' },
      isNew: false,
      create_at: '',
    };
  },
  components: {
    DelModal,
    PaginationComp,
    ArticleModal,
  },
  inject: ['pushMsgState'],
  methods: {
    getArticles(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.articles = res.data.articles;
        this.pagination = res.data.pagination;
        this.isLoading = false;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempArticle = { modalTitle: '新增' };
      } else {
        this.tempArticle = { ...item, modalTitle: '編輯' };
      }
      this.isNew = isNew;
      this.$refs.articleModal.showModal();
    },
    updateArticle(item) {
      this.tempArticle = item;
      const dateTime = new Date();
      const timestamp = Math.floor(dateTime / 1000);
      this.tempArticle.create_at = timestamp;
      this.create_at = dateTime.toLocaleDateString('en-CA');
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`;
      let method = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`;
        method = 'put';
      }
      this.$http[method](api, { data: this.tempArticle }).then((res) => {
        this.pushMsgState(res, '更新');
        this.getArticles();
        this.$refs.articleModal.hideModal();
      });
    },
    openDelModal(item) {
      this.tempArticle = { ...item };
      this.$refs.delModal.showModal();
    },
    deleteArticle() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`;
      this.$http.delete(api).then((res) => {
        this.getArticles();
        this.$refs.delModal.hideModal();
        this.pushMsgState(res, '刪除');
      });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
