<template>
  <div class="faq-banner bg-style d-flex justify-content-center align-items-center">
    <h2 class="text-white border border-3 border-white px-4 py-2">常見問題</h2>
  </div>
  <div class="container-fluid cus-bg-patterns py-5">
    <p class="text-center text-secondary mb-4">
      以下是初接觸 I SEA 的常見問題，或許這裡可以解答你99%的疑問～</p>
    <div class="col-8 mx-auto mb-3">
        <div class="border-bottom border-1 border-light pb-2">
          <a data-bs-toggle="collapse"
          class="link-secondary text-decoration-none h5 d-block collapse-q"
          @click.capture="getAnswer"
            href="#collapseQ1" role="button"
            aria-expanded="false" aria-controls="collapseQ1">
            <i class="bi bi-caret-right arrow-active"></i>
            要會自由潛水才能報名旅遊嗎？
          </a>
          <div class="collapse text-light ps-4 show" id="collapseQ1">
            <div>
              潛旅團報名必須擁有自由潛水證照，或者上過正式自由潛水課程。 <br>
              體驗課則無限制。
            </div>
          </div>
        </div>
        <div class="border-bottom border-1 border-light pb-2 pt-3">
          <a data-bs-toggle="collapse"
          class="link-secondary text-decoration-none h5 d-block collapse-q"
          @click.capture="getAnswer"
            href="#collapseQ2" role="button"
            aria-expanded="false" aria-controls="collapseQ2">
            <i class="bi bi-caret-right"></i>
            如果天氣不好取消，會退費嗎？
          </a>
          <div class="collapse text-light ps-4" id="collapseQ2">
            <div>
              由當地船家決定或中央氣象局發佈海警，則取消並無條件全額退費。
            </div>
          </div>
        </div>
        <div class="border-bottom border-1 border-light pb-2 pt-3">
          <a data-bs-toggle="collapse"
          class="link-secondary text-decoration-none h5 d-block collapse-q"
          @click.capture="getAnswer"
            href="#collapseQ3" role="button"
            aria-expanded="false" aria-controls="collapseQ3">
            <i class="bi bi-caret-right"></i>
            自由潛水和水肺潛水有何不同？
          </a>
          <div class="collapse text-light ps-4" id="collapseQ3">
            <div>
              「自由潛水」課程，著重於了解自己身體的狀態，並將它發揮到最好。這門課程教你的是「如何控制自己的身體」。<br>
              「水肺潛水」課程，就像是上汽車駕訓班，它教你的是「如何操控你的裝備」，學習如何「駕駛」你的裝備，在水中遨遊。
            </div>
          </div>
        </div>
        <div class="border-bottom border-1 border-light pb-2 pt-3">
          <a data-bs-toggle="collapse"
          class="link-secondary text-decoration-none h5 d-block collapse-q"
          @click.capture="getAnswer"
            href="#collapseQ4" role="button"
            aria-expanded="false" aria-controls="collapseQ4">
            <i class="bi bi-caret-right"></i>
            報名後因故無法參加，可以轉讓嗎？
          </a>
          <div class="collapse text-light ps-4" id="collapseQ4">
            <div>
              可以轉讓，請提前告知。
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    getAnswer(e) {
      if (e.target.nodeName === 'A') {
        e.target.children[0].classList.toggle('arrow-active');
      } else if (e.target.nodeName === 'I') {
        e.target.classList.toggle('arrow-active');
      }
    },
  },
};
</script>
