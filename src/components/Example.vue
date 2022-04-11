<template>
    <div>
        <button type="button" class="btn btn-primary">Primary</button>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Pokemon</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pokemon in pokemonList" :key="pokemon.id">
                    <th  scope="row" >{{ pokemon.id }}</th>
                    <th  scope="row" >{{ pokemon.pokemon }}</th>
                </tr>
            </tbody>
        </table>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">UserId</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <th  scope="row" >{{ post.id }}</th>
                    <th  scope="row" >{{ post.userId }}</th>
                    <th  scope="row" >{{ post.title }}</th>
                    <th  scope="row" >{{ post.body }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from 'axios'

    export default {
        name: 'exampleVue',
        data() {
            return {
                me: 'Abigail',
                pokemonList: [
                    {id: 1, pokemon: 'Bulbasaur'},
                    {id: 2, pokemon: 'Squirtle'},
                    {id: 3, pokemon: 'Charmander'}
                ],
                posts: []
            }
        },
        created(){
            axios.get("https://jsonplaceholder.typicode.com/posts").then(posts=>{
                this.posts = posts.data;
            })
            
        }
    }
</script>


<styles></styles>