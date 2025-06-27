// // File: tailwind.config.ts (Updated)
// import type { Config } from "telwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         serif: ['"Playfair Display"', 'serif'],
//       },
//       // Added a simple keyframe animation for fade-in effect
//       keyframes: {
//         "fade-in-up": {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(10px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//       },
//       animation: {
//         "fade-in-up": "fade-in-up 0.5s ease-out",
//       },
//     },
//   },
//   // Add the new plugins here
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/typography'),
//   ],
// };
// export default config;