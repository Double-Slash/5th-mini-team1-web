<template>
<div class="conm">
    <div class = "searchbar">
        <input type = "text" placeholder="검색어를 입력하세요"><button>검색</button>
    </div>
    <div class="popular">
      인기 공모전/행사
    </div>
  <div class = "popularcontest">
      <div class = "contest"><img src="@/assets/svg/fintech.svg"/></div>
      <div class = "contest"><img src="@/assets/svg/contestmain.svg" /></div>
  </div>
  <div class="longcontest">
    <div>
      <router-link to="/reference/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/reference/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/reference/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/reference/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/reference/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/reference/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/reference/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/reference/:id"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
</div>
</div>
</template>

<script>
export default {
};
</script>

<style scoped>
.conm{
  margin-top:70px;
  max-width: 1500px;
  margin-bottom:100px;
}
.longcontest{
    display:grid;
    grid-template-rows: repeat(2, 240px);
    grid-template-columns: repeat(2,1fr);
    row-gap:30px;
    column-gap:30px;;
    width:900px;
    height:900px;
    gap:30px;
}
.popularcontest{
    display:grid;
    grid-template-rows: repeat(1, 180px);
    grid-template-columns: repeat(6,1fr);
    row-gap:3.0em;
    column-gap:3.0em;
    width:900px;
    height:250px;
}
nav {
  display: flex;
  justify-content: space-between;
  width: 90%;
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
    width: 900px;
    height: 100px;
    justify-content:space-between;
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
}
button{
    width:174px;
    height:66px;
    border:0px;
    background-color:#2E88DB;
    color:#ffffff;
    outline: none;
    float:right;
}
.popular{
  font-size:24px;
  font-weight:bold;
}
.apply{
  float:right;
  margin-right: 30px;
  border:0;
}
</style>
