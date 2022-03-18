<template>
  <div>{{dataList}}</div>
</template>

<script>
export default {
 data() {
   return {
      dataList:""
   }
 },
 methods: {
   
 },
 created() {
  this.dataList= this.$route.query[0]
   console.log(this.$route)
 },
}
</script>

<style>

</style>
