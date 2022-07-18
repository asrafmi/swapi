<!-- List card of character -->
<template>
  <div class="card shadow text-bg-dark mb-3">
    <div class="card-header">
      <h3 id="title-char">{{ people.name }}</h3>
    </div>
    <div class="card-body">
      <span class="badge badge-dark float-right">{{ people.gender }}</span>
      <h6 class="card-title">Height: <br> <strong>{{people.height}}</strong> cm</h6>
      <h6 class="card-title">Skin: <br> <strong>{{people.skin_color}}</strong></h6>
      <button class="btn float-right" v-on:click="togglefav"><b-icon icon="heart-fill" v-bind:variant="[is_fav ?  'danger': 'black']"></b-icon> </button>
      <p class="card-text" hidden>{{ people.films }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSide",
  props: ["people"],
  data(){
    return{
      is_fav : false
    }
  },
  methods: {
    togglefav(){
      if(this.is_fav==false){
        this.is_fav=true;
      } else {
        this.is_fav=false;
      }
    }
  }
};
</script>

<style></style>
