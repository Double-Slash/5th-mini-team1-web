<template>
  <li>
    <router-link to="/partner/:id">
      <div class="post-header">
        <img src="@/assets/img/profile.png" />
        <div class="user-info">
          <h1>{{ item.interest }}</h1>
          <span>{{ item.username }}</span>
        </div>
      </div>
      <div class="post-content">
        <h1>{{ item.title }}</h1>
        <p>{{ item.description }}</p>
      </div>
      <div class="post-footer">
        <HashTag v-for="item in hashTagList" :key="item" :item="item" />
        <BookMark />
      </div>
    </router-link>
  </li>
</template>

<script>
import HashTag from "@/components/Button/HashTag.vue";
import BookMark from "@/components/Button/BookMark.vue";

export default {
  components: {
    HashTag,
    BookMark,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hashTagList() {
      const copyHashTag = [...this.item.hashtags];
      return copyHashTag.slice(0, 2);
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  flex: 0 0 25%;
  height: 324px;
  padding: 8px;
}
/* 게시글 카드 레이아웃 */
a {
  padding: 16px;
  height: 100%;
  background: #ffffff;
  box-sizing: border-box;
  color: black;
  text-decoration: none;
}

li:not(:nth-child(4)) {
  padding: 8px;
}

/* 직업, 프로그램 희망 텍스트 */
h1 {
  font-size: 16px;
}

/* 카드 헤더 부분 */
.post-header {
  display: flex;
  align-items: center;
  height: 20%;
  margin-bottom: 16px;
}

.post-header img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border: 0;
  border-radius: 50%;
}

.post-header .user-info {
  text-align: left;
}

.user-info span {
  font-weight: 300;
  font-size: 0.8rem;
}

/* 카드 본문 부분 */
.post-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 60%;
}

.post-content p {
  height: 100%;
  margin-top: 8px;
  text-align: left;
  font-weight: 300;
}

/* 카드 푸터 부분 */
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.post-footer .save-button {
  width: 32px;
  height: 32px;
}
</style>
