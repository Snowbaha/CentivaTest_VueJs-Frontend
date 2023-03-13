<template>
  <transition name="modal">
    <div v-if="active" class="modal-mask"  @click="outsideClick">
      <div  class="modal-wrapper">
        <div class="modal-container" ref="modalMask" :class="modalType">

          <div class="modal-header">
            <font-awesome-icon class="cross" icon="xmark" @click="$emit('close')" />
          </div>

          <div class="modal-body">
            <font-awesome-icon class="icon" :icon="icon" />

            <div>
              <span class="title">{{ title }}</span>
              <p><slot name="content"></slot></p>
            </div>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-default" @click="$emit('close')">
                Annuler
              </button>
              <button :class="buttonClass" @click="$emit('confirm')">
                Confirmer
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
const states = {
  info: {class: 'info', icon: 'fa-circle-info'},
  success: {class: 'success', icon: 'fa-circle-check'},
  alert: {class: 'alert', icon: 'fa-exclamation-triangle'},
  error: {class: 'error', icon: 'fa-exclamation-circle'}
}

export default {
  name: 'ModalComponent',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    // Est-ce que la Modal se ferme lors d’un clique à l’extérieur?
    closeOnOutsideClick: {
      type: Boolean,
      default: true
    },
    state: {
      type: String,
      default: 'info'
    }
  },
  computed: {
    modalType() {
      return 'modal ' + states[this.state].class
    },
    icon() {
      return 'fa-solid ' + states[this.state].icon
    },
    buttonClass() {
      return 'btn btn-' + states[this.state].class
    }
  },
  methods: {
    outsideClick(event) {
      if (this.closeOnOutsideClick) {
        if (!this.$refs.modalMask?.contains(event.target)) {
          this.$emit('close')
        }
      }
    }
  },
  watch: {
    active: function (val) {
      if (val) {
        this.$emit('open')
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";
</style>
