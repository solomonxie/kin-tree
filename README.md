# Kin Tree

> 🚧 Work in progress — skeleton only, not yet functional.

Draw and explore family trees on iPhone, free. Build your own family's tree,
browse historical lineages (e.g. Adam → Jesus), or trace ancestral / regional
origins — a free, customizable alternative to apps like QuickFamily Tree.

## Planned features

- Pannable, zoomable tree canvas (draw, drag, connect people)
- Person cards: name, dates, place, photo, notes
- Preset historical & origin lineages to explore
- Export / import your tree as JSON

## Stack

Expo (React Native) + TypeScript, file-based routing via `expo-router`. Tree
canvas will use [`@shopify/react-native-skia`](https://shopify.github.io/react-native-skia/)
once drawing is implemented.

## Setup

```bash
npm install
npx expo start
```
