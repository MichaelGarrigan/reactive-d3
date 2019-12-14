# reactive d3
A home for visualizing data in React applications with d3.js

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This application is a React app that shows working examples of what D3 can do. Each example contains the application code used to generate the example along with styling. Also there is a Modules tab which contains specific api details contained in the body of D3. And lastly a tab named 'Resources' is a list of links to 3rd party sources to data, design, etc.
	
## Technologies
Project is created with:
* React: 16.8.6 or greater
* -code-splitting: with React Suspense and lazy()
* Node & Express:
* d3: (using modules ie. d3-scale)
* Webpack v.4
* Babel v.7
* React Router v.4
	
## Setup
Pull from github: [reactive-d3](https://github.com/M-garrigan/reactive-d3)

```
$ git clone https://github.com/M-garrigan/reactive-d3.git
$ cd reactive-d3
```

Developer Build
```
// webpack build with watch flag
$ yarn build:dev

// nodemon watched express/node server
$ yarn start:dev
```

Production Build
```
// webpack prod build
$ yarn build

// start node server
$ yarn start
```