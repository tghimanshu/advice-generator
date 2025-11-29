<!-- Composition API is flexible while Options API rigid  -->
<!-- You dont need async for any async task since setup manages it itself -->
<script setup>
/**
 * @file TheAdviceCompositionScript.vue
 * @description This component displays advice using Vue's Composition API with the `<script setup>` syntax.
 * It fetches random advice from an API and allows the user to refresh it.
 */

// no need for components of defination of options API
import AdviceShuffle from "./AdviceShuffle.vue";
import { reactive, defineProps, defineEmits } from "vue";

/* 
  Being in the script setup,
  You don't need to do export default or setup function since you already are inside the setup
  No need to return since Composition manages it automatically
*/

/**
 * Defines the props for this component.
 *
 * @type {Object}
 * @property {string} name - An optional name prop (demonstration purpose).
 */
const props = defineProps({
  name: {
    type: String,
  },
});
console.log(props);

/**
 * Defines the events emitted by this component.
 *
 * @type {Function}
 * @param {string[]} events - Array of event names.
 */
const emits = defineEmits(["change-name"]);

/**
 * Reactive state object holding the current advice.
 *
 * @type {Object}
 * @property {string} advice - The text content of the advice.
 * @property {number} id - The unique identifier of the advice.
 */
let advice = reactive({
  advice: "",
  id: 1,
});

/**
 * Fetches new advice from the API and updates the local state.
 *
 * This function calls the Advice Slip JSON API, updates the `advice` reactive object,
 * and emits a 'change-name' event.
 *
 * @async
 * @function fetchAdvice
 * @returns {Promise<void>}
 */
async function fetchAdvice() {
  let data = await fetch("https://api.adviceslip.com/advice").then((res) =>
    res.json()
  );
  advice = data.slip;
  // triggering the emmited function
  emits("change-name");
}

// Initial fetch
// Note: Top-level await is supported in <script setup> and automatically makes the component async.
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
