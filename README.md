# Menu Button with React

![Menu Button demo](https://raw.githubusercontent.com/pookage/web-components-menu-button/master/screenshots/demo__2.gif)

A Menu Button component with open/closed state made with:

- React
- CSS Modules
- SCSS
- Webpack

Live demo [here](https://pookage.github.io/react-menu-button/dist/)

>**NOTE: This component was made to demonstrate the process of translating from Web Components to React Components. Click [here](https://github.com/pookage/web-components-menu-button) to view the web-component version of this button.**

## Usage

```
<MenuButton>
	Menu
</MenuButton>
```

## Building

1. Clone the repo locally
2. From the local folder, run `npm install` to install dependencies

### ...for development

3. Run `npm run build-dev` to initialise a `webpack-dev-server`, which will hot-reload if the contents of `/src/` are changed.

### ...for production

3. Run `npm run build-prod` to bundle the app with `webpack` - the generated `bundle.js` will be placed in `/dist/`.

>**NOTE: the index.html will be copied from `/src/` to `/dist/` when `build-prod` or `build-dev` are initially run, but changes to `index.html` will _not_ trigger a hot-reload from the dev-server.**
