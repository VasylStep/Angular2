// new Vue ({
//    el: '#app',
//    data: {
//       title: "Hello World",
//       styleCSS:''
//    },
//    methods:{
//       changeText(){
//          this.title = 'noviy text'
//       }
//    }
// });

// new Vue ({
//    el:'#app',
//    data:{
//       value:1,

//    },
//    methods:{
//       increment(value){
//          this.value=value
//          if (value==25)
//          alert ("Are you shure?")

//       }
//    },
//    computed: {
//       doubleValue (){
//          return this.value*2
//       }

//    }
// })

// new Vue({
//    el: '#app',
//    data: {
//       show: false,
//       message: 'Hello',
//       cars: [
//          { model: "BMW", speed: 250.8 },
//          { model: "Audi", speed: 240.21 },
//          { model: "Mers", speed: 350.4 },
//          { model: "Ford", speed: 160.5 }
//       ]
//    },
//    methods: {

//    },
//    computed: {
//       showMess(){
//          return this.message.toUpperCase ();
//       }
//    },
//    filters: {
//       lowercase (value){
//          return value.toLowerCase();
//       }
//    }
// });
Vue.component('app-car', {
   data: function () {
      return {
         cars: [
            { model: "BMW" },
            { model: "Audi" },
            { model: "Mers" },
            { model: "Ford" }
         ]
      }
   },
   template: '<div><div class="car" v-for="car in cars"<p>{{car.model}}</p></div></div>'
});

new Vue({
   el: '#app',
   data: {
   }
});