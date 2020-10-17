<template>
  <div class="conm">
    <div class="searchbar">
      <input type="text" placeholder="검색어를 입력하세요" /><button>
        검색
      </button>
    </div>
    <div class="popular" style="margin-bottom: 20px">인기 공모전/행사</div>
    <div class="longcontest">
      <EventCard v-for="item in dummyList" :item="item" :key="item.username" />
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/PostCard/EventCard.vue";

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      dummyList: [
        { title: "금융핀테크공모전", host_info: "한국투자증권" },
        { title: "금융핀테크공모전", host_info: "한국투자증권" },
        { title: "금융핀테크공모전", host_info: "한국투자증권" },
        { title: "금융핀테크공모전", host_info: "한국투자증권" },
        { title: "금융핀테크공모전", host_info: "한국투자증권" },
        { title: "금융핀테크공모전", host_info: "한국투자증권" },
      ],
    };
  },
};
</script>

<style scoped>
a{
  display:inline-block;
  text-decoration: none;
}
.conm {
  margin-top: 70px;
  max-width: 1500px;
  margin-bottom: 200px;
}
.longcontest {
  display: grid;
  grid-template-rows: repeat(4, 220px);
  row-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3em;
  column-gap: 1.5em;
}
.popularcontest {
  display: grid;
  grid-template-rows: repeat(1, 180px);
  grid-template-columns: repeat(6, 1fr);
  row-gap: 3em;
  column-gap: 3em;
  width: 900px;
  height: 250px;
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
.searchbar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
input {
  border: 0px;
  padding: 10px;
  width: 50%;
  margin-right: 10px;
  border: 1px solid #2e88db;
  background-color: #ffffff;
}
button {
  width: 174px;
  padding: 10px;
  background-color: #2e88db;
  color: #ffffff;
  outline: none;
}
.popular {
  font-size: 24px;
  font-weight: bold;
}
.apply {
  float: right;
  margin-right: 30px;
  border: 0;
}
</style>
