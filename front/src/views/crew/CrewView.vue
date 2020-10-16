<template>
  <div class='crew-view' v-if="crewData !=''">
    <div class='view-from'>
      <div class='form-img'>
        <img src="@/assets/img/profile.png" width="300" height="350"/>
      </div>
      <div class="form-day">{{crewData.deadline !== null ? crewData.deadline : 'NULL'}}</div>
      <div class='form-icon'>
        <img src="@/assets/svg/share.svg" @click="shareClick" width="25" height="25"/>
        <img src="@/assets/svg/bookmark_black.svg" width="25" height="25" />
      </div>
      <div class='form-title'>{{crewData.title !== null ? crewData.title : 'NULL'}}</div>
      <div class="form-info">
        {{crewData.content !== null ? crewData.content : 'NULL'}}
      </div>
      <div class="form-region"><img src="@/assets/svg/peek.svg"/>{{crewData.location !== null ? crewData.location : 'NULL'}}</div>
      <div class="form-hashtag">
          <CHashTag v-for="hashTag in crewData.hashtags" :item="hashTag" :key="hashTag.id"></CHashTag>
      </div>
    </div>
    <!-- <IntroCard v-for="item in items" :key="item.id" class='view-info'
    :title="item.title" :content="item.content"></IntroCard> -->
    <IntroCard class='view-info'
    title="프로젝트 소개" :content="crewData.project_description !==null ?crewData.project_description:'NULL'"></IntroCard>
    <IntroCard class='view-info'
    title="모집 안내" :content="crewData.team_description !==null ?crewData.team_description:'NULL'"></IntroCard>
    <IntroCard class='view-info'
    title="자격요건 및 우대사항" :content="crewData.qualifications !==null ?crewData.qualifications:'NULL'"></IntroCard>
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
    <button @click="sendMessage()">문의하기</button>
    <AskModal v-if="onModal" @close="closeModal"></AskModal>
  </div>
</template>

<script>
import CHashTag from '@/components/Button/HashTag.vue';
import IntroCard from '@/components/PostCard/IntroCard.vue';
import AskModal from '@/components/CrewAskModal.vue';

export default {
  async beforeCreate() {
    const result = await this.$store.dispatch('crewView', this.$route.params.id);
    if (result.response === undefined) {
      this.crewData = this.$store.state.crew;
    } else {
      this.$router.push('/error');
    }
  },
  data() {
    return {
      crewData: '',
      onModal: false,
      hashTags: ['수도권', 'UI/UX', '웹디자인'],
    };
  },
  components: {
    CHashTag,
    IntroCard,
    AskModal,
  }, // axios 통신
  methods: {
    sendMessage() {
      this.onModal = true;
    },
    closeModal() {
      this.onModal = false;
    },
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
