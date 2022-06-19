<!-- Please remove this file from your project -->
<template class="dark">
  <div class="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-purple-500 dark:bg-gray-800 md:items-center sm:pt-0">
    <link href="./tailwind.css" rel="stylesheet">
    <div class="bg-gray-200 md:mx-auto min-w-sm p-10 shadow-sm rounded-lg">
        <div class="pt-2 relative mx-auto text-gray-600">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" placeholder="Pesquisar">
            <button type="submit" class="flex items-center absolute right-0 top-0 mt-5 mr-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
        </div>
        <h1 class="mt-2 text-sm text-center font-semibold sm:text-base md:text-xl lg:text-2xl">HEROI 1</h1>
    </div>
    <div class="bg-gray-200 p-6 justify-center items-bottom shadow-sm rounded-lg">
    <div :class="'w-['+Math.round(($store.state.hero1.powerstats.intelligence / ($store.state.hero1.powerstats.intelligence + $store.state.hero2.powerstats.intelligence)) * 50)+'px] h-4 bg-purple-400'"> </div>          
          <div :class="'w-['+Math.round(($store.state.hero2.powerstats.intelligence / ($store.state.hero1.powerstats.intelligence + $store.state.hero2.powerstats.intelligence)) * 50)+'px] h-4 bg-pink-400'"> </div>  
    </div>
    <div class="group bg-gray-200 md:mx-auto min-w-sm p-10 shadow-sm rounded-lg"> 
        HEROI 2
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heroes2',
  
  data(){
      return{

      };
  },

  async asyncData() {
      //const teste = await $axios.$get('https://jsonplaceholder.typicode.com/todos/1')
      return{teste: [{name : 'Homem de Ferro'}]}
  },
}
</script>

<style>
    .search-hover {
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
    .search-hover:hover {
        height: 35px;
        padding-left: 10px;
    }
</style>