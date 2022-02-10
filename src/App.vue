
<template>
  <div id="app" class="in-middle full-height-width">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <span class="navbar-brand p-1">
        ABIGAIL
      </span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active p-1 text-hover">
            <router-link class="nav-link" tag="li" :to="'/Abigail-Calong'">Me </router-link>
          </li>
          <li class="nav-item p-1 text-hover">
            <router-link class="nav-link" tag="li" :to="'/Education'">Education</router-link>
          </li>
          <li class="nav-item p-1 text-hover">
            <router-link class="nav-link" tag="li" :to="'/Employment'">Employment</router-link>
          </li>
          <li class="nav-item p-1 text-hover">
            <router-link class="nav-link" tag="li" :to="'/MoreAboutMe'">More About Me</router-link>
          </li>
          <li class="nav-item p-1 text-hover">
            <router-link class="nav-link" tag="li" :to="'/Contact'">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="card shadow bg-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainProfile from './components/MainProfile'
import MoreAboutMe from './components/MoreAboutMe'

export default {
  name: 'App',
  components: {
    MainProfile,
    MoreAboutMe
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css");
@import url("./assets/global-styles.css");

</style>

<style scoped>

  .navbar-brand {
    color: linear-gradient(to bottom, var(--clr-violet-indigo), var(--clr-eggplant));
  }

  .router-link-active,
  .router-link-exact-active {
    font-weight: bold;
    color: var(--clr-eggplant)
  }

</style>
