<template>
  <div>
    <ul class="jobs-list">
      <li v-for="item in this.$store.state.jobs" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 영역 정보 -->
        <div>
          <p class="jobs-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <a :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
    <!-- <p v-for="job in this.$store.state.jobs">
      <router-link v-bind:to="`/item/${job.id}`">
        {{ job.title}}
      </router-link>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p> -->
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
  },
}
</script>

<style scoped>
.jobs-list {
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
.jobs-title {
  margin:0;
}
.link-text {
  color: #828282;
}

</style>