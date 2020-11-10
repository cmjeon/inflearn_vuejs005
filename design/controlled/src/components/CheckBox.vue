<template>
  <input type="checkbox" v-model="ttt">
</template>

<script>
export default {
  props: ['checked'],
  data() {
    return {
      ttt : this.checked,
    }
  }
}
</script>