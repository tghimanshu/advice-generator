# Advice Generator App

This project is a Vue.js application that generates random advice. It serves as a learning resource for Vue 3, demonstrating various concepts such as the Options API, Composition API (both `setup()` function and `<script setup>`), asynchronous components with `<Suspense>`, and component communication.

## Purpose

The primary goal of this application is to provide a random piece of advice to the user. It fetches data from the [Advice Slip JSON API](https://api.adviceslip.com/).

Key learning points covered in this repository:
*   **Vue 3 Composition API**: Using both `setup()` and `<script setup>` syntax.
*   **Async Components**: Implementing top-level await and using `<Suspense>` for loading states.
*   **Reactivity**: Understanding `ref` vs `reactive`.
*   **Component Communication**: Props, Emits, and Slots.
*   **Styling**: Basic CSS integration.

## Project Structure

*   `src/main.ts`: Application entry point.
*   `src/App.vue`: Root component using `<Suspense>` to handle async children.
*   `src/components/`:
    *   `AdviceShuffle.vue`: A UI component for the "roll dice" button.
    *   `BaseLayout.vue`: A generic layout component with slots.
    *   `TheAdvice.vue`: Main logic using the **Options API**.
    *   `TheAdviceCompositionAPI.vue`: Main logic using the **Composition API (`setup()`)**.
    *   `TheAdviceCompositionScript.vue`: Main logic using **`<script setup>`** (Currently used in App.vue).

## Setup and Installation

### Prerequisites

*   [Node.js](https://nodejs.org/) (latest LTS version recommended)
*   [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  Install dependencies:
    ```sh
    npm install
    ```

## Usage

### Development

To start the development server with hot-reload:

```sh
npm run dev
```

Open your browser and navigate to the local URL provided (usually `http://localhost:3000` or `http://localhost:5173`).

### Production Build

To build the application for production (minified and optimized):

```sh
npm run build
```

The output will be in the `dist/` directory.

### Linting

To run the linter and fix issues:

```sh
npm run lint
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
