import withMT from "@material-tailwind/react/utils/withMT";
 
 export default withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
     },
   },
   plugins: [],
 });
 