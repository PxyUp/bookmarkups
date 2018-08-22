<template>
  <ul>
    <item
    class="item"
    :model="bookmarks">
  </item>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      bookmarks: {
        name: "Мои закладки",
        children: [
        ],
      }
    };
  },
};
</script>

<style lang="scss">
.item {
  cursor: pointer;
}
</style>
