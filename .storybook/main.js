module.exports = {
  stories: ["../**/*.stories.ts"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: { implementation: require("dart-sass") },
        },
      ],
    });

    return config;
  },
};
