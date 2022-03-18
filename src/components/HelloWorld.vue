<template>
  <div>
    <span>{{userer[2]}}</span>
    <button @click="transfer">点击传值给父组件</button>
  </div>
</template>

<script>
export default {
  // name:HelloWorld,
   props:{
    userer:{           //这个就是父组件中子标签自定义名字
      type:Array,
      required:true
    }
  },
  // props: [userer],
  data() {
    return {
      dataER:"我是子组件",
      // ref传值数据
      dataRef:"我是ref数据"
    };
  },
  methods: {
    transfer(){
      // console.log(this.dataER)
      this.$emit("transferClick",this.dataER)
    },
    // ref传值
    dataClick(e){
      
       console.log(e,"调用了子组件的方法")
    }
  },
  created() {
    console.log(this.userer[2]);
  },
};
</script>

<style>
</style>