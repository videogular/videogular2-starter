# Videogular 2 Starter

## Introduction
Welcome to Videogular 2 Starter!
This starter is highly inspired by the awesome [Angular2 Starter](https://github.com/antonybudianto/angular2-starter). If you need some guidance on how to use it, please visit the main repo.

## Prerequisites
You need to have [Node.js and npm](https://nodejs.org/en/)
- Support Node v4 - latest
- Support npm v3 - latest

[Global Gulp CLI](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) is not required, since you can map them to npm scripts, but a nice to have for development purpose.

## Installation
Download the starter from [releases page](https://github.com/antonybudianto/angular2-starter/releases)

Go to the starter directory and install the packages:
```bash
npm install
```

## Start
Let's start up the server, run:
```bash
npm start
```

and done! The browser will popup and you can start trying Angular 2!
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

## Production

You can create production build by running:
```bash
npm run build
```
or you can create production build and then serve it using Browsersync by running:
```bash
npm run serve-build
```
The starter defaults to bundle using [SystemJS Builder extension](https://github.com/ngstarter/systemjs-extension).
There is [Webpack extension](https://github.com/ngstarter/webpack-extension) available too, feel free to swap it as you like.

## Extension
You can extend this starter with many extensions built by the community. Browse the extensions [here](https://github.com/ngstarter)

## License
MIT
