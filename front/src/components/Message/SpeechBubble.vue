<template>
  <li class="message-item" :class="position">
    <div class="message-content" :class="position">
      sdfsdfsfsdfsfssdfsdfsfsdfsfsdsdfsdfsfsdfsfsdd
    </div>
  </li>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
    },
  },
};
</script>

<style scoped>
/* 메시지 아이템 */
.message-item {
  display: flex;
}

/* 메시지 내용 */
.message-content {
  display: flex;
  align-items: center;
  width: 40%;
  height: auto;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 30px;
  word-break: break-all;
  background-color: rgba(46, 136, 219, 0.32);
}

/* props가 left인 경우 */
.message-item.left {
  justify-content: flex-start;
}
.message-content.left {
  background-color: rgba(46, 136, 219);
  color: white;
}

/* props가 right인 경우 */
.message-item.right {
  justify-content: flex-end;
}
.message-content.right {
  background-color: rgba(46, 136, 219, 0.32);
}
</style>
