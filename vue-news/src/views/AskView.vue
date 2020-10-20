<template>
  <div>
    <p v-for="item in fetchedAsk">
      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title}}
      </router-link>
      <!-- <a :href="item.url">
        {{ item.title}}
      </a> -->
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  computed: {
    // #4 배열표기법
    ...mapGetters([
      'fetchedAsk'
    ])

    // #3 객체표기법
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk'
    // })

    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),

    // #1
    // ask() {
    //   return this.$store.state.ask
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
}
</script>

<style>

</style>