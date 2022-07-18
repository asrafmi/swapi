<template>
  <div class="item">
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
                Chars
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <h2>Characters</h2>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Your favorite character"
              aria-label="Your favorite character"
              aria-describedby="basic-addon1"
              @keyup="searchChar"
            />
            <span class="input-group-text" id="basic-addon1"
              ><b-icon icon="search" variant="info"></b-icon
            ></span>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-3" v-for="people in peoples" :key="people.name">
          <CardSide :people="people" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarSide from "@/components/NavbarSide.vue";
import CardSide from "@/components/CardSide.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarSide,
    CardSide,
  },
  data() {
    return {
      peoples: [],
      search: "",
    };
  },
  methods: {
    // tampung array
    setPeoples(data) {  
      this.peoples = data;
    },
    // cari data karakter
    searchChar() {
      axios
        .get("https://swapi.dev/api/people?search=" + this.search)
        .then((response) => this.setPeoples(response.data.results))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => this.setPeoples(response.data.results))
      .catch((error) => console.log(error));
  },
};
</script>
<style></style>
