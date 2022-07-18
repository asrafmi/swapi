<template>
  <div class="home">
    <NavbarSide />
    <div class="container">
      <HeroSide />
      <div class="row mt-2">
        <div class="col mt-3">
          <h4>Favorite Films</h4>
        </div>
        <div class="col mt-3">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Your Favorite Film"
              aria-label="Your Favorite Film"
              aria-describedby="basic-addon1"
              @keyup="searchFilm"
            />
            <span class="input-group-text" id="basic-addon1"
              ><b-icon icon="search" variant="info"></b-icon
            ></span>
          </div>
        </div>
      </div>
      <div class="row mb-3 mt-3">
        <div class="col-4" v-for="film in films" :key="film.episode_id">
          <FilmSide :film='film'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarSide from "@/components/NavbarSide.vue";
import HeroSide from "@/components/HeroSide.vue";
import FilmSide from "@/components/FilmSide.vue";
import axios from "axios";

export default {
  name: "ItemView",
  components: {
    NavbarSide,
    HeroSide,
    FilmSide,
  },
  data() {
    return {
      films: [],
      search: "",
    };
  },
  methods: {
    // tampung array
    setFilms(data) {
      this.films = data;
    },
    // cari data film
    searchFilm() {
      axios
        .get("https://swapi.dev/api/films?search=" + this.search)
        .then((response) => this.setFilms(response.data.results))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("https://swapi.dev/api/films")
      .then((response) => this.setFilms(response.data.results))
      .catch((error) => console.log(error));
  },
};
</script>
