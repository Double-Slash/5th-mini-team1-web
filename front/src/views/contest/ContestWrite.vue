<template>
  <div class='contest-write'>
    <div class='write-from'>
      <div class='item'>
        <label for="ex_file" class='file-label'></label>
        <input type="file" id="ex_file" accept="image/*" class='file-data' ref="file"
         @change="handleFileUpload()" required multiple>
         {{filePath}}
      </div>
      <div class='item type'><label for="time">접수기간</label></div>
      <div class='item'><textarea v-model="term" id="time"/></div>

      <div class='item type'><label for="who1">주최</label> </div>
      <div class='item'><textarea v-model="who1" id="who1"/></div>

      <div class='item type'><label for="who2">주관</label></div>
      <div class='item'><textarea id="who2" v-model="who2" /></div>

      <div class='item type'><label for="prize">시상</label></div>
      <div class='item'><textarea v-model="prize" id="prize"/></div>

      <div class='item type'><label for="more">세부사항</label></div>
      <div class='item'><textarea id="more" class='more-info'></textarea></div>
    </div>
    <div class='write-submit'>
      <button @click="submitForm()">작성하기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filePath: '',
      term: '',
      who1: '',
      who2: '',
      prize: '',
      more: '',
    };
  },
  methods: {
    handleFileUpload() {
      this.filePath = this.$refs.file.value;
    },
    submitForm() {
      console.log("clicked!!");
    },
  },
};
</script>

<style scoped>
.contest-write{
  width:75%;
  margin:0 auto;
  padding-top:70px;
  text-align: center;
}
/* write-from start*/
.write-from{
  display:grid;
  grid-template-columns: 2fr 1fr 3fr;
  justify-items: start;
  align-items: top;
  grid-gap: 1rem;
}
.item:nth-child(1){
  grid-row:1/6;
}
.file-label{
  background-image: url("../../assets/img/profile.png");
  width:300px;
  height:350px;
}
.file-data{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.item label{
  display:inline-block;
  min-width:8vw;
  margin-left:10px;
  text-align: left;
  font-weight: bold;
}
textarea{
  height:40px;
  min-width:250px;
  width:30vw;
  border: 2px solid rgba(46,136,219,1);
  padding:5px;
}
.more-info{
  height: 80px;
}
/* write-form end*/
/* write-submit start*/
.write-submit{
  width:100%;
  margin-top:40px;
}
.write-submit button{
  padding:10px;
  background:rgba(46,136,219,1);
  color:white;
  border-radius:30px;
  outline:none;
}
/* write-submit end*/
</style>
