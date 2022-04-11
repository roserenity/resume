<template>
  <div>
    <div id="MainProfile" class="card-body">
      <div
        id="profile-content"
        class="row d-flex flex-xs-row flex-md-row flex-lg-row"
      >
        <section class="middle-column col-lg-6 pb-2">
          <section id="my-photo-section" class="middle">
            <img id="my-photo" src="../assets/abigail.jpg" />
          </section>
        </section>
        <section class="col-lg-6 text-center" style="margin: auto">
          <h1 class="header text-info">{{ name }}</h1>
          <hr />
          {{ briefInfo }}
          <section class="d-flex d-row middle">
            <a
              class="link-info m-1 p-1"
              v-for="contactInfo in contactInfoList"
              :key="contactInfo.iconName"
              :class="contactInfo.iconName"
              :href="contactInfo.href"
            />
          </section>
        </section>
      </div>
    </div>
    <div id="Education" class="card-body">
      <Education></Education>
    </div>
    <div id="Employment" class="card-body">
      <Employment></Employment>
    </div>
  </div>
</template>

<script>
import Education from "./Education";
import Employment from "./Employment";

export default {
  name: "MainProfile",
  components: {
    Education,
    Employment,
  },
  props: ["goto"],
  data() {
    return {
      name: "ABIGAIL CALONG",
      briefInfo:
        "I'm exposed to web and software development, adaptable and a hardworker. I like kpop, listen to podcast and sometimes watercolor.",
      contactInfoList: [
        {
          iconName: "bi-envelope-fill",
          value: "email",
          href: "mailto:abicalong@gmail.com",
        },
        {
          iconName: "bi-linkedin",
          value: "linkedin",
          href: "linkedin.com/in/abigail-acierto-calong",
        },
      ],
    };
  },
  mounted() {
    var element = document.getElementById(this.goto);
    element.scrollIntoView();
  },
  watch: {
    goto: function () {
      var element = document.getElementById(this.goto);
      element.scrollIntoView();
    },
  },
};
</script>

<style>
#MainProfile {
  background: #333333;
  color: white;
}
#my-photo {
  border-radius: 50%;
  margin-bottom: 2%;
}
#my-photo-section {
  width: fit-content;
}
#Employment {
  background: #333333;
  color: white;
}
</style>
