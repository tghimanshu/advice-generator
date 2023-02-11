<script>
// import TheAdvice from "./components/TheAdvice.vue";
import TheAdvice from "./components/TheAdviceCompositionScript.vue";
// import TheAdvice from "./components/TheAdviceCompositionAPI.vue";
export default {
  // Importing modules
  components: {
    TheAdvice,
  },
};
</script>
<template>
  <!-- Suspense is used for fallback if async function fails -->
  <!-- We should not use async in the setup of app.vue since it's the root of the app insteaed use another component and give it a fallback -->
  <Suspense>
    <TheAdvice />

    <!-- It uses the below fallback if the Async function in setup of the above component fails -->
    <template v-slot:fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>
