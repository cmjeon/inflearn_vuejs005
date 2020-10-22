<template>
  <div>
    <ul class="ask-list">
      <li v-for="item in fetchedAsk" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 영역 정보 -->
        <div>
          <p class="ask-title">
            <router-link v-bind:to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
    <!-- <p v-for="item in fetchedAsk">
      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title}}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p> -->
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

<style scoped>
.ask-list {
  margin:0;
  padding:0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.ask-title {
  margin:0;
}
.link-text {
  color: #828282;
}
</style>