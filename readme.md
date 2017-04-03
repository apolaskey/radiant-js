# Radiant.JS

[![Dependencies](https://david-dm.org/apolaskey/radiant-js.svg)](https://david-dm.org/apolaskey/radiant-js#info=dependencies)
[![img](https://david-dm.org/apolaskey/radiant-js/dev-status.svg)](https://david-dm.org/apolaskey/radiant-js/#info=devDependencies)
[![img](https://david-dm.org/apolaskey/radiant-js/peer-status.svg)](https://david-dm.org/apolaskey/radiant-js/#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/apolaskey/radiant-js/badge.svg)](https://snyk.io/test/github/inversify/InversifyJS)


# Motivation
To create a JS based game engine using modern practices and technologies

Completed / Planned Feature List
----
- [x] Electron Forge Installation and Setup
- [x] Mithril Framework w/JSX support
- [x] Babel w/ES6 + 7 support
- [ ] Inversify VanillaJS support (IoC container)
- [ ] Spectron (Electron Functional Testing)
- [ ] Ava (Concurrent Test Runner)


Developing
=============
The below should over a no bulshit setup experience if followed; otherwise open an issue and let me know what you encountered.

First Time Setup
----

The below are global tools that must be installed to build / package this application

[NodeJS](https://nodejs.org/en/download/) :: ``version must be >= 6.6.0``

[Electron Setup](https://electron.atom.io/) :: ``npm install -g electron``

[Electron Forge CLI](https://beta.electronforge.io/) :: ``npm install -g electron-forge``

[Ava](https://github.com/avajs/ava) :: ``npm install -g ava``

Project Setup :: ``npm install``

Build Scripts
----
Start application from source :: ``npm start``

Build application :: ``npm run-script build``

Deploy application :: ``npm run-script deploy``

# Know Issues
Issues with latest Babel-Env plugin, 1.3.2 appears to be causing problems, forced to older version until bug is fixed

``"babel-preset-env": "1.2.1"``

``https://github.com/babel/babel-preset-env/issues/187``

Electron Forge appears to not be passing electron-packager config details down correctly

``No Known resolution to this sadly :(``