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
  methods: {
    shuffleAdvice() {
      console.log("Shuffling the Advice....");
    },
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

    <!-- pass function to this new custom event -->
    <AdviceShuffle @shuffle-advice="shuffleAdvice" />
    <!-- The below way is also valid in vue but it should only be named like this here 
      and kept the same in the import and components statements since it won't work otherwise 
      (Since, hypens are not allowed in names) -->
    <!-- <advice-shuffle /> -->
  </div>

  <!-- <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="#">Your Name Here</a>.
  </div> -->
</template>
