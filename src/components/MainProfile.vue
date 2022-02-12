<template>
    <div>
        <div id="MainProfile" class="card-body">
            <div id="profile-content"  class="container row d-flex flex-xs-row flex-md-row flex-lg-row">
                <section id="photo-contacts-section" class="col-lg-6 mb-2" >
                    <section id="my-photo-section" class="middle">
                        <img id="my-photo" class="img-thumbnail w-50" src="../assets/abigail.jpg"/>
                    </section>
                </section>
                <section class="col-lg-6 text-center ">
                    <h1 class="header">{{name}}</h1>
                    <hr>
                    {{briefInfo}}
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
    
import Education from './Education'
import Employment from './Employment'

    export default {
        name: 'MainProfile',
        components: {
            Education,
            Employment
        },
        props: ['goto'],
        data(){
            return {
                name: 'ABIGAIL CALONG',
                briefInfo: "I'm exposed to web and software development, adaptable and a hardworker. I like kpop, listen to podcast and sometimes watercolor.",
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
    #MainProfile {
        background: #333333;
        color: white;
    }
    #my-photo{
        border-radius: 50%;
        margin-bottom: 2%;
        border: 5px solid #734b6d
    }
    #my-photo-section {
        width: fit-content;
    }
    #photo-contacts-section  {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .middle {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #Employment {
        background: #333333;
        color: white;
    }
</style>