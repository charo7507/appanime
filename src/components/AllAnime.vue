 <template>

    <div class="card">


       <router-link :to="{name: 'AnimeDescrip', params: {id: anime.title} }"  class="card__link">
   <img :src="anime.images.jpg.image_url" class="cards__img" alt="">
          <h3 class="anime__title">
             {{anime.title}}
          </h3>
       </router-link>
    </div>


 </template>

<script setup>
   import {defineProps} from 'vue'
   defineProps({
   anime: Object 
})

</script>

 <style lang="scss">
    .card {
      
      .card__link{
         text-decoration: none;
       .cards__img {
          border-radius: 1rem;
          margin-bottom: 1rem;
       }
       .anime__title{
         width: 200px;
       }
      }
    }
 </style>