<template>
  <div class='crew-write'>
    <div class='write-form'>
      <div class='form-img'>
        <label for="ex_file" class='file-label'></label>
        <input type="file" id="ex_file" accept="image/*" class='file-data' ref="file"
         @change="handleFileUpload" required multiple>
         {{filePath}}
      </div>
      <div class="form-type"><label for="term">활동기간</label></div>
      <div class="form-input"><textarea id="term" v-model="period"></textarea></div>

      <div class="form-type"><label for="projectID">프로젝트</label></div>
      <div class="form-input"><textarea id="projectID" v-model="project"></textarea></div>

      <div class="form-type"><label for="briefInfo">간단설명</label></div>
      <div class="form-input"><textarea id="briefInfo" v-model="description" style='height:200px;'></textarea></div>
    </div>
    <div class="write-content">
      <div class="content-type">분야선택</div>
      <div class="content-input gap">
        <input type="radio" id="option1" name="test" value="1" checked="checked">
        <label for="option1">기획/아이디어</label>
        <input type="radio" id="option2" name="test" value="2">
        <label for="option2" >광고/마케팅</label>
        <input type="radio" id="option3" name="test" value="3">
        <label for="option3">디자인/캐릭터</label>
        <input type="radio" id="option4" name="test" value="4">
        <label for="option4">소프트웨어/게임</label>
        <br>
        <input type="radio" id="option5" name="test" value="5">
        <label for="option5">웹/모바일/플래시</label>
        <input type="radio" id="option6" name="test" value="6">
        <label for="option6">문학/글/시나리오</label>
        <input type="radio" id="option7" name="test" value="7">
        <label for="option7">건축/건설/도시</label>
        <input type="radio" id="option8" name="test" value="8">
        <label for="option8">과학/공학</label>
      </div>

    <div class="content-type">활동지역</div>
    <div class="content-select">
      <select v-model="location">
        <option selected value="">시/도</option>
        <option value="서울">서울</option>
        <option value="수원">수원</option>
      </select>
    </div>
    <div class="content-type"><label for="teamName">팀이름</label></div>
    <div class='content-input gap'><textarea class='team' v-model="team_name" id="teamName"></textarea></div>
    <div class="content-type"><label for="teamIntro">팀소개</label></div>
    <div class='content-text gap'><textarea v-model="team_intro" id="teamIntro"></textarea></div>
    <div class="content-type"><label for="teamProject">프로젝트소개</label></div>
    <div class='content-text gap'><textarea id="teamProject"></textarea></div>
    <div class="content-type"><label for="teaminfo">모집안내</label></div>
    <div class='content-text gap'><textarea v-model="team_description" id="teaminfo"></textarea></div>
    <div class="content-type"><label for="requirement">자격요건 및<br> 우대사항</label></div>
    <div class='content-text gap'><textarea v-model="team_requirement" id="requirement"></textarea></div>
   <div class="content-btn">
   <button style='margin-top:20px;' @click="crewPost()">확인</button>
   </div>
  </div>
  </div>
</template>

<script>
import { getToken } from "@/utils/jwtToken";

export default {
  data() {
    return {
      filePath: '',
      fileData: '',
      period: '',
      project: '',
      description: '',
      location: '',
      team_name: '',
      team_intro: '',
      team_description: '',
      team_requirement: '',
      hashTags: ['수도권', 'UI/UX', '웹디자인'],
      item: {
        job: "웹 디자이너",
        name: "강세정",
        description: '3년차/공모전o/스타트업/SNS운영/팀빌딩원함',
        hashTag: ['UI/UX', '웹디자인'],
      },
    };
  },
  methods: {
    async crewPost() {
      const data = [
        getToken(),
        {
          title: this.project,
          content: this.description,
          location: this.location,
          team_name: this.team_name,
          team_description: this.team_description,
          project_description: this.team_intro,
          qualifications: this.team_requirement,
          author: this.$store.state.userInfo.id,
        },
      ];
      const result = await this.$store.dispatch('crewBoardWrite', data);
      if (result.status === 201) {
        alert('성공적으로 입력되었습니다.');
        location.href = '/crew';
      } else if (result.status === 400) {
        alert('빈 데이터를 채워주셔야 합니다.');
      } else {
        alert('알수 없는 오류로 실패하였습니다. 다시 시도해 주세요.');
      }
    },
    handleFileUpload(e) {
      this.filePath = e.target.value;
      const img = e.target.files[0];
      const fd = new FormData();
      fd.append('image', img);
      this.fileData = fd;
    },
  },
};
</script>
<style scoped>
.crew-write{
  margin:0 auto;
  padding-top:70px;
  text-align: center;
}
.write-form textarea{
  height:35px;
  min-width:250px;
  width:30vw;
}
/* write-form start*/
.write-form{
  display:grid;
  grid-template-rows:0.8fr 0.8fr 3fr;
  grid-template-columns: 2fr 1fr 6fr;
  justify-items: start;
}
.form-img{
  grid-row:1/4;
}
.file-label{
  background-image: url("../../assets/img/profile.png");
  width:300px;
  height:350px;
  display:inline-block;
  min-width:8vw;
  text-align: left;
  font-weight: bold;
}
.file-data{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.form-type{
  justify-self: center;
  font-weight: bold;
}
/* write-form end */
/* write-content start */
.write-content{
  display:grid;
  grid-template-columns: 1fr 8fr;
  margin-top:40px;
  text-align: left;
}
.content-type{
  align-self:center;
  font-weight: bold;
}
.team{
  height: 35px;
  min-width: 330px;
}
.content-text textarea{
  width:100%;
  height: 200px;
}

.content-btn{
  grid-column: 1/3;
  justify-self: center;
}

.gap{
  margin: 20px 0;
}
/* write-content end */

/* select box custom */
select {
  width: 150px;
  padding: .8em .5em;
  appearance: none;
  background: url('https://cdn.discordapp.com/attachments/409346663367573514/760525476715823144/arrow.png') no-repeat 95% 50%;
  border: 1px solid rgba(46,136,219,1);
  border-radius: 0px;
  margin-right:30px;
  outline:none;
}

/* radio custom */
input[type=radio]{
  width: 0;
  height: 0;
  position: absolute;
  left: -9999px;
}
input[type=radio] + label{
  min-width:14vw;
  width:8vw;
  margin: 0;
  padding: .75em 1.5em;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  border: solid 1px #DDD;
  background-color: #FFF;
  line-height: 140%;
  text-align: center;
  box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  transition: border-color .15s ease-out,
    color .25s ease-out,  background-color .15s ease-out, box-shadow .15s ease-out;
  cursor: pointer;
}
input[type=radio]:checked + label{
  background-color: rgba(46,136,219,1);
  color: #FFF;
  box-shadow: 0 0 10px rgba(102, 179, 251, 0.5);
  border-color: rgba(46,136,219,1);
}

textarea{
  border: 1px solid #2E88DB;
  padding:5px;
  outline:none;
}
button{
  padding:10px 30px;
  background:rgba(46,136,219,1);
  color:white;
  border-radius:30px;
  margin-right:10px;
  outline:none;
}

</style>
