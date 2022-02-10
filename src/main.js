import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import MainProfile from './components/MainProfile'
import MoreAboutMe from './components/MoreAboutMe'

Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    {
      path: '/', component: MainProfile
    },
    {
      path: '/Abigail-Calong',
      component: MainProfile,
      props: (route) => ({
        goto: "MainProfile"
      })
    },
    {
      path: '/Employment', 
      component: MainProfile,
      props: (route) => ({
        goto: "Employment"
      })
    },
    {
      path: '/Education', 
      component: MainProfile,
      props: (route) => ({
        goto: "Education"
      })
    },
    {
      path: '/MoreAboutMe', 
      component: MoreAboutMe,
      props: (route) => ({
        goto: "MoreAboutMe"
      })
    },
    {
      path: '/Contact', 
      component: MoreAboutMe,
      props: (route) => ({
        goto: "Contact"
      })
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
