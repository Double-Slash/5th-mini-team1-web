<template>
  <li class="user-list-item">
    <div class="user-thumbnail">
      <img :src="null" />
    </div>
    <div class="user-content">
      <h1>유저 이름</h1>
      <p>최근 메시지</p>
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style scoped>
/* 유저 리스트 아이템 */
.user-list-item {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
}

/* 유저 썸네일 이미지 */
.user-list-item > .user-thumbnail {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: black;
}

/* 유저 이름, 최근 메시지 텍스트 */
.user-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 16px;
}

/* 유저 이름 */
.user-content > h1 {
  font-size: 1rem;
}
</style>
