<template>
  <li>
    <div class="post-header">
      <img :src="item.image || null" />
      <div class="user-info">
        <h1>{{ item.interest }}</h1>
        <span>{{ item.username }}</span>
      </div>
    </div>
    <div class="post-content">
      <h1>프로그램 희망</h1>
      <p>{{ item.description }}</p>
    </div>
    <div class="post-footer">
      <HashTag v-for="item in hashTagList" :key="item" :item="item" />
      <BookMark />
    </div>
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
      // const copyHashTag = [...this.item.hashTag];
      return copyHashTag.slice(0, 2);
    },
  },
};
</script>

<style scoped>
/* 게시글 카드 레이아웃 */
li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 25%;
  height: 324px;
  padding: 16px;
  background: #ffffff;
  box-sizing: border-box;
}

li:not(:nth-child(4)) {
  margin-right: 16px;
}

/* 직업, 프로그램 희망 텍스트 */
h1 {
  font-size: 16px;
}

/* 카드 헤더 부분 */
.post-header {
  display: flex;
  height: 20%;
}

.post-header img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border: 0;
  border-radius: 50%;
  object-fit: contain;
  background: blue;
}

.post-header .user-info {
  text-align: left;
}

/* 카드 본문 부분 */
.post-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 40%;
}

.post-content p {
  text-align: left;
  height: 100%;
}

/* 카드 푸터 부분 */
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 20%;
}

.post-footer .save-button {
  width: 48px;
  height: 48px;
}
</style>
