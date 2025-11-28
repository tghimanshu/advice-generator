import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

/**
 * Initializes and mounts the Vue application.
 *
 * This is the main entry point of the application. It imports the root App component,
 * applies global styles from main.css, and mounts the application to the DOM element with the id 'app'.
 */
createApp(App).mount("#app");
