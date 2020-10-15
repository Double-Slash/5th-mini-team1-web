<template>

  <div id="main-view">

<!--    로그인 전 -->

<template v-if="!token" >
<!--<template v-if="false">-->
  <div class="before-login">
<!--        메인 사진 영역-->
    <section class="img-area">
      <p class="title">
<!--        {{JSON.stringify(token)}}-->
        프로젝트 함께 할 사람 <br>
        도대체 <strong>어디있니?</strong>
      </p>
      <p class="find-crew">파트너 크루 어디있니?</p>
    </section>

    <section class="content-area">

      <section class="recommend-partner">
        <div class="sub-title">어디있니</div>
        <div class="content-title">이번주 추천 파트너</div>

        <template v-if=" beforeLogin.partner.length > 0">
          <article>
            <template v-for="post in beforeLogin.partner">
              <partner-card class="partner-card" v-bind:item="post"></partner-card>
            </template>

            <div class="last-content-card last-content-card-partner">
              <router-link to="/partner">
                <p>더 많은 파트너를 만나보세요!</p>
                <span>More</span>
              </router-link>
            </div>
          </article>
        </template>

        <template v-else>
          파트너 정보가 없습니다
        </template>


      </section>

      <section class="recommend-crew">
        <div class="sub-title">어디있니</div>
        <div class="content-title">이번주 추천 크루</div>

        <template v-if=" beforeLogin.crew.length > 0">
          <article>

            <template v-for="post in beforeLogin.crew">
              <crew-card class="crew-card" v-bind:item="post"></crew-card>
            </template>

            <div class="last-content-card last-content-card-crew">
              <router-link to="/crew">
                <p>더 많은 크루를 만나보세요!</p>
                <span>More</span>
              </router-link>
            </div>
          </article>
        </template>

        <template v-else>
          크루 정보가 없습니다
        </template>


      </section>

    </section>

  </div>

</template>

<template v-else>
  <div class="after-login">

    <section class="img-area">
      <carousel :per-page="1"  :mouse-drag="false">
<!--      <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">-->
        <template v-if="hasBanner">
          <slide v-for="bannerImg in bannerList">
            <img :src="`${baseURL}/bannerImg`"/>
          </slide>
        </template>

        <template v-else>
          <slide>
           <img src="@/assets/img/test-main-banner-img.png"/>
          </slide>
          <slide>
            <img src="@/assets/img/test-main-banner-img.png"/>

          </slide>
        </template>

      </carousel>
    </section>

    <section class="content-area">

      <section class="recommend-partner">
        <div class="content-title">맞춤 파트너</div>
        <div @click="logout">로그아웃</div>

        <template v-if="afterLogin.partner.length>0">
          <article>

            <template v-for="post in afterLogin.partner.slice(0,4)">
              <partner-card class="partner-card" v-bind:item="post"></partner-card>
            </template>
          </article>
          <article>

            <template v-for="post in afterLogin.partner.slice(4)">
              <partner-card class="partner-card" v-bind:item="post"></partner-card>
            </template>

            <div class="last-content-card last-content-card-partner">
              <router-link to="/partner">
                <p>더 많은 파트너를 만나보세요!</p>
                <span>More</span>
              </router-link>
            </div>
          </article>
        </template>

        <template v-else>
          파트너 정보가 없습니다
        </template>


      </section>

      <section class="recommend-crew">
<!--        <div class="sub-title">어디있니</div>-->
        <div class="content-title">맞춤 크루</div>

        <template v-if="afterLogin.crew.length>0">
          <article>
            <template v-for="post in afterLogin.crew.slice(0,3)">
              <crew-card class="crew-card" v-bind:item="post"></crew-card>
            </template>
          </article>

          <article>

            <template v-for="post in afterLogin.crew.slice(3)">
              <crew-card class="crew-card" v-bind:item="post"></crew-card>
            </template>

            <div class="last-content-card last-content-card-crew">
              <router-link to="/crew">
                <p>더 많은 크루를 만나보세요!</p>
                <span>More</span>
              </router-link>
            </div>
          </article>
        </template>

        <template v-else>
          크루 정보가 없습니다
        </template>



      </section>

      <section class="event">
        <div class="content-title">이벤트</div>

        <template v-if="afterLogin.event.length>0">
          <article>

            <template v-for="event in afterLogin.event.slice(0,2)">
              <event-card class="event-card" v-bind:item="event"></event-card>
            </template>

          </article>
          <article>
            <template v-for="event in afterLogin.event.slice(2)">
              <event-card class="event-card" v-bind:item="event"></event-card>
            </template>

            <div class="last-content-card  last-content-card-event " v-if="events.length>0">
              <router-link to="/contest">
                <p>더 많은 이벤트를 만나보세요!</p>
                <span>More</span>
              </router-link>
            </div>
          </article>
        </template>

        <template v-else>
          이벤트 정보가 없습니다
        </template>


      </section>

    </section>

  </div>
</template>

  </div>

</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios';
import { mapState } from "vuex";
import LogInModal from "../components/LogInModal";
import EventCard from "../components/PostCard/EventCard";
import CrewCard from "../components/PostCard/CrewCard";
import PartnerCard from "../components/PostCard/PartnerCard";

export default {
  components: {
    // LogInModal,
    Carousel,
    Slide,
    EventCard,
    CrewCard,
    PartnerCard,
  },
  data() {
    return {
      // modalToggle:false,
      dataURL: 'http://52.141.62.35:8080',
      events: [],
      postings: [],
      beforeLogin:{ partner: [], crew: [], event: [] },
      afterLogin: { partner: [], crew: [], event: [] },
      bannerList: [],
      hasBanner: true,
    };
  },

  created() {
    this.getData();
  },
  computed: mapState({
    // 화살표 함수는 코드를 매우 간결하게 만들어 줍니다!
    token: state => state.token,
  }),

  methods: {
    async logout(){
      // this.$store.commit('logout');
      // console.log(this.token);
      const res = await axios.get (this.dataURL.concat('/accounts/logout/'),
        {headers: {Authorization: `Token ${this.token}`}}
        );
      console.log(JSON.stringify(res))
      if(res.status === 200){
        this.$store.commit('logout');
      }

    },
    async getData() {
      // const token_header = this.token;
      // // const token = this.$cookies.get("doubleslash");
      // console.log('111111',token_header)

      const token_header = {
        headers: {
          Authorization: 'Token d9ac1142d7bd04479bbc3c454cb49017ec5c476a',
          // token : this.$cookies.get("token")
        },
      };

      try {
        // 1. 이벤트 글 불러오기
        const eventsResult = await axios.get(`${this.dataURL}/postings/contests`);
        // let posting = await axios.get(this.dataURL + '/postings/admin/',token_header);

        // console.log('events_result.data', eventsResult.data);
        // this.beforeLogin['event'] = events_result.data.slice(0,2);
        this.afterLogin.event = eventsResult.data.slice(-2);
        console.log('this',this.afterLogin.event)


        // 공모전 있으면 배너 모음에 담기

        if (this.events.length > 0) {
          this.bannerList = this.events.reduce((acc, cur) => {
            if (acc.length < 5) {
              acc.push(cur.image);
            }
            return acc;
          }, []);

          // console.log('imagesimagesimages',images)
        }

        // 서버에서 넘어오는 이미지값 없음 !
        // 임시 처리
        if (this.bannerList.length === 0) {
          this.hasBanner = false;
          // this.bannerList.push()
        }

        // 2. 파트너 글 불러오기 & 크루 글 불러오기
        //(맨위에거)
        const partnerResult = await axios.get(`${this.dataURL}/accounts/`);

        this.beforeLogin.partner = partnerResult.data.slice(-3);
        this.afterLogin.partner = partnerResult.data.slice(-7);
        // console.log('this.beforeLogin.partnerthis.beforeLogin.partner',this.afterLogin.partner)


        //(두번째거)
        const crewResult = await axios.get(`${this.dataURL}/postings/all`);

        this.beforeLogin.crew = crewResult.data.slice(-2);
        this.afterLogin.crew = crewResult.data.slice(-5);


        // this.postings = postings_result.data;
        // console.log('this.postingsthis.postings', this.postings);
      } catch (e) {
        console.log('Error Message : server error', e);
      }
    },

  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/mainView.scss';
</style>
