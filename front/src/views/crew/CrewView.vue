<template>
  <div class='crew-view'>
    <div class='view-from'>
      <div class='form-img'>
        <img src="@/assets/img/profile.png" width="300" height="350"/>
      </div>
      <div class="form-day">D-30</div>
      <div class='form-icon'>
        <img src="@/assets/svg/share.svg" width="25" height="25"/>
        <img src="@/assets/svg/bookmark_black.svg" width="25" height="25" />
      </div>
      <div class='form-title'>금융핀테크공모전</div>
      <div class="form-info">
        한국투자증권<br>
        아이디어구상단계<br>
        현 구성 2인
      </div>
      <div class="form-region"><img src="@/assets/svg/peek.svg"/>서울</div>
      <div class="form-hashtag">
          <CHashTag v-for="hashTag in hashTags" :item="hashTag" :key="hashTag.id"></CHashTag>
      </div>
    </div>
    <IntroCard v-for="item in items" :key="item.id" class='view-info'
    :title="item.title" :content="item.content"></IntroCard>
    <div class="view-card">
      <div class="card-info">담당자 정보</div>
      <div class="card-grid">
        <div class="grid-img">
          <img src="@/assets/img/profile.png" width="100" height="100">
        </div>
        <div class="grid-name">강세정</div>
        <div class="grid-info"> 22살  |  서울 |  디자인/캐릭터</div>
        <div class="grid-email">
          <img src="@/assets/svg/email.svg"> tpwjd708@naver.com</div>
        <div class="grid-hashtag">
          <CHashTag v-for="hashTag in hashTags" :item="hashTag" :key="hashTag.id"></CHashTag>
        </div>
        <div class="grid-btn">
          <img  width="20" height="20" src="@/assets/svg/share.svg">
          <img  width="20" height="20" src="@/assets/svg/bookmark.svg">
        </div>
      </div>
    </div>
    <button>지원하기</button>
    <button @click="sendMessage()">문의하기</button>
  </div>
</template>

<script>
import CHashTag from '@/components/Button/HashTag.vue';
import IntroCard from '@/components/PostCard/IntroCard.vue';

export default {
  data() {
    return {
      hashTags: ['수도권', 'UI/UX', '웹디자인'],
      items: [
        {
          title: '프로젝트 소개',
          content: '안녕하세요 저는 성신여자대학교 강세정입니다.',
        },
        {
          title: '모집안내',
          content: '안녕하세요 저는 성신여자대학교 강세정입니다.',
        },
        {
          title: '자격요건 및 우대사항',
          content: '안녕하세요 저는 성신여자대학교 강세정입니다.',
        },
      ],
    };
  },
  components: {
    CHashTag,
    IntroCard,
  }, // axios 통신
  methods: {
    sendMessage() {
      console.log('heelo');
    },
  },
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
  grid-template-rows:1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 3fr 1fr 2fr 1fr 1fr;
  grid-auto-rows: minmax(30px,auto);
  justify-items: start;
}
.form-img{
  grid-row:1/8;
  justify-self: center;
}
.form-day{
  grid-column: 2/5;
  font-size:24px;
  font-weight: bold;
}
.form-icon{
  align-self: center;
  min-width: 80px;
}
.form-icon img{
  margin: 0px 15px 0 0;
  vertical-align: bottom;
}
.form-title{
  grid-column: 2/6;
  font-size:24px;
  font-weight: bold;
  align-self: flex-start;
}
.form-info{
  grid-column:2/6;
  grid-row:3/6;
  align-self: center;
  text-align:left;
}
.form-region{
  grid-column: 2/6;
}
.form-hashtag{
  grid-column: 2/6;
}
/* write-submit end*/

/* view-info start */
.view-info{
  margin-top:40px;
}
/* view-info end */

/* view-card start */
.view-card{
  width:90%;
  margin: 40px auto;
  text-align: left;
}
.card-info{
  margin-bottom:20px;
  font-weight: bold;
}
.card-grid{
  display:grid;
  grid-template-rows:1fr 1fr 1fr;
  grid-template-columns: 1.3fr 0.7fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
.grid-img{
  grid-row:1/4;
}
.grid-img img{
  border-radius: 50px;
}
.grid-name{
  align-self: center;
  font-weight: bold;
  font-size:20px;
}
.grid-info{
  grid-column: 3/11;
  align-self: flex-end;
}
.grid-email{
  grid-column:2/11;
}
.grid-hashtag{
  grid-column: 2/10;
}
.grid-btn{
  justify-self: right;
}
.grid-btn img{
  cursor:pointer;
  margin-right:10px;
}
/* view-card end */

button{
  padding:10px;
  background:rgba(46,136,219,1);
  color:white;
  border-radius:30px;
  margin-right:10px;
  outline:none;
}
</style>
