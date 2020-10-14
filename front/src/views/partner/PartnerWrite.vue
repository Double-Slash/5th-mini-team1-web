<template>
<div>
    <div class="view-card">
      <div class="card-grid">
        <div class="grid-img">
          <img src="@/assets/img/profile.png" width="100" height="100">
        </div>
        <div class="grid-name">강세정</div>
        <div class="grid-email"><img src="@/assets/svg/email.svg"> tpwjd708@naver.com</div>
        </div>
    </div>
      <div class="write-content">
      <div class="content-type">분야선택</div>
      <div class="content-input gap">
        <input type="radio" id="option1" name="test" value="option1" checked="checked">
        <label for="option1">기획/아이디어</label>
        <input type="radio" id="option2" name="test" value="option2">
        <label for="option2" >광고/마케팅</label>
        <input type="radio" id="option3" name="test" value="option3">
        <label for="option3">디자인/캐릭터</label>
        <input type="radio" id="option4" name="test" value="option4">
        <label for="option4">소프트웨어/게임</label>
        <br>
        <input type="radio" id="option5" name="test" value="option5">
        <label for="option5">웹/모바일/플래시</label>
        <input type="radio" id="option6" name="test" value="option6">
        <label for="option6">문학/글/시나리오</label>
        <input type="radio" id="option7" name="test" value="option7">
        <label for="option7">건축/건설/도시</label>
        <input type="radio" id="option8" name="test" value="option8">
        <label for="option8">과학/공학</label>
      </div>
      <div class="content-type">활동지역</div>
    <div class="searchbar">
      <select>
        <option selected>시/도</option>
        <option>서울특별시</option>
        <option>부산광역시</option>
        <option>대구광역시</option>
        <option>인천광역시</option>
        <option>광주광역시</option>
        <option>대전광역시</option>
        <option>울산광역시</option>
        <option>세종특별자치시</option>
        <option>경기도</option>
        <option>강원도</option>
        <option>충청북도</option>
        <option>충청남도</option>
        <option>전라북도</option>
        <option>전라남도</option>
        <option>경상북도</option>
        <option>경상남도</option>
        <option>제주특별자치도</option>
      </select>
      <select>
        <option selected>시/군/구</option>
        <option>종로구</option>
         <option>중구</option>
         <option>용산구</option>
         <option>성동구</option>
         <option>광진구</option>
         <option>동대문구</option>
         <option>중랑구</option>
         <option>성북구</option>
         <option>강북구</option>
         <option>도봉구</option>
         <option>노원구</option>
         <option>은평구</option>
         <option>서대문구</option>
         <option>마포구</option>
         <option>양천구</option>
         <option>강서구</option>
         <option>구로구</option>
         <option>금천구</option>
         <option>영등포구</option>
         <option>동작구</option>
         <option>관악구</option>
         <option>서초구</option>
         <option>강남구</option>
         <option>송파구</option>
         <option>강동구</option>
      </select>
    </div>
    <div class="content-type">포지션</div>
    <div class="position_input"><input type = "text"></div>
    <div class="content-type">한마디</div>
    <div class="say_input"><input type = "text"></div>
    <div class="content-type">자기소개</div>
    <div class="introduce_area"><textarea placeholder="자기소개를 입력하세요"></textarea></div>
    <div class="content-type">경력</div>
    <div class = "careerform">
          <table width = "200" height = "100">
            <tr class="line">
              <th>Date</th>
              <th>Career</th>
              <th>Detail</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div></div>
        <div class="careerplus"><img src="@/assets/svg/careerplus.svg"/></div>
        <div class="content-type">하고싶은 말</div>
        <div class="introduce_area"><textarea placeholder="하고싶은 말을 입력하세요"></textarea></div>
        <div class="content-type">해시태그</div>
        <div class="classification">
        <div class="hashtag"><img src="@/assets/svg/hashtags.svg"/></div>
        <div class="hashtag"><img src="@/assets/svg/hashtags.svg"/></div>
        <div class="hashtag"><img src="@/assets/svg/hashtags.svg"/></div>
        <div class="hashtag"><img src="@/assets/svg/hashtags.svg"/></div>
        <div class="hashtag"><img src="@/assets/svg/hashtags.svg"/></div>
        </div>
        <div></div>
        <div class="formsubmit">
          <button>작성하기</button>
        </div>
         </div>
  </div>

</template>

<script>

export default {
};
</script>

<style>
.view-card{
  width:90%;
  margin: 40px auto;
  text-align: left;
}
.card-grid{
  display:grid;
  grid-template-rows:repeat(3,1fr);
  grid-template-columns: 1.3fr 0.7fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
.grid-img{
  grid-row:1/4;
}
.grid-img img{
  border-radius: 50px;
}
.grid-email{
  grid-column:2/11;
}
.grid-name{
  align-self: center;
  font-weight: bold;
  font-size:18px;
}
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
  padding:10px;
  background:rgba(46,136,219,1);
  color:white;
  border-radius:30px;
  margin-right:10px;
  outline:none;
  text-align: center;
  float:center;
  width:204px;
}
select{
   border:0px;
   font-size:18px;
   padding:10px;
   width: 30%;
   height:66px;
   margin-right:10px;
   margin-top:10%;
   margin-bottom: 10%;
   border:3px solid #2E88DB;
   background-color: #ffffff;
   float:left;
}
input{
   border:0px;
   font-size:18px;
   padding:10px;
   width: 580.64px;
   height:66px;
   margin-right:10px;
   border:3px solid #2E88DB;
   background-color: #ffffff;
   margin-top:3.5%;
}
textarea{
   border:0px;
   font-size:18px;
   padding:10px;
   width: 700px;
   height:300px;
   margin-right:10px;
   border:3px solid #2E88DB;
   background-color: #ffffff;
   margin-top:3.5%;
   margin-bottom: 5%;
}
.careerfrom{
   margin-top:3.0em;
   border-right:none;
   border-left:none;
}
table,tr,td,th{
   border: 1px solid #2E88DB;
   margin-top:3.0em;
   border-collapse: collapse;
   border-right:none;
   border-left:none;
}
table{
  width:100%;
  text-align: center;
  border-right:none;
  border-left:none;
}
.line{
  background-color: #2E88DB;
  color:#ffffff;
}
.careerplus{
  float:right;
  text-align:right;
}
.classification{
  display: grid;
  grid-template-rows: repeat(2, 180px);
  grid-template-columns: repeat(3,1fr);
}
.formsubmit{
  text-align: center;
  float: center;
}
</style>
