<template>
    <div class="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-500 dark:bg-gray-800 md:items-center sm:pt-0">
    <link href="./tailwind.css" rel="stylesheet">
    <div class="group bg-gray-200 md:mx-auto min-w-sm p-8 shadow-lg rounded-lg place-items-center">
        <div class="relative mx-auto text-gray-600">
            <input v-model="idHero1" class="search-click" type="number" placeholder="Pesquisar">            
            <button @click="searchHero1" type="submit" class="flex items-center absolute right-0 top-0 mt-1 mr-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
        </div>
        <h1 class="mt-4 group-hover:text-blue-500 text-sm text-center font-semibold sm:text-base md:text-xl lg:text-2xl"> <pre>{{ $store.state.hero1.name }} </pre> </h1>
        <div class="mt-2 bg-gray-50 py-5 px-2 shadow-md rounded-lg place-items-center">
          <img class="mx-14 w-fit h-fit" :src="$store.state.hero1.img" alt="heroi1_img">       
        </div>
        <div class="mt-4 grid grid-rows-6 grid-flow-col divide-y divide-gray-300 place-items-stretch">
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Name:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero1.biography.fullName }} </pre>
          </div>
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Race:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero1.appearance.race }} </pre>
          </div>
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Alignment:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero1.biography.alignment }} </pre>
          </div>
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Height:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero1.appearance.height }} </pre>
          </div>
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Weight:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero1.appearance.weight }} </pre>
          </div>
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Publisher:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero1.biography.publisher }} </pre>
          </div>
        </div>        
    </div>
    <div class="bg-gray-200 p-6 justify-center items-bottom shadow-sm rounded-lg">
      <h1 class="mt-3 mb-2 text-sm text-center font-semibold sm:text-base md:text-xl lg:text-2xl"> Powerstats </h1>
      <div class="mt-4 grid grid-flow-row divide-y divide-gray-300 place-items-stretch">
        <div class="grid grid-cols-3">
          <pre class="text-left ml-3"> {{ $store.state.hero1.powerstats.intelligence }} </pre>
          <p class="text-center font-bold">Intelligence</p>
          <pre class="text-right mr-3"> {{ $store.state.hero2.powerstats.intelligence }} </pre>
        </div>
        <div class="grid grid-cols-3">
          <pre class="text-left ml-3"> {{ $store.state.hero1.powerstats.strength }} </pre>
          <p class="text-center font-bold">Strength</p>
          <pre class="text-right mr-3"> {{ $store.state.hero2.powerstats.strength }} </pre>
        </div>
        <div class="grid grid-cols-3">
          <pre class="text-left ml-3"> {{ $store.state.hero1.powerstats.speed }} </pre>
          <p class="text-center font-bold">Speed</p>
          <pre class="text-right mr-3"> {{ $store.state.hero2.powerstats.speed }} </pre>
        </div>
        <div class="grid grid-cols-3">
          <pre class="text-left ml-3"> {{ $store.state.hero1.powerstats.durability }} </pre>
          <p class="text-center font-bold">Durability</p>
          <pre class="text-right mr-3"> {{ $store.state.hero2.powerstats.durability }} </pre>
        </div>
        <div class="grid grid-cols-3">
          <pre class="text-left ml-3"> {{ $store.state.hero1.powerstats.power }} </pre>
          <p class="text-center font-bold">Power</p>
          <pre class="text-right mr-3"> {{ $store.state.hero2.powerstats.power }} </pre>
        </div>
        <div class="grid grid-cols-3">
          <pre class="text-left ml-3"> {{ $store.state.hero1.powerstats.combat }} </pre>
          <p class="text-center font-bold">Combat</p>
          <pre class="text-right mr-3"> {{ $store.state.hero2.powerstats.combat }} </pre>
        </div>
      </div>
    </div>
    <div class="group bg-gray-200 md:mx-auto min-w-sm p-8 shadow-lg rounded-lg place-items-center">
        <div class="relative mx-auto text-gray-600">
            <input v-model="idHero2" class="search-click" type="number" placeholder="Pesquisar">            
            <button @click="searchHero2" type="submit" class="flex items-center absolute right-0 top-0 mt-1 mr-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
        </div>
        <h1 class="group-hover:text-green-500 mt-4 text-sm text-center font-semibold sm:text-base md:text-xl lg:text-2xl"> <pre>{{ $store.state.hero2.name }} </pre> </h1>
        <div class="mt-2 bg-gray-50 py-5 px-2 shadow-md rounded-lg place-items-center">
          <img class="mx-14 w-fit h-fit" :src="$store.state.hero2.img" alt="heroi1_img"> 
        </div>
        <div class="mt-4 grid grid-rows-6 grid-flow-col divide-y divide-gray-300 place-items-stretch">
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Name:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero2.biography.fullName }} </pre>
          </div>
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Race:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero2.appearance.race }} </pre>
          </div>
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Alignment:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero2.biography.alignment }} </pre>
          </div>
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Height:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero2.appearance.height,  }} </pre>
          </div>
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Weight:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero2.appearance.weight }} </pre>
          </div>
          <div class="grid grid-cols-2">
            <p class="ml-3 text-left font-bold">Publisher:</p>
            <pre class="text-right mr-3"> {{ $store.state.hero2.biography.publisher }} </pre>
          </div>
        </div>        
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations, mapState} from 'vuex'

  export default {
    name: 'IndexPage',

    data(){
        return{
          idHero1: '',
          idHero2: '',
        };
    },

    middleware(){
    },
    
    /*async asyncData ({ $axios, idHeroi }) {
        const heroi = await $axios.$get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/'+idHeroi+'.json')
        return{heroi}
    },*/

    methods:{
      searchHero1() {
        this.$store.dispatch('hero1/getHero', this.idHero1);    
      },

      searchHero2() {
        this.$store.dispatch('hero2/getHero', this.idHero2);    
      },      
    },

    computed: {
      get_average_rgb(img) {
        var context = document.createElement('canvas').getContext('2d');
        if (typeof img == 'string') {
            var src = img;
            img = new Image;
            img.setAttribute('crossOrigin', ''); 
            img.src = src;
        }
        context.imageSmoothingEnabled = true;
        context.drawImage(img, 0, 0, 1, 1);
        return context.getImageData(1, 1, 1, 1).data.slice(0,3);
      },
    }
  }
</script>

<style>
  .nuxt-logo {
    height: 180px;
  }

  .search-click {
    border: 1px solid #ccc;
    outline: none;
    background-size: 22px;
    background-position: 13px;
    border-radius: 10px;
    width: 250px;
    height: 10px;
    padding: 10px;
    transition: all 0.5s;
  }
  .search-click:focus {
      height: 35px;
      padding-left: 10px;
  }

</style>