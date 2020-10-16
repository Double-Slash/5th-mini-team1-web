<template>
<div class="pm">

    <div class = "searchbar">
       <input type = "text" placeholder="검색어를 입력하세요">
        <button>검색</button>
    </div>
  <div class = "partnermain">
      <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg" /></router-link>
      </div>
      <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
     <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
     </div>
      <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
      <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
      <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
      <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
     <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
     <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
      <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
      <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
      <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
  </div>
</div>
</template>

<script>
export default {

};
</script>

<style>
.pm{
  max-width: 1500px;
  margin-top:70px;
  margin-bottom:100px;
}
.partnermain{
    display:grid;
    grid-template-rows: repeat(4, 180px);
    grid-template-columns: repeat(3,1fr);
    row-gap:150px;
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
  margin-left:70px;
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
img{
  height:250px;
}
</style>
