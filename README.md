# JS Helpers
A library of JavaScript helper functions. 

## Installation
You may install __JS Helpers__ via npm and passing as source the repo's url 
    
    npm install https://github.com/zooshme/js-helpers

Alternatively, you may add an .npmrc file to your project with @zooshme's package repository
    
    @zooshme:registry=https://npm.pkg.github.com/

Then install the library as you would any other npm module
    
    npm install @zooshme/js-helpers

To use the library import it in your project and select the methods you would like to use
    
    import { groupArrayElements } from "@zooshme/js-helpers"

This includes typescript types. It requires that you have support for commonjs modules. 

Alternatively, you may import the webpack bundle
    
    import { groupArrayElements } from "@zooshme/js-helpers/dist/bundle.js"
    import { groupArrayElements } from "@zooshme/js-helpers/dist/bundle.min.js"

To run jest tests use
    
    npm test

To compile source files use one of the commands
    
    npm run build
    npm run build:prod
    npm run build:dev

## Methods
These are the methods that have been implemented in the library so far.

### Arrays

    chunkArrayElements(arr: Array, chunkLength: Number): Array

Given an array of length >= 0, and a positive integer N, return the contents of the array divided into arrays of N length.

Where all arrays cannot be of N length, the final array will have a length equal to the remainder.

    chunkArrayElements([​1​, ​2​, ​3​, ​4,​ ​5​], ​3​); // [ [ 1, 2, 3 ], [ 4, 5 ] ]

---

    groupArrayElements(arr: Array, resultLength: Number): Array

Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part will have a length equal to the remainder.

    groupArrayElements([​1​, ​2​, ​3​, ​4,​ ​5​], ​3​); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

---

    