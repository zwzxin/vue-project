<template>
<div class="mainxia">
  <Homenav></Homenav>
<Homecontent></Homecontent>
</div>


</template>
<script>
import Homenav from './Homenav'
import Homecontent from './Homecontent'

export default {
  components: {
    Homenav,
   Homecontent
  }
}
</script>

<style lang="stylus" scoped>
.mainxia
  height 100%
  width 100%
  display flex
  flex-direction column
  
</style>
