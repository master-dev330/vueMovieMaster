<template>
<v-container>
    <v-row>
        <v-col  cols="14" sm="3" v-for="movie in movies" :key="movie.id"  >
            <MovieCard :movie="movie" :genres="genres"/>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import MovieCard from '../components/MovieCard'
export default {  
components :{
    MovieCard,
},
data: function (){
  return {
    movies: [],
    genres: []
  };
},
async created(){
  this.fetchGenres();
  try {
    // const response = await this.$http.get("/movie/popular");
    const response = await this.$http.get("/v1/images/search?format=json&limit=20");
    console.log("response: ", response.data);
    this.movies = response.data;
  }catch (error) {
    console.log(error);
  }
},
methods: {
  async fetchGenres() {
  try {
    const response = await this.$http.get("/genre/movie/list");
    this.genres = response.data.genres;
  }catch (error) {
    console.log(error);
  }
  }
}
}
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';
</style>