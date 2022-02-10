<template>
    <div class="container">
      <section>
        <span class="header text-center">
          <h3>
            {{title}}
          </h3>
        </span>
        <hr>
      </section>
      <section>
        <h4>
          {{degree}}
        </h4>
        <i>
          <h5>
            {{university}}, ({{year}})
          </h5>
        </i>
        <p>
          {{additionalDetails}}
        </p>
      </section>
    </div>
</template>

<script>
export default {
  name: 'Education',
  props: [ 'goto' ],
  data() {
    return{
      title: 'EDUCATIONAL ATTAINMENT',
      degree: 'Bachelor of Science in Information Technology',
      university: 'Technological University of the Philippines',
      year: '2015-2019',
      additionalDetails:'A BSIT graduate from TUP, first exposed in programming languages such as C, Java and Python. Web developing with HTML, CSS, JavaScript, Bootstrap with CodeIgniter. Had a mobile based capstone - WatchApp used Java, Android Studio, Firebase and Google Maps API.'
    }
  }
}
</script>

<style scoped>
.header {
  color: var(--clr-eggplant);
}
.container {
  color: var(--clr-dark-charcoal);
}
</style>