<template>
  <div class="cus-bg-patterns">
    <div class="home-banner bg-style d-flex justify-content-center text-white
    flex-column align-items-center">
      <p class="ms-4">You only live once！</p>
      <h2 class="ms-4 display-5 fw-bold">出走吧，感受真正的自由</h2>
      <router-link to="/products" class="btn-cus-hover mt-4"
      @click="updateFilter('所有行程')">
        <p>馬上出遊！</p>
      </router-link>
    </div>
    <section class="pt-5 position-relative cus-bg-color" style="height:400px">
      <svg width="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150 position-absolute  svg-top"><path d="M 0,500 C 0,500 0,166 0,166 C 155.06666666666666,187.46666666666667 310.1333333333333,208.93333333333334 473,207 C 635.8666666666667,205.06666666666666 806.5333333333333,179.73333333333335 969,169 C 1131.4666666666667,158.26666666666665 1285.7333333333333,162.13333333333333 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#40536b" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,500 C 0,500 0,333 0,333 C 195.7333333333333,329.5333333333333 391.4666666666666,326.06666666666666 556,315 C 720.5333333333334,303.93333333333334 853.8666666666666,285.26666666666665 996,287 C 1138.1333333333334,288.73333333333335 1289.0666666666666,310.8666666666667 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#40536b" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
      <div class="p-1 position-absolute text-white translate-middle purpose">
        <h3 class="py-3">想一頭潛入海裡，我懂</h3>
        <p class="m-0">曾經的我也是，嚮往潛入海中，和可愛的海豚快樂悠遊，</p>
        <p class="m-0">但我沒有潛伴啊！也不知道該怎麼出國潛水啊！</p>
        <p class="m-0">經過無數日子的摸索，於2022年成立ISEA</p>
        <p class="m-0">現在的你，不用怕！！！</p>
        <p class="m-0 pb-5">跟著我們一起一無反顧地潛入這片大海吧！</p>
      </div>
      <div class="circle-s position-absolute rounded-circle"></div>
      <div class="circle-l position-absolute rounded-circle"></div>
    </section>
    <section class="position-relative" style="height:600px">
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150 position-absolute svg-bot"><path d="M 0,500 C 0,500 0,250 0,250 C 126.66666666666663,241.73333333333332 253.33333333333326,233.46666666666664 435,246 C 616.6666666666667,258.53333333333336 853.3333333333335,291.8666666666667 1030,296 C 1206.6666666666665,300.1333333333333 1323.3333333333333,275.06666666666666 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#40536b" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
      <div class="position-absolute between-svg top-0"></div>
      <div class="position-absolute intro-list-container translate-middle start-50">
        <div class="d-flex text-white intro-list">
          <router-link to="/products" class="intro-one-day bg-style intro-style"
          @click="updateFilter('一日玩水')">
            <div class="px-3 intro-txt text-white" >
              <h3 class="pb-2">一日玩水</h3>
              <p class="border-top border-white pt-2">你累積了許多飛行</p>
            </div>
          </router-link>
          <router-link to="/products" class="intro-abroad bg-style intro-style"
          @click="updateFilter('國外潛旅')">
            <div class="px-3 intro-txt text-white" >
              <h3 class="pb-2">國外潛旅</h3>
              <p class="border-top border-white pt-2">你蒐集了地圖上每一次的風和日麗</p>
            </div>
          </router-link>
          <router-link to="/products" class="intro-domestic bg-style intro-style"
          @click="updateFilter('國內潛旅')">
            <div class="px-3 intro-txt text-white" >
              <h3 class="pb-2">國內潛旅</h3>
              <p class="border-top border-white pt-2">你擁抱熱情的島嶼</p>
            </div>
          </router-link>
        </div>
        <router-link to="/products" class="btn-cus-hover d-block mt-3 mx-auto"
        @click="updateFilter('所有行程')">
          <p>帶我出去玩</p>
        </router-link>
      </div>
      <i class="bi bi-chevron-double-down position-absolute
      translate-middle start-50 intro-icons fs-1 text-info intro-icon"></i>
    </section>
    <section class="py-5 text-secondary container-fluid">
      <h3 class="text-center mb-4">沒事，你負責玩</h3>
      <div class="row justify-content-center">
        <div class="col-10 col-md-3">
          <div class="card bg-transparent border-0">
            <div class="card-body text-secondary d-flex flex-column align-items-center">
              <i class="bi bi-calendar-check display-4"></i>
              <h4 class="card-title h5 mt-3 mb-3">妥善行程安排</h4>
              <p class="card-text text-start">
                充份玩樂，拒絕走馬看花！也有長期配合的當地導潛，讓你每一潛都安心～上岸也有精選美食，不怕餓肚子！這樣的行程，太完美了吧！
              </p>
            </div>
          </div>
        </div>
        <div class="col-10 col-md-3">
          <div class="card bg-transparent border-0">
            <div class="card-body text-secondary d-flex flex-column align-items-center">
              <i class="bi bi-person-vcard display-4"></i>
              <h4 class="card-title h5 mt-3 mb-3">領域專業教練</h4>
              <p class="card-text text-start">
                隨行教練皆有合格教練證，下水多年經驗豐富。專業教練看顧，下水安心玩！
              </p>
            </div>
          </div>
        </div>
        <div class="col-10 col-md-3">
          <div class="card bg-transparent border-0">
            <div class="card-body text-secondary d-flex flex-column align-items-center">
              <i class="bi bi-emoji-laughing display-4"></i>
              <h4 class="card-title h5 mt-3 mb-3">志同道合的潛伴</h4>
              <p class="card-text text-start">
                一個人報名沒用怕，所有行程，我們陪你玩！還可以無痛外帶一群志同道合的潛伴，你心動了嗎？
              </p>
            </div>
          </div>
        </div>
        <div class="col-10 col-md-3">
          <div class="card bg-transparent border-0">
            <div class="card-body text-secondary d-flex flex-column align-items-center">
              <i class="bi bi-camera2 display-4"></i>
              <h4 class="card-title h5 mt-3 mb-3">隨行攝影師</h4>
              <p class="card-text text-start">
                海陸空專業攝影，隨處出大片！照片皆為報名附贈，無需加價購買～
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="coupon-bg d-flex justify-content-start align-items-md-center">
        <div class="text-white text-start p-5">
          <p class="display-3 fw-bold">歡慶一週年</p>
          <p class="fw-bold">輸入優惠碼" {{ coupon_code }} "享八折</p>
          <button type="button" class="btn btn-outline-danger link-hover-white rounded-pill"
          @click="copyCoupon">複製優惠碼</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coupon_code: 'happy1',
    };
  },
  inject: [
    'pushMsgState',
    'emitter',
  ],
  methods: {
    copyCoupon() {
      navigator.clipboard.writeText(this.coupon_code)
        .then(() => {
          this.pushMsgState({
            data: { success: true },
            content: `已複製優惠碼「${this.coupon_code}」`,
          }, '複製');
        });
    },
    updateFilter(category) {
      localStorage.setItem('categoryItem', category);
    },
  },
};
</script>
