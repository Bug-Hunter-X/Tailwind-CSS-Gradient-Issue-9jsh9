# Tailwind CSS Gradient Bug

This repository demonstrates a bug encountered when using Tailwind CSS gradient classes. The expected gradient is not rendered correctly.

## Bug Description

When applying Tailwind's `bg-gradient-to-r from-blue-500 to-purple-500` class to a div, the gradient appears incorrectly, with either unexpected colors or no gradient at all.

## Solution

The issue was caused by missing or incorrectly configured `tailwind.config.js`. Make sure your `theme` section includes the necessary gradient configuration.  See `bugSolution.js` for corrected config.  Also ensure your CSS file has been correctly built or compiled.