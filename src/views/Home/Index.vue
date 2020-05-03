<template>
  <div class="home-view">
    <HomeTitle />

    <MainForm />
  </div>
</template>

<script>
/* eslint-disable */
import HomeTitle from './HomeTitle'
import MainForm from './HomeForm'

export default {
  name: 'HomeView',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
