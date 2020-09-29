<template>
  <div class="modal-layout">
    <section>
      <article class="left-article">
        <img
          src="@/assets/img/modalImage.png"
          alt="로그인 모달 사진"
          class="modal-image"
        />
      </article>
      <article class="right-article">
        <h1>
          어디있니에 가입하고 더 많은
          <br />
          혜택과 소식을 만나보세요.
        </h1>
        <form @submit.prevent="submitLogIn">
          <div>
            <input type="text" placeholder="ID" v-model="id" />
            <input type="text" placeholder="PASSWORD" v-model="password" />
          </div>
          <div class="button-wrapper">
            <button type="submit" class="login-btn">로그인</button>
            <div class="division">
              <div class="division-line"></div>
              <span>또는</span>
              <div class="division-line"></div>
            </div>
            <div class="login-btn google-btn" @click="submitGoogle">
              <img
                src="@/assets/svg/google.svg"
                alt="구글 이미지"
                class="google-image"
              />
              <span>구글 계정으로 계속하기</span>
            </div>
          </div>
        </form>
      </article>
      <button @click="clickCancelBtn" class="cancel-button">x</button>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.style.overflow = "hidden";
  },
  destroyed() {
    document.body.style.overflow = "unset";
  },
  data() {
    return {
      id: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    // 우측 상단 닫기 버튼 클릭
    clickCancelBtn() {
      this.$parent.$data.logInModalActive = false;
    },
    // id, 비밀번호 input 초기화
    initInput() {
      this.id = "";
      this.password = "";
    },
    // 구글 로그인 버튼 클릭
    submitGoogle() {
      // to do...
      // 구글 로그인 로직
    },
    // 로그인 버튼 클릭
    async submitLogIn() {
      try {
        this.errorMessage = "";
        // id, password 중에 하나라도 비어있는 경우
        if (this.id.trim() === "" || this.password.trim() === "") {
          throw new Error("아이디 혹은 비밀번호를 입력하지 않았습니다.");
        }
        // id를 특정 글자 이상 입력하지 않을 경우
        if (this.id.length < 8) {
          throw new Error("id를 8글자 이상 입력하지 않았습니다.");
        }
        // 비밀번호를 특정 글자 이상 입력하지 않을 경우
        if (this.password.length < 8) {
          throw new Error("비밀번호를 8글자 이상 입력하지 않았습니다.");
        }
        await this.$store.dispatch("submitLogIn");
        this.$parent.$data.logInModalActive = false;
      } catch (error) {
        this.errorMessage = error;
      } finally {
        this.initInput();
      }
    },
  },
};
</script>

<style scoped>
/* modal 레이아웃 */
.modal-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 56px 144px;
  background-color: rgba(57, 57, 57, 0.3);
}

section {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 72px 112px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
}

article {
  width: 50%;
  height: 100%;
}

/* modal 제목 */
h1 {
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 1.33;
  letter-spacing: -0.72px;
}

/* id, 비밀번호 input */
input {
  width: 100%;
  padding: 8px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid #393939;
}

/* 좌측 article */
.left-article {
  width: 50%;
  height: 100%;
}

/* modal 메인 이미지 */
.modal-image {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

/* 우측 article */
.right-article {
  padding-left: 40px;
}

/* 로그인, 구글 계정 로그인 버튼 wrapper */
.button-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
}

/* 버튼 절취선 */
.division {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  color: #363636;
}

/* 절취선 선 부분 */
.division-line {
  width: 40%;
  border: 0.1px solid rgba(0, 0, 0, 0.16);
}

/* 로그인, 구글 버튼 */
.login-btn {
  height: 40px;
  border-radius: 200px;
  background-color: #2e88db;
  color: white;
  cursor: pointer;
}

/* 구글 버튼 */
.google-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  border: solid 2px #2e88db;
}

/* 구글 이미지 */
.google-image {
  width: 24px;
  height: 24px;
}

/* 모달창 닫기 버튼 */
.cancel-button {
  position: absolute;
  top: 24px;
  right: 32px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  outline: none;
  background: none;
}
</style>
