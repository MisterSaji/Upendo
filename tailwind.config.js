module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      OffWhite: "var(--OffWhite)",
      DarkGreen: "var(--DarkGreen)",
      DarkTeal: "var(--DarkTeal)",
      Pink: "var(--Pink)",
      LimeGreen: "var(--LimeGreen)",
      LightLime: "var(--LightLime)",
      LimeGradient: "var(--LimeGradient)",
      PinkGradient: "var(--PinkGradient)",
      TealGradient: "var(--TealGradient)",
      grey: "var(--grey)",
    },
  },
};
