<template>
  <div class='contest-view'>
    <div class='view-from'>
      <div class='item'>
        <img src="@/assets/img/profile.png" width="300" height="350"/>
      </div>

      <div class="item item-title">금융핀테크공모전</div>

      <div class='item-icon'>
        <img src="@/assets/svg/share.svg" width="25" height="25"/>
        <img src="@/assets/svg/bookmark_black.svg" width="25" height="25" />
      </div>
      <div class='item'>접수기간</div>
      <div class='item-content'>2020.09.03 ~ 2020.09.18</div>

      <div class='item'>주최</div>
      <div class='item-content'>교육부</div>

      <div class='item'>주관</div>
      <div class='item-content'>한국과학창의재단</div>

      <div class='item'>시상</div>
      <div class='item-content'>1천만원 이하</div>

      <div class='item'>세부사항</div>
      <div class='item-content'>큼융핀테크공모전은ㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇ<br>asd</div>
    </div>
  </div>
</template>

<script>

export default {
  // axios 통신
};
</script>

<style scoped>
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
