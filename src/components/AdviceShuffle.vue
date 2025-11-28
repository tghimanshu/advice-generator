<script>
/**
 * A component that displays a dice icon and emits an event to shuffle/refresh advice.
 *
 * This component renders a clickable area containing a dice icon. When clicked,
 * it emits a 'shuffle-advice' event to signal the parent component to fetch new advice.
 * It also accepts a default slot to override the dice icon if needed.
 *
 * @component
 * @emits shuffle-advice - Event emitted when the component is clicked.
 */
export default {
  emits: ["shuffle-advice"],
  methods: {
    /**
     * A simple logging method.
     *
     * Currently used for debugging purposes to log "first" to the console.
     * @public
     */
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
    <!-- Slot is used as a placeholder for compontent's children data -->
    <slot>
      <!-- if no children is passed -->
      <img src="/images/icon-dice.svg" alt="Looks Good" class="advice_dice" />
    </slot>
  </div>
</template>

<style>
.advice_refresh {
  cursor: pointer;
}
</style>
