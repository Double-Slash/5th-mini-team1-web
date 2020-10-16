<template>
<div class="rm">
    <div class="reference_main">
         <div class="ads_pictures">
           <img src="@/assets/svg/openads.svg" width="267" height="180"/>
            <div class = "open_ads">
            오픈 에즈
            </div>
            <div class=" explain">
             마케팅 정보 큐레이션
            </div>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/pixabay.svg" width="267" height="180"/>
            <div class = "open_ads">
            픽사베이
            </div>
            <div class=" explain">
             무료로 사용가능한 사진 제공
            </div>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/flaction.svg" width="267" height="180"/>
           <div class = "open_ads">
            FLACTION
            </div>
            <div class=" explain">
             무료로 사용가능한 아이콘 제공
            </div>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/stackshare.svg" width="267" height="180"/>
           <div class = "open_ads">
            Stackshare
            </div>
            <div class=" explain">
             트랜드와 스타트업 stack정보 제공
            </div>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/webactually.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/behance.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/freequration.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/tyle.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/pixabay.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/webactually.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/flaction.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/openads.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/behance.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/freequration.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/stackshare.svg" width="267" height="180"/>
        </div>
        <div class="ads_picture">
           <img src="@/assets/svg/tyle.svg" width="267" height="180"/>
        </div>
    </div>
</div>
</template>

<script>
export default {

};
</script>

<style scoped>
.rm{
  margin-top:70px;
  max-width: 1500px;
}
.open_ads{
    font-size:18px;
    font-weight: bold;
}
.explain{
    font-size:12px;
}
.reference_main{
    display:grid;
    grid-template-rows: repeat(4, 180px);
    grid-template-columns: repeat(4,1fr);
    row-gap:3.0em;
    column-gap:1.5em;
}
.ads_pictire{
    display: grid;
    display:grid;
    grid-template-rows: repeat(4, 180px);
    grid-template-columns: repeat(4,1fr);
    row-gap:3.0em;
    column-gap:1.5em;
}

.ads_pictires{
    display: grid;
    display:grid;
    grid-template-rows: repeat(4, 180px);
    grid-template-columns: repeat(4,1fr);
    row-gap:3.0em;
    column-gap:1.5em;
}
</style>
