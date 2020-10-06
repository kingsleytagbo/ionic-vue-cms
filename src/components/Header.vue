<template>
<div class="fixed-top sticky-top">
        <div class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
                <i class="fa fa-star-o"></i>
                Vue @Next Multi-Tenant
            </a>

            <!-- BEGIN SEARCH -->
            <button @click="toggleSearch()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarmenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div v-if="showSearch" class="navbar-collapse collapse show" id="navbarMenu" style="">
                <form class="form-inline my-0 my-lg-0" method="get" action="/">
                    <input name="search" id="search" class="form-control form-control-sm mr-sm-2" type="search" placeholder="Search Vue @Next" aria-label="Search">
                    <button class="btn btn-outline-light form-control-sm my-0 my-sm-0" type="button">Search</button>
                </form>
            </div>
            <!-- END SEARCH -->

        </div>

</div>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
         showSearch: true
    };
  },

  mounted() {
  },

  computed: {
  },

  methods: {
      /*
        Toggle for Collapsing or Expanding the Search Form
      **/
      toggleSearch(){
          this.showSearch = !this.showSearch;
      }
  }
};
</script>

<style>
</style>
