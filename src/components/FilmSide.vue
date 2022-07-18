<!-- List card of films -->
<template>
  <div class="card shadow text-bg-dark mb-3" style="max-width: 18rem">
    <div class="card-header">
      <h3 id="title-film">{{ film.title }}</h3>
    </div>
    <div class="card-body">
      <h6 class="card-title">
        Director: <br />
        {{ film.director }}
      </h6>
      <h6 class="card-title">
        Producer: <br />
        {{ film.producer }}
      </h6>
      <p class="card-text" v-if="film.opening_crawl.length<75">{{ film.opening_crawl}}</p>
      <p class="card-text" v-else>{{ film.opening_crawl.substring(0,75)+"..."}}</p>
      <router-link :to="'/films/'+film.episode_id" class="btn btn-dark float-right btn-sm">details..</router-link>
      <p class="card-text" hidden>{{ film.characters }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmSide",
  props: ["film"],
};
</script>

<style></style>
