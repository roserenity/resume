<template>
    <div class="container">
      <section>
        <span>
          <h3 class="header text-center">
            {{title}}
          </h3>
        </span>
        <hr>
      </section>
      <section v-for="experience in job_experience" :key="experience.id" class="m-2">
        <h6> {{experience.position}} </h6>

        <i>
          <h6>{{experience.company}}, ({{experience.year}})</h6>
        </i>

        <section class="tagSection">
          <span v-for="tags in experience.tags" class="rounded-pill">{{tags}}</span>
        </section>

        <p v-if="experience.additionalDetails !== ''">{{experience.additionalDetails}}</p>
        
        <section v-if="experience.additionalDetailsList !== ''" class="container">
          <ul v-for="bullet in experience.additionalDetailsList" :key="bullet.id">
            <li>{{bullet.content}}</li>
          </ul>
        </section>
        
      </section>
    </div>
</template>

<script>
export default {
  name: 'Employment',
  props: ['goto'],
  data() {
    return{
      title: 'WORK EXPERIENCE',
      job_experience: [
        {
          id: 2,
          position: "Application Developer Associate",
          company: "Accenture, Inc.",
          year: "March 2021 - present",
          tags: ["Accounting", "SAP FICO", "Finance"],
          additionalDetails:"",
          additionalDetailsList: [
            {id: 1, content: "Configured and perform unit testing in SAP ERP system (FICO) inline with the client's requirements"},
            {id: 2, content: "Familiarized with the SDLC process"}
          ]
        },
        {
          id: 1,
          position: "Design Engineer",
          company: "Tsukiden Solutions Inc.",
          year: "April 2019 - January 2021",
          tags: ["C", "Java", "SQL", "Nihongo"],
          additionalDetails:"Was provided C, Java, SQL, Web Development with Flask, and Nihongo training",
          additionalDetailsList: [
            {id: 1, content: "System improvements using VB.net"},
            {id: 2, content: "Perfomed unit testing on the system"},
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
h3 {
  color: var(--clr-warm-yellow)
}
.tagSection {
  display: flex;
  flex-wrap: wrap;
}
.tagSection > span {
  border: 3px solid var(--clr-aquamarine);
  background: var(--clr-dark-charcoal);
  color: var(--clr-aquamarine);
  padding: 0 10px 0 10px;
  margin-right: 5px;
  margin-bottom: 4px;
}
</style>