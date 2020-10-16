<template>
    <div id="bookmark-main">

      <section class="content-area">

        <section class="recommend-partner">
          <div class="content-title">맞춤 파트너</div>

          <template v-if="bookmarkedPartner.length>0">
            <article>

              <template v-for="post in bookmarkedPartner">
                  <partner-card class="partner-card" v-bind:item="post"></partner-card>
              </template>
            </article>
          </template>
        </section>

        <section class="recommend-crew">
          <!--        <div class="sub-title">어디있니</div>-->
          <div class="content-title">맞춤 크루</div>

          <template v-if="bookmarkedPost.length>0">
            <article>
              <template v-for="post in bookmarkedPost.slice(0,3)">
                <crew-card class="crew-card" v-bind:item="post"></crew-card>
              </template>
            </article>

          </template>
        </section>


        <section class="event">
          <div class="content-title">이벤트</div>

          <template v-if="bookmarkedContest.length>0">
            <article>
              <template v-for="event in bookmarkedContest.slice(0,2)">
                <event-card class="event-card" v-bind:item="event"></event-card>
              </template>
            </article>
          </template>
        </section>
      </section>
    </div>

</template>

<script>
import { mapState } from "vuex";
import EventCard from "../../components/PostCard/EventCard";
import CrewCard from "../../components/PostCard/CrewCard";
import PartnerCard from "../../components/PostCard/PartnerCard";

export default {
  components: {

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
      // beforeLogin: { partner: [], crew: [], event: [] },
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
    bookmarkedContest: (state) => state.bookmarkedContest,
    bookmarkedPost: (state) => state.bookmarkedPost,
    bookmarkedPartner: (state) => state.bookmarkedPartner,
  }),

  methods: {



  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/bookMarkMain.scss';
  /*@import '@/assets/scss/mainView.scss';*/
</style>
