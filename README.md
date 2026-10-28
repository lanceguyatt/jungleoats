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

Built with [Vite](https://vite.dev/) and [Tailwind CSS](https://tailwindcss.com/).

```sh
pnpm install
pnpm dev       # start the dev server
pnpm build     # build to dist/
pnpm preview   # preview the production build
```

## Project structure

```
src/            index.html and styles (Vite root)
public/         static files copied as-is, including assets/jungleoats.swf
dist/           build output
```

## Deployment

Hosted on [Netlify](https://www.netlify.com/), serving the `dist/` build output.

## Licence

[MIT](LICENSE)
