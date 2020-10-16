<template>
<div class="cm">
    <div class = "searchbar">
       <select>
        <option value="">시/도</option>
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
         <option value="">시/군/구</option>
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
       <input type = "text" placeholder="해시태그">
       
        <button>검색</button>
        <router-link to="/crew/write" style='color:white;'><button>글쓰기</button></router-link>
    </div>
    <div style='clear:both;'></div>
  <div class = "crewmain">
      <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
      <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
      <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
      <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
     <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
     <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
      <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
      <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
      <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
      <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
      <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
     <div class="crew">
      <router-link to="/crew/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {

};
</script>

<style scoped>
.cm{
  margin-top:70px;
  margin-bottom:100px;
  max-width: 1500px;
}
.crewmain{
    display:grid;
    grid-template-rows: repeat(4, 220px);
    row-gap: 5px;
    grid-template-columns: repeat(2,1fr);
    row-gap:3.0em;
    column-gap:1.5em;
}
nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  margin-top: 10px;
  margin-bottom: 10px;
}
nav > a:hover {
  color: #2e88db;
}

a {
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: black;
}
.searchbar{
    max-width: 1300px;
    min-width:1000px;
    height: 80px;
    justify-content:space-between;
    margin-bottom:40px;
}
input{
   border:0px;
   font-size:18px;
   padding:10px;
   width: 400px;
   height:66px;
   border:3px solid #2E88DB;
   background-color: #ffffff;
   float: left;
}
button{
    width:174px;
    height:66px;
    border:0px;
    background-color:#2E88DB;
    color:#ffffff;
    outline: none;
    float:right;
    margin-right:20px;
}
select{
   border:0px;
   font-size:18px;
   padding:10px;
   width: 150px;
   height:66px;
   margin-right:10px;
   border:3px solid #2E88DB;
   background-color: #ffffff;
   float:left;
}
</style>
