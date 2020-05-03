<template>
  <div>
    <BaseLoading v-if="isLoading" />
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData" />
    </template>
  </div>
</template>

<script>
/* eslint-disable */

import BaseLoading from '@/components/BaseLoading'
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
import MainBlock from './MainBlock/Index'

export default {
  name: 'ProfileView',
  components: {
    BaseLoading,
    MainBlock
  },
  mixins: [setError],
  data() {
    return {
      isLoading: false,
      profileData: null
    }
  },
  created() {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    fetchData(region, account) {
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data
        })
        .catch(err => {
          console.error('error message:')
          this.profileData = null
          const errObj = {
            routeParams: this.$$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          this.setApiErr(errObj)
          this.$route.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="stylus">
grid-container {
  display: grid;
  grid-template-columns: 1fr;

  .grid-item {
    &.item-left {
      grid-column: span 1;
    }

    &.item-right {
      grid-column: span 1;
    }
  }
}

@media (min-width: 992px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    .grid-item {
      &.item-left {
        grid-column: span 4;
      }

      &.item-right {
        grid-column: span 2;
      }
    }
  }
}
</style>