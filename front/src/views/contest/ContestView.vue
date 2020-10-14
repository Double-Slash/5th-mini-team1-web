<template>
  <div class='contest-view'>
    <div class='view-from' v-if="contestData !==''">
      <div class='item'>
        <img src="@/assets/img/profile.png" width="300" height="350"/>
      </div>

      <div class="item item-title">{{contestData.title}}</div>

      <div class='item-icon'>
        <img src="@/assets/svg/share.svg" @click="shareClick" width="25" height="25" />
        <img src="@/assets/svg/bookmark_black.svg" width="25" height="25" />
      </div>
      <div class='item'>접수기간</div>
      <div class='item-content'>{{contestData.deadline | timeFilter }}</div>

      <div class='item'>주최</div>
      <div class='item-content'>{{contestData.host}}</div>

      <div class='item'>주관</div>
      <div class='item-content'>{{contestData.host_info}}</div>

      <div class='item'>시상</div>
      <div class='item-content'>{{contestData.award}}</div>

      <div class='item'>세부사항</div>
      <div class='item-content'>{{contestData.detail}}</div>
    </div>
  </div>
</template>

<script>
export default {
  // axios 통신
  async beforeCreate() {
    await this.$store.dispatch('contestView');
    this.contestData=this.$store.state.contest[this.$route.params.id-1];
  },
  filters:{
    timeFilter(value){
      return value.slice(0,10);
    }
  },
  data(){
    return{
      contestData:'',
    }
  },
  methods:{
    shareClick(){
      var t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value=window.document.location.href;
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
      alert('클립보드로 복사가 완료되었습니다.');
    }
  }

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
  display:grid;
  grid-template-columns: 3fr 1fr 2fr 1fr 1fr;
  grid-auto-rows: minmax(30px,auto);
  justify-items: start;
  align-items: top;
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
