import locals from "./locals.js";

// Replaces {{ key }} or {{ key.nested }} placeholders in HTML with values from locals.js
const htmlLocals = () => ({
  name: "html-locals",
  transformIndexHtml: (html) =>
    html.replace(
      /\{\{\s*([\w.]+)\s*\}\}/g,
      (match, path) => path.split(".").reduce((value, key) => value?.[key], locals) ?? match,
    ),
});

export default {
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  fmt: {},
  plugins: [htmlLocals()],
};
