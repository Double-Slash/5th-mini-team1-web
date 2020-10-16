<template>
<div>
    <nav>
        <router-link to="/" >기획/아이디어</router-link>
        <router-link to="/" >광고/마케팅</router-link>
        <router-link to="/" >소프트웨어/게임</router-link>
        <router-link to="/" >웹/모바일/플래시</router-link>
        <router-link to="/" >문학/글/시나리오</router-link>
        <router-link to="/" >건축/건설/도시</router-link>
        <router-link to="/" >과학/공학</router-link>
    </nav>
    <div class = "searchbar">
       <input type = "text" placeholder="검색어를 입력하세요"  @input="inputHandler">
        <button @click="render()">검색</button>
    </div>
  <div class = "partnermain">
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
      <div>
      <router-link to="/partner/:id"><img src="@/assets/svg/partners.svg"/></router-link>
      </div>
  </div>
</div>
</template>

<script>

export default {

  method: {
    render() {
      this.$router.push('/');
    },
    dataFetch() {

    },
    inputHandler(e) {
      this.search = e.target.value;
      // 빈칸으로 넘어가는 거 방지

      //     if(this.search.length !== 0){
      //       clearTimeout(this.debounce);
      //       this.debounce = setTimeout(() =>
      //       {
      //       const filteredList = this.stageInfoList.filter(item =>
      //        item.title.includes(this.search));
      //       this.searchList = filteredList;
      //       }, 500);
      //       }
      //       else{
      //         clearTimeout(this.debounce);
      //         this.debounce = setTimeout(() => {
      //           this.searchList = [];
      //           }, 500);
    },
  },
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
