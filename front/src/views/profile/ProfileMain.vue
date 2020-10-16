<template>
  <section>
    <article class="profile-container">
      <div class="thumbnail-wrapper">
        <img src="@/assets/img/profile/profile4.png" class="user-thumbnail" />
      </div>
      <div>
        <h1>{{ userInfo.username }}</h1>
        <span>{{ userInfo.email }}</span>
      </div>
      <div class="buttons">
        <button class="logout-btn" @click="logout">로그아웃</button>
        <router-link to="/profile/edit">
          <img src="@/assets/svg/gear.svg" alt="설정 버튼" />
        </router-link>
      </div>
    </article>
    <article class="partner-container">
      <h1>나의 파트너 프로필</h1>
      <ul></ul>
      <div class="none-posts-text">
        <p>나의 파트너 프로필이 존재하지 않습니다</p>
      </div>
    </article>
    <article class="crew-container">
      <h1>나의 크루 프로필</h1>
      <ul></ul>
      <div class="none-posts-text">
        <p>나의 크루 프로필이 존재하지 않습니다</p>
      </div>
    </article>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { setToken } from '@/utils/jwtToken';

export default {
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    logout() {
      setToken("");
      this.$store.commit("setUserClear");
      window.location.href = '/';
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 40px;
}

article {
  margin-bottom: 40px;
}

.profile-container {
  display: flex;
  align-items: center;
}

.thumbnail-wrapper {
  width: 72px;
  height: 72px;
  margin-right: 16px;
  border-radius: 50%;
  overflow: hidden;
}

.user-thumbnail {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}

.buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
}

.logout-btn {
  padding: 8px 24px;
  border-radius: 24px;
  margin-right: 16px;
  background: #2e88db;
  color: white;
}

.partner-container,
.crew-container {
  min-height: 200px;
}

.none-posts-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
button{
  outline:none;
}
</style>
