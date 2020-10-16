<template>
<div>
    <nav>
        <router-link to="/" name="기획/아이디어">기획/아이디어</router-link>
        <router-link to="/" name="광고/마케팅">광고/마케팅</router-link>
        <router-link to="/" name="소프트웨어/게임">소프트웨어/게임</router-link>
        <router-link to="/" name="웹/모바일/플래시">웹/모바일/플래시</router-link>
        <router-link to="/" name="문학/글/시나리오">문학/글/시나리오</router-link>
        <router-link to="/" name="건축/건설/도시">건축/건설/도시</router-link>
        <router-link to="/" name="과학/공학">과학/공학</router-link>
        <router-view></router-view>
    </nav>
    <div class = "searchbar">
       <input type = "text" placeholder="해시태그">
        <button>검색</button>
    </div>
  <div class = "partnermain">
      <div><img src="@/assets/svg/partners.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
      <div><img src="@/assets/svg/main.svg" width="267" height="180"/></div>
  </div>
</div>
</template>

<script>
export default {
  data(){

  }

};
</script>

<style>

.partnermain{
    display:grid;
    grid-template-rows: repeat(4, 180px);
    grid-template-columns: repeat(3,1fr);
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
    width: 1100px;
    height: 100px;
    justify-content:space-between;
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
