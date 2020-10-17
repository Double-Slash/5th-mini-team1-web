<template>
<router-link to="contest/1">
  <li>    
    <div class="post-thumbnail">
      <img src="@/assets/img/profile.png" />
      <!-- <img :src="item.thumbnail || null" /> -->
    </div>
    <div class="post-info">
      <div class="info-header">
        <h1>{{ item.title }}</h1>
        <p>{{ item.host_info }}</p>
      </div>
      <div class="info-content">
        <p>{{ item.detail }}</p>
      </div>
      <div class="info-footer">
        <span>D-8</span>
        <BookMark />
      </div>
    </div>
  </li>
      </router-link>
</template>

<script>
import BookMark from "@/components/Button/BookMark.vue";

export default {
  components: {
    BookMark,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* 이벤트 카드 레이아웃 */
li {
  display: flex;
  flex: 0 0 50%;
  height: 256px;
  background-color: #ffffff;
}

li:not(:nth-child(2)) {
  margin-right: 16px;
}

h1 {
  font-size: 1rem;
}

/* 썸네일 이미지 wrapper */
.post-thumbnail {
  width: 33%;
  height: 100%;
}

/* 썸네일 이미지 */
.post-thumbnail img {
  width: 100%;
  height: 100%;
}

/* 제목, 본문, 푸터 부분 */
.post-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 66%;
  height: 100%;
  padding: 24px;
  text-align: left;
}

.info-content {
  height: 60%;
  margin: 1rem 0;
}

.info-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>
