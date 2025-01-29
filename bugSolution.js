```javascript
/**
 * tailwind.config.js
 */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero.png')",
      }
    },
  },
  plugins: [],
}
```