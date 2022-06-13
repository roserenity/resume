<template>
  <div id="MoreAboutMe">
    <div id="ProjectsAndCertifications" class="card-body">
      <h3 class="bg-info p-3 header text-center">
        Projects And Certifications
      </h3>
      <hr />
      <p>
        Outside of work, I did mini projects and certifications, just for a
        <i>refresher</i>. Skills can get a little rusty, so here I still
        practice.
      </p>
      <section id="CertificationSection">
        <div class="row">
          <section
            v-for="certification in certificationList"
            :key="certification.id"
            class="col-sm-6 middle d-flex flex-wrap align-items-center justify-content-evenly"
          >
            <div class="card m-3 text-white bg-dark shadow w-100">
              <div class="card-header">
                <h5>{{ certification.name }}</h5>
                <h6>{{ certification.issuer }}</h6>
              </div>
              <div class="card-footer border-info">
                <a :href="certification.credentialURL" class="link-info"
                  >See certificate</a
                >
              </div>
            </div>
          </section>
        </div>
      </section>
      <section id="ProjectSection" class="">
        <div class="row">
          <div
            v-for="project in projectList"
            :key="project.id"
            class="col-sm-6 middle d-flex card-group"
          >
            <div class="card m-3 text-white bg-dark shadow rounded">
              <img
                class="card-img-top"
                :src="
                  require('../assets/projects/' + project.projectImg + '.jpg')
                "
                :alt="'project.projectName'"
              />
              <div class="card-body border-info">
                <span>{{ project.projectName }}</span>
                <p>{{ project.projectDescription }}</p>
              </div>
              <div
                class="card-footer d-flex justify-content-around border-info"
              >
                <a
                  class="bi-github link-info"
                  :href="project.github"
                  target="_blank"
                />
                <a
                  class="bi-box-arrow-up-right link-info"
                  :href="project.link"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="ArtSection" class="card-body">
      <h3 class="header rounded-pill shadow text-center">ART SECTION</h3>
      <i
        ><p class="text-center text-white">
          One of my hobbies is drawing. I love to explore different art styles,
          I take inpirations on different artists in instagram. Aside from that
          I tried watercolor painting and creating pixel art. Lately I'm not
          inspired to draw so here are the ones I did from 2020 - 2021:
        </p></i
      >
      <div id="art-container" class="d-flex">
        <img
          class="img-fluid col-xs-12 col-sm-6"
          v-for="n in 10"
          :key="n"
          :src="require('../assets/art/' + n + '.jpg')"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreAboutMe",
  props: ["goto"],
  data() {
    return {
      certificationList: [
        {
          id: 1,
          name: "Python (Basic)",
          issuer: "HackerRank",
          credentialURL: "https://www.hackerrank.com/certificates/d7e93f0c2988",
        },
        {
          id: 2,
          name: "JavaScript (Basic)",
          issuer: "HackerRank",
          credentialURL: "https://www.hackerrank.com/certificates/f174bec0d889",
        },
        {
          id: 3,
          name: "JavaScript Algorithms and Data Structures",
          issuer: "freeCodeCamp.org",
          credentialURL:
            "https://freecodecamp.org/certification/Abigail_C/javascript-algorithms-and-data-structures",
        },
        {
          id: 4,
          name: "Front End Development Libraries",
          issuer: "freeCodeCamp.org",
          credentialURL:
            "https://freecodecamp.org/certification/Abigail_C/front-end-development-libraries",
        },
      ],
      projectList: [
        {
          id: 1,
          projectImg: "time-tracker-dashboard",
          projectName: "Time Tracker Dashboard",
          projectDescription: "With CSS flexbox, SASS and JSON.",
          link: "https://roserenity.github.io/Time-Tracker-Dashboard/",
          github:
            "https://github.com/roserenity/roserenity.github.io/tree/main/Time-Tracker-Dashboard",
        },
        {
          id: 2,
          projectImg: "order-summary",
          projectName: "Order Summary",
          projectDescription: "With CSS flexbox and media queries",
          link: "https://roserenity.github.io/Order-Summary/",
          github:
            "https://github.com/roserenity/roserenity.github.io/tree/main/Time-Tracker-Dashboard",
        },

        {
          id: 3,
          projectImg: "sunnyside-landing-page",
          projectName: "Sunnyside Landing Page",
          projectDescription: "With CSS Grid and SASS",
          link: "https://roserenity.github.io/Sunnyside%20Agency%20Landing%20Page/",
          github:
            "https://github.com/roserenity/roserenity.github.io/tree/main/Sunnyside%20Agency%20Landing%20Page",
        },
        {
          id: 4,
          projectImg: "money-tracker",
          projectName: "Money Tracker",
          projectDescription: "With react, redux and JSON",
          link: "https://money-tracker-ac.netlify.app/",
          github: "https://github.com/roserenity/Money-Tracker",
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
#ArtSection {
  background: var(--clr-dark-charcoal);
}
#ArtSection .header {
  border: 3px solid white;
  color: var(--clr-pink-red);
  padding: 2%;
}
#art-container,
#CertificationSection,
#ProjectSection {
  flex-wrap: wrap;
}
.card-proj,
.card-cert {
  width: 100%;
  margin: 0px;
  border: 1px solid white;
  padding: 0px;
}
.card-img-overlay {
  background: rgba(0, 0, 0, 0.4);
  color: white;
  object-fit: cover;
  padding: 0;
}
.card-img-overlay div {
  background: #333333;
  padding: 1rem;
}
.card-img-overlay div:hover {
  background-color: #545454;
  padding-bottom: 2.8rem;
  cursor: pointer;
  transition: 0.5s all ease;
}
.btn-view {
  background: transparent;
  border: 1px solid white;
  color: white;
  text-decoration: none;
}
.btn-view:hover {
  background: white;
  color: black;
  transition: 0.5 all ease;
}
</style>
