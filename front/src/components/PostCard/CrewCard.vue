<template>
  <li class="post-layout">
    <router-link to="/crew/1">
      <div class="post">
        <div class="post-thumbnail">
          <img src="@/assets/img/profile.png" />
        </div>
        <div class="post-info">
          <div class="info-header">
            <h1>{{ item.title }}</h1>
            <span>{{ item.project_description }}</span>
          </div>
          <div class="info-content">
            <p>{{ item.team_description }}</p>
          </div>
          <div class="info-location">
            <img src="@/assets/svg/peek.svg" />
            <span>{{ item.location }}</span>
          </div>
        </div>
      </div>
      <div class="post-footer">
        <ul class="hashtag-wrapper">
          <HashTag v-for="item in hashTagList" :key="item" :item="item" />
        </ul>
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
      return copyHashTag.slice(0, 3);
    },
  },
};
</script>

<style scoped>
/* 게시글 카드 레이아웃 */
li {
  display: flex;
  flex-direction: column;
  flex: 0 0 33.333333%;
  height: 300px;
  padding: 8px;
}

a {
  padding: 16px;
  height: 100%;
  background: #ffffff;
  box-sizing: border-box;
  color: black;
  text-decoration: none;
}

h1 {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.33;
}

span,
p {
  font-size: 12px;
}

.post {
  display: flex;
  height: 80%;
}

.post .post-thumbnail {
  width: 50%;
  height: 100%;
  margin-right: 16px;
  object-fit: contain;
}

.post-thumbnail img {
  width: 100%;
  height: 100%;
}

.post-info {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.post-info .info-content {
  height: 60%;
  margin: 10px 0;
}

.post-info .info-location {
  display: flex;
  align-items: center;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 20%;
}

.hashtag-wrapper {
  display: flex;
}
</style>
