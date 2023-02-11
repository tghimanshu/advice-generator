<script>
// Importing the Components
import AdviceShuffle from "./AdviceShuffle.vue";
// import BaseLayout from "./components/BaseLayout.vue";
// Making composition api exposed data reactive
import {
  reactive, // Make data reactive just like a normal options api code
  ref, // Creates a reference of Options API
  computed, // Creates a computed property
} from "vue";

export default {
  // Compontents to be used in the Screen
  components: {
    AdviceShuffle,
    // BaseLayout,
  },
  // Composition API
  async setup() {
    console.log("The Composition API");
    // One of the best places to make request since it's before the component is mounted
    let { slip } = await fetch("https://api.adviceslip.com/advice").then(
      (res) => res.json()
    );
    let slipRef = ref(slip);
    let computedSlip = computed(slip);
    let reactiveSlip = reactive(slip);
    console.log(slipRef);
    // for ref u need to use ref if u are using it somewhere in the script for calculations or something
    console.log(slipRef.value);
    console.log(computedSlip);
    console.log(reactiveSlip);
    // The data in the return statement will be available in the component and nothing else
    return {
      slip,
    };
  },
  // Data To Be Show on Screen
  // Options API
  data() {
    return {
      id: 1,
      // advice:
      //   "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
      advice: this.slip,
    };
  },
  methods: {
    async fetchAdvice() {
      let data = await fetch("https://api.adviceslip.com/advice").then((res) =>
        res.json()
      );
      this.advice = data.slip;
      // console.log(this.advice);
    },
  },
  // LifeCycle Hook
  // created() {
  //   this.fetchAdvice();
  // },
};
</script>

<template>
  <div class="advice">
    <div class="advice_id">Advice #{{ advice.id }}</div>

    <!-- You can use layout using the below syntax -->
    <!-- <BaseLayout>
      <template v-slot:title>Yo! First Timer here</template>
      <template v-slot:content>Layouts are cool</template> -->
    <!-- You can use # instead of v-slot: -->
    <!-- <template #title>Yo! First Timer here</template>
      <template #content>Layouts are cool</template>
    </BaseLayout> -->

    <div class="advice_text">"{{ advice.advice }}"</div>

    <div class="advice_divider">
      <span></span>
      <span></span>
    </div>

    <!-- pass function to this new custom event -->
    <AdviceShuffle @shuffle-advice="fetchAdvice">
      <!-- If Anything Passed Here it will be replaced with slot -->
      <!-- if nothing passed the content between slot tag will be the default content -->
    </AdviceShuffle>

    <!-- The below way is also valid in vue but it should only be named like this here 
      and kept the same in the import and components statements since it won't work otherwise 
      (Since, hypens are not allowed in names) -->
    <!-- <advice-shuffle /> -->

    <!-- The below code is a generic component -->
    <!-- passing the component name in is block works like that component -->
    <!-- it will show AdviceShuffle component like above but we can change the value of the component using data or a computed property -->
    <!-- <component :is="'AdviceShuffle'" /> -->
  </div>

  <!-- <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="#">Your Name Here</a>.
  </div> -->
</template>
