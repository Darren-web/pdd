<template>
  <div id="app">
    <router-view/>
    <TabBar/>
  </div>
</template>

<script>
  import TabBar from './components/TabBar'
  export default {
    name:"App",
    components: {
      TabBar
    }
  }
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%

</style>