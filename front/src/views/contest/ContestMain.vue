<template>
<div>
    <nav>
        <router-link to="/">기획/아이디어</router-link>
        <router-link to="/">광고/마케팅</router-link>
        <router-link to="/">소프트웨어/게임</router-link>
        <router-link to="/">웹/모바일/플래시</router-link>
        <router-link to="/">문학/글/시나리오</router-link>
        <router-link to="/">건축/건설/도시</router-link>
         <router-link to="/">과학/공학</router-link>
    </nav>
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
  <div class="apply"><img src="@/assets/svg/applygongmo.svg"/></div>
  <div class="longcontest">
    <div><router-link to="/reference/:id"><img src="@/assets/svg/longfintech.svg"/></router-link></div>
    <div><router-link to="/reference/:id"><img src="@/assets/svg/longcontest.svg"/></router-link></div>
    <div><router-link to="/reference/:id"><img src="@/assets/svg/longcontest.svg"/></router-link></div>
    <div><router-link to="/reference/:id"><img src="@/assets/svg/longcontest.svg"/></router-link></div>
    <div><router-link to="/reference/:id"><img src="@/assets/svg/longcontest.svg"/></router-link></div>
    <div><router-link to="/reference/:id"><img src="@/assets/svg/longcontest.svg"/></router-link></div>
    <div><router-link to="/reference/:id"><img src="@/assets/svg/longcontest.svg"/></router-link></div>
    <div><router-link to="/reference/:id"><img src="@/assets/svg/longcontest.svg"/></router-link></div>
  </div>
</div>
</template>

<script>
export default {

};
</script>

<style>
.longcontest{
    display:grid;
    grid-template-rows: repeat(2, 180px);
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
