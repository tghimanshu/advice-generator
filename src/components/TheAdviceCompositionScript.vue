<script setup>
// no need for components of defination of options API
import AdviceShuffle from "./AdviceShuffle.vue";
import { reactive } from "vue";

/* 
  Being in the script setup,
  You don't need to do export default or setup function since you already are inside the setup
  No need to return since Composition manages it automatically
*/

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
let { slip } = await fetch("https://api.adviceslip.com/advice").then((res) =>
  res.json()
);
advice = slip;
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
