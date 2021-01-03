/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/arrays/groupArrayElements.ts":
/*!******************************************!*\
  !*** ./src/arrays/groupArrayElements.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupArrayElements": () => /* binding */ groupArrayElements
/* harmony export */ });
function groupArrayElements(arr, groupLength) {
  var arrLength = arr.length;
  var multiples = Math.floor(arrLength / groupLength);
  var remainder = arrLength % groupLength;
  var result = [];
  var i = 0;

  for (i; i < multiples; i++) {
    result[i] = arr.slice(i * groupLength, i * groupLength + groupLength);
  }

  if (remainder > 0) {
    result[i] = arr.slice(i * groupLength, i * groupLength + remainder);
  }

  return result;
}

/***/ }),

/***/ "./src/arrays/index.ts":
/*!*****************************!*\
  !*** ./src/arrays/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupArrayElements": () => /* reexport safe */ _groupArrayElements__WEBPACK_IMPORTED_MODULE_0__.groupArrayElements
/* harmony export */ });
/* harmony import */ var _groupArrayElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupArrayElements */ "./src/arrays/groupArrayElements.ts");


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrays": () => /* reexport module object */ _arrays__WEBPACK_IMPORTED_MODULE_0__
/* harmony export */ });
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays */ "./src/arrays/index.ts");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aem9vc2htZS9qcy1oZWxwZXJzLy4vc3JjL2FycmF5cy9ncm91cEFycmF5RWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vQHpvb3NobWUvanMtaGVscGVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Aem9vc2htZS9qcy1oZWxwZXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Aem9vc2htZS9qcy1oZWxwZXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHpvb3NobWUvanMtaGVscGVycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0B6b29zaG1lL2pzLWhlbHBlcnMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImdyb3VwQXJyYXlFbGVtZW50cyIsImFyciIsImdyb3VwTGVuZ3RoIiwiYXJyTGVuZ3RoIiwibGVuZ3RoIiwibXVsdGlwbGVzIiwiTWF0aCIsImZsb29yIiwicmVtYWluZGVyIiwicmVzdWx0IiwiaSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLGtCQUFULENBQTRCQyxHQUE1QixFQUF3Q0MsV0FBeEMsRUFBNkQ7QUFDbEUsTUFBTUMsU0FBUyxHQUFHRixHQUFHLENBQUNHLE1BQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osU0FBUyxHQUFHRCxXQUF2QixDQUFsQjtBQUNBLE1BQU1NLFNBQVMsR0FBR0wsU0FBUyxHQUFHRCxXQUE5QjtBQUVBLE1BQU1PLE1BQU0sR0FBRyxFQUFmO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHLENBQVI7O0FBRUEsT0FBS0EsQ0FBTCxFQUFRQSxDQUFDLEdBQUdMLFNBQVosRUFBdUJLLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJELFVBQU0sQ0FBQ0MsQ0FBRCxDQUFOLEdBQVlULEdBQUcsQ0FBQ1UsS0FBSixDQUFVRCxDQUFDLEdBQUdSLFdBQWQsRUFBMkJRLENBQUMsR0FBR1IsV0FBSixHQUFrQkEsV0FBN0MsQ0FBWjtBQUNEOztBQUVELE1BQUlNLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtBQUNqQkMsVUFBTSxDQUFDQyxDQUFELENBQU4sR0FBWVQsR0FBRyxDQUFDVSxLQUFKLENBQVVELENBQUMsR0FBR1IsV0FBZCxFQUEyQlEsQ0FBQyxHQUFHUixXQUFKLEdBQWtCTSxTQUE3QyxDQUFaO0FBQ0Q7O0FBRUQsU0FBT0MsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBncm91cEFycmF5RWxlbWVudHMoYXJyOiBhbnlbXSwgZ3JvdXBMZW5ndGg6IG51bWJlcikge1xuICBjb25zdCBhcnJMZW5ndGggPSBhcnIubGVuZ3RoO1xuICBjb25zdCBtdWx0aXBsZXMgPSBNYXRoLmZsb29yKGFyckxlbmd0aCAvIGdyb3VwTGVuZ3RoKTtcbiAgY29uc3QgcmVtYWluZGVyID0gYXJyTGVuZ3RoICUgZ3JvdXBMZW5ndGg7XG5cbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGxldCBpID0gMDtcblxuICBmb3IgKGk7IGkgPCBtdWx0aXBsZXM7IGkrKykge1xuICAgIHJlc3VsdFtpXSA9IGFyci5zbGljZShpICogZ3JvdXBMZW5ndGgsIGkgKiBncm91cExlbmd0aCArIGdyb3VwTGVuZ3RoKTtcbiAgfVxuXG4gIGlmIChyZW1haW5kZXIgPiAwKSB7XG4gICAgcmVzdWx0W2ldID0gYXJyLnNsaWNlKGkgKiBncm91cExlbmd0aCwgaSAqIGdyb3VwTGVuZ3RoICsgcmVtYWluZGVyKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=