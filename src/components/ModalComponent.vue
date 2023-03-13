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
const states = {info: {class: 'info', icon: 'fa-circle-info'},
                success: {class: 'success', icon: 'fa-circle-check'},
                alert: {class: 'alert', icon: 'fa-exclamation-triangle'},
                error: {class: 'error', icon: 'fa-exclamation-circle'}}

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
  //backdrop-filter: blur(15px);
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

    .icon{
      color: $color-accent1-normal;
      background: $color-accent1-lighter;
    }
  }
  &.success{
    border-top-color: $color-accent6-normal;

    .icon{
      color: $color-accent6-normal;
    }
  }
}

.modal-header{
  padding: 12px;

  .cross{
    float: right;
    cursor: pointer;
  }

}

.modal-body {
  padding: 0 36px 36px 36px;
  color: $light-text-color;
  font-size: $font-size-base;
  display: flex;


  .icon{
    font-size: 20px;
    margin-right: 12px;
    padding: 10px;
    border-radius: 50%;
  }



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
