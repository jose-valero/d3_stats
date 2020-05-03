<template>
  <div>
    <h1>Profile View</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ProfileView',
  created() {
    // this.$route.params -> { region: "eu", battleTag: "SuperRambo-2613" }
    this.fetchData()
  },
  methods: {
    fetchData() {
      // Llamada API
    }
  }
}
</script>
