# Radiant.JS

[![Gitter](https://badges.gitter.im/apolaskey/radiant-js.svg)](https://gitter.im/apolaskey/radiant-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Dependencies](https://david-dm.org/apolaskey/radiant-js.svg)](https://david-dm.org/apolaskey/radiant-js#info=dependencies)
[![img](https://david-dm.org/apolaskey/radiant-js/dev-status.svg)](https://david-dm.org/apolaskey/radiant-js/#info=devDependencies)
[![img](https://david-dm.org/apolaskey/radiant-js/peer-status.svg)](https://david-dm.org/apolaskey/radiant-js/#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/apolaskey/radiant-js/badge.svg)](https://snyk.io/test/github/apolaskey/radiant-js)
[![Unix Status](https://travis-ci.org/apolaskey/radiant-js.svg?branch=master)](https://travis-ci.org/apolaskey/radiant-js)
[![Windows Status](https://ci.appveyor.com/api/projects/status/4fnobuo3n4adrkit?svg=true&retina=true&branch=master)](https://ci.appveyor.com/project/AndrewPolaskey/radiant-js)

# Motivation
To create a JS based game engine using modern practices and technologies

# Completed / Planned Feature List
- [x] Electron Forge Installation and Setup
- [x] Mithril Framework w/JSX support 
- [x] Babel w/ES6 + 7 support
- [ ] Inversify VanillaJS support (IoC container)
- [ ] Spectron (Electron Functional Testing)
- [x] Ava (Concurrent Test Runner)
- [x] Windows Releases Automated (Appveyor CI)
- [x] Unix (Linux / OSX) Releases Automated (Travis CI)
- [ ] Yeoman Scaffolding Support (On Hold)
- [x] Winston Logger Support


## Developing
The below should over a no bulshit setup experience if followed; otherwise open an issue and let me know what you encountered.

### First Time Setup

The below are global tools that must be installed to build / package this application

[NodeJS](https://nodejs.org/en/download/) :: ``version must be >= 6.6.0``

[Electron Setup](https://electron.atom.io/) :: ``npm install -g electron``

[Electron Forge CLI](https://beta.electronforge.io/) :: ``npm install -g electron-forge``

[Ava](https://github.com/avajs/ava) :: ``npm install -g ava``

Project Setup :: ``npm install``

### Build Scripts
Start application from source :: ``npm start``

Build application :: ``npm run-script build``

Deploy application :: ``npm run-script deploy``

## Patterns and Practices
Below are the basic towards how the project is setup and in general just how things work.

### Project Directory Structure Overview

All test scripts are to go to ``tests/**`` and be suffixed with ``.test.js`` ie. ``FooBar.test.js``

Anything related to UI for the application goes into ``app/renderer/**``

Anything related to just general purpose work goes into ``app/main/**``

Branching / Merging is Gitflow with two defined core branches

* ``master`` :: Stable Release (Build that passed everything)

* ``stable`` :: Nightly Release (Build that passed automated tests)

* ``latest`` :: Unstable Release (Purely staged work; might work, might not)

Application "Main" is at ``app/main.js``

Application routing is configured at ``app/renderer/routes.js``

# Known Issues
Issues with latest Babel-Env plugin, 1.3.2 appears to be causing problems, forced to older version until bug is fixed

``"babel-preset-env": "1.2.1"``

``https://github.com/babel/babel-preset-env/issues/187``

Electron Forge appears to not be passing electron-packager config details down correctly

``No Known resolution to this sadly :(``