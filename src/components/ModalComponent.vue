<template>
  <transition name="modal">
    <div class="modal-mask">
      <div  class="modal-wrapper">
        <div class="modal-container" :class="modalType">

          <div class="modal-header">
            Croix à mettre
          </div>

          <div class="modal-body">
            Icone à mettre
            <span class="title">{{ title }}</span>
            <slot name="content">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-default" @click="$emit('close')">
                Annuler
              </button>
              <button class="btn btn-info" @click="$emit('confirm')">
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
const states = {info: {class: 'info', icon: 'info'},
                success: {class: 'green', icon: 'check_circle'},
                alert: {class: 'alert', icon: 'check_circle'},
                error: {class: 'red', icon: 'error'}}

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
      return states[this.state].icon
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";
@import "../assets/buttons.scss";
.info{
  background: $color-info;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:$color-night-gray9;
  box-shadow: 0 15px 6px  0 rgba(53, 64, 82, 0.14);
  //filter: blur(5px);
  opacity: 0.7;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 580px;
  margin: 0 auto;
  padding: 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: $font;
  color: $base-text-color;
  border-top: 5px solid #313131;
  text-align: left;

  &.info{
    border-top-color: $color-accent1-normal;
  }
}

.modal-header{
  padding: 12px;

}

.modal-body {
  padding: 0 36px 36px 36px;
  color: $light-text-color;
  font-size: $font-size-base;

  .title{
    color: $base-text-color;
    font-weight: $font-weight-medium;
    font-size: $font-size-title;
  }
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
  margin: 0;
  border-top: 1px solid $color-night-gray5;

  .btn{
    margin-left: 12px;
  }
}


</style>
