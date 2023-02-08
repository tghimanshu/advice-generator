<!-- The Following is a simple layout template -->
<!-- name attribute is the placeholder name -->
<!-- use v-slot:[name] in the actual file to use the layout -->
<template>
  <h1><slot name="title">Page Title</slot></h1>
  <p><slot name="content">Page Description</slot></p>
</template>
