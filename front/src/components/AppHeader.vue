<template>
  <header>
    <div class="header-wrapper">
      <router-link to="/" class="logo-wrapper">
        <div class="logo-image"></div>
        <h1>어디있니</h1>
      </router-link>
      <nav>
        <router-link to="/partner">파트너 찾기</router-link>
        <router-link to="/crew">크루 찾기</router-link>
        <router-link to="/contest">공모전</router-link>
        <router-link to="/reference">레퍼런스</router-link>
        <router-link to="/about">ABOUT</router-link>
      </nav>
      <aside>
        <ul v-if="userInfo">
          <li class="image-wrapper">
            <img src="@/assets/svg/double-bookmark.svg" />
          </li>
          <li class="image-wrapper">
            <img src="@/assets/svg/message.svg" />
          </li>
          <img :src="userInfo.src || null" class="image-wrapper user-image" />
        </ul>
        <button v-else>Log In</button>
      </aside>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userInfo: false, // dummy -> vuex로 변경 예정
    };
  },
  // to do...
  // 1.유저 정보가 있는지에 따라 우측 상단(로그인 버튼, 유저 프로필) 분기 처리
  // 2.헤더를 fixed하고, 스크롤 위치에 따라 헤더 배경화면 색상 변경
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.05);
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1820px;
  padding: 48px 0;
  margin: 0 auto;
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
/* 라우터 활성화시 */
.router-link-exact-active {
  color:#2e88db;
}

h1 {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.33;
  color: #2e88db;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 100%;
}

nav > a:hover {
  color: #2e88db;
}

a {
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: black;
}

button {
  width: 90px;
  height: 36px;
  border-radius: 16px;
  border: solid 3px #2e88db;
  color: #2e88db;
  font-weight: bold;
  line-height: 1.33;
  background: none;
  outline:none;
}
button:hover{
  background-color:#2e88db;
  color:white;
}

.image-wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-left: 24px;
}

.user-image {
  border-radius: 50%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: none;
}

@media (max-width: 1919px) {
  .header-wrapper {
    width: 1450px;
  }
}

@media (max-width: 1440px) {
  .header-wrapper {
    width: 1300px;
  }
}

@media (max-width: 1312px) {
  .header-wrapper {
    width: 1100px;
  }
}
</style>
