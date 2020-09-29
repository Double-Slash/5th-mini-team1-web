<template>
  <div class='crew-view'>
    <div class='view-from'>
      <div class='item'>
        <img src="@/assets/img/profile.png" width="300" height="350"/>
      </div>
      <div class="item item-day">D-30</div>
      <div class='item-icon'>
        <img src="@/assets/svg/share.svg" width="25" height="25"/>
        <img src="@/assets/svg/bookmark_black.svg" width="25" height="25" />
      </div>
      <div class='item item-title'>금융핀테크공모전</div>
      <div class="item item-info">
        한국투자증권<br>
        아이디어구상단계<br>
        현 구성 2인
      </div>
      <div class="item item-region"><img src="@/assets/svg/peek.svg"/>서울</div>
      <div class="item item-hashtag">
          <CHashTag v-for="hashTag in hashTags" :item="hashTag" :key="hashTag.id"></CHashTag>
      </div>
    </div>
  </div>
</template>

<script>
import CHashTag from '@/components/Button/HashTag.vue';

export default {
  data() {
    return {
      hashTags: ['수도권', 'UI/UX', '웹디자인'],
    };
  },
  components: {
    CHashTag,
  }, // axios 통신
};
</script>

<style scoped>
.crew-view{
  margin:0 auto;
  padding-top:70px;
  text-align: center;
}
/* write-from start*/
.view-from{
  display:grid;
  grid-template-rows:0.7fr 1.0fr 2fr 2fr 2fr 1fr 1fr;
  grid-template-columns: 3fr 1fr 2fr 1fr 1fr;
  grid-auto-rows: minmax(30px,auto);
  justify-items: start;
}
.item:nth-child(1){
  grid-row:1/8;
  justify-self: center;
}
.item-day{
  grid-column: 2/5;
  font-size:24px;
  font-weight: bold;
}
.item-icon{
  align-self: center;
  min-width: 80px;
}
.item-icon img{
  margin: 0px 15px 0 0;
  vertical-align: bottom;
}
.item-title{
  grid-column: 2/6;
  font-size:24px;
  font-weight: bold;
  align-self: flex-start;
}
.item-info{
  grid-column:2/6;
  grid-row:3/6;
  align-self: center;
  text-align:left;
}
.item-region{
  grid-column: 2/6;
}
.item-hashtag{
  grid-column: 2/6;
}
/* write-submit end*/
</style>
