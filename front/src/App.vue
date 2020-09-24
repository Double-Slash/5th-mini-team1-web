<template>
  <div id="app">
    <AppHeader />
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

<style>
.view-wrapper {
  width: 1728px;
  padding-top: 138px;
  margin: 0 auto;
}

@media (max-width: 1919px) {
  .view-wrapper {
    width: 1376px;
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
