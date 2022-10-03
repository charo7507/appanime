<template>
  <div class="homme">
    <header>
      <h1 class="title">ANIME SHAPERS</h1>
      <form action="" class="search__form" 
      @submit.prevent="HandeSearch"
      >
        <input type="search" class="form__input" placeholder="Search anime..." 
        required
        v-model="animeName">
      </form>

      
    </header>

    <main>
      <div class="cards">
        <AllAnime 
        v-for="(anime, i) in animeList" 
        :key="i"
        :anime="anime"
         />
      </div>
    </main>
  </div>
</template>

<script setup>
import AllAnime from '../components/AllAnime.vue'
// import axios from 'axios'
  import {
    ref
  } from 'vue'

  const animeName = ref('')
  const animeList = ref([])

  // const HandeSearch =() =>{
  //   axios
  //   .get(`https://api.jikan.moe/v4/anime?q=${animeName.value}`)
  //   .then((res) =>{
  //     const {
  //       data
  //     } = res

  //     // console.log(res);
  //     console.log(data.data);
  
  //   })
  // }

  const HandeSearch = async () =>{
    animeList.value = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName.value}`)
    .then(res => res.json())
    .then(data => data.data)

    console.log(animeList.value);
  }
</script>

<style lang="scss">
  .homme {
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    header {
      .title {
        text-align: center;
        margin: 2rem 0;
      }

      .search__form {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
      }

      .form__input {
        width: 100%;
        max-width: 500px;
        padding: 0 10px;
        height: 40px;
        background: transparent;

        border: none;
        outline: none;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        border-radius: .5rem;
        transition: .5s;

        &::placeholder {
          color: #000;
        }

        &:focus {
          background-color: #313131;
          color: #fff;
        }
      }
    }

    main{
      max-width: 1200px;
      padding-left: 30px;
      padding-right: 30px;
      margin: 0 auto;
    
      .cards{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 3rem;
        border-radius: 1rem;
      }
    }
  }
</style>