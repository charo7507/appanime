<template>
  <div class="app">
    <header>
      <h1 class="title">ANIME SHAPERS</h1>
      <form action="" class="search__form">
        <input type="search" class="form__input" placeholder="Search anime..." v-model="animeName">
      </form>
    </header>

    <main>
      <div class="cards">
        <AllAnime />
      </div>
    </main>
    
  </div>
</template>

<script setup>
import AllAnime from './components/AllAnime.vue'
  import {
    ref
  } from 'vue'

  const animeName = ref('')
</script>

<style lang="scss">
  .app {
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
  }
</style>