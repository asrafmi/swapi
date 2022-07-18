<template>
  <div class="film-detail">
    <NavbarSide />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-3">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link class="text-dark" to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Film Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- Details -->
      <div class="row">
        <div class="col md-6">
          <img src="../assets/images/hero.png" class="img-fluid shadow" />
        </div>
        <div class="col md-6">
          <h2>
            {{ film.title }} 
          </h2>
          <hr />
          <h6>
            Director : {{ film.director }}
            <br />
            Producer : {{ film.producer }}
          </h6>
          <p>{{ film.opening_crawl }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarSide from "@/components/NavbarSide.vue";
import axios from "axios";

export default {
  name: "FilmDetail4",
  components: {
    NavbarSide,
  },
  data() {
    return {
      film: [],
    };
  },
  methods: {
    // tampung array
    setFilms(data) {
      this.film = data;
    },
  },
  mounted() {
    axios
      .get("https://swapi.dev/api/films/4")
      .then((response) => this.setFilms(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
