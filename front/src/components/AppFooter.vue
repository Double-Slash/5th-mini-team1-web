<template>
  <footer>
    <div class="footer-top">
      <div class="top-content">
        <router-link to="/" class="logo-wrapper">
          <div class="logo-image"></div>
          <h1>어디있니</h1>
        </router-link>
        <ul class="content-policy">
          <li>서비스이용약관</li>
          <li>개인정보처리방침</li>
          <li>고객센터</li>
        </ul>
      </div>
      <div class="top-buttom">
        <div class="image-wrapper">
          <img src="@/assets/svg/facebook.svg" />
        </div>
        <div class="image-wrapper">
          <img src="@/assets/svg/instagram.svg" />
        </div>
        <div class="image-wrapper">
          <img src="@/assets/svg/twitter.svg" />
        </div>
      </div>
    </div>
    <div class="footer-bottom">All rights reserved. copyright ⓒ 2020</div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  width: 1820px;
  padding: 32px 0;
  margin: 0 auto;
}

img {
  width: 100%;
  height: 100%;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.top-content {
  display: flex;
}

.logo-wrapper {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 30px;
  height: 30px;
  margin-right: 8px;
  opacity: 0.36;
  border-radius: 20px;
  background-color: #2e88db;
}

h1 {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.33;
  color: #2e88db;
}

.content-policy {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 300px;
  margin-left: 48px;
}

.image-wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 8px;
}

.footer-bottom {
  margin-top: 20px;
  text-align: right;
}

@media (max-width: 1919px) {
  footer {
    width: 1450px;
  }
}

@media (max-width: 1440px) {
  footer {
    width: 1300px;
  }
}

@media (max-width: 1312px) {
  footer {
    width: 1100px;
  }
}
</style>
