<script>
import AdviceShuffle from "./AdviceShuffle.vue";
import {
  reactive, // Make data reactive just like a normal options api code
  ref, // Creates a reference of Options API
  computed, // Creates a computed property
} from "vue";

/* 
  Using Composition API (Setup Function) to do all the scripting
  You can use ref, computed or reactive functions to replace data, computed and methods provided by options api 
  this is mostly used by people who wants more control over the code using JavaScript
*/

export default {
  components: {
    AdviceShuffle,
  },
  async setup() {
    let advice = reactive({
      advice: "",
      id: 1,
    });
    async function fetchAdvice() {
      let data = await fetch("https://api.adviceslip.com/advice").then((res) =>
        res.json()
      );
      advice = data.slip;
    }
    let { slip } = await fetch("https://api.adviceslip.com/advice").then(
      (res) => res.json()
    );
    advice = slip;
    return {
      advice,
      fetchAdvice,
    };
  },
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
