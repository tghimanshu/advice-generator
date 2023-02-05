<script>
export default {
  emits: ["shuffle-advice"],
  methods: {
    yo() {
      console.log("first");
    },
  },
};
</script>
<template>
  <!-- $emit is the function which emits the function -->
  <!-- <div class="advice_refresh" @click="$emit('shuffle-advice')"> -->
  <div class="advice_refresh" @click="$emit('shuffle-advice')">
    <img src="/images/icon-dice.svg" alt="Looks Good" class="advice_dice" />
    <!-- hi -->
  </div>
</template>
