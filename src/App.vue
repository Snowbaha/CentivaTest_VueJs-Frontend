<template>
  <img alt="Vue Centiva" src="./assets/logo_centiva.png">

  <h1>Démo App du test !</h1>
  <br>
  <template v-for="state in getStates" :key="state">
    <button @click="displayModal(state)" >Afficher la Modal {{state}}</button>
  </template>



  <modal-component v-if="showModal" @close="showModal = false" :title="title" :state="state" >
    <template v-slot:content>
      {{content}}
    </template>
  </modal-component>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'

const states = {
  info: {title: 'Mon modal d\'information (par défaut sans state)', content: 'Contenu à afficher'},
  success: {title: 'success', content: 'fa-circle-check'},
  alert: {title: 'alert', content: 'fa-exclamation-triangle'},
  error: {title: 'error', content: 'fa-exclamation-circle'}
}

export default {
  name: 'App',
  data() {
    return {
      showModal: false,
      state: 'info'
    }
  },
  computed:{
    getStates(){
      return Object.keys(states);
    },
    title(){
      return states[this.state].title;
    },
    content(){
      return states[this.state].content;
    }
  },
  components: {
    ModalComponent
  },
  methods: {
    displayModal(state) {
      this.showModal = true
      this.state = state
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
