<template>
  <div class='contest-view'>
    <div class='view-from' v-if="contestData !==''">
      <div class='item'>
        <img src="@/assets/svg/contestex.svg" width="300" height="350"/>
      </div>

      <div class="item item-title">{{contestData.title}}</div>

      <div class='item-icon'>
        <img src="@/assets/svg/share.svg" @click="shareClick" width="25" height="25" />
        <img src="@/assets/svg/bookmark_black.svg" width="25" height="25" />
      </div>
      <div class='item'>접수기간</div>
      <div class='item-content'>2020-10-17~1010-10-20</div>

      <div class='item'>주최</div>
      <div class='item-content'>한국정보통신위원회</div>

      <div class='item'>주관</div>
      <div class='item-content'>정보통신국</div>

      <div class='item'>시상</div>
      <div class='item-content'>1등: 300만원 2등: 100만원 3등: 30만원</div>

      <div class='item'>세부사항</div>
      <div class='item-content'>http://contest.info/에 접근하시면 많은 정보를 얻으실 수 있으십니다.</div>
    </div>
  </div>
</template>

<script>
export default {
  // axios 통신
  async beforeCreate() {
    await this.$store.dispatch('contestView');
    if (this.$route.params.id > this.$store.state.contest.length) {
      this.$router.push('/error');
    } else {
      this.contestData = this.$store.state.contest[this.$route.params.id - 1];
    }
  },
  filters: {
    timeFilter(value) {
      return value.slice(0, 10);
    },
  },
  data() {
    return {
      contestData: '',
    };
  },
  methods: {
    shareClick() {
      const t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value = window.document.location.href;
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
      alert('클립보드로 복사가 완료되었습니다.');
    },
  },

};
</script>

<style scoped>
img{
  cursor:pointer;
}
.contest-view{
  margin:0 auto;
  padding-top:70px;
  text-align: center;
}
/* write-from start*/
.view-from{
  width:80%;
  display:grid;
  grid-template-columns: 3fr 1fr 2fr 1fr 1fr;
  grid-auto-rows: minmax(30px,auto);
  justify-items: start;
}
.item:nth-child(1){
  grid-row:1/7;
  justify-self: center;
}
.item-title{
  grid-column: 2/5;
  font-size:24px;
  font-weight: bold;
}
.item-icon{
  min-width: 80px;
}
.item-icon img{
  margin: 10px 15px 0 0;
  vertical-align: bottom;
}
.item-content{
  grid-column:3/6;
  text-align: left;
}
/* write-submit end*/
</style>
