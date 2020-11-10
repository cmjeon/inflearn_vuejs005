<template>
  <div>
    <ul>
      <item>아이템 1</item>
      <item>
        아이템 2
        <button>Click me</button>
      </item>
      <item>
        <div>
          아이템 3
        </div>
        <img src="./assets/endgame.png" alt="어벤져스 엔드게임" width="50%">
      </item>
      <item>
        <div style="color: blue;">
          아이템 4
        </div>
      </item>
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