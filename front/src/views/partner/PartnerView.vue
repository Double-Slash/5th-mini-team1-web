<template>
  <div>
    <div class="view-card">
      <div class="card-grid">
        <div class="grid-img">
          <img src="@/assets/img/profile.png" width="100" height="100" />
        </div>
        <div class="grid-name">강세정</div>
        <div class="grid-info">22살 | 서울 | 디자인/캐릭터</div>
        <div class="grid-email">
          <img src="@/assets/svg/email.svg" /> tpwjd708@naver.com
        </div>
        <div class="grid-hashtag">
          <CHashTag
            v-for="hashTag in hashTags"
            :item="hashTag"
            :key="hashTag.id"
          ></CHashTag>
        </div>
        <div class="grid-btn">
          <img width="20" height="20" src="@/assets/svg/share.svg" />
          <img width="20" height="20" src="@/assets/svg/bookmark.svg" />
        </div>
        <div class="grid-hope">웹 디자이너 | 웹개발 프로젝트 희망</div>
        <div class="introduce">
          자기소개
          <IntroCard
            v-for="item in items"
            :key="item.id"
            class="view-info"
            :title="item.title"
            :content="item.content"
          ></IntroCard>
          <div class="career">경력</div>
          <div class="careerform">
            <table width="200" height="100">
              <tr class="line">
                <th>Date</th>
                <th>Career</th>
                <th>Detail</th>
              </tr>
              <tr>
                <td>2018.03~</td>
                <td>성신여자대학교 재학</td>
                <td></td>
              </tr>
              <tr>
                <td>2020.03~</td>
                <td>더블슬래시</td>
                <td></td>
              </tr>
            </table>
          </div>
          <div class="words">
            하고싶은 말
            <IntroCard
              v-for="item in items"
              :key="item.id"
              class="view-info"
              :title="item.title"
              :content="item.content"
            ></IntroCard>
          </div>
        </div>
      </div>
    </div>
    <div class="button">
      <button v-on:click="apply()">지원하기</button>
      <button @click="sendMessage()">문의하기</button>
      <AskModal v-if="onModal" @close="closeModal"></AskModal>
    </div>
  </div>
</template>

<script>
import CHashTag from "@/components/Button/HashTag.vue";
import IntroCard from "@/components/PostCard/IntroCard.vue";
import AskModal from "@/components/PartnerAskModal.vue";

export default {
  data() {
    return {
      onModal: false,
      hashTags: ["수도권", "UI/UX", "웹디자인"],
      items: [
        {
          content: "안녕하세요 저는 성신여자대학교 강세정입니다.",
        },
      ],
    };
  },
  components: {
    CHashTag,
    IntroCard,
    AskModal,
  },
  methods: {
    sendMessage() {
      this.onModal = true;
    },
    closeModal() {
      this.onModal = false;
    },
    apply() {
      this.$router.push("/partner");
    },
  },
};
</script>

<style>
.view-card {
  width: 90%;
  margin: 40px auto;
  text-align: left;
}
.card-info {
  margin-bottom: 20px;
  font-weight: bold;
}
.card-grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1.3fr 0.7fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
.grid-img {
  grid-row: 1/4;
}
.grid-img img {
  border-radius: 50px;
}
.grid-name {
  align-self: center;
  font-weight: bold;
  font-size: 18px;
}
.grid-info {
  grid-column: 3/11;
  align-self: flex-end;
}
.grid-email {
  grid-column: 2/11;
}
.grid-hashtag {
  grid-column: 2/10;
}
.grid-btn {
  justify-self: right;
}
.grid-btn img {
  cursor: pointer;
  margin-right: 10px;
}
.grid-hope {
  grid-column: 1/11;
}
/* view-card end */
button {
  padding: 10px;
  background: rgba(46, 136, 219, 1);
  color: white;
  border-radius: 30px;
  margin-right: 10px;
  outline: none;
  align-content: center;
}
.introduce {
  font-size: 15px;
  font-weight: bold;
  margin-top: 2em;
  width: 500%;
  display: auto;
  height: 800px;
}
.words {
  font-size: 15px;
  font-weight: bold;
  margin-top: 2em;
  width: 100%;
  display: auto;
}
.career {
  font-size: 15px;
  font-weight: bold;
  margin-top: 2em;
}
.careerfrom {
  margin-top: 3em;
  border-right: none;
  border-left: none;
}
table,
tr,
td,
th {
  border: 1px solid #2e88db;
  margin-top: 3em;
  border-collapse: collapse;
  border-right: none;
  border-left: none;
}
table {
  width: 100%;
  text-align: center;
  border-right: none;
  border-left: none;
}
.line {
  background-color: #2e88db;
  color: #ffffff;
}
.button {
  text-align: center;
}
</style>
