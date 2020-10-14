import Vue from "vue";
import VueRouter from "vue-router";

// import router

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      component: () => import('@/views/MainView.vue'),
    },

    {
      path: '/partner',
      component: () => import('@/views/partner/PartnerMain.vue'),
    },
    {
      path: '/partner/write',
      component: () => import('@/views/partner/PartnerWrite.vue'),
    },
    {
      path: '/partner/:id',
      component: () => import('@/views/partner/PartnerView.vue'),
    },
    {
      path: '/partner/search/:id',
      component: () => import('@/views/partner/PartnerMain.vue'),
    },

    // crew
    {
      path: '/crew',
      component: () => import('@/views/crew/CrewMain.vue'),
    },
    {
      path: '/crew/write',
      component: () => import('@/views/crew/CrewWrite.vue'),
    },
    {
      path: '/crew/:id',
      component: () => import('@/views/crew/CrewView.vue'),
    },
    {
      path: '/crew/search/:id',
      component: () => import('@/views/crew/CrewMain.vue'),
    },

    // contest
    {
      path: '/contest',
      component: () => import('@/views/contest/ContestMain.vue'),
    },
    {
      path: '/contest/:id',
      component: () => import('@/views/contest/ContestView.vue'),
    },
    {
      path: '/contest/search/:id',
      component: () => import('@/views/contest/ContestMain.vue'),
    },

    // reference
    {
      path: '/reference',
      component: () => import('@/views/reference/ReferenceMain.vue'),
    },
    {
      path: '/reference/write',
      component: () => import('@/views/reference/ReferenceWrite.vue'),
    },
    {
      path: '/reference/:id',
      component: () => import('@/views/reference/ReferenceView.vue'),
    },
    {
      path: '/reference/search/:id',
      component: () => import('@/views/reference/ReferenceMain.vue'),
    },

    // about
    {
      path: '/about',
      component: () => import('@/views/AboutMain.vue'),
    },

    // bookmark
    {
      path: '/bookmark',
      component: () => import('@/views/bookmark/BookmarkMain.vue'),
    },

    // message
    {
      path: '/message',
      component: () => import('@/views/MessageMain.vue'),
    },

    // profile
    {
      path: '/profile',
      component: () => import('@/views/profile/ProfileMain.vue'),
    },
    {
      path: '/profile/edit',
      component: () => import('@/views/profile/ProfileEdit.vue'),
    },

    // non page
    {
      path: '*',
      component: () => import('@/views/PageNotFound.vue'),
    },
    /*
     {
      path: '/raffle',
      component: () => import('@/views/RafflePage.vue'),
    },
    */
  ],
});
