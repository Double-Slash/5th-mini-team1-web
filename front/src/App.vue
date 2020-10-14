<template>
  <div id="app">
    <AppHeader />

    <!--    메인 사진 영역-->
<!--    <section class="img-area">-->
<!--      <p class="title">-->
<!--        프로젝트 함께 할 사람 <br>-->
<!--        도대체 <strong>어디있니?</strong>-->
<!--      </p>-->
<!--      <p class="find-crew">파트너 크루 어디있니?</p>-->
<!--    </section>-->

    <main class="view-wrapper">
      <transition name="routing-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
  /*.img-area{*/
  /*width: 100%;
  /*height: 1000px; margin-top: -138px;*/
    /*padding: 0 140px;*/
    /*display: flex; flex-flow: row;justify-content: flex-start; align-items: center;*/
    /*background-image: url("./assets/img/mainImg.png");*/
    /*.title{font-size: 50px; color:white; }*/
    /*.find-crew{color:white; margin-top: auto}*/
  /*}*/

.view-wrapper {
  width: 1728px;
  padding-top: 106px;
  margin: 0 auto;
}

@media (max-width: 1919px) {
  .view-wrapper {
    width: 1376px;
    /*width: 100%;*/
  }
}

@media (max-width: 1440px) {
  .view-wrapper {
    width: 1280px;
  }
}

@media (max-width: 1312px) {
  .view-wrapper {
    width: 912px;
  }
}

/* Router Transition */
.routing-fade-enter-active,
.routing-fade-leave-active {
  transition: opacity 0.3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;


}
</style>
