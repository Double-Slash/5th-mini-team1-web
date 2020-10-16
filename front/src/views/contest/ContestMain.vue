<template>
<div class="conm">
    <div class = "searchbar">
        <input type = "text" placeholder="검색어를 입력하세요"><button>검색</button>
    </div>
    <div class="popular" style='margin-bottom:20px;'>
      인기 공모전/행사
    </div>
  <div class="longcontest">
    <div>
      <router-link to="/contest/1"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/contest/1"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/contest/1"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/contest/1"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/contest/1"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/contest/1"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/contest/1"><img src="@/assets/svg/longfintech.svg"/></router-link>
    </div>
    <div>
      <router-link to="/contest/1"><img src="@/assets/svg/longfintech.svg"/></router-link>
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
  margin-bottom:200px;
}
.longcontest{
    display:grid;
    grid-template-rows: repeat(4, 220px);
    row-gap: 5px;
    grid-template-columns: repeat(2,1fr);
    row-gap:3.0em;
    column-gap:1.5em;
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
    max-width: 1300px;
    min-width:1000px;
    height: 100px;
    justify-content:space-between;
}
input{
   border:0px;
   font-size:18px;
   padding:10px;
   max-width: 1000px;
   width:50%;
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
