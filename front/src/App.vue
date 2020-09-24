<template>
  <div id="app">
    <AppHeader />
    <main class="view-wrapper">
      <router-view></router-view>
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
</style>
