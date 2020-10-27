<template>
  <div>
    <user-profile></user-profile>
    <!-- <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p> -->
    <!-- <p> {{ this.$store.state.user.about }}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  // created() {
  //   const userName = this.$route.params.id;
  //   this.$store.dispatch('FETCH_USER', userName);
  // },
  components: {
    UserProfile
  }
}
</script>

<style>

</style>