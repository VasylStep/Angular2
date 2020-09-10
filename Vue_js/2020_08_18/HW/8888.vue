<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
</head>

<body>

   <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

   <div id="app">
      <button @click="show = !show">Скрити/показати</button>
      <!-- <span @mouseover="title='Text'">Text</span> 
    <span @mouseover="changeText">Text</span> -->

      <!-- <p>{{title}}</p> -->
      <!-- <p :class="styleCSS"> Colour:{{styleCSS}}</p>
      <input type="text" v-on:input="styleCSS=$event.target.value"> -->

      <!-- <input type="text" v-on:input="increment($event.target.value)">
      <p>{{value}}</p>
      <p>{{doubleValue}}</p> -->
      <p v-if="show">Текст який може стати невидимим</p>


      <p v-else>{{message | lowercase}}</p>
      <ul>
         <li v-for="car,i in cars">{{i+1}}---{{car.model}}, {{car.speed}}</li>
      </ul>
   </div>
   <script src="main.js"></script>
</body>

</html>