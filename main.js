/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: navajowhite;\r\n}\r\n#header {\r\n  padding-top: 2.5%;\r\n  display: flex;\r\n  gap: 5%;\r\n  justify-content: center;\r\n  margin-bottom: 2.5%;\r\n}\r\n#inputs {\r\n  display: flex;\r\n  gap: 10%;\r\n  margin-bottom: 3%;\r\n}\r\n#column,\r\n#row {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\r\n  font-weight: 400;\r\n}\r\n#shortPath {\r\n  font-size: 1.5rem;\r\n  color: coral;\r\n  font-weight: bold;\r\n}\r\n.starting {\r\n  color: limegreen;\r\n  font-weight: 700;\r\n  font-size: large;\r\n}\r\n.ending {\r\n  color: red;\r\n  font-weight: 700;\r\n  font-size: large;\r\n}\r\n#buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\nbutton {\r\n  width: 100px;\r\n  height: 30px;\r\n  align-self: center;\r\n  border-radius: 4px;\r\n  border: solid 2px lightsalmon;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 1.25rem;\r\n  background-color: khaki;\r\n}\r\n#mainContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n#leftContainer {\r\n  grid-row: 1 / 10;\r\n  grid-column: 1;\r\n  display: grid;\r\n  grid-template-rows: repeat(8, 1fr);\r\n  grid-template-columns: 1fr;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n}\r\n#boardContainer {\r\n  grid-row: 1 / 10;\r\n  grid-column: 2 / 10;\r\n  display: grid;\r\n  grid-template-rows: repeat(8, 1fr);\r\n  grid-template-columns: repeat(8, 1fr);\r\n  border: solid 2px black;\r\n  max-width: 800px;\r\n  max-height: 800px;\r\n}\r\n.space {\r\n  width: clamp(25px, 6.25rem, 200px);\r\n  height: clamp(25px, 6.25rem, 200px);\r\n}\r\n#bottomContainer {\r\n  grid-row: 10 / 11;\r\n  grid-column: 2 / 10;\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://knights-travails/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://knights-travails/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://knights-travails/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://knights-travails/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addKnight.js":
/*!**************************!*\
  !*** ./src/addKnight.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addKnight)\n/* harmony export */ });\n/* harmony import */ var _images_lightKnight_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/lightKnight.png */ \"./src/images/lightKnight.png\");\n\r\nfunction addKnight(node) {\r\n  const image1 = document.createElement(\"img\");\r\n  const spot = document.getElementById(\r\n    `r${node.position[0]}c${node.position[1]}`\r\n  );\r\n  image1.src = _images_lightKnight_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  image1.style.width = \"50px\";\r\n  image1.style.height = \"auto\";\r\n  spot.appendChild(image1);\r\n}\r\n//Fix placing knight\r\n\n\n//# sourceURL=webpack://knights-travails/./src/addKnight.js?");

/***/ }),

/***/ "./src/boardSetUp.js":
/*!***************************!*\
  !*** ./src/boardSetUp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBoard)\n/* harmony export */ });\n//Creates a chessboard\r\nfunction createBoard() {\r\n  //Initializing board and ids that will be given to each div\r\n  const board = [\r\n    [\"r7c0\", \"r7c1\", \"r7c2\", \"r7c3\", \"r7c4\", \"r7c5\", \"r7c6\", \"r7c7\"],\r\n    [\"r6c0\", \"r6c1\", \"r6c2\", \"r6c3\", \"r6c4\", \"r6c5\", \"r6c6\", \"r6c7\"],\r\n    [\"r5c0\", \"r5c1\", \"r5c2\", \"r5c3\", \"r5c4\", \"r5c5\", \"r5c6\", \"r5c7\"],\r\n    [\"r4c0\", \"r4c1\", \"r4c2\", \"r4c3\", \"r4c4\", \"r4c5\", \"r4c6\", \"r4c7\"],\r\n    [\"r3c0\", \"r3c1\", \"r3c2\", \"r3c3\", \"r3c4\", \"r3c5\", \"r3c6\", \"r3c7\"],\r\n    [\"r2c0\", \"r2c1\", \"r2c2\", \"r2c3\", \"r2c4\", \"r2c5\", \"r2c6\", \"r2c7\"],\r\n    [\"r1c0\", \"r1c1\", \"r1c2\", \"r1c3\", \"r1c4\", \"r1c5\", \"r1c6\", \"r1c7\"],\r\n    [\"r0c0\", \"r0c1\", \"r0c2\", \"r0c3\", \"r0c4\", \"r0c5\", \"r0c6\", \"r0c7\"],\r\n  ];\r\n  const boardContainer = document.getElementById(\"boardContainer\");\r\n\r\n  for (let i = 0; i < board.length; i++) {\r\n    for (let j = 0; j < board.length; j++) {\r\n      const space = document.createElement(\"div\");\r\n      space.id = board[i][j];\r\n      space.classList.add(\"space\");\r\n      space.style.display = \"flex\";\r\n      space.style.justifyContent = \"center\";\r\n      space.style.alignContent = \"center\";\r\n      //Making spaces black depeding on their row and column\r\n      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {\r\n        space.style.backgroundColor = \"black\";\r\n      }\r\n      boardContainer.appendChild(space);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://knights-travails/./src/boardSetUp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boardSetUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardSetUp.js */ \"./src/boardSetUp.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _userInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInput.js */ \"./src/userInput.js\");\n\r\n\r\n\r\n\r\n(0,_boardSetUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_userInput_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\r\n  constructor(row, column) {\r\n    this.leftUp = null;\r\n    this.leftDown = null;\r\n    this.rightUp = null;\r\n    this.rightDown = null;\r\n    this.upLeft = null;\r\n    this.upRight = null;\r\n    this.downLeft = null;\r\n    this.downRight = null;\r\n    this.parent = null;\r\n    this.position = [row, column];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://knights-travails/./src/node.js?");

/***/ }),

/***/ "./src/possibleMoves.js":
/*!******************************!*\
  !*** ./src/possibleMoves.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ possibleMoves)\n/* harmony export */ });\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\n\r\n\r\n//Used to keep track of nodes that need their children defined\r\nconst outerQueue = [];\r\nlet targetNode;\r\n\r\n//Returns a node that provides the shortest path\r\nfunction possibleMoves(node, target) {\r\n  //Used to search through current node's children\r\n  const queue = [];\r\n  let temp;\r\n\r\n  //Checking for coordinates that are off the board\r\n  if (\r\n    node.position[0] < 0 ||\r\n    node.position[0] > 7 ||\r\n    node.position[1] < 0 ||\r\n    node.position[1] > 7\r\n  ) {\r\n    node = null;\r\n  } else {\r\n    //Creating node children\r\n    node.leftUp = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node.position[0] + 1, node.position[1] - 2);\r\n    node.leftDown = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node.position[0] - 1, node.position[1] - 2);\r\n    node.rightUp = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node.position[0] + 1, node.position[1] + 2);\r\n    node.rightDown = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node.position[0] - 1, node.position[1] + 2);\r\n    node.upLeft = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node.position[0] + 2, node.position[1] - 1);\r\n    node.upRight = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node.position[0] + 2, node.position[1] + 1);\r\n    node.downLeft = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node.position[0] - 2, node.position[1] - 1);\r\n    node.downRight = new _node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node.position[0] - 2, node.position[1] + 1);\r\n\r\n    //Setting parents of children\r\n    node.leftUp.parent = node;\r\n    node.leftDown.parent = node;\r\n    node.rightUp.parent = node;\r\n    node.rightDown.parent = node;\r\n    node.upLeft.parent = node;\r\n    node.upRight.parent = node;\r\n    node.downLeft.parent = node;\r\n    node.downRight.parent = node;\r\n\r\n    //Searching children of parent first (breadth-first)\r\n    queue.push(node.leftUp);\r\n    queue.push(node.leftDown);\r\n    queue.push(node.rightUp);\r\n    queue.push(node.rightDown);\r\n    queue.push(node.upLeft);\r\n    queue.push(node.upRight);\r\n    queue.push(node.downLeft);\r\n    queue.push(node.downRight);\r\n\r\n    outerQueue.push(node.leftUp);\r\n    outerQueue.push(node.leftDown);\r\n    outerQueue.push(node.rightUp);\r\n    outerQueue.push(node.rightDown);\r\n    outerQueue.push(node.upLeft);\r\n    outerQueue.push(node.upRight);\r\n    outerQueue.push(node.downLeft);\r\n    outerQueue.push(node.downRight);\r\n\r\n    //Checks to see if target spot is within current node's children\r\n    while (queue.length > 0) {\r\n      if (\r\n        queue[0].position[0] === target[0] &&\r\n        queue[0].position[1] === target[1]\r\n      ) {\r\n        targetNode = queue[0];\r\n        return;\r\n      }\r\n      queue.shift();\r\n    }\r\n  }\r\n\r\n  //Calling function again if target is not found\r\n  temp = outerQueue[0];\r\n  outerQueue.shift();\r\n  possibleMoves(temp, target);\r\n  return targetNode;\r\n}\r\n\n\n//# sourceURL=webpack://knights-travails/./src/possibleMoves.js?");

/***/ }),

