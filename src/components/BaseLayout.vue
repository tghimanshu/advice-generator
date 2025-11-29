<!-- The Following is a simple layout template -->
<!-- name attribute is the placeholder name -->
<!-- use v-slot:[name] in the actual file to use the layout -->
<template>
  <h1><slot name="title">Page Title</slot></h1>
  <p><slot name="content">Page Description</slot></p>
</template>

<script>
/**
 * A base layout component providing a simple structure with named slots.
 *
 * This component allows parent components to inject content into specific areas (title and content)
 * via named slots. It provides default content if no slots are provided.
 *
 * @component
 * @slot title - The slot for the page title. Defaults to "Page Title".
 * @slot content - The slot for the page description or main content. Defaults to "Page Description".
 */
export default {
  name: "BaseLayout",
};
</script>
