# ds-visualization.js

## Author
- Yuuuuuu-xue (Yu Xue)

## Description
This is UofT *CSC309: Programming on the Web* 2021 Fall individual assignment (building a frontend library, focused on DOM manipulation)

## Landing page
https://ds-visualization-js.herokuapp.com/

## Documentation
https://ds-visualization-js.herokuapp.com/documentation

## Getting started
#### npm (with React)
Install the package with npm.
```
npm i ds-visualization.js
```

Import the library and have fun!
```
import { DataStructureController } from "ds-visualization.js";
```

#### Vanilla JavaScript
Download the library source file [ds.js](./src/ds.js) and style file [main.css](./src/main.css)

Add following lines in your html <head></head> tag to include the compiled JavaScript library, stylesheets, and external modules such as jQuery and Less compiler.
```
<link rel="stylesheet" type="text/css" href="./main.css" />
<script defer type="text/javascript" src="./ds.js"></script>
<script defer type="text/javascript" src='./demo.js'></script>
```

Click [here](./src) to view the example of html and javascript files of using this library with vanills.js


## Structure of the repo
#### Install all the dependencies
```
npm run install-all
```

#### [./frontend](./frontend)
This directory contains the source file for the **landing page** https://ds-visualization-js.herokuapp.com/. It was created by **React** with **TypeScript** and **SCSS** for the styles.

#### [./library](./library)
This directory contains the source file for the library. It was created by **TypeScript** and **Less** for the styles.

#### [./src](./src)
This directory contains the compiled files of the library though webpack and an example of using this library with VanillaJS.

#### [./dist](./dist)
This directory contains the files needed to publish to the npm

## Run the code locally
#### Run the landing page
```
1. cd frontend
2. npm i
3. npm start
```

#### Compile the TypeScript library
Install the TypeScript compiler: 
```
npm install -g typescript

# Then you can check if you have installed it successfully
tsc --version
```

Compile the code
```
tsc
```

Compile it though webpack:
```
npm run build-library
```



