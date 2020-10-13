<template>

  <div id="main-view">

<!--    로그인 전 -->

<!--<template v-if="true" >-->
<template v-if="false" >
  <div class="before-login">
    <!--    메인 사진 영역-->
    <section class="img-area">
      <p class="title">
        프로젝트 함께 할 사람 <br>
        도대체 <strong>어디있니?</strong>
      </p>
      <p class="find-crew">파트너 크루 어디있니?</p>
    </section>

    <section class="content-area">

      <section class="recommend-partner">
        <div class="sub-title">어디있니</div>
        <div class="content-title">이번주 추천 파트너</div>
        <article>

          <div class="content-card" v-for="item in 3">
            <div class="first-section">
              <div class="img-wrapper-profile">
                <img src="@/assets/img/test_profile_img.png"/>
              </div>
              <div class="title">
                <div>웹디자이너</div>
                <div>강세정</div>
              </div>
            </div>

            <div class="content second-section">
              <p>**프로그램 희망</p>
              <p>3년차/공모전O/스타트업/SNS
                운영/팀빌딩원함</p>
            </div>

            <div class="third-section">
              <span class="tags">#UI/UX</span>
              <span class="bookmark"><img src="@/assets/img/bookmark_img.png"/></span>
            </div>
          </div>

          <div class="last-content-card">

            <p>더 많은 파트너를 만나보세요!</p>
            <span>More</span>
          </div>
        </article>
      </section>

      <section class="recommend-crew">
        <div class="sub-title">어디있니</div>
        <div class="content-title">이번주 추천 크루</div>
        <article>
          <div class="content-card content-card-crew" v-for="item in 2">
            <div class="poster-section">
              <div class="img-wrapper-poster">
                <img src="@/assets/img/test-post_img.png"/>
              </div>

              <div>
                <div class="title">
                  <div>금융핀테크공모전</div>
                  <div>웹디자이너</div>
                </div>
                <div class="content-crew">
                  <p>
                    한국투자증권</br>
                    아이디어구상단계</br>
                    현 구성 2인</br>
                  </p>
                  <p>
                    서울
                  </p>
                </div>
              </div>
            </div>
            <div class="tag-section">
              <span class="tags">#UI/UX</span>
              <span class="bookmark"><img src="@/assets/img/bookmark_img.png"/></span>
            </div>
          </div>

          <div class="last-content-card content-card-crew last-content-card-crew">

            <p>더 많은 크루 만나보세요!</p>
            <span>More</span>
          </div>
        </article>
      </section>
    </section>
  </div>

</template>


<template v-else>
  <div class="after-login">

    <section class="img-area">
      <carousel :per-page="1"  :mouse-drag="false">
<!--      <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">-->
        <slide>
         <img src="@/assets/img/test-main-banner-img.png"/>
        </slide>
        <slide>
          <img src="@/assets/img/test-main-banner-img.png"/>

        </slide>
        <slide>
          <img src="@/assets/img/test-main-banner-img.png"/>

        </slide>
        <slide>
          <img src="@/assets/img/test-main-banner-img.png"/>

        </slide>
      </carousel>
    </section>

    <section class="content-area">

      <section class="recommend-partner">
        <div class="sub-title">어디있니</div>
        <div class="content-title">이번주 추천 파트너</div>

        <article>

          <div class="content-card" v-for="item in 3">
            <div class="first-section">
              <div class="img-wrapper-profile">
                <img src="@/assets/img/test_profile_img.png"/>
              </div>
              <div class="title">
                <div>웹디자이너</div>
                <div>강세정</div>
              </div>
            </div>

            <div class="content second-section">
              <p>**프로그램 희망</p>
              <p>3년차/공모전O/스타트업/SNS
                운영/팀빌딩원함</p>
            </div>

            <div class="third-section">
              <span class="tags">#UI/UX</span>
              <span class="bookmark"><img src="@/assets/img/bookmark_img.png"/></span>
            </div>
          </div>

          <div class="last-content-card">

            <p>더 많은 파트너를 만나보세요!</p>
            <span>More</span>
          </div>
        </article>
      </section>

      <section class="recommend-crew">
        <div class="sub-title">어디있니</div>
        <div class="content-title">이번주 추천 크루</div>
        <article>
          <div class="content-card content-card-crew" v-for="item in 5">
            <div class="poster-section">
              <div class="img-wrapper-poster">
                <img src="@/assets/img/test-post_img.png"/>
              </div>

              <div>
                <div class="title">
                  <div>금융핀테크공모전</div>
                  <div>웹디자이너</div>
                </div>
                <div class="content-crew">
                  <p>
                    한국투자증권</br>
                    아이디어구상단계</br>
                    현 구성 2인</br>
                  </p>
                  <p>
                    서울
                  </p>
                </div>
              </div>
            </div>
            <div class="tag-section">
              <span class="tags">#UI/UX</span>
              <span class="bookmark"><img src="@/assets/img/bookmark_img.png"/></span>
            </div>
          </div>

          <div class="last-content-card content-card-crew last-content-card-crew">

            <p>더 많은 크루 만나보세요!</p>
            <span>More</span>
          </div>
        </article>
      </section>

      <section class="event">
        <div class="content-title">이벤트</div>
        <article>
          <div class="content-card content-card-event" v-for="item in 3">

            <div class="img-wrapper-event-poster">
              <img src="@/assets/img/test-post_img.png"/>
            </div>

            <div class="content-section">
              <div class="title">
                <div>금융핀테크공모전</div>
                <div>한국투자증권</div>
              </div>
              <div class="content-event">
                <p>D-30</p>
              </div>

              <span class="bookmark"><img src="@/assets/img/bookmark_img.png"/></span>
            </div>

          </div>

          <div class="last-content-card  last-content-card-event ">

            <p>더 많은 크루 만나보세요!</p>
            <span>More</span>
          </div>
        </article>
      </section>



    </section>

  </div>
</template>


  </div>

</template>

<script>

  import LogInModal from "../components/LogInModal";
  import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    LogInModal,
    Carousel,
    Slide
  },
  data(){
    return{
      // modalToggle:false,
    }
  },
  methods:{

  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/mainView.scss';

</style>
