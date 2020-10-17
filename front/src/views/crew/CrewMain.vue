<template>
  <div class="cm">
    <div class="searchbar">
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
      <input type="text" placeholder="해시태그" />
      <button>검색</button>
      <!-- <router-link to="/crew/write" style="color: white">
        <button>글쓰기</button>
      </router-link> -->
    </div>
    <div style="clear: both"></div>
    <div class="crewmain">
      <CrewCard v-for="item in dummyList" :item="item" :key="item.username" />
    </div>
  </div>
</template>

<script>
import CrewCard from "@/components/PostCard/CrewCard.vue";

export default {
  components: {
    CrewCard,
  },
  data() {
    return {
      dummyList: [
        {
          title: "금융테크공모전",
          project_description: "기획자",
          team_description: "한국투자증권. 현 구성 2인",
          location: "서울",
          hashtags: ["수도권", "UI"],
        },
        {
          title: "국민경제아이디어",
          project_description: "기획자",
          team_description: "한국투자증권. 현 구성 2인",
          location: "서울",
          hashtags: ["수도권", "UI"],
        },
        {
          title: "국민경제아이디어",
          project_description: "기획자",
          team_description: "한국투자증권. 현 구성 2인",
          location: "서울",
          hashtags: ["수도권", "UI"],
        },
        {
          title: "국민경제아이디어",
          project_description: "기획자",
          team_description: "한국투자증권. 현 구성 2인",
          location: "서울",
          hashtags: ["수도권", "UI"],
        },
        {
          title: "국민경제아이디어",
          project_description: "기획자",
          team_description: "한국투자증권. 현 구성 2인",
          location: "서울",
          hashtags: ["수도권", "UI"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.cm {
  margin-top: 70px;
}

.crewmain {
  display: flex;
  flex-wrap: wrap;
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
  align-items: center;
}
input {
  width: 320px;
  padding: 8px 16px;
  border: 1px solid #2e88db;
  background-color: #ffffff;
}
button {
  padding: 8px 48px;
  border: 0px;
  background-color: #2e88db;
  color: #ffffff;
  outline: none;
  margin-right: 20px;
}
select {
  border: 0px;
  padding: 8px 32px;
  margin: 16px 16px 16px 0;
  border: 1px solid #2e88db;
  background-color: #ffffff;
}
</style>
