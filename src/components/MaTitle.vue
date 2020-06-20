<template>
  <h2 class="h3 text-default-dark">
    <font-awesome-icon class="text-danger" :icon="this.icon" />
    {{ this.title }}
  </h2>
</template>

<script>
export default {
  props: ['title', 'icon'],
}
</script>
