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

Built with [Vite](https://vite.dev/) and plain CSS. There are no local dependencies: Vite is fetched and run under the [Bun](https://bun.sh/) runtime with `bunx --bun vite`. The `package.json` scripts wrap this:

```sh
bun dev            # start the dev server
bun run build      # build to dist/
bun run preview    # preview the production build
```

To type bare `vite` instead, add this function to `~/.zshrc`:

```sh
# Run Vite under the Bun runtime
vite() { bunx --bun vite "$@"; }
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

Hosted on [Netlify](https://www.netlify.com/). Netlify runs `bunx --bun vite@7 build` (set in `netlify.toml`) and publishes `dist/`, so no dependencies need installing there either.

## Licence

[MIT](LICENSE)
