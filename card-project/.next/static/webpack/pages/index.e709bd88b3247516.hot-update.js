"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Card.tsx":
/*!*********************************!*\
  !*** ./src/components/Card.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.scss */ \"./src/components/Card.module.scss\");\n/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Card = (param)=>{\n    let { title, initialDescription, contactInfo } = param;\n    _s();\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialDescription);\n    const handleDescriptionChange = (e)=>{\n        setDescription(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cardContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logoContainer)\n                }, void 0, false, {\n                    fileName: \"/home/kuzu/Documents/vscode work/card/card-project/card-project/src/components/Card.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/home/kuzu/Documents/vscode work/card/card-project/card-project/src/components/Card.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: description,\n                    onChange: handleDescriptionChange,\n                    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().descriptionInput),\n                    placeholder: \"Enter description\"\n                }, void 0, false, {\n                    fileName: \"/home/kuzu/Documents/vscode work/card/card-project/card-project/src/components/Card.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contact),\n                    children: contactInfo\n                }, void 0, false, {\n                    fileName: \"/home/kuzu/Documents/vscode work/card/card-project/card-project/src/components/Card.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().displayedDescription),\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/home/kuzu/Documents/vscode work/card/card-project/card-project/src/components/Card.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kuzu/Documents/vscode work/card/card-project/card-project/src/components/Card.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/kuzu/Documents/vscode work/card/card-project/card-project/src/components/Card.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Card, \"3ZZzIR8pdfcIFKVDLwnrWlYY/Rs=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDQTtBQVF4QyxNQUFNRyxPQUE0QjtRQUFDLEVBQUVDLEtBQUssRUFBRUMsa0JBQWtCLEVBQUVDLFdBQVcsRUFBRTs7SUFDekUsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDSTtJQUUvQyxNQUFNSSwwQkFBMEIsQ0FBQ0M7UUFDN0JGLGVBQWVFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUNqQztJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXWiwrREFBVztrQkFDdkIsNEVBQUNXO1lBQUlDLFdBQVdaLHNFQUFrQjs7OEJBQzlCLDhEQUFDVztvQkFBSUMsV0FBV1osd0VBQW9COzs7Ozs7OEJBRXBDLDhEQUFDZ0I7b0JBQUdKLFdBQVdaLGdFQUFZOzhCQUFHRTs7Ozs7OzhCQUM5Qiw4REFBQ2U7b0JBQ0dDLE1BQUs7b0JBQ0xSLE9BQU9MO29CQUNQYyxVQUFVWjtvQkFDVkssV0FBV1osMkVBQXVCO29CQUNsQ3FCLGFBQVk7Ozs7Ozs4QkFFaEIsOERBQUNDO29CQUFFVixXQUFXWixrRUFBYzs4QkFBR0k7Ozs7Ozs4QkFDL0IsOERBQUNrQjtvQkFBRVYsV0FBV1osK0VBQTJCOzhCQUFHSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUQ7R0F6Qk1KO0tBQUFBO0FBMkJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQudHN4P2I1ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhcmQubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgQ2FyZFByb3BzIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGluaXRpYWxEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNvbnRhY3RJbmZvOiBzdHJpbmc7XG59XG5cbmNvbnN0IENhcmQ6IFJlYWN0LkZDPENhcmRQcm9wcz4gPSAoeyB0aXRsZSwgaW5pdGlhbERlc2NyaXB0aW9uLCBjb250YWN0SW5mbyB9KSA9PiB7XG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShpbml0aWFsRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURlc2NyaXB0aW9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbklucHV0fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3R9Pntjb250YWN0SW5mb308L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGlzcGxheWVkRGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNhcmQiLCJ0aXRsZSIsImluaXRpYWxEZXNjcmlwdGlvbiIsImNvbnRhY3RJbmZvIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImNhcmRDb250ZW50IiwibG9nb0NvbnRhaW5lciIsImgyIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJkZXNjcmlwdGlvbklucHV0IiwicGxhY2Vob2xkZXIiLCJwIiwiY29udGFjdCIsImRpc3BsYXllZERlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card.tsx\n"));

/***/ })

});