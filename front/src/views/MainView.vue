<template>
  <div id="main-view">
<!--    메인 사진 영역-->
    <section class="img-area">
      <p class="title">
        프로젝트 함께 할 사람 <br>
        도대체 <strong>어디있니?</strong>
      </p>
      <p class="find-crew">파트너 크루 어디있니?</p>
    </section>

    <section class="content-area">
<!--      스펠링 체크-->
      <section class="recommand-partner">
        <div class="sub-title"></div>
        <div class="content-title"></div>
        <article>
          <div class="content-card">
            <div class="img-wrapper"></div>
            <div class="title"></div>
            <div class="content"></div>
            <span class="tags"></span>
            <span class="bookmark"></span>
          </div>
        </article>
      </section>
      <section class="recommand-crew"></section>
    </section>

  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss">
  @import '@/assets/scss/mainView.scss';

</style>