/***/ "./src/showPath.js":
/*!*************************!*\
  !*** ./src/showPath.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showPath)\n/* harmony export */ });\n/* harmony import */ var _images_flag_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/flag.png */ \"./src/images/flag.png\");\n\r\nconst path = [];\r\nfunction showPath(node) {\r\n  const shortestPath = getPath(node);\r\n  const shortPath = document.getElementById(\"shortPath\");\r\n  let count = 0;\r\n  while (shortestPath[0]) {\r\n    //Displaying coordinates on webpage\r\n    const coordinate = document.createElement(\"div\");\r\n    coordinate.textContent = `[${shortestPath[0]}]`;\r\n    coordinate.classList.add(\"coordinate\");\r\n    shortPath.append(coordinate);\r\n    //Showing path on gameboard\r\n    if (count !== 0) {\r\n      const spot = document.getElementById(\r\n        `r${shortestPath[0][0]}c${shortestPath[0][1]}`\r\n      );\r\n      spot.style.backgroundColor = \"lime\";\r\n      spot.textContent = count.toString();\r\n      spot.style.display = \"flex\";\r\n      spot.style.justifyContent = \"center\";\r\n      spot.style.alignItems = \"center\";\r\n      spot.style.fontSize = \"2.5rem\";\r\n    }\r\n    shortestPath.shift();\r\n    count++;\r\n    //Adds a flag icon to the ending spot\r\n    if (!shortestPath[0]) {\r\n      const flagImg = document.createElement(\"img\");\r\n      const endSpot = document.getElementById(\r\n        `r${node.position[0]}c${node.position[1]}`\r\n      );\r\n      flagImg.src = _images_flag_png__WEBPACK_IMPORTED_MODULE_0__;\r\n      flagImg.style.width = \"50px\";\r\n      flagImg.style.height = \"auto\";\r\n      endSpot.textContent = null;\r\n      endSpot.append(flagImg);\r\n    }\r\n  }\r\n}\r\nfunction getPath(node) {\r\n  if (!node) {\r\n    return path;\r\n  }\r\n  path.unshift(node.position);\r\n  getPath(node.parent);\r\n  return path;\r\n}\r\n\n\n//# sourceURL=webpack://knights-travails/./src/showPath.js?");

/***/ }),

/***/ "./src/userInput.js":
/*!**************************!*\
  !*** ./src/userInput.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userInput)\n/* harmony export */ });\n/* harmony import */ var _boardSetUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardSetUp.js */ \"./src/boardSetUp.js\");\n/* harmony import */ var _possibleMoves_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./possibleMoves.js */ \"./src/possibleMoves.js\");\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\n/* harmony import */ var _showPath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showPath.js */ \"./src/showPath.js\");\n/* harmony import */ var _addKnight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addKnight.js */ \"./src/addKnight.js\");\n\r\n\r\n\r\n\r\n\r\nfunction userInput() {\r\n  const confirm = document.getElementById(\"confirm\");\r\n  const reset = document.getElementById(\"reset\");\r\n  let rowStart;\r\n  let columnStart;\r\n  let rowEnd;\r\n  let columnEnd;\r\n  confirm.addEventListener(\"click\", () => {\r\n    //Getting input from user\r\n    rowStart = parseInt(document.getElementById(\"rowStart\").value);\r\n    columnStart = parseInt(document.getElementById(\"columnStart\").value);\r\n    columnEnd = parseInt(document.getElementById(\"columnEnd\").value);\r\n    rowEnd = parseInt(document.getElementById(\"rowEnd\").value);\r\n    //Ensuring end coordinate is not the same as start coordinate\r\n    const end = [rowEnd, columnEnd];\r\n    if (rowStart === rowEnd && columnStart === columnEnd) {\r\n      alert(\r\n        \"Starting and ending positions must be different. Please try again.\"\r\n      );\r\n    } else {\r\n      document.getElementById(\"confirm\").setAttribute(\"disabled\", \"true\");\r\n      const thisNode = new _node_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](rowStart, columnStart);\r\n      const solution = (0,_possibleMoves_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(thisNode, end);\r\n      (0,_addKnight_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(thisNode);\r\n      (0,_showPath_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(solution);\r\n    }\r\n  });\r\n  //Resets board\r\n  reset.addEventListener(\"click\", () => {\r\n    const spaces = document.querySelectorAll(\".space\");\r\n    const coordinates = document.querySelectorAll(\".coordinate\");\r\n    document.getElementById(\"confirm\").removeAttribute(\"disabled\");\r\n    coordinates.forEach((coordinate) => {\r\n      if (coordinate) {\r\n        document.getElementById(\"shortPath\").removeChild(coordinate);\r\n      }\r\n    });\r\n    spaces.forEach((space) => {\r\n      document.getElementById(\"boardContainer\").removeChild(space);\r\n    });\r\n    (0,_boardSetUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://knights-travails/./src/userInput.js?");

/***/ }),

/***/ "./src/images/flag.png":
/*!*****************************!*\
  !*** ./src/images/flag.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3459f74da8192dea1610.png\";\n\n//# sourceURL=webpack://knights-travails/./src/images/flag.png?");

/***/ }),

/***/ "./src/images/lightKnight.png":
/*!************************************!*\
  !*** ./src/images/lightKnight.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc476498b36b31869af4.png\";\n\n//# sourceURL=webpack://knights-travails/./src/images/lightKnight.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;