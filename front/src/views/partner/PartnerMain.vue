<template>
  <div class="pm">
    <div class="searchbar">
      <input type="text" placeholder="검색어를 입력하세요" />
      <div>
        <button>검색</button>
        <router-link to="/partner/write">
          <button>글쓰기</button>
        </router-link>
      </div>
    </div>
    <ul class="partnermain">
      <PartnerCard
        v-for="item in dummyList"
        :item="item"
        :key="item.username"
      />
    </ul>
  </div>
</template>

<script>
import PartnerCard from "@/components/PostCard/PartnerCard";

export default {
  data() {
    return {
      dummyList: [
        {
          interest: "웹 디자이너",
          username: "강세정",
          title: "프로젝트 경험자와 함께",
          description: "3년차/공모전/데이터분석",
          hashtags: ["디자이너", "데이터분석"],
        },
        {
          interest: "서버 개발자",
          username: "이동주",
          title: "초보자 환영",
          description: "3년차/해커톤/서버",
          hashtags: ["디자이너", "서버"],
        },
        {
          interest: "프론트 개발자",
          username: "조찬민",
          title: "아무나 환영",
          description: "3년차/해커톤/서버",
          hashtags: ["해커톤", "프론트"],
        },
        {
          interest: "기획자",
          username: "이승희",
          title: "초보자 환영",
          description: "3년차/해커톤/서버",
          hashtags: ["디자이너", "서버"],
        },
        {
          interest: "프론트 개발자",
          username: "이은혜",
          title: "같이 하실 분",
          description: "3년차/해커톤/서버/아무나/환영합니다",
          hashtags: ["디자이너", "서버"],
        },
      ],
    };
  },
  components: {
    PartnerCard,
  },
};
</script>

<style scoped>
.pm {
  margin-top: 70px;
  margin-bottom: 100px;
}
.partnermain {
  display: flex;
  flex-wrap: wrap;
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
.searchbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
input {
  width: 50%;
  max-width: 1000px;
  padding: 8px 32px;
  border: 0px;
  border: 2px solid #2e88db;
  background-color: #ffffff;
}
button {
  padding: 8px 32px;
  border: 0px;
  background-color: #2e88db;
  color: #ffffff;
  outline: none;
  margin-left: 16px;
}
img {
  height: 250px;
}
</style>
