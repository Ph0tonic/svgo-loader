export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          convertPathData: false,
          convertColors: {
            shorthex: false,
          },
        },
      },
    },
    "removeViewBox",
    "prefixIds",
  ],
};
