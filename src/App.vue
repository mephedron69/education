<template>
  <div>
    <Header />
    <router-view class="main"/>
  </div>
</template>

<script>
import Header from './components/layots/Header.vue';

export default {
  components: {Header}
}

</script>
<style lang="scss">
#app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

  html,body,p {
    overflow-x: hidden;
    margin: 0 ;
    padding: 0 ;
  }
</style>
