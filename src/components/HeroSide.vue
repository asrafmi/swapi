<template>
  <div class="hero">
    <!-- desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-3">
        <div class="col md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h4>
                <strong>Star Wars</strong> <br />
                stuffs are here!
              </h4>
              <p>Choose your favorite character!</p>
              <router-link class="btn btn-lg btn-info" to="/characters">
                <b-icon icon="arrow-right" animation="cylon"></b-icon> &nbsp;
                Choose
              </router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <img id="hero-img" src="../assets/images/heroo.png" width="100%" />
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-3">
        <div class="col md-6">
          <img id="hero-img" src="../assets/images/heroo.png" width="100%" />
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h4>
                <strong>Star Wars</strong> <br />
                stuffs are here!
              </h4>
              <p>Choose your favorite character!</p>
              <router-link to="/characters" class="btn btn-lg btn-info">
                <b-icon icon="arrow-right" animation="cylon"></b-icon> &nbsp;
                Choose
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSide",
};
</script>

<style>
#hero-img {
  size: 70%;
  border-radius: 15px;
}
</style>
