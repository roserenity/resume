import {createApp} from 'vue'
import App from './App'
import { createRouter, createWebHashHistory } from 'vue-router'
import MainProfile from './components/MainProfile'
import MoreAboutMe from './components/MoreAboutMe'
import "./assets/global-styles.css"

const routes = [
    {
      path: '/', component: MainProfile
    },
    {
      path: '/Abigail-Calong',
      component: MainProfile,
      props: {
        goto: "MainProfile"
      }
    },
    {
      path: '/Employment', 
      component: MainProfile,
      props: {
        goto: "Employment"
      }
    },
    {
      path: '/Education', 
      component: MainProfile,
      props: {
        goto: "Education"
      }
    },
    {
      path: '/MoreAboutMe', 
      component: MoreAboutMe,
      props: {
        goto: "MoreAboutMe"
      }
    },
    {
      path: '/Contact', 
      component: MoreAboutMe,
      props: {
        goto: "Contact"
      }
    }
  ]

const router = createRouter({ 
    history: createWebHashHistory(),
    routes: routes})

const app = createApp(App)

app.use(router)
app.mount('#app')