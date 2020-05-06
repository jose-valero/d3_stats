<template>
  <div class="home-view">
    <HomeTitle />

    <MainForm />
  </div>
</template>

<script>
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
