<template>
  <div class='profile-content'>
    <!--img dummy url -->
    <img src="../../assets/img/profile.png" width="50" height="50" />
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
    info: Array,
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
  display:inline-block;
  min-height: 150px;
  max-height: 150px;
  width:47%;
  margin-right: 2%;
  margin-bottom: 2%;
  padding:30px 30px 15px 30px;
  background-color:white;
}
img{
  float:left;
  max-width:20%;
  border-radius: 50px;
}
/* content-divide start*/
.content-divide{
  float:right;
  min-width:80%;
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
  font-size:13px;
  color:#D0D0D0;
}
/* content-divide end */
</style>
