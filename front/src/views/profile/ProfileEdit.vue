<template>
  <form @submit.prevent="submitForm">
    <div class="name-email-wrapper">
      <div class="thumbnail-wrapper" @click="clickUploadImage">
        <img
          src=""
          class="user-thumbnail"
          :class="active"
          ref="uploadedImage"
        />
        <img src="@/assets/svg/imageUpload.svg" alt="이미지 업로드 아이콘" />
      </div>
      <div class="name-email-inputs">
        <div class="input-wrapper">
          <span>이름</span>
          <input type="text" v-model="username" />
        </div>
        <div class="input-wrapper">
          <span>이메일</span>
          <input type="text" v-model="email" />
        </div>
      </div>
    </div>
    <div class="input-wrapper">
      <span>비밀번호</span>
      <input type="text" v-model="password" />
    </div>
    <div class="input-wrapper">
      <span>생년월일</span>
      <input type="text" v-model="birthday" />
    </div>
    <div class="input-wrapper">
      <span>전화번호</span>
      <input type="text" />
    </div>
    <div class="input-wrapper">
      <span>활동지역</span>
      <select>
        <option selected>시/도</option>
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
        <option selected>시/군/구</option>
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
    </div>
    <p class="delete-text">회원탈퇴하기</p>
    <div class="confirm-wrapper">
      <button type="submit">확인</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      uploadImage: "",
      active: "",
      username: "",
      email: "",
      password: "",
      birthday: "",
    };
  },
  methods: {
    ...mapActions(["submitUserInfo"]),
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.uploadImage);
      formData.append("username", this.username);
      formData.append("email", this.email);
      formData.append("password", this.password);
      formData.append("birthday", this.birthday);
      await this.submitUserInfo(formData);
    },
    resizeImage(image) {
      const canvas = document.createElement("canvas");
      const maxSize = 1280;
      let width = image.width;
      let height = image.height;
      if (width > height) {
        if (width > maxSize) {
          height *= maxSize / width;
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width *= maxSize / height;
          height = maxSize;
        }
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(image, 0, 0, width, height);
      const dataUrl = canvas.toDataURL("image/jpeg");
      return dataUrl;
    },
    createBlobObject(dataURL) {
      const BASE64_MARKER = ";base64,";
      // base64로 인코딩 되어있지 않을 경우
      if (dataURL.indexOf(BASE64_MARKER) === -1) {
        const parts = dataURL.split(",");
        const contentType = parts[0].split(":")[1];
        const raw = parts[1];
        return new Blob([raw], {
          type: contentType,
        });
      }
      // base64로 인코딩 된 이진데이터일 경우
      const parts = dataURL.split(BASE64_MARKER);
      const contentType = parts[0].split(":")[1];
      const raw = window.atob(parts[1]);
      // atob()는 Base64를 디코딩하는 메서드
      const rawLength = raw.length;
      // 부호 없는 1byte 정수 배열을 생성
      const uInt8Array = new Uint8Array(rawLength); // 길이만 지정된 배열
      let i = 0;
      while (i < rawLength) {
        uInt8Array[i] = raw.charCodeAt(i);
        i++;
      }
      return new Blob([uInt8Array], {
        type: contentType,
      });
    },
    clickUploadImage() {
      const input = document.createElement("input"); // input 생성
      input.type = "file"; // input type을 file로 설정
      input.accept = "image/*"; // file은 image 형태만 accpet 하도록 설정
      input.click();
      input.onchange = (changeEvent) => {
        const file = changeEvent.target.files[0];
        const reader = new FileReader();
        this.uploadImage = file.name;
        reader.onload = (loadEvent) => {
          this.active = "active";
          this.$refs.uploadedImage.src = loadEvent.target.result;
          this.$refs.uploadedImage.onload = (imageEvent) => {
            const dataUrl = this.resizeImage(this.$refs.uploadedImage);
            // this.uploadImage = this.createBlobObject(dataUrl);
          };
        };
        reader.readAsDataURL(file);
      };
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 40px;
}

span {
  flex: 0 0 10%;
  font-weight: bold;
}

input {
  flex: 0 0 50%;
  padding: 8px 16px;
  border: 1px solid rgba(46, 135, 219, 0.3);
}

select {
  border: 0px;
  font-size: 18px;
  padding: 8px 16px;
  margin-right: 16px;
  border: 1px solid #2e88db;
  background-color: #ffffff;
}

.name-email-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.thumbnail-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin-right: 24px;
  border-radius: 50%;
  background: rgba(46, 135, 219, 0.3);
  overflow: hidden;
  cursor: pointer;
}

.user-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  opacity: 0;
}
.user-thumbnail.active {
  opacity: 1;
}

.name-email-inputs {
  width: calc(100% - 120px);
}

.input-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.delete-text {
  cursor: pointer;
  margin-bottom: 40px;
}

.confirm-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.confirm-wrapper > button {
  padding: 8px 32px;
  border-radius: 16px;
  background: #2e88db;
  color: white;
}
</style>
