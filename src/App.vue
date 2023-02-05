<script>
// Importing the Components
import AdviceShuffle from "./components/AdviceShuffle.vue";

export default {
  // Compontents to be used in the Screen
  components: {
    AdviceShuffle,
  },
  // Data To Be Show on Screen
  data() {
    return {
      id: 1,
      advice:
        "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    };
  },
};
</script>

<template>
  <div class="advice">
    <div class="advice_id">Advice #{{ id }}</div>

    <div class="advice_text">"{{ advice }}"</div>

    <div class="advice_divider">
      <span></span>
      <span></span>
    </div>

    <AdviceShuffle />
  </div>

  <!-- <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="#">Your Name Here</a>.
  </div> -->
</template>
