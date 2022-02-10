<template>
    <div id="MoreAboutMe">
        <div id="ProjectsAndCertifications" class="card-body">
            <h3 class="bg-info p-3 header text-center">
                Projects And Certifications
            </h3>
            <hr>
            <p>Outside of work, I did mini projects and certifications, just for a <i>refresher</i>. Skills can get a little rusty, yeah so here I still practice. </p>
            <section id="CertificationSection" class="card-group d-flex justify-content-around">
                <div v-for="certification in certificationList" :key="certification.id" class="card-cert card text-white bg-dark">
                    <div class="card-header border-info">
                        <h5>{{ certification.name }}</h5>
                        <h6>{{ certification.issuer }}</h6>
                    </div>
                    <div class="card-footer border-info">
                        <a :href="certification.credentialURL" class="link-info">See credential</a>
                    </div>
                </div>
            </section>
            <br/>
            <section id="ProjectSection" class="card-group d-flex justify-content-around">
                <div v-for="project in projectList" :key="project.id" class="card-proj card text-center">
                    <img class="card-img" :src="require('../assets/projects/'+project.projectImg+'.jpg')" :alt="'project.projectName'">
                    <section class="card-img-overlay d-flex flex-column justify-content-end">
                        <div>
                            <span class="text card-title">{{project.projectName}}</span>
                            <p class="text card-text">{{project.projectDescription}}</p>
                            <a :href="project.link" target="_blank" class="btn-view p-1">view</a>
                        </div>
                    </section>
                </div>
            </section>
        </div>
        <div id="ArtSection" class="card-body">
            <div class="container">
                <h3 class="header rounded-pill shadow text-center">ART SECTION</h3>
                <i><p class="text-center text-white">One of my hobbies is drawing. I love to explore different art styles, I take inpirations on different artists in instagram. Aside from that I tried watercolor painting and creating pixel art. Lately I'm not inspired to draw so here are the ones I did from 2020 - 2021:</p></i>
                <div id="art-container" class="d-flex">
                    <img class="art-imgs img-fluid col-xs-12 col-sm-6 p-1" v-for="n in 10" :key="n" :src="require('../assets/art/'+n+'.jpg')" alt=""/>
                </div>
            </div>
        </div>
        <div id="Contact" class="card-body">
            <h3 class="header">CONTACT</h3>
            <section class="d-flex flex-column">
                <button class="btn-profile-icons m-1 p-1" v-for="contactInfo in contactInfoList" :key="contactInfo.iconName" :class="contactInfo.iconName"><i class="profile-icons"> {{contactInfo.value}} </i></button>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoreAboutMe',
    props: ['goto'],
    data () {
        return {
            certificationList: [
                { 
                    id: 1, 
                    name: "Python (Basic)", 
                    issuer: "HackkerRank", 
                    credentialURL: "https://www.hackerrank.com/certificates/d7e93f0c2988" 
                },
                { 
                    id: 2, 
                    name: "JavaScript (Basic)", 
                    issuer: "HackkerRank", 
                    credentialURL: "https://www.hackerrank.com/certificates/f174bec0d889" 
                }
            ],
            projectList: [
                {
                    id: 1,
                    projectImg: "time-tracker-dashboard",
                    projectName: "Time Tracker Dashboard",
                    projectDescription: "A dashboard created with CSS flexbox, SASS and JSON.",
                    link: "https://roserenity.github.io/Time-Tracker-Dashboard/"
                },
                {
                    id: 2,
                    projectImg: "order-summary",
                    projectName: "Order Summary",
                    projectDescription: "A dashboard created with CSS flexbox and media queries",
                    link: "https://roserenity.github.io/Order-Summary/"
                },
                {
                    id: 3,
                    projectImg: "sunnyside-landing-page",
                    projectName: "Sunnyside Landing Page",
                    projectDescription: "A dashboard created with CSS Grid and SASS",
                    link: "https://roserenity.github.io/Sunnyside%20Agency%20Landing%20Page/"
                }
            ],
            contactInfoList: [
                {iconName: 'bi-telephone-fill', value: "09154403921"},
                {iconName: 'bi-envelope-fill', value: "abicalong@gmail.com"},
                {iconName: 'bi-linkedin', value:"linkedin.com/in/abigail-acierto-calong"}
            ]
        }
    },
    mounted() {
        var element = document.getElementById(this.goto)
        element.scrollIntoView()
    },
    watch: {
        goto:function(){
            var element = document.getElementById(this.goto)
            element.scrollIntoView()
        }
    }
}
</script>

<style>
#ArtSection {
    background: var(--clr-dark-charcoal)
}
#ArtSection .header {
    border: 3px solid white;
    color: var(--clr-pink-red);
    padding: 2%;
}
#art-container, #CertificationSection, #ProjectSection {
    flex-wrap: wrap;
}
.card-proj, .card-cert {
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
    padding: 1rem
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
    text-decoration: none
}
.btn-view:hover {
    background: white;
    color: black;
    transition: 0.5 all ease;
}
@media (min-width: 576px){
    .card-group>.card {
        flex: none;
    }
}
@media (min-width: 768px){
    .card-group>.card {
        flex: 1 0 0%;
    }
}
.btn-profile-icons {
    border: none;
    text-align: left;
    background: transparent
}
.profile-icons {
    font-size: 1rem;
}
</style>