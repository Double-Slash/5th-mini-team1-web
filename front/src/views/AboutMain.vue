<template>
  <div id="about">
    <div class='about-header'>
      <div class='header-img'>
        <img src="../assets/img/profile.png" width="250" height="250"/>
      </div>
      <div class="header-title">
        <div class='title'>사람을 찾습니다!<br>
        마음이 맞는 프로젝트를 진행하고픈 사람,<br>
        나를 알리고 싶은 사람,도대체 어디있니?
        </div><br>
        <div class='subtitle'>
        "어디있니"는 팀을 찾거나 프로젝트를 진행하고 싶을 때 함께 할 팀 혹은 개인을 찾는 기능으로<br>
        특정 나이대에 국한되지 않고 협업할 사람을 찾을 수 있게 도와주는 웹서비스입니다.
        </div>
      </div>
    </div>

    <p class='introduce'>어디있니 팀원소개</p>
    <div class='about-content'>
        <ProfileCard class='content-item'
        v-for="profile in develInfo" :key="profile.id" :info="profile"></ProfileCard>
    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/PostCard/ProfileCard.vue';

export default {
  data() {
    return {
      develInfo: [
        {
          img: 'profile.png',
          name: '이승희',
          group: 'DoubleSlash 5th 기획팀',
          content: '안녕하세욥!안녕하세욥!안녕하세욥!안녕하세욥!안녕하세욥!안녕하세욥!',
        },
        {
          img: 'profile.png',
          name: '강세정',
          group: 'DoubleSlash 5th 디자인팀',
          content: '안녕하세욥!',
        },
        {
          img: 'profile.png',
          name: '김민정',
          group: 'DoubleSlash 5th 개발팀',
          content: '안녕하세욥!',
        },
        {
          img: 'profile.png',
          name: '차민철',
          group: 'DoubleSlash 5th 개발팀',
          content: '안녕하세욥!',
        },
        {
          img: 'profile.png',
          name: '이은혜',
          group: 'DoubleSlash 5th 개발팀',
          content: '안녕하세욥!',
        },
        {
          img: 'profile.png',
          name: '조찬민',
          group: 'DoubleSlash 5th 개발팀',
          content: '안녕하세욥!',
        },
        {
          img: 'profile.png',
          name: '이동주',
          group: 'DoubleSlash 5th 개발팀',
          content: '안녕하세욥!',
        },
      ],
    };
  },
  components: {
    ProfileCard,
  },
};
</script>

<style scoped>
#about{
  padding-top:50px;
  width:75%;
  margin: 0px auto;
  text-align: left;
}
/* header start */
.about-header{
  display:flex;
  justify-content: space-between;
}
.header-img{
  flex:1;
  min-width:300px;
}
.header-img img{
  border-radius: 500px;
}
.header-title{
  flex:3
}
.title{
  padding-top:45px;
  font-size:20px;
  font-weight: bold;
}
.subtitle{
  font-size:16px;
}
/* header end */
.introduce{
  font-size:22px;
  font-weight: bold;
  margin: 70px 0 20px 0px;
}

/* content start */
.about-content{
  display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap:1rem;
}
/* content end */

</style>
