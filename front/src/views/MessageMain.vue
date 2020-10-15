<template>
  <section>
    <article class="left-article">
      <h1 class="main-title">메세지</h1>
      <div class="search-wrapper">
        <img src="@/assets/svg/search.svg" alt="검색 버튼" />
        <input type="text" />
      </div>
      <ul class="user-list-container">
        <UserListItem />
      </ul>
    </article>
    <div class="divider"></div>
    <article class="right-article">
      <div class="selected-user-thumbnail">
        <img :src="null" />
      </div>
      <ul class="message-list">
        <SpeechBubble position="left" v-for="message in receivedMessages" :message="message"/>
        <SpeechBubble position="right" :message="{content: '이거 안나와요..'}"/>
      </ul>
      <div class="input-wrapper">
        <input type="text" placeholder="메세지를 입력하세요" v-model="sendMessage"/>
        <img @click="sendChat" src="@/assets/svg/messageSend.svg" alt="메세지 전달 아이콘" />
      </div>
    </article>
  </section>
</template>

<script>
import UserListItem from "@/components/Message/UserListItem.vue";
import SpeechBubble from "@/components/Message/SpeechBubble.vue";
import axios from 'axios';
import { mapState } from "vuex";
export default {
  components: {
    UserListItem,
    SpeechBubble,
  },
  computed: mapState({
    // 화살표 함수는 코드를 매우 간결하게 만들어 줍니다!
    token: state => state.token,
  }),
  created() {
    this.getChats()
  },
  data(){
    return {
      dataURL: 'http://52.141.62.35:8080',
      receivedMessages: [],
      sendMessage: '',
      // headers: {Authorization: 'Token 9bcda8509d29b774ad943768d5b567438139ed68'},
    }
  },
  methods: {
    async getChats(){
      const header_config = {headers: {Authorization: `Token ${this.token}`}};
      const res = await axios.get(this.dataURL.concat('/chats/'), header_config);
      // const res = await axios.get(this.dataURL.concat('/chats/'), { headers: this.headers });
      console.log(res.data);
      this.receivedMessages = res.data;
    },
    async sendChat(){
      const header = {headers: {Authorization: `Token ${this.token}`}};

      const res = await axios.post(this.dataURL.concat('/chats/'),
        {content: this.sendMessage, recipient: 3, sender: 2},
        header
        // { headers: this.headers }
        );
      console.log(res.data);
      this.sendMessage = '';
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  height: calc(100vh - 106px - 150px);
  padding-top: 32px;
}

article {
  display: flex;
  flex-direction: column;
}

/* 좌측 article */
.left-article {
  flex: 0 0 40%;
}

/* 우측 article */
.right-article {
  flex: 0 0 60%;
}

/* 중간 구분선 */
.divider {
  margin: 0 32px;
  border: solid 0.1px #9e9e9e;
}

/* 메세지 텍스트 */
.left-article > h1 {
  text-align: center;
  margin-bottom: 24px;
}

/* 검색창 wrapper */
.search-wrapper {
  display: flex;
  padding: 8px 16px;
  margin-bottom: 24px;
  border-radius: 30px;
  background-color: rgba(46, 136, 219, 0.36);
}

/* 유저 리스트 container */
.user-list-container {
  max-height: 100%;
  overflow-y: auto;
}

/* 클릭한 유저의 썸네일 wrapper */
.selected-user-thumbnail {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

/* 클릭한 유저의 썸네일 */
.selected-user-thumbnail > img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: black;
}

/* 메시지 리스트 */
.message-list {
  height: 100%;
  padding-right: 16px;
  overflow-y: auto;
}

/* 메시지 인풋 wrapper */
.input-wrapper {
  display: flex;
}

/* 메시지 인풋 */
.input-wrapper > input {
  width: 100%;
  padding: 8px 16px;
  margin-right: 24px;
  border-radius: 31px;
  background-color: rgba(46, 136, 219, 0.32);
}
</style>
