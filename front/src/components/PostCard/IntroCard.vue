<template>
  <div class='intro-card'>
    <div class="intro-title">{{this.title}}</div>
    <div class="intro-content">{{this.content}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
};
</script>

<style scoped>
.intro-card{
    width:90%;
    margin: 0 auto;
    text-align:left;
}
.intro-title{
    padding: 20px 0 10px 20px;
    font-weight: bold;
}
.intro-content{
    width: 100%;
    min-height: 150px;
    max-height: 200vh;
    padding: 20px 0 20px 20px;
    background-color: #f1f0f0;
    overflow-y: auto;
}
</style>
