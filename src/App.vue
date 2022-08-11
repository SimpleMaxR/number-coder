<script>
import Decoder from "./components/Decoder.vue";
// import {useMeta} from "vue-meta";
export default {
  // setup () {
  //   useMeta({
  //     title: '',
  //     htmlAttrs: { lang: 'en', amp: true }
  //   })
  // },
  components:{Decoder}
}
</script>

<template>
<!--  <metainfo>-->
<!--    <template v-slot:title ="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` </template>-->
<!--  </metainfo>-->
  <decoder/>
</template>

<style lang="scss" scoped>

</style>
