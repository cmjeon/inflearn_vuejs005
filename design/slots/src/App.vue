<template>
  <div>
    <ul>
      <item v-for="item in items" :item="item"></item>
      <!-- <item>아이템 1</item>
      <item>아이템 2</item>
      <item>아이템 3</item>
      <item>아이템 4</item>
      <item>아이템 5</item> -->
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  data() {
    return {
      items: ['item1','item2','item3','item4','item5']
    }
  },
  components: {
    Item,
  },
}
</script>