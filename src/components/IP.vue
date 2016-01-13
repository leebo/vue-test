<template>
  <div>
    <div v-if="$loadingRouteData">Loading ...</div>
    <div v-if="!$loadingRouteData" class="hello">
      {{ip}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ip: ''
    }
  },
  route: {
    data () {
      return this.$http.get('http://ip-api.com/json')
      .then(function (response) {
        this.ip = response.data.query
        /* this.$set('ip', response.data.query) */
      })
    }
  }
}
</script>
