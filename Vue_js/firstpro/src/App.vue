<template>
<div>
  <input type="text" v-model="text">
  <button @click="add">add todo</button>
  <ul> 
<li v-for="(item,i) in arr" :key="i">
<span> {{item}}</span>
</li>
</ul>


</div>
</template>

<script>


export default {
  name: 'App',
  data (){
    return {
      text: '',
      arr:[]
    }
  },
  methods: {
    add (){
        this.arr.push (this.text)
    }
  }
  }

</script>

<style>


</style>
