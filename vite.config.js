import { defineConfig } from "vite-plus";
import tailwindcss from "@tailwindcss/vite";
import locals from "./locals.js";

// Replaces {{ key }} placeholders in HTML with values from locals.js
const htmlLocals = () => ({
  name: "html-locals",
  transformIndexHtml: (html) =>
    html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => locals[key] ?? match),
});

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [tailwindcss(), htmlLocals()],
  fmt: {
    singleQuote: true,
    semi: false,
  },
});
