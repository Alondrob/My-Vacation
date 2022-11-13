/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "vacation-pattern":
          "url('https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/tropical-beach-1509683857-785X440.jpg')",
        "snow-cabin":
          "url(https://media.timeout.com/images/105719023/image.jpg)",
      },
    },
  },
  plugins: [],
};
