<template>
 <transition name="modal" appear>
    <div class="modal-layout" @mousedown="$emit('close')">
        <section @mousedown.stop>
                <div class="title">
                    <label for="crewMsg">파트너에게 메세지를 보내시겠습니까?</label>
                    <textarea v-model="message" placeholder="메세지를 입력해주세요"></textarea>
                    <button @click="$emit('close')">취소</button>
                    <button>확인</button>
                </div>
        </section>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: { // 우측 상단 닫기 버튼 클릭
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
  z-index:999;
  height: 100%;
  padding: 50px 50px;
  background-color: rgba(57, 57, 57, 0.3);
}
section {
  display: flex;
  position: absolute;
  width: 450px;
  height: 300px;
  padding: 20px 49px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  background-color: #ffffff;
}
.title label{
    display:block;
    width:100%;
    font-size:20px;
    font-weight: bold;
    margin-bottom:10px;
    text-align: left;
}
textarea{
    width:100%;
    height: 60%;
    border:1px solid #2E88DB;
    resize:none;
    outline:none;
    margin-bottom:10px;
}
button{
  padding:5px 20px;
  background:rgba(46,136,219,1);
  color:white;
  border-radius:30px;
  margin-right:10px;
  outline:none;
}
</style>
