<template>
  <div class="container">
    <h3 class="header text-center">
      {{ title }}
    </h3>
    <hr />
    <section class="text-center">
      <div
        class="mb-4"
        v-for="experience in job_experience"
        :key="experience.id"
      >
        <div>
          <h6>{{ experience.position }}</h6>
          <i>
            <h6>{{ experience.company }}, ({{ experience.year }})</h6>
          </i>
          <section class="tagSection middle">
            <span
              v-for="tags in experience.tags"
              class="rounded-pill"
              :key="tags"
              >{{ tags }}</span
            >
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Employment",
  props: ["goto"],
  data() {
    return {
      title: "WORK EXPERIENCE",
      job_experience: [
        {
          id: 2,
          position: "Application Developer Associate",
          company: "Accenture, Inc.",
          year: "March 2021 - March 2022",
          tags: ["Accounting", "SAP FICO", "Finance"],
        },
        {
          id: 1,
          position: "Design Engineer",
          company: "Tsukiden Solutions Inc.",
          year: "April 2019 - January 2021",
          tags: ["C", "Java", "SQL", "Nihongo"],
        },
      ],
    };
  },
};
</script>

<style scoped>
h3 {
  color: var(--clr-warm-yellow);
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
