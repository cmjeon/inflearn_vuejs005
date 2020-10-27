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
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}`);
    this.$store.dispatch('FETCH_USER', userName);
  },
  components: {
    UserProfile
  }
}
</script>

<style>

</style>