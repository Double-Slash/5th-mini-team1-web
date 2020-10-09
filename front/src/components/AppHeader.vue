<template>
  <header :style="changeHeader">
    <div class="header-wrapper">
      <router-link to="/" class="logo-wrapper">
        <div class="logo-image"></div>
        <h1 :style="changeTitle">어디있니</h1>
      </router-link>
      <nav>
        <router-link to="/partner" :style="changeText">파트너 찾기</router-link>
        <router-link to="/crew" :style="changeText">크루 찾기</router-link>
        <router-link to="/contest" :style="changeText">공모전</router-link>
        <router-link to="/reference" :style="changeText">레퍼런스</router-link>
        <router-link to="/about" :style="changeText">ABOUT</router-link>
      </nav>
      <aside>
        <ul v-if="token" class="user-login-after">
          <router-link to="/bookmark">
            <li class="image-wrapper">
              <img src="@/assets/svg/double-bookmark.svg" />
            </li>
          </router-link>
          <router-link to="/message">
            <li class="image-wrapper">
              <img src="@/assets/svg/message.svg" />
            </li>
          </router-link>
          <router-link to="/profile">
            <li>
              <img :src="null" class="image-wrapper user-image" />
            </li>
          </router-link>
        </ul>
        <button v-else @click="clickLogInBtn" :style="changeButton">
          Log In
        </button>
        <LogInModal v-if="logInModalActive" />
      </aside>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import LogInModal from "./LogInModal.vue";

export default {
  components: {
    LogInModal,
  },
  created() {
    window.addEventListener("scroll", this.detectWindowScrollY);
  },
  mounted() {
    this.detectWindowScrollY();
  },
  destroyed() {
    window.removeEventListener("scroll", this.detectWindowScrollY);
  },
  data() {
    return {
      headerStyle: false, // false : 배경 투명, 글자 흰색. true : 배경 흰색, 글자 검정
      logInModalActive: false,
    };
  },
  computed: {
    ...mapState(["token"]),
    // 헤더 스타일 변경
    changeHeader() {
      if (this.$route.path !== "/") return null;
      if (this.headerStyle === true) {
        return {
          background: "white",
          boxShadow: "0 3px 20px 0 rgba(0, 0, 0, 0.05) }",
        };
      }
      return { background: "transparent", boxShadow: "0 0 black" };
    },
    // 로그인 버튼 스타일 변경
    changeButton() {
      if (this.$route.path !== "/") return null;
      if (this.headerStyle === true) {
        return {
          border: "solid 3px #2e88db",
          color: "#2e88db",
        };
      }
      return {
        border: "solid 3px white",
        color: "white",
      };
    },
    // 제목 스타일 변경
    changeTitle() {
      if (this.$route.path !== "/") return null;
      if (this.headerStyle === true) return { color: "#2e88db" };
      return { color: "white" };
    },
    // 메뉴 텍스트 스타일 변경
    changeText() {
      if (this.$route.path !== "/") return null;
      if (this.headerStyle === true) return { color: "black" };
      return { color: "white" };
    },
  },
  methods: {
    detectWindowScrollY() {
      if (window.scrollY === 0) {
        this.headerStyle = false;
      } else {
        this.headerStyle = true;
      }
    },
    clickLogInBtn() {
      this.logInModalActive = true;
    },
  },
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
  color: #2e88db;
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
  outline: none;
}

button:hover {
  background-color: #2e88db;
  color: white;
}

.user-login-after {
  display: flex;
}

.image-wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-left: 24px;
  cursor: pointer;
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
