<template>
  <div class="mainxia">
    <Pinkagenav></Pinkagenav>
    <Pinkagecontent></Pinkagecontent>


  </div>
</template>

<script>
import Pinkagenav from './Pinkagenav'
import Pinkagecontent from './Pinkagecontent'
export default {
  components:{
    Pinkagenav,
    Pinkagecontent
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



