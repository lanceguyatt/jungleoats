# Jungle Oats

> A platform game I made in 2005 with Freehand MX and Flash MX.

![Jungle Oats](logo.png)

**[Play it on Netlify](https://jungleoats.netlify.app/)**

The original `.swf` runs in the browser via the [Ruffle](https://ruffle.rs/) Flash emulator.

## Controls

- Arrow keys to move
- Spacebar to jump

Click the game first to give it keyboard focus. Needs a keyboard, so it is best played on desktop.

## Development

Built with [Vite](https://vite.dev/) and plain CSS. There are no local dependencies: install Vite globally once, then run it from the project folder.

```sh
pnpm add -g vite   # or: npm i -g vite
vite               # start the dev server
vite build         # build to dist/
vite preview       # preview the production build
```

Formatting is Zed's built-in Prettier, configured by `.prettierrc.json`.

Site metadata (name, title, description, URL, share image, author) lives in `locals.js`. The `html-locals` plugin in `vite.config.js` replaces `{{ key }}` and `{{ key.nested }}` placeholders in `src/index.html` at build time.

## Project structure

```
src/             index.html and styles (Vite root)
public/          static files copied as-is, including assets/jungleoats.swf
dist/            build output
locals.js        site metadata injected into index.html
vite.config.js   Vite config and html-locals plugin
netlify.toml     Netlify build settings
```

## Deployment

Hosted on [Netlify](https://www.netlify.com/). Netlify runs `npx -y vite@7 build` (set in `netlify.toml`) and publishes `dist/`, so no dependencies need installing there either.

## Licence

[MIT](LICENSE)
