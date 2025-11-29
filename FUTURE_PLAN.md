# Future Plan - Phase 2

This document outlines the roadmap for the next phase of the Advice Generator application. Phase 1 focused on core functionality and exploring different Vue 3 API styles. Phase 2 will focus on robustness, user experience, and feature expansion.

## 1. Feature Enhancements

### 1.1. Advice History
*   **Goal**: Allow users to see previously generated advice.
*   **Implementation**: Store fetched advice objects in a list/array in the parent state or a Pinia store. Display this history in a scrollable list below the current advice.

### 1.2. Social Sharing
*   **Goal**: Enable users to share the advice on social media platforms (Twitter, Facebook, etc.).
*   **Implementation**: Add share buttons that open a new window with the advice text pre-filled in the sharing dialog.

### 1.3. Favorites / Bookmarking
*   **Goal**: Allow users to save their favorite advice.
*   **Implementation**: Add a "Heart" or "Star" icon. Use `localStorage` to persist the list of favorite advice slips across sessions.

### 1.4. Category Filtering
*   **Goal**: If the API supports it, allow users to request advice based on specific categories (e.g., life, work, funny).
*   **Action**: Investigate `api.adviceslip.com` for search/category endpoints.

## 2. Technical Improvements

### 2.1. State Management (Pinia)
*   **Goal**: Centralize the application state.
*   **Implementation**: Migrate the local state management (currently in individual components) to a Pinia store. This will be crucial for implementing the History and Favorites features.

### 2.2. Unit and Component Testing
*   **Goal**: Ensure code reliability and prevent regressions.
*   **Implementation**:
    *   Install **Vitest** for unit testing.
    *   Install **Vue Test Utils** for component testing.
    *   Write tests for `AdviceShuffle` (ensuring it emits events) and `TheAdvice` components (mocking the API fetch).

### 2.3. End-to-End (E2E) Testing
*   **Goal**: Verify the application flow from a user's perspective.
*   **Implementation**: Set up **Cypress** or **Playwright**. Create a test case that loads the page, verifies the initial advice, clicks the button, and verifies that new advice is loaded.

### 2.4. Error Handling
*   **Goal**: Improve user feedback when the API is down or the network fails.
*   **Implementation**:
    *   Enhance the `fetchAdvice` function to catch errors.
    *   Display a user-friendly error message (e.g., a "Toast" notification or an error banner) instead of just failing silently or logging to the console.

### 2.5. Accessibility (a11y)
*   **Goal**: Make the app usable for everyone.
*   **Implementation**:
    *   Ensure proper ARIA labels are present on interactive elements (like the dice button).
    *   Verify color contrast ratios.
    *   Ensure keyboard navigation works correctly.

## 3. UI/UX Polish

### 3.1. Animations
*   **Goal**: Make the interface feel more responsive and polished.
*   **Implementation**:
    *   Add a transition effect when the advice text changes (e.g., fade out/fade in).
    *   Add a spinning animation to the dice icon while data is being fetched.

### 3.2. Responsive Design Review
*   **Goal**: Ensure the app looks perfect on all device sizes.
*   **Action**: Review the CSS media queries and test on various screen sizes (mobile, tablet, desktop).
