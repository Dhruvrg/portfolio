"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_home_index_tsx",{

/***/ "./components/home/landing.tsx":
/*!*************************************!*\
  !*** ./components/home/landing.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared-components */ \"./shared/components/index.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Landing() {\n    _s();\n    const config = {\n        type: \"spring\",\n        damping: 10,\n        stiffness: 80\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/vectors/ellipse.svg\",\n                alt: \"Ellipse Vector\",\n                className: \"absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/vectors/triangle.svg\",\n                alt: \"Triangle 3d Vector\",\n                className: \"block md:hidden absolute right-1/3 top-28 w-1/4 md:w-16 animate-spin pointer-events-none\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                transition: config,\n                initial: {\n                    scale: 0.3,\n                    opacity: 0\n                },\n                animate: {\n                    scale: 1,\n                    opacity: 1,\n                    transitionDuration: \"0.2s\"\n                },\n                exit: {\n                    x: 0,\n                    opacity: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-12 gap-4 h-84.5vh ml-4 sm:mx-12 md:mx-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"items-center w-3/4 -mt-10 relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/images/vectors/triangle.svg\",\n                                        alt: \"Triangle 3d Vector\",\n                                        className: \"hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.HeaderSmall, {\n                                        text: \"Who is he?\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-3\",\n                                        children: \"Dhruv Gharat\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"text-7xl font-light text-violet text-justify\",\n                                        children: \"I am a Full Stack Web and App Developer with a passion for solving complex problems. I specialize in creating robust, user-friendly applications and leveraging my expertise to deliver efficient and innovative solutions.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"sm:col-span-1 xl:col-span-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                                    type: \"solid\",\n                                                    text: \"Know More\",\n                                                    onClickHandler: ()=>router.push(\"#skills\")\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"sm:col-span-1 xl:col-span-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                                    type: \"outlined\",\n                                                    text: \"Download Resume\",\n                                                    // eslint-disable-next-line no-return-assign\n                                                    onClickHandler: ()=>window.open(\"resume.pdf\", \"_blank\")\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:flex md:col-span-5 lg:col-span-6 text-justify text-white justify-end items-end \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"images/bob.png\",\n                                alt: \"Dhruv Gharat\",\n                                className: \"ml-auto w-100 lg:w-4/5 pointer-events-none text-right\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Dhruv.cpp\\\\Nestjs\\\\another-portfolio\\\\components\\\\home\\\\landing.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Landing, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvbGFuZGluZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ2xCO0FBQ0M7QUFFekIsU0FBU0k7O0lBQ3RCLE1BQU1DLFNBQVM7UUFDYkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtJQUNBLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixxQkFDRTs7MEJBQ0UsOERBQUNPO2dCQUNDQyxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKQyxXQUFVOzs7Ozs7MEJBRVosOERBQUNIO2dCQUNDQyxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKQyxXQUFVOzs7Ozs7MEJBRVosOERBQUNYLGlEQUFNQSxDQUFDWSxHQUFHO2dCQUNUQyxZQUFZVjtnQkFDWlcsU0FBUztvQkFBRUMsT0FBTztvQkFBS0MsU0FBUztnQkFBRTtnQkFDbENDLFNBQVM7b0JBQUVGLE9BQU87b0JBQUdDLFNBQVM7b0JBQUdFLG9CQUFvQjtnQkFBTztnQkFDNURDLE1BQU07b0JBQUVDLEdBQUc7b0JBQUdKLFNBQVM7Z0JBQUU7MEJBQ3pCLDRFQUFDSjtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFJRCxXQUFVO3NDQUViLDRFQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNIO3dDQUNDQyxLQUFJO3dDQUNKQyxLQUFJO3dDQUNKQyxXQUFVOzs7Ozs7a0RBRVosOERBQUNaLDJEQUFXQTt3Q0FBQ3NCLE1BQUs7Ozs7OztrREFDbEIsOERBQUNDO3dDQUFHWCxXQUFVO2tEQUErRTs7Ozs7O2tEQUc3Riw4REFBQ1k7d0NBQUdaLFdBQVU7a0RBQStDOzs7Ozs7a0RBSzdELDhEQUFDQzt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUNDO2dEQUFJRCxXQUFVOzBEQUNiLDRFQUFDYixzREFBTUE7b0RBQ0xNLE1BQUs7b0RBQ0xpQixNQUFLO29EQUNMRyxnQkFBZ0IsSUFBTWpCLE9BQU9rQixJQUFJLENBQUM7Ozs7Ozs7Ozs7OzBEQUd0Qyw4REFBQ2I7Z0RBQUlELFdBQVU7MERBQ2IsNEVBQUNiLHNEQUFNQTtvREFDTE0sTUFBSztvREFDTGlCLE1BQUs7b0RBQ0wsNENBQTRDO29EQUM1Q0csZ0JBQWdCLElBQU1FLE9BQU9DLElBQUksQ0FBQyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU0xRCw4REFBQ2Y7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNIO2dDQUNDQyxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEI7R0F4RXdCVDs7UUFNUEQsa0RBQVNBOzs7S0FORkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2xhbmRpbmcudHN4PzNlZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBIZWFkZXJTbWFsbCB9IGZyb20gJ0BzaGFyZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZygpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICB0eXBlOiAnc3ByaW5nJyxcbiAgICBkYW1waW5nOiAxMCxcbiAgICBzdGlmZm5lc3M6IDgwXG4gIH07XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvdmVjdG9ycy9lbGxpcHNlLnN2Z1wiXG4gICAgICAgIGFsdD1cIkVsbGlwc2UgVmVjdG9yXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBib3R0b20tMCB3LTIvMyBtZDp3LTUwcCBsZzp3LTM1cCBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgIC8+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvdmVjdG9ycy90cmlhbmdsZS5zdmdcIlxuICAgICAgICBhbHQ9XCJUcmlhbmdsZSAzZCBWZWN0b3JcIlxuICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtZDpoaWRkZW4gYWJzb2x1dGUgcmlnaHQtMS8zIHRvcC0yOCB3LTEvNCBtZDp3LTE2IGFuaW1hdGUtc3BpbiBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgIC8+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICB0cmFuc2l0aW9uPXtjb25maWd9XG4gICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAuMywgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uRHVyYXRpb246ICcwLjJzJyB9fVxuICAgICAgICBleGl0PXt7IHg6IDAsIG9wYWNpdHk6IDAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgaC04NC41dmggbWwtNCBzbTpteC0xMiBtZDpteC0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tNyBsZzpjb2wtc3Bhbi02IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7LyogSGVybyBIZWFkZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciB3LTMvNCAtbXQtMTAgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdmVjdG9ycy90cmlhbmdsZS5zdmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlRyaWFuZ2xlIDNkIFZlY3RvclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIGFic29sdXRlIHJpZ2h0LTAgdG9wLTAgdy0yLzMgbWQ6dy0xNiBhbmltYXRlLXNwaW5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8SGVhZGVyU21hbGwgdGV4dD1cIldobyBpcyBoZT9cIiAvPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgc206dGV4dC0yeGwgeGw6dGV4dC0xeGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBsZWFkaW5nLW5vbmUgbWItM1wiPlxuICAgICAgICAgICAgICAgIERocnV2IEdoYXJhdFxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC03eGwgZm9udC1saWdodCB0ZXh0LXZpb2xldCB0ZXh0LWp1c3RpZnlcIj5cbiAgICAgICAgICAgICAgICBJIGFtIGEgRnVsbCBTdGFjayBXZWIgYW5kIEFwcCBEZXZlbG9wZXIgd2l0aCBhIHBhc3Npb24gZm9yIHNvbHZpbmcgY29tcGxleCBwcm9ibGVtcy5cbiAgICAgICAgICAgICAgICBJIHNwZWNpYWxpemUgaW4gY3JlYXRpbmcgcm9idXN0LCB1c2VyLWZyaWVuZGx5IGFwcGxpY2F0aW9ucyBhbmQgbGV2ZXJhZ2luZyBteVxuICAgICAgICAgICAgICAgIGV4cGVydGlzZSB0byBkZWxpdmVyIGVmZmljaWVudCBhbmQgaW5ub3ZhdGl2ZSBzb2x1dGlvbnMuXG4gICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtbm9uZSB4bDpncmlkLWNvbHMtMiBnYXAtNCBtdC02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpjb2wtc3Bhbi0xIHhsOmNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNvbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIktub3cgTW9yZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXsoKSA9PiByb3V0ZXIucHVzaCgnI3NraWxscycpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTEgeGw6Y29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiRG93bmxvYWQgUmVzdW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJldHVybi1hc3NpZ25cbiAgICAgICAgICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9eygpID0+IHdpbmRvdy5vcGVuKCdyZXN1bWUucGRmJywgJ19ibGFuaycpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IG1kOmNvbC1zcGFuLTUgbGc6Y29sLXNwYW4tNiB0ZXh0LWp1c3RpZnkgdGV4dC13aGl0ZSBqdXN0aWZ5LWVuZCBpdGVtcy1lbmQgXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ib2IucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiRGhydXYgR2hhcmF0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtYXV0byB3LTEwMCBsZzp3LTQvNSBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiSGVhZGVyU21hbGwiLCJtb3Rpb24iLCJ1c2VSb3V0ZXIiLCJMYW5kaW5nIiwiY29uZmlnIiwidHlwZSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJyb3V0ZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJjbGFzc05hbWUiLCJkaXYiLCJ0cmFuc2l0aW9uIiwiaW5pdGlhbCIsInNjYWxlIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJleGl0IiwieCIsInRleHQiLCJoMSIsImg1Iiwib25DbGlja0hhbmRsZXIiLCJwdXNoIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/landing.tsx\n"));

/***/ })

});