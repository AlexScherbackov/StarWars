<template>
  <div id="app">
    <star-wars-view 
      :tableData="tableData" 
      v-if="isLoaded" 
    />
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';

  import StarWarsView from './components/StarWarsView.vue';

  export default {
    name: 'app',
    components: {
      StarWarsView
    },
    data () {
      return {
        tableData: [],
        isLoaded: false
      }
    },
    created(){
      const loadPeoplePromise = new Promise((resolve, reject) => {
        resolve()
      });
      loadPeoplePromise
        .then(
          result => this.loadFilms(),
          error => console.log(error)
        )
        .then(
          result => this.loadPeople()
        )
    },
    computed:{
      ...mapGetters(['people', 'films']),
    },
     methods:{
      ...mapActions(['loadPeople', 'loadFilms']),
    },
    watch:{
      people:{
        immediate: true,
        handler(){
          this.tableData = this.people;
          if(this.tableData.length > 0){
            this.isLoaded = true
          }
        }
      },
      films:{
        handler(){
          this.tableData = this.tableData.map(item => {
            item.films = item.films.map( film => {
              if(film)
                return this.$store.getters.film(film)[0].title;  
            });
            return item;
          })
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
