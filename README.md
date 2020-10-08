# components

Shared Vue components used on overlays and webpages

## Usage

TODO: write this

- Mention GitHub releases for downloading everything
- Provide Bakke's Mod installation instructions
- Talk about usage in OBS

## Development

```bash
# Install dependencies
npm install
# Build the overlay components
npm run build
# Build and watch for changes in development
npm run build-watch
```

After building the components, add them to OBS by creating browser sources pointing to the appropriate `.html` file in the `dist` directory.
