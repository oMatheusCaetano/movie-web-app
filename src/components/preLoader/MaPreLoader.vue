<template>
  <transition name="fade">
    <div
      class="preloader position-absolute d-flex flex-column justify-content-center
      align-items-center h-100 w-100 bg-gradient"
      v-if="show"
    >
      <div class="preloader_loader d-flex justify-content-center align-items-center">
        <div class="preloader_loader_inner"></div>
      </div>
      <h3 class="font-weight-bold p-2 pl-4">Loading...</h3>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    show: true,
  }),

  created() {
    this.disableScroll()
    setTimeout(() => {
      this.show = false
      this.enableScroll()
    }, 1000)
  },

  methods: {
    disableScroll() {
      window.$('html, body').css({
        height: `${window.$(window).height()}px`,
        width: `${window.$(window).width()}px`,
        overflow: 'hidden',
      })
    },

    enableScroll() {
      window.$('html, body').css({ overflow: 'auto' })
    },
  },
}
</script>

<style lang="scss" scoped>
.preloader {
  z-index: 9999;

  &_loader {
    border: 5px solid #f0f2f3;
    border-top: 5px solid #3498db;
    border-bottom: 5px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 3s ease infinite;

    &_inner {
      border: 5px solid #e2e5e7;
      border-left: 5px solid #3498db;
      border-right: 5px solid #3498db;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: innerSpin 1.5s linear infinite;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes innerSpin {
    0% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
}
</style>
