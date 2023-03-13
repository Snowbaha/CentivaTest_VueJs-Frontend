<template>
  <img alt="Vue Centiva" src="./assets/logo_centiva.png">

  <h1>Démo App du test !</h1>

  Confirmation : {{ confirmed }}
  <br>
  <template v-for="state in getStates" :key="state">
    <button @click="displayModal(state)" >Afficher la Modal {{state}}</button>
  </template>



  <modal-component :active="active" :title="title" :state="state" :closeOnOutsideClick="closeOnOutsideClick" @close="close()" @confirm="confirm()">
    <template v-slot:content>
      {{content}}
    </template>
  </modal-component>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'

const states = {
  info: {
    title: 'Mon modal d\'information',
    content: 'Contenu à afficher',
    closeOnOutsideClick: true
  },
  success: {
    title: 'Félicitations!',
    content: 'Vous ne pourrez pas fermer en cliquant à l\'extérieur de la modal',
    closeOnOutsideClick: false
  },
  alert: {
    title: 'Une alerte',
    content: 'Un message d\'alerte divers',
    closeOnOutsideClick: true
  },
  error: {
    title: 'Attention!',
    content: 'Un message erreur divers',
    closeOnOutsideClick: true
  }
}

export default {
  name: 'App',
  data() {
    return {
      active: false,
      confirmed: false,
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
    },
    closeOnOutsideClick(){
      return states[this.state].closeOnOutsideClick;
    }
  },
  components: {
    ModalComponent
  },
  methods: {
    displayModal(state) {
      this.active = true
      this.state = state
    },
    close() {
      this.active = false
    },
    confirm() {
      this.active = false
      this.confirmed = true
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
