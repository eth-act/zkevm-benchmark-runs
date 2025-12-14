/**
 * Entry point for the Repricing Analysis Application.
 * Initializes the application when the DOM is ready.
 */

import { BenchmarkApp } from './app.js';

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new BenchmarkApp();
    app.init();
});
