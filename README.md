# Acesso Style Guide

This guide serves as a resource to bring together all our products and to help define their visual and stylistic elements. It exists to provide you with the tools and assets you need to further our mission through communications, websites, products and more.

Use the links on the left to find what you’re looking for or just start exploring.


## Getting Started

guide-style requires [node.js](http://nodejs.org). Make sure your have `v0.10` or higher installed before proceeding.

**Start the local development environment:**

```
$ npm start
```

### Development Environment Features

- Live preview sever (using [BrowserSync](http://www.browsersync.io/))
- CSS Autoprefixing
- Sass compilation
- Browserify bundling
- Image optimization

## Build

**Build for release:**

```
$ npm run build
```

Fabricator builds both a static documentation site and optimized CSS and JS toolkit files.

The build artifacts output to the `dist` directory. This can be deployed to any static hosting environment - no language runtime or database is required.
