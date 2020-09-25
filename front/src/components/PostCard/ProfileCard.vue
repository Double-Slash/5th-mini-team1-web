<template>
  <div class='profile-content'>
    <!--img dummy url -->
    <div class='content-img'>
      <img src="../../assets/img/profile.png" width="50" height="50" />
    </div>
    <div class='content-divide'>
      <div class='profile-name'>{{cardInfo.name}}<br></div>
      <div class='profile-group'>{{cardInfo.group}}</div>
      <div class='profile-pr'>{{cardInfo.content}}</div>
      <div style='clear:both'></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
  },
  data() {
    return {
      cardInfo: this.info,
    };
  },
};
</script>

<style scoped>
.profile-content{
  display:flex;
  min-height: 150px;
  max-height: 150px;
  padding:30px 30px 15px 30px;
  background-color:white;
}
.content-img{
  flex:1;
  min-width:70px;
}
img{
  border-radius: 50px;
}
/* content-divide start*/
.content-divide{
  flex:5;
  margin-top:5px;
}
.profile-name{
  font-weight: bold;
}
.profile-group{
  margin-top:5px;
  font-size:13px;
}
.profile-pr{
  margin-top:5px;
  word-break:keep-all;
  font-size:13px;
  color:#D0D0D0;
  max-height: 50px;
  overflow-y: auto;
}
/* content-divide end */
</style>
