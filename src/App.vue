<template>
  <img alt="Vue Centiva" src="./assets/logo_centiva.png">

  <br>

  <button @click="showModal = true">Afficher la Modal (Wip)</button>

  <modal-component v-if="showModal" @close="showModal = false" title="Titre à afficher" >
    <template v-slot:content>
      <p>Contenu à afficher</p>
    </template>
  </modal-component>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'

export default {
  name: 'App',
  data() {
    return {
      showModal: false
    }
  },
  components: {
    ModalComponent
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
