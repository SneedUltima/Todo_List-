/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss':
      /*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@700&ffamily=Alata&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap);"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  font-family: \\"Roboto\\", sans-serif;\\n  background: rgb(53, 62, 171) linear-gradient(90deg, rgb(53, 62, 171) 24%, rgb(0, 115, 255) 100%);\\n}\\n\\n.body-container {\\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\\n  position: fixed;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  display: grid;\\n  height: 80vh;\\n  width: 70vw;\\n  grid-template-rows: minmax(30px, 70px) 6fr;\\n}\\n\\n.header-container {\\n  background: linear-gradient(90deg, rgb(93, 12, 255) 0%, rgb(155, 0, 250) 100%);\\n  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.header-container .header {\\n  color: rgb(242, 242, 242);\\n  font-family: \\"Caveat\\", cursive;\\n}\\n\\n.content-container {\\n  display: grid;\\n  grid-template-columns: minmax(150px, 200px) 4fr;\\n}\\n\\n.projects-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 15px;\\n  border-right: 1px solid linear-gradient(90deg, rgb(93, 12, 255) 0%, rgb(155, 0, 250) 100%);\\n  background: #1c1f31;\\n  padding-top: 20px;\\n  height: 420px;\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n}\\n.projects-container button {\\n  display: flex;\\n  justify-content: center;\\n  gap: 5px;\\n  max-width: 135px;\\n  border-radius: 0.5rem;\\n  white-space: nowrap;\\n  padding: 10px 10px;\\n  margin: 0 60px;\\n  cursor: pointer;\\n  border: none;\\n  background: linear-gradient(90deg, rgb(93, 12, 255) 0%, rgb(155, 0, 250) 100%);\\n  font-weight: bold;\\n  font-size: 16px;\\n  color: white;\\n}\\n.projects-container button:hover {\\n  background: rgb(93, 12, 255);\\n}\\n.projects-container button:focus {\\n  background: #4800d8;\\n}\\n.projects-container button:first-child {\\n  color: white;\\n  background: rgb(63, 74, 199);\\n  margin-bottom: 15px;\\n}\\n.projects-container button:first-child:hover {\\n  background: #3540b7;\\n}\\n.projects-container button:first-child:focus {\\n  background: #3039a3;\\n}\\n\\n.tasks {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  justify-content: center;\\n}\\n.tasks .task-container {\\n  max-width: 45vw;\\n  gap: 10px;\\n  background-color: #262a41;\\n  color: white;\\n  border: 2px solid white;\\n  padding: 10px 5px;\\n  font-size: 15px;\\n  border-radius: 1rem;\\n}\\n.tasks .task-container .task-content {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n.tasks .task-container .task-content .upper-content {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.tasks .task-container .task-content .upper-content .left-content {\\n  display: flex;\\n  align-items: center;\\n  gap: 5px;\\n}\\n.tasks .task-container .task-content .upper-content .left-content .circle {\\n  color: green;\\n}\\n.tasks .task-container .task-content .upper-content .left-content .title.strike {\\n  text-decoration: line-through;\\n}\\n.tasks .task-container .task-content .upper-content .right-content {\\n  display: flex;\\n  gap: 10px;\\n  align-items: center;\\n}\\n.tasks .task-container .task-content .upper-content .right-content .date {\\n  border: 1px solid rgb(63, 74, 199);\\n  color: #b5baea;\\n  border-radius: 5%;\\n  padding: 2px 2px;\\n}\\n.tasks .task-container .task-content .upper-content .right-content .priority, .tasks .task-container .task-content .upper-content .right-content .priority.low, .tasks .task-container .task-content .upper-content .right-content .priority.medium, .tasks .task-container .task-content .upper-content .right-content .priority.high {\\n  font-weight: bold;\\n  padding: 1px 4px;\\n}\\n.tasks .task-container .task-content .upper-content .right-content .priority.high {\\n  border: 2px solid red;\\n  color: red;\\n}\\n.tasks .task-container .task-content .upper-content .right-content .priority.medium {\\n  border: 2px solid rgb(224, 92, 3);\\n  color: rgb(224, 92, 3);\\n}\\n.tasks .task-container .task-content .upper-content .right-content .priority.low {\\n  border: 2px solid rgb(23, 215, 20);\\n  color: rgb(23, 215, 20);\\n}\\n.tasks .task-container .task-content .lower-content {\\n  display: flex;\\n  padding-left: 20px;\\n}\\n.tasks .task-container .task-content .lower-content .notes {\\n  font-style: italic;\\n}\\n.tasks .task-container .task-content .lower-content .notes.strike {\\n  text-decoration: line-through;\\n}\\n.tasks .bin {\\n  cursor: pointer;\\n}\\n.tasks .bin:hover {\\n  color: red;\\n}\\n\\n.tasks-container {\\n  padding: 20px 15px 20px 20px;\\n  background-color: rgb(19, 21, 33);\\n  height: 420px;\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n}\\n.tasks-container #new-task {\\n  color: white;\\n  background: linear-gradient(90deg, rgb(93, 12, 255) 0%, rgb(155, 0, 250) 100%);\\n  border: none;\\n  padding: 10px 10px;\\n  margin-bottom: 20px;\\n  border-radius: 5%;\\n  cursor: pointer;\\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\\n}\\n.tasks-container #new-task:hover {\\n  background: rgb(93, 12, 255);\\n}\\n.tasks-container .delete-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n  margin-top: 30px;\\n}\\n.tasks-container .delete-container h1 {\\n  font-size: 30px;\\n  color: white;\\n}\\n.tasks-container .delete-container h2 {\\n  font-size: 20px;\\n  font-weight: 400;\\n  color: white;\\n}\\n.tasks-container .delete-container #delete-project {\\n  padding: 10px 5px;\\n  max-width: 100px;\\n  color: white;\\n  border: none;\\n  cursor: pointer;\\n  font-weight: bold;\\n  border-radius: 5%;\\n  background: red;\\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\\n}\\n.tasks-container .delete-container #delete-project:hover {\\n  background: #e60000;\\n}\\n.tasks-container .delete-container #delete-project:focus {\\n  background: #cc0000;\\n}\\n\\n.task-modal, .project-modal {\\n  position: fixed;\\n  left: 50%;\\n  top: 53%;\\n  transform: translate(-50%, -50%);\\n  width: 35vw;\\n  height: 70vh;\\n  background-color: white;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n  opacity: 0;\\n  pointer-events: none;\\n  transition-timing-function: ease-out;\\n  transition: 0.3s;\\n}\\n.task-modal .modal-header, .project-modal .modal-header, .project-modal header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  font-size: 10px;\\n  padding: 5px 10px;\\n  color: white;\\n  background: rgb(63, 74, 199);\\n}\\n.task-modal .modal-header #exit, .project-modal .modal-header #exit, .project-modal header #exit {\\n  font-size: 20px;\\n  cursor: pointer;\\n}\\n.task-modal .modal-header #exit:hover, .project-modal .modal-header #exit:hover, .project-modal header #exit:hover {\\n  color: rgb(230, 228, 228);\\n}\\n.task-modal .form-container .form-column, .project-modal .form-container .form-column {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 5px;\\n  padding-top: 10px;\\n}\\n.task-modal .form-container .form-column #title, .project-modal .form-container .form-column #title, .task-modal .form-container .form-column #date, .project-modal .form-container .form-column #date, .task-modal .form-container .form-column #priority, .project-modal .form-container .form-column #priority, .task-modal .form-container .form-column #notes, .project-modal .form-container .form-column #notes {\\n  background-color: rgb(242, 242, 242);\\n  border: none;\\n  padding: 5px 5px;\\n  resize: none;\\n}\\n.task-modal .submit-container, .project-modal .submit-container {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  margin-top: 20px;\\n}\\n.task-modal .submit-container #submit, .project-modal .submit-container #submit {\\n  padding: 10px 10px;\\n  color: white;\\n  border: none;\\n  cursor: pointer;\\n  font-weight: bold;\\n  border-radius: 10%;\\n  background: rgb(63, 74, 199);\\n}\\n.task-modal .submit-container #submit:hover, .project-modal .submit-container #submit:hover {\\n  background: #3540b7;\\n}\\n.task-modal .submit-container #submit:focus, .project-modal .submit-container #submit:focus {\\n  background: #3039a3;\\n}\\n\\n.task-modal.show, .show.project-modal {\\n  opacity: 1;\\n  pointer-events: auto;\\n  transition-timing-function: ease-in;\\n  transition: 0.2s;\\n}\\n\\n.body-container.blur {\\n  filter: blur(5px);\\n  pointer-events: none;\\n}\\n\\n.project-modal {\\n  width: 30vw;\\n  height: 30vh;\\n  top: 45%;\\n  display: flex;\\n  flex-direction: column;\\n  transition-timing-function: ease-out;\\n  transition: 0.3s;\\n}\\n.project-modal header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  font-size: 15px;\\n  font-weight: bold;\\n}\\n.project-modal header #exit {\\n  cursor: pointer;\\n}\\n.project-modal .project-form {\\n  padding: 20px 20px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n}\\n.project-modal .project-form #project-name {\\n  max-width: 150px;\\n  padding: 5px 5px;\\n  background-color: rgb(242, 242, 242);\\n}\\n.project-modal .project-form #project-submit {\\n  padding: 8px 8px;\\n  margin-top: 10px;\\n  color: white;\\n  border: none;\\n  cursor: pointer;\\n  font-weight: bold;\\n  border-radius: 10%;\\n  background: rgb(63, 74, 199);\\n}\\n.project-modal .project-form #project-submit:hover {\\n  background: #3540b7;\\n}\\n.project-modal .project-form #project-submit:focus {\\n  background: #3039a3;\\n}\\n\\n.project-modal.show {\\n  opacity: 1;\\n  pointer-events: auto;\\n  transition-timing-function: ease-in;\\n  transition: 0.2s;\\n}", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list-/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo_list-/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list-/./node_modules/css-loader/dist/runtime/noSourceMaps.js?'
        );

        /***/
      },

    /***/ './src/styles/main.scss':
      /*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list-/./src/styles/main.scss?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list-/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list-/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list-/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list-/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list-/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list-/./node_modules/style-loader/dist/runtime/styleTagTransform.js?'
        );

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");\n\n\n\n// DOM Elements\nconst bodyContainer = document.querySelector(".body-container")\nconst newProjectButton = document.querySelector("#new-project")\nconst newTaskButton = document.querySelector("#new-task")\nconst projectsContainer = document.querySelector(".projects-container")\nconst tasksContainer = document.querySelector(".tasks-container")\nconst deleteContainer = document.querySelector(".delete-container")\nconst deleteProjectButton = document.querySelector("#delete-project")\nconst innerTasks = document.querySelector(".tasks")\nconst taskModal = document.querySelector(".task-modal")\nconst submitButton = document.querySelector("#submit")\nconst exitButton = document.querySelectorAll("#exit")\nconst projectModal = document.querySelector(".project-modal")\nconst projectSubmitButton = document.querySelector("#project-submit")\n// Collecting Form Data from DOM Elements\nconst formTitle = document.querySelector("#title")\nconst formDate = document.querySelector("#date")\nconst formPriority = document.querySelector("#priority")\nconst formNotes = document.querySelector("#notes")\nconst formProjectName = document.querySelector("#project-name")\n\n// Array to contain projects\nlet projects = [];\n\n// Event listener that loads an example project and projects created from local storage\naddEventListener(\'load\', () => {\n    deleteContainer.remove()\n    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project("Example Project")\n    newProject.newTask("Coding Project #1","2022-10-12","High",\'Finish my To-Do-List application\')\n    newProject.newTask("Coding Project #2","2022-11-14","Low",\'Finish my Tic-Tac-Toe game\')\n    projects.push(newProject)\n    addProjectButton("Example Project", newProject)\n    createTask(newProject)\n\n    // Looks into local storage to find and display previous made projects and tasks\n    for (const key in localStorage) {\n        if (localStorage.hasOwnProperty(key)) {\n            let project = JSON.parse(localStorage.getItem(key))\n            let storageProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(project.name)\n            storageProject.tasks = project.tasks\n            projects.push(storageProject)\n            addProjectButton(`${key}`, storageProject)\n            createTask(storageProject)\n        }\n    }\n    clearDisplay(innerTasks)\n});\n\n// Event listener on New Project button that displays the create project modal\nnewProjectButton.addEventListener("click", () => {\n    projectModal.classList.add("show")\n    bodyContainer.classList.add("blur");\n})\n\n// Event listener for project submit button to create a project button + object and store in local storage \nprojectSubmitButton.addEventListener("click", (e) => {\n    e.preventDefault()\n    removeModal(projectModal)\n    if(!formProjectName.value){\n        return\n    }\n    const projectName = formProjectName.value\n    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectName)\n    let projectSerialized = JSON.stringify(newProject)\n    localStorage.setItem(`${projectName}`, projectSerialized);\n    projects.push(newProject)\n    addProjectButton(projectName, newProject)\n    clearModal()\n})\n\n// Event listener for create task button to display task modal\nnewTaskButton.addEventListener("click", () => {\n    if(projects.every(projectItem => \n        projectItem.selected === false)) {\n        alert("You must first either select a project or create a new one.")\n        return\n        }\n    taskModal.classList.add("show")\n    bodyContainer.classList.add("blur");\n})\n\n// Event listener for submit button on task modal\n// Takes data from form to create a task on the selected project, display it and store it in localStorage \nsubmitButton.addEventListener("click", (e) => {\n    e.preventDefault()\n    removeModal(taskModal)\n    if(!formTitle.value || !formDate.value || !formPriority.value) {\n        alert("Please enter at a minimum the task title, due date and task priority")\n        return\n    }\n    const title = formTitle.value\n    const date = formDate.value\n    const priority = formPriority.value\n    const notes = formNotes.value\n\n    const selectedProject = projects.find(project => project.selected === true)\n    selectedProject.newTask(title, date, priority, notes)\n\n    clearDisplay(innerTasks)\n    changeTaskDisplay(selectedProject)\n    deleteProjectDisplay(selectedProject)\n    clearModal()\n\n    let retrievedObject = localStorage.getItem(`${selectedProject.name}`);\n    let stored = JSON.parse(retrievedObject);\n    stored.tasks.push(selectedProject.newTask(title, date, priority, notes));\n    let taskSerialized = JSON.stringify(stored);\n    localStorage.setItem(`${selectedProject.name}`, taskSerialized);\n})\n\n// Event listener for delete project button to delete project from display and localStorage\ndeleteProjectButton.addEventListener("click", () => {\n    let projectIndex = projects.findIndex(project=> project.selected === true)\n    let projectRemove = projects[projectIndex].name \n    projects.splice(projectIndex, 1)\n    for(const button of document.querySelectorAll("button")) {\n        if(button.textContent.includes(projectRemove)){\n            projectsContainer.removeChild(button)\n            deleteContainer.remove()\n        }\n    }\n    localStorage.removeItem(`${projectRemove}`);\n})\n\n// Event listener for the exit button on the task and project modal to exit modal\nexitButton.forEach(function(btn) {\n    btn.addEventListener("click", () => {\n        removeModal(taskModal)\n        removeModal(projectModal)\n    })\n})\n\n// Function to clear the modal of typed data after a submit\nfunction clearModal() {\n    formTitle.value = "";\n    formDate.value = "";\n    formPriority.value = "";\n    formNotes.value = "";\n    formProjectName.value = "";\n}\n\n// Function to clear modal display and blur effect\nfunction removeModal(modal) {\n    modal.classList.remove("show")\n    bodyContainer.classList.remove("blur");\n}\n\n// Function to create and display tasks for each project\nfunction changeTaskDisplay(selectedProject) {\n    selectedProject.tasks.forEach(task => {\n        createTask(task, selectedProject)\n    })\n}\n\n// Function to create a project button\nfunction addProjectButton(projectName, project) {\n    const button = document.createElement("button")\n    button.textContent = projectName\n    button.addEventListener("click", () => {\n        projects.forEach(projectItem => {\n            projectItem.selected = false;\n        })\n        project.selected = true;\n        clearDisplay(innerTasks)\n        project.tasks.forEach(task => {\n            createTask(task, project)\n        })\n        \n        deleteProjectDisplay(project)\n        \n    })\n    projectsContainer.append(button)\n}\n\n// Function to display project delete option if selected project has no tasks\nfunction deleteProjectDisplay(project) {\n    if(project.tasks.length > 0){\n        deleteContainer.remove()\n    }\n    else if(project.tasks.length === 0){\n        tasksContainer.append(deleteContainer)\n    }\n}\n\n// Function to create the visual elements of the task and add event listeners to buttons on task\nfunction createTask(task, selectedProject) {\n    const taskContainer = document.createElement("div")\n    taskContainer.classList.add("task-container")\n    const circle = document.createElement("i")\n    circle.innerHTML = \'<i class="fa-regular fa-circle"></i>\'\n    circle.classList.add("circle")\n    circle.addEventListener("click", () => {\n        if(circle.innerHTML === \'<i class="fa-regular fa-circle"></i>\') {\n            circle.innerHTML = "<i class=\'fa-solid fa-circle-check\'></i>"\n            title.classList.add("strike")\n            notes.classList.add("strike")\n        } else {\n            circle.innerHTML = \'<i class="fa-regular fa-circle"></i>\'\n            title.classList.remove("strike")\n            notes.classList.remove("strike")\n        }\n    })\n\n    const title = document.createElement("p")\n    title.textContent = `${task.title}`\n    title.classList.add("title")\n    const date = document.createElement("p")\n    date.textContent = `${task.date}`\n    date.classList.add("date")\n    const priority = document.createElement("p")\n    priority.textContent = `${task.priority}`\n    priority.classList.add("priority")\n    if(task.priority === "High"){\n        priority.classList.add("high")\n    }\n    else if(task.priority === "Medium"){\n        priority.classList.add("medium")\n    }\n    else if(task.priority === "Low"){\n        priority.classList.add("low")\n    }\n    const notes = document.createElement("p")\n    notes.textContent = `Notes: ${task.notes}`\n    notes.classList.add("notes")\n    const bin = document.createElement("i")\n    bin.innerHTML = "<i class=\'fa-solid fa-trash-can\'></i>"\n    bin.classList.add("bin")\n\n    const upperContent = document.createElement("div")\n    upperContent.classList.add("upper-content")\n    const leftContent = document.createElement("div")\n    leftContent.classList.add("left-content")\n    const rightContent = document.createElement("div")\n    rightContent.classList.add("right-content")\n    leftContent.append(circle, title)\n    rightContent.append(date, priority, bin)\n    upperContent.append(leftContent, rightContent)\n    const lowerContent = document.createElement("div")\n    lowerContent.classList.add("lower-content")\n    lowerContent.append(notes)\n    const taskContent = document.createElement("div")\n    taskContent.classList.add("task-content")\n    taskContent.append(upperContent, lowerContent)\n\n    taskContainer.append(taskContent)\n    innerTasks.append(taskContainer)\n    bin.addEventListener("click", () => {\n        task.selected = true;\n        \n        let taskRemove = selectedProject.tasks.findIndex(task => task.selected === true)\n        selectedProject.tasks.splice(taskRemove, 1)\n        innerTasks.removeChild(taskContainer) \n        \n        deleteProjectDisplay(selectedProject)\n\n        let retrievedObject = localStorage.getItem(`${selectedProject.name}`);\n        let stored = JSON.parse(retrievedObject);\n        stored.tasks.splice(taskRemove, 1);\n        let taskSerialized = JSON.stringify(stored)\n        localStorage.setItem(`${selectedProject.name}`, taskSerialized);\n      })\n}\n\n// Function to clear the container display\nfunction clearDisplay(parent) {\n    while (parent.firstChild) {\n         parent.removeChild(parent.firstChild);\n        }\n    }\n    \n\n\n//# sourceURL=webpack://todo_list-/./src/index.js?'
        );

        /***/
      },

    /***/ './src/project.js':
      /*!************************!*\
  !*** ./src/project.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Project": () => (/* binding */ Project)\n/* harmony export */ });\n// Class object to create projects that contain tasks\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = []\n    }\n\n    newTask(title, date, priority, notes){\n        let task = {\n            title : title, \n            date : date, \n            priority : priority, \n            notes : notes,\n            selected: false,\n        }\n        this.tasks.push(task)\n        return task\n    }\n\n    selected = false;\n}\n\n//# sourceURL=webpack://todo_list-/./src/project.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/index.js');
  /******/
  /******/
})();
