# Vite React Library Template

Dead simple [Vite](https://vitejs.dev/) template for painless [React](https://reactjs.org/) UI library development.

- Unopinionated: no default styling, ESLint, pre-commit hooks — bring your own stuff if you need it.
- Type definitions are extracted using [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts).
- Bundles to ES and UMD modules, generates sourcemaps.
- Uses [Storybook](https://storybook.js.org/) for docs which are easily deployed as GitHub pages.

## Getting started
This is a custom template for Vite, so instead of `npm create vite` do this:
```shell
npx degit mlshv/vite-react-library-template#main your-project-name
cd your-project-name
npm install
npm start
```

## Publishing the library

1. Build the package: `npm run build`
2. Open `package.json`, update package name, description, author, repository, remove `"private": true`.
3. Run `npm publish`

## Publishing Storybook to GitHub pages

Storybook static is built to `docs` directory which is under git. To publish it to GitHub Pages do this:
- Publish this repo to GitHub.
- Run `npm run build-storybook`, commit `docs` folder and push.
- [Create a separate GitHub Pages repo](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site) if you haven't yet.
- [Set up GitHub pages for this project](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site) to build from `docs` folder from `main` branch.
  - To do this go to this repo's settings and open `Pages` section (menu on the left side). Select `Source` -> `Deploy from a branch`, select `Branch` -> `main` and `/docs` folder.

## Contributing

Feel free to [open an issue](https://github.com/mlshv/vite-react-library-template/issues/new) or create a PR if you'd like to contribute 🙌

## License

The project is available as open source under the terms of the [MIT License](LICENSE).
