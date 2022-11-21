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
        "night-theme":
        "url(https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5pZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)"
      },
    },
  },
  plugins: [],
};
