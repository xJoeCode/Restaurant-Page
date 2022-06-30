/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 480px) {\n\n  .container {\n    max-width: 480px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 976px) {\n\n  .container {\n    max-width: 976px;\n  }\n}\n@media (min-width: 1440px) {\n\n  .container {\n    max-width: 1440px;\n  }\n}\n.coffeeCards {\n  margin: 1.5rem;\n  display: flex;\n  height: 15rem;\n  width: 10rem;\n  flex-shrink: 0;\n  cursor: pointer;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.375rem;\n  border-width: 4px;\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 108, 127, var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgba(234, 169, 172, var(--tw-bg-opacity));\n  text-align: center;\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.coffeeCards:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(174, 180, 229, var(--tw-bg-opacity));\n}\n.catalogueCards {\n  margin: 1.5rem;\n  display: flex;\n  height: 6rem;\n  width: 15rem;\n  flex-shrink: 0;\n  cursor: pointer;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.375rem;\n  border-width: 4px;\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 108, 127, var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgba(227, 204, 176, var(--tw-bg-opacity));\n  text-align: center;\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.catalogueCards:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(211, 182, 221, var(--tw-bg-opacity));\n}\n@media (min-width: 768px) {\n\n  .catalogueCards {\n    height: 15rem;\n    width: 10rem;\n  }\n}\n.questionCards1 {\n  margin: 1rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(227, 204, 176, var(--tw-bg-opacity));\n  padding: 1rem;\n  font-family: Days One, sans-serif;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.questionCards1:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(211, 182, 221, var(--tw-bg-opacity));\n}\n.relative {\n  position: relative;\n}\n.m-3 {\n  margin: 0.75rem;\n}\n.m-4 {\n  margin: 1rem;\n}\n.m-auto {\n  margin: auto;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-auto {\n  height: auto;\n}\n.h-14 {\n  height: 3.5rem;\n}\n.w-4\\/6 {\n  width: 66.666667%;\n}\n.w-3\\/5 {\n  width: 60%;\n}\n.w-3\\/4 {\n  width: 75%;\n}\n.w-20 {\n  width: 5rem;\n}\n.w-24 {\n  width: 6rem;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border-\\[\\#592b1f\\] {\n  --tw-border-opacity: 1;\n  border-color: rgba(89, 43, 31, var(--tw-border-opacity));\n}\n.bg-lightblue {\n  --tw-bg-opacity: 1;\n  background-color: rgba(173, 216, 230, var(--tw-bg-opacity));\n}\n.bg-anotherGreen {\n  --tw-bg-opacity: 1;\n  background-color: rgba(56, 68, 72, var(--tw-bg-opacity));\n}\n.bg-veryLightBlue {\n  --tw-bg-opacity: 1;\n  background-color: rgba(201, 229, 238, var(--tw-bg-opacity));\n}\n.bg-lightBrown {\n  --tw-bg-opacity: 1;\n  background-color: rgba(227, 204, 176, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-8 {\n  padding: 2rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.text-center {\n  text-align: center;\n}\n.font-Days_One {\n  font-family: Days One, sans-serif;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.text-gray-50 {\n  --tw-text-opacity: 1;\n  color: rgba(249, 250, 251, var(--tw-text-opacity));\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.hover\\:-translate-y-1:hover {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:border-b-8:hover {\n  border-bottom-width: 8px;\n}\n.hover\\:bg-\\[\\#e1bfb4\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(225, 191, 180, var(--tw-bg-opacity));\n}\n@media (min-width: 768px) {\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:grid-cols-\\[1fr_5fr\\] {\n    grid-template-columns: 1fr 5fr;\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:bg-\\[\\#8eb0bc\\] {\n    --tw-bg-opacity: 1;\n    background-color: rgba(142, 176, 188, var(--tw-bg-opacity));\n  }\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n\n\n@layer components{\n\n.coffeeCards {\n    @apply bg-[#eaa9ac] w-40 h-60 m-6 cursor-pointer rounded-md shadow-lg border-4 border-[#006c7f] flex shrink-0 flex-col justify-center text-center items-center \n    hover:bg-[#aeb4e5] ease-in-out duration-300\n    }\n.catalogueCards {\n    @apply bg-lightBrown w-60 h-24 md:h-60 md:w-40 m-6 cursor-pointer rounded-md shadow-lg border-4 border-[#006c7f] flex shrink-0 flex-col justify-center text-center items-center \n    hover:bg-[#d3b6dd] ease-in-out duration-300\n    }\n.questionCards1{\n    @apply font-Days_One cursor-pointer rounded-lg p-4 bg-[#e3ccb0] m-4 hover:bg-[#d3b6dd] ease-in-out duration-300\n}\n\n}\n\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/moduleCoffeeCataolgue.js":
/*!**************************************!*\
  !*** ./src/moduleCoffeeCataolgue.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coffeeCard": () => (/* binding */ coffeeCard)
/* harmony export */ });
/* harmony import */ var _Assets_coffee_bean_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/coffee-bean.png */ "./src/Assets/coffee-bean.png");


const coffeeCard = () => {
    console.log("creating coffee Catalogue")
    const catalogueContainer = document.querySelector("#coffeeQuizContainer")
    while(catalogueContainer.hasChildNodes()){
        catalogueContainer.removeChild(catalogueContainer.lastChild)
    }
    catalogueContainer.setAttribute("class", "rounded-lg md:bg-[#8eb0bc] container m-auto mt-4 p-8 ")
    const coffeeHeader = document.createElement("h2")
    coffeeHeader.textContent = "Our Coffees"
    coffeeHeader.setAttribute("class","font-Days_One text-center text-3xl")
    catalogueContainer.appendChild(coffeeHeader)

    const coffeeCardContainer = document.createElement("div")
    coffeeCardContainer.setAttribute("class","  flex flex-wrap justify-center items-center mt-4")
    catalogueContainer.appendChild(coffeeCardContainer)
    for(let i = 0; i < 3; i++){
        const card = document.createElement("div")
        card.classList.add("catalogueCards")
        coffeeCardContainer.appendChild(card)
        const coffeeImage = document.createElement("img")
        coffeeImage.setAttribute("class","w-20 hidden md:block")
        coffeeImage.src = _Assets_coffee_bean_png__WEBPACK_IMPORTED_MODULE_0__
        card.appendChild(coffeeImage)

        const coffeeText = document.createElement("p")
        coffeeText.setAttribute("class","font-Days_One mt-4 px-4")
        if (i == 0){
             coffeeText.textContent = "Brazil IPANEMA C39 Tobacco"
        } else if (i == 1){
            coffeeText.textContent = "Brazil IPANEMA B67 Brown Sugar"
            } else if (i == 2){
                coffeeText.textContent = "Kenya Muthunzuuni PB"
                }
        card.appendChild(coffeeText)


    }
}



/***/ }),

/***/ "./src/moduleCoffeeQuiz.js":
/*!*********************************!*\
  !*** ./src/moduleCoffeeQuiz.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coffeeQuiz": () => (/* binding */ coffeeQuiz),
/* harmony export */   "roastProfileAns": () => (/* binding */ roastProfileAns),
/* harmony export */   "roastProfileQn": () => (/* binding */ roastProfileQn)
/* harmony export */ });
/* harmony import */ var _Assets_coffee_machine_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/coffee-machine.png */ "./src/Assets/coffee-machine.png");
/* harmony import */ var _Assets_moka_pot_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets/moka-pot.png */ "./src/Assets/moka-pot.png");
/* harmony import */ var _Assets_french_press_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/french-press.png */ "./src/Assets/french-press.png");




let questionArray = []

const coffeeQuiz = () => {
    
    console.log("creating quiz")
    const coffeeQuizContainer = document.getElementById("coffeeQuizContainer");
    
    while(coffeeQuizContainer.hasChildNodes()){
        coffeeQuizContainer.removeChild(coffeeQuizContainer.lastChild)
    }
    
    coffeeQuizContainer.setAttribute("class", "rounded-lg md:bg-[#8eb0bc] container m-auto mt-4 p-8 ")
    const headertext = document.createElement("h2");
    headertext.setAttribute("class","font-Days_One text-center mt-5 text-lg");
    headertext.textContent = "Hi there, First up, how do you make your coffee"
    coffeeQuizContainer.appendChild(headertext)
    const coffeeCardsWrapper = document.createElement("div")
    coffeeCardsWrapper.setAttribute("class"," flex flex-wrap justify-center");
    coffeeQuizContainer.appendChild(coffeeCardsWrapper)

    for (let i = 0; i < 3; i++){
        const NespressoContainer = document.createElement("div")
        NespressoContainer.setAttribute("class","coffeeCards")
        const nespressoImage = document.createElement("img")
        nespressoImage.setAttribute("class","w-24")
        const nespressotext = document.createElement("p")
        switch (i){
            case 2:
                NespressoContainer.setAttribute("data-id","Nespresso")  
                nespressoImage.src = _Assets_coffee_machine_png__WEBPACK_IMPORTED_MODULE_0__
                nespressotext.textContent = "Nespresso" 
                NespressoContainer.onclick = function() {roastProfileQn(),pushQuestion(nespressotext.textContent)} 
                break 
            case 1:
                NespressoContainer.setAttribute("data-id","MokaPot")  
                nespressoImage.src = _Assets_moka_pot_png__WEBPACK_IMPORTED_MODULE_1__
                nespressotext.textContent = "Mokapot"
                NespressoContainer.onclick = function() {roastProfileQn(),pushQuestion(nespressotext.textContent)} 
                break  
            case 0:
                NespressoContainer.setAttribute("data-id","FrenchPress")  
                nespressoImage.src = _Assets_french_press_png__WEBPACK_IMPORTED_MODULE_2__
                nespressotext.textContent = "Frenchpress" 
                NespressoContainer.onclick = function() {roastProfileQn(),pushQuestion(nespressotext.textContent)} 
                break   
        }
        coffeeCardsWrapper.appendChild(NespressoContainer)
        NespressoContainer.appendChild(nespressoImage)
        nespressotext.setAttribute("class","font-Days_One mt-4");
        NespressoContainer.appendChild(nespressotext)
    }

} 

const pushQuestion = card => {
    //const ansOne = card.getAttribute('data-id')
    questionArray.push(card)
    console.log(questionArray)
}

const roastProfileQn = () => {
    console.log(coffeeQuizContainer)
    while(coffeeQuizContainer.hasChildNodes()){
        coffeeQuizContainer.removeChild(coffeeQuizContainer.lastChild)
    }
    const headertext2 = document.createElement("h2");
    headertext2.setAttribute("class","font-Days_One text-center mt-5 text-lg");
    headertext2.textContent = "In order for us to recommend a coffee most suited to you, we will need to understand a little about your sensory palate. So which of these do you like?"
    coffeeQuizContainer.appendChild(headertext2)
    const coffeeCardsWrapper = document.createElement("div")
    coffeeCardsWrapper.setAttribute("class"," flex flex-wrap justify-center");
    coffeeQuizContainer.appendChild(coffeeCardsWrapper)
    for(let i = 0; i < 6; i++){
        const secondContainer = document.createElement("div")
        secondContainer.setAttribute("class","questionCards1");
        secondContainer.onclick = function(){roastProfileAns()}
        if (i == 0){
            secondContainer.textContent = "Berries"
            secondContainer.setAttribute("data-id","Berries")
            secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
       } else if (i == 1){
            secondContainer.textContent = "Caramel"
            secondContainer.setAttribute("data-id","Caramel")
            secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
           } else if (i == 2){
            secondContainer.textContent = "Chocolate"
            secondContainer.setAttribute("data-id","Chocolate")
            secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
               } else if (i == 3){
                secondContainer.textContent = "Citrus Lemons"
                secondContainer.setAttribute("data-id","Citrus Lemons")
                secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
                    } else if (i == 4){
                        secondContainer.textContent = "Edible Flowers"
                        secondContainer.setAttribute("data-id","Edible Flowers")
                        secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
                        } else if(i == 5){
                            secondContainer.textContent = "Stone Fruits"
                            secondContainer.setAttribute("data-id","Stone Fruits")
                            secondContainer.onclick = function() {pushQuestion(secondContainer.textContent),roastProfileAns()} 
                     }
            coffeeCardsWrapper.appendChild(secondContainer)        
    }
}

const roastProfileAns = () => {
    console.log("Answer Time")
    while(coffeeQuizContainer.hasChildNodes()){
        coffeeQuizContainer.removeChild(coffeeQuizContainer.lastChild)
    }
    const profileAnsTest = document.createElement("p");
    profileAnsTest.setAttribute("class","font-Days_One text-center mt-5 text-lg");
    profileAnsTest.textContent = "The Brazil IPANEMA B67 Brown Sugar is most suited for you"
    coffeeQuizContainer.appendChild(profileAnsTest)
}




/***/ }),

/***/ "./src/Assets/coffee-bean.png":
/*!************************************!*\
  !*** ./src/Assets/coffee-bean.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1affffc64b2d90a959b3.png";

/***/ }),

/***/ "./src/Assets/coffee-machine.png":
/*!***************************************!*\
  !*** ./src/Assets/coffee-machine.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe4c86420fccc35f9676.png";

/***/ }),

/***/ "./src/Assets/french-press.png":
/*!*************************************!*\
  !*** ./src/Assets/french-press.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ae7510b2e1e1d5c5369.png";

/***/ }),

/***/ "./src/Assets/moka-pot.png":
/*!*********************************!*\
  !*** ./src/Assets/moka-pot.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66ea9d00e38ea3846c24.png";

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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _moduleCoffeeQuiz_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleCoffeeQuiz.js */ "./src/moduleCoffeeQuiz.js");
/* harmony import */ var _moduleCoffeeCataolgue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleCoffeeCataolgue.js */ "./src/moduleCoffeeCataolgue.js");
console.log("running 2 index.js")
;





const main = ()=>{
    console.log("running")
    const coffeeQuizer = document.querySelector("#quiz")
    coffeeQuizer.onclick = function() {;(0,_moduleCoffeeQuiz_js__WEBPACK_IMPORTED_MODULE_1__.coffeeQuiz)()}
    const coffeeCataolgue = document.querySelector("#browseCoffees")
    coffeeCataolgue.onclick = function(){;(0,_moduleCoffeeCataolgue_js__WEBPACK_IMPORTED_MODULE_2__.coffeeCard)()}

  //  const nespressocardQn = () =>{
  //      console.log("question?")
 //       const nespressocard = document.querySelectorAll(".coffeeCards")
  //      nespressocard.forEach(card => card.onclick = function() {roastProfileQn(),pushQuestion(card)}) 
  //  }

    

    
    
}


main()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxPQUFPLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUss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Ozs7Ozs7QUNBQTtBQUNBLENBQXNCO0FBQzJEO0FBQzVCOzs7O0FBSXJEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpRUFBVTtBQUNqRDtBQUNBLHlDQUF5QyxzRUFBVTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLG9DQUFvQztBQUN2Rzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz9hOGQwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZUNvZmZlZUNhdGFvbGd1ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlQ29mZmVlUXVpei5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjEuNCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6LXdlYmtpdC1iYWNrZHJvcCB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk3NnB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA5NzZweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgfVxcbn1cXG4uY29mZmVlQ2FyZHMge1xcbiAgbWFyZ2luOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxNXJlbTtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDEwOCwgMTI3LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDE2OSwgMTcyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtLXR3LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMTBweCAxNXB4IC0zcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCA0cHggNnB4IC00cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxuLmNvZmZlZUNhcmRzOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc0LCAxODAsIDIyOSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uY2F0YWxvZ3VlQ2FyZHMge1xcbiAgbWFyZ2luOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2cmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMTA4LCAxMjcsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjA0LCAxNzYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC0tdHctc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxMHB4IDE1cHggLTNweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCA2cHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbn1cXG4uY2F0YWxvZ3VlQ2FyZHM6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDE4MiwgMjIxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLmNhdGFsb2d1ZUNhcmRzIHtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgfVxcbn1cXG4ucXVlc3Rpb25DYXJkczEge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIwNCwgMTc2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IERheXMgT25lLCBzYW5zLXNlcmlmO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxuLnF1ZXN0aW9uQ2FyZHMxOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAxODIsIDIyMSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucmVsYXRpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubS0zIHtcXG4gIG1hcmdpbjogMC43NXJlbTtcXG59XFxuLm0tNCB7XFxuICBtYXJnaW46IDFyZW07XFxufVxcbi5tLWF1dG8ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubXQtNiB7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxufVxcbi5tdC0zIHtcXG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XFxufVxcbi5tdC00IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5tdC01IHtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmgtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5oLWF1dG8ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uaC0xNCB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuLnctNFxcXFwvNiB7XFxuICB3aWR0aDogNjYuNjY2NjY3JTtcXG59XFxuLnctM1xcXFwvNSB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG4udy0zXFxcXC80IHtcXG4gIHdpZHRoOiA3NSU7XFxufVxcbi53LTIwIHtcXG4gIHdpZHRoOiA1cmVtO1xcbn1cXG4udy0yNCB7XFxuICB3aWR0aDogNnJlbTtcXG59XFxuLmN1cnNvci1wb2ludGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mbGV4LXdyYXAge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uaXRlbXMtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG4ucm91bmRlZC14bCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcbn1cXG4uYm9yZGVyLVxcXFxbXFxcXCM1OTJiMWZcXFxcXSB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDg5LCA0MywgMzEsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5iZy1saWdodGJsdWUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1hbm90aGVyR3JlZW4ge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgNjgsIDcyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy12ZXJ5TGlnaHRCbHVlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAyMjksIDIzOCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctbGlnaHRCcm93biB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjA0LCAxNzYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXdoaXRlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucC0zIHtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcbi5wLTQge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLnAtOCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG4ucHktNiB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59XFxuLnB4LTQge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvbnQtRGF5c19PbmUge1xcbiAgZm9udC1mYW1pbHk6IERheXMgT25lLCBzYW5zLXNlcmlmO1xcbn1cXG4udGV4dC0zeGwge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG4udGV4dC0yeGwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC1iYXNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcbi50cmFja2luZy10aWdodCB7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDI1ZW07XFxufVxcbi50ZXh0LWdyYXktNTAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNDksIDI1MCwgMjUxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmR1cmF0aW9uLTMwMCB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG59XFxuLmVhc2UtaW4tb3V0IHtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbn1cXG4uaG92ZXJcXFxcOi10cmFuc2xhdGUteS0xOmhvdmVyIHtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IC0wLjI1cmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcbi5ob3ZlclxcXFw6Ym9yZGVyLWItODpob3ZlciB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiA4cHg7XFxufVxcbi5ob3ZlclxcXFw6YmctXFxcXFtcXFxcI2UxYmZiNFxcXFxdOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxOTEsIDE4MCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gIC5tZFxcXFw6YmxvY2sge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5tZFxcXFw6Z3JpZC1jb2xzLVxcXFxbMWZyXzVmclxcXFxdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgfVxcblxcbiAgLm1kXFxcXDpmbGV4LXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAubWRcXFxcOmJnLVxcXFxbXFxcXCM4ZWIwYmNcXFxcXSB7XFxuICAgIC0tdHctYmctb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDIsIDE3NiwgMTg4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxuICB9XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsd1JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkO0VBQUEsd0JBQWM7RUFBZCx3QkFBYztFQUFkLG1CQUFjO0VBQWQsbUJBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxlQUFjO0VBQWQsZUFBYztFQUFkLGFBQWM7RUFBZCxhQUFjO0VBQWQsa0JBQWM7RUFBZCxzQ0FBYztFQUFkLGVBQWM7RUFBZCxvQkFBYztFQUFkLHNCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLGtCQUFjO0VBQWQsMkJBQWM7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QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFGbkI7RUFBQSwyQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBO0NDQUE7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQTtBREFBOztFQUFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUEsbUJDQUE7SURBQTtHQ0FBO0NBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5cXG5cXG5AbGF5ZXIgY29tcG9uZW50c3tcXG5cXG4uY29mZmVlQ2FyZHMge1xcbiAgICBAYXBwbHkgYmctWyNlYWE5YWNdIHctNDAgaC02MCBtLTYgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZCBzaGFkb3ctbGcgYm9yZGVyLTQgYm9yZGVyLVsjMDA2YzdmXSBmbGV4IHNocmluay0wIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBcXG4gICAgaG92ZXI6YmctWyNhZWI0ZTVdIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFxcbiAgICB9XFxuLmNhdGFsb2d1ZUNhcmRzIHtcXG4gICAgQGFwcGx5IGJnLWxpZ2h0QnJvd24gdy02MCBoLTI0IG1kOmgtNjAgbWQ6dy00MCBtLTYgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZCBzaGFkb3ctbGcgYm9yZGVyLTQgYm9yZGVyLVsjMDA2YzdmXSBmbGV4IHNocmluay0wIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBcXG4gICAgaG92ZXI6YmctWyNkM2I2ZGRdIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFxcbiAgICB9XFxuLnF1ZXN0aW9uQ2FyZHMxe1xcbiAgICBAYXBwbHkgZm9udC1EYXlzX09uZSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIHAtNCBiZy1bI2UzY2NiMF0gbS00IGhvdmVyOmJnLVsjZDNiNmRkXSBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcXG59XFxuXFxufVxcblxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNvZmZlZWJlYW4gZnJvbSBcIi4vQXNzZXRzL2NvZmZlZS1iZWFuLnBuZ1wiXG5cbmNvbnN0IGNvZmZlZUNhcmQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBjb2ZmZWUgQ2F0YWxvZ3VlXCIpXG4gICAgY29uc3QgY2F0YWxvZ3VlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2ZmZWVRdWl6Q29udGFpbmVyXCIpXG4gICAgd2hpbGUoY2F0YWxvZ3VlQ29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSl7XG4gICAgICAgIGNhdGFsb2d1ZUNvbnRhaW5lci5yZW1vdmVDaGlsZChjYXRhbG9ndWVDb250YWluZXIubGFzdENoaWxkKVxuICAgIH1cbiAgICBjYXRhbG9ndWVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJyb3VuZGVkLWxnIG1kOmJnLVsjOGViMGJjXSBjb250YWluZXIgbS1hdXRvIG10LTQgcC04IFwiKVxuICAgIGNvbnN0IGNvZmZlZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgIGNvZmZlZUhlYWRlci50ZXh0Q29udGVudCA9IFwiT3VyIENvZmZlZXNcIlxuICAgIGNvZmZlZUhlYWRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiZm9udC1EYXlzX09uZSB0ZXh0LWNlbnRlciB0ZXh0LTN4bFwiKVxuICAgIGNhdGFsb2d1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2ZmZWVIZWFkZXIpXG5cbiAgICBjb25zdCBjb2ZmZWVDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvZmZlZUNhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIiAgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTRcIilcbiAgICBjYXRhbG9ndWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29mZmVlQ2FyZENvbnRhaW5lcilcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKXtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2F0YWxvZ3VlQ2FyZHNcIilcbiAgICAgICAgY29mZmVlQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICBjb25zdCBjb2ZmZWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgY29mZmVlSW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInctMjAgaGlkZGVuIG1kOmJsb2NrXCIpXG4gICAgICAgIGNvZmZlZUltYWdlLnNyYyA9IGNvZmZlZWJlYW5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjb2ZmZWVJbWFnZSlcblxuICAgICAgICBjb25zdCBjb2ZmZWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgY29mZmVlVGV4dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiZm9udC1EYXlzX09uZSBtdC00IHB4LTRcIilcbiAgICAgICAgaWYgKGkgPT0gMCl7XG4gICAgICAgICAgICAgY29mZmVlVGV4dC50ZXh0Q29udGVudCA9IFwiQnJhemlsIElQQU5FTUEgQzM5IFRvYmFjY29cIlxuICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMSl7XG4gICAgICAgICAgICBjb2ZmZWVUZXh0LnRleHRDb250ZW50ID0gXCJCcmF6aWwgSVBBTkVNQSBCNjcgQnJvd24gU3VnYXJcIlxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09IDIpe1xuICAgICAgICAgICAgICAgIGNvZmZlZVRleHQudGV4dENvbnRlbnQgPSBcIktlbnlhIE11dGh1bnp1dW5pIFBCXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29mZmVlVGV4dClcblxuXG4gICAgfVxufVxuXG5leHBvcnQge2NvZmZlZUNhcmR9IiwiaW1wb3J0IGNvZmZlZU1hY2hpbmUgZnJvbSAnLi9Bc3NldHMvY29mZmVlLW1hY2hpbmUucG5nJ1xuaW1wb3J0IG1va2Fwb3QgZnJvbSAnLi9Bc3NldHMvbW9rYS1wb3QucG5nJ1xuaW1wb3J0IGZyZW5jaHByZXNzIGZyb20gJy4vQXNzZXRzL2ZyZW5jaC1wcmVzcy5wbmcnXG5cbmxldCBxdWVzdGlvbkFycmF5ID0gW11cblxuY29uc3QgY29mZmVlUXVpeiA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIHF1aXpcIilcbiAgICBjb25zdCBjb2ZmZWVRdWl6Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2ZmZWVRdWl6Q29udGFpbmVyXCIpO1xuICAgIFxuICAgIHdoaWxlKGNvZmZlZVF1aXpDb250YWluZXIuaGFzQ2hpbGROb2RlcygpKXtcbiAgICAgICAgY29mZmVlUXVpekNvbnRhaW5lci5yZW1vdmVDaGlsZChjb2ZmZWVRdWl6Q29udGFpbmVyLmxhc3RDaGlsZClcbiAgICB9XG4gICAgXG4gICAgY29mZmVlUXVpekNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJvdW5kZWQtbGcgbWQ6YmctWyM4ZWIwYmNdIGNvbnRhaW5lciBtLWF1dG8gbXQtNCBwLTggXCIpXG4gICAgY29uc3QgaGVhZGVydGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkZXJ0ZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJmb250LURheXNfT25lIHRleHQtY2VudGVyIG10LTUgdGV4dC1sZ1wiKTtcbiAgICBoZWFkZXJ0ZXh0LnRleHRDb250ZW50ID0gXCJIaSB0aGVyZSwgRmlyc3QgdXAsIGhvdyBkbyB5b3UgbWFrZSB5b3VyIGNvZmZlZVwiXG4gICAgY29mZmVlUXVpekNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJ0ZXh0KVxuICAgIGNvbnN0IGNvZmZlZUNhcmRzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb2ZmZWVDYXJkc1dyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIiBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiKTtcbiAgICBjb2ZmZWVRdWl6Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZUNhcmRzV3JhcHBlcilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKXtcbiAgICAgICAgY29uc3QgTmVzcHJlc3NvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBOZXNwcmVzc29Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImNvZmZlZUNhcmRzXCIpXG4gICAgICAgIGNvbnN0IG5lc3ByZXNzb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICBuZXNwcmVzc29JbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwidy0yNFwiKVxuICAgICAgICBjb25zdCBuZXNwcmVzc290ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgc3dpdGNoIChpKXtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBOZXNwcmVzc29Db250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLFwiTmVzcHJlc3NvXCIpICBcbiAgICAgICAgICAgICAgICBuZXNwcmVzc29JbWFnZS5zcmMgPSBjb2ZmZWVNYWNoaW5lXG4gICAgICAgICAgICAgICAgbmVzcHJlc3NvdGV4dC50ZXh0Q29udGVudCA9IFwiTmVzcHJlc3NvXCIgXG4gICAgICAgICAgICAgICAgTmVzcHJlc3NvQ29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtyb2FzdFByb2ZpbGVRbigpLHB1c2hRdWVzdGlvbihuZXNwcmVzc290ZXh0LnRleHRDb250ZW50KX0gXG4gICAgICAgICAgICAgICAgYnJlYWsgXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgTmVzcHJlc3NvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIixcIk1va2FQb3RcIikgIFxuICAgICAgICAgICAgICAgIG5lc3ByZXNzb0ltYWdlLnNyYyA9IG1va2Fwb3RcbiAgICAgICAgICAgICAgICBuZXNwcmVzc290ZXh0LnRleHRDb250ZW50ID0gXCJNb2thcG90XCJcbiAgICAgICAgICAgICAgICBOZXNwcmVzc29Db250YWluZXIub25jbGljayA9IGZ1bmN0aW9uKCkge3JvYXN0UHJvZmlsZVFuKCkscHVzaFF1ZXN0aW9uKG5lc3ByZXNzb3RleHQudGV4dENvbnRlbnQpfSBcbiAgICAgICAgICAgICAgICBicmVhayAgXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgTmVzcHJlc3NvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIixcIkZyZW5jaFByZXNzXCIpICBcbiAgICAgICAgICAgICAgICBuZXNwcmVzc29JbWFnZS5zcmMgPSBmcmVuY2hwcmVzc1xuICAgICAgICAgICAgICAgIG5lc3ByZXNzb3RleHQudGV4dENvbnRlbnQgPSBcIkZyZW5jaHByZXNzXCIgXG4gICAgICAgICAgICAgICAgTmVzcHJlc3NvQ29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtyb2FzdFByb2ZpbGVRbigpLHB1c2hRdWVzdGlvbihuZXNwcmVzc290ZXh0LnRleHRDb250ZW50KX0gXG4gICAgICAgICAgICAgICAgYnJlYWsgICBcbiAgICAgICAgfVxuICAgICAgICBjb2ZmZWVDYXJkc1dyYXBwZXIuYXBwZW5kQ2hpbGQoTmVzcHJlc3NvQ29udGFpbmVyKVxuICAgICAgICBOZXNwcmVzc29Db250YWluZXIuYXBwZW5kQ2hpbGQobmVzcHJlc3NvSW1hZ2UpXG4gICAgICAgIG5lc3ByZXNzb3RleHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImZvbnQtRGF5c19PbmUgbXQtNFwiKTtcbiAgICAgICAgTmVzcHJlc3NvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5lc3ByZXNzb3RleHQpXG4gICAgfVxuXG59IFxuXG5jb25zdCBwdXNoUXVlc3Rpb24gPSBjYXJkID0+IHtcbiAgICAvL2NvbnN0IGFuc09uZSA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcbiAgICBxdWVzdGlvbkFycmF5LnB1c2goY2FyZClcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbkFycmF5KVxufVxuXG5jb25zdCByb2FzdFByb2ZpbGVRbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb2ZmZWVRdWl6Q29udGFpbmVyKVxuICAgIHdoaWxlKGNvZmZlZVF1aXpDb250YWluZXIuaGFzQ2hpbGROb2RlcygpKXtcbiAgICAgICAgY29mZmVlUXVpekNvbnRhaW5lci5yZW1vdmVDaGlsZChjb2ZmZWVRdWl6Q29udGFpbmVyLmxhc3RDaGlsZClcbiAgICB9XG4gICAgY29uc3QgaGVhZGVydGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGVydGV4dDIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImZvbnQtRGF5c19PbmUgdGV4dC1jZW50ZXIgbXQtNSB0ZXh0LWxnXCIpO1xuICAgIGhlYWRlcnRleHQyLnRleHRDb250ZW50ID0gXCJJbiBvcmRlciBmb3IgdXMgdG8gcmVjb21tZW5kIGEgY29mZmVlIG1vc3Qgc3VpdGVkIHRvIHlvdSwgd2Ugd2lsbCBuZWVkIHRvIHVuZGVyc3RhbmQgYSBsaXR0bGUgYWJvdXQgeW91ciBzZW5zb3J5IHBhbGF0ZS4gU28gd2hpY2ggb2YgdGhlc2UgZG8geW91IGxpa2U/XCJcbiAgICBjb2ZmZWVRdWl6Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcnRleHQyKVxuICAgIGNvbnN0IGNvZmZlZUNhcmRzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb2ZmZWVDYXJkc1dyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIiBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiKTtcbiAgICBjb2ZmZWVRdWl6Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZUNhcmRzV3JhcHBlcilcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICAgY29uc3Qgc2Vjb25kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBzZWNvbmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInF1ZXN0aW9uQ2FyZHMxXCIpO1xuICAgICAgICBzZWNvbmRDb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uKCl7cm9hc3RQcm9maWxlQW5zKCl9XG4gICAgICAgIGlmIChpID09IDApe1xuICAgICAgICAgICAgc2Vjb25kQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJCZXJyaWVzXCJcbiAgICAgICAgICAgIHNlY29uZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsXCJCZXJyaWVzXCIpXG4gICAgICAgICAgICBzZWNvbmRDb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uKCkge3B1c2hRdWVzdGlvbihzZWNvbmRDb250YWluZXIudGV4dENvbnRlbnQpLHJvYXN0UHJvZmlsZUFucygpfSBcbiAgICAgICB9IGVsc2UgaWYgKGkgPT0gMSl7XG4gICAgICAgICAgICBzZWNvbmRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkNhcmFtZWxcIlxuICAgICAgICAgICAgc2Vjb25kQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIixcIkNhcmFtZWxcIilcbiAgICAgICAgICAgIHNlY29uZENvbnRhaW5lci5vbmNsaWNrID0gZnVuY3Rpb24oKSB7cHVzaFF1ZXN0aW9uKHNlY29uZENvbnRhaW5lci50ZXh0Q29udGVudCkscm9hc3RQcm9maWxlQW5zKCl9IFxuICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMil7XG4gICAgICAgICAgICBzZWNvbmRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkNob2NvbGF0ZVwiXG4gICAgICAgICAgICBzZWNvbmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLFwiQ2hvY29sYXRlXCIpXG4gICAgICAgICAgICBzZWNvbmRDb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uKCkge3B1c2hRdWVzdGlvbihzZWNvbmRDb250YWluZXIudGV4dENvbnRlbnQpLHJvYXN0UHJvZmlsZUFucygpfSBcbiAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSAzKXtcbiAgICAgICAgICAgICAgICBzZWNvbmRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkNpdHJ1cyBMZW1vbnNcIlxuICAgICAgICAgICAgICAgIHNlY29uZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsXCJDaXRydXMgTGVtb25zXCIpXG4gICAgICAgICAgICAgICAgc2Vjb25kQ29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtwdXNoUXVlc3Rpb24oc2Vjb25kQ29udGFpbmVyLnRleHRDb250ZW50KSxyb2FzdFByb2ZpbGVBbnMoKX0gXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiRWRpYmxlIEZsb3dlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIixcIkVkaWJsZSBGbG93ZXJzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRDb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uKCkge3B1c2hRdWVzdGlvbihzZWNvbmRDb250YWluZXIudGV4dENvbnRlbnQpLHJvYXN0UHJvZmlsZUFucygpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpID09IDUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiU3RvbmUgRnJ1aXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLFwiU3RvbmUgRnJ1aXRzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kQ29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtwdXNoUXVlc3Rpb24oc2Vjb25kQ29udGFpbmVyLnRleHRDb250ZW50KSxyb2FzdFByb2ZpbGVBbnMoKX0gXG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2ZmZWVDYXJkc1dyYXBwZXIuYXBwZW5kQ2hpbGQoc2Vjb25kQ29udGFpbmVyKSAgICAgICAgXG4gICAgfVxufVxuXG5jb25zdCByb2FzdFByb2ZpbGVBbnMgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBbnN3ZXIgVGltZVwiKVxuICAgIHdoaWxlKGNvZmZlZVF1aXpDb250YWluZXIuaGFzQ2hpbGROb2RlcygpKXtcbiAgICAgICAgY29mZmVlUXVpekNvbnRhaW5lci5yZW1vdmVDaGlsZChjb2ZmZWVRdWl6Q29udGFpbmVyLmxhc3RDaGlsZClcbiAgICB9XG4gICAgY29uc3QgcHJvZmlsZUFuc1Rlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9maWxlQW5zVGVzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiZm9udC1EYXlzX09uZSB0ZXh0LWNlbnRlciBtdC01IHRleHQtbGdcIik7XG4gICAgcHJvZmlsZUFuc1Rlc3QudGV4dENvbnRlbnQgPSBcIlRoZSBCcmF6aWwgSVBBTkVNQSBCNjcgQnJvd24gU3VnYXIgaXMgbW9zdCBzdWl0ZWQgZm9yIHlvdVwiXG4gICAgY29mZmVlUXVpekNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9maWxlQW5zVGVzdClcbn1cblxuXG5leHBvcnR7Y29mZmVlUXVpeiwgcm9hc3RQcm9maWxlUW4sIHJvYXN0UHJvZmlsZUFuc30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnNvbGUubG9nKFwicnVubmluZyAyIGluZGV4LmpzXCIpXG5pbXBvcnQgICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQge2NvZmZlZVF1aXosIHJvYXN0UHJvZmlsZVFuLCByb2FzdFByb2ZpbGVBbnN9IGZyb20gJy4vbW9kdWxlQ29mZmVlUXVpei5qcydcbmltcG9ydCB7Y29mZmVlQ2FyZH0gZnJvbSAnLi9tb2R1bGVDb2ZmZWVDYXRhb2xndWUuanMnXG5cblxuXG5jb25zdCBtYWluID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcInJ1bm5pbmdcIilcbiAgICBjb25zdCBjb2ZmZWVRdWl6ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aXpcIilcbiAgICBjb2ZmZWVRdWl6ZXIub25jbGljayA9IGZ1bmN0aW9uKCkge2NvZmZlZVF1aXooKX1cbiAgICBjb25zdCBjb2ZmZWVDYXRhb2xndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jyb3dzZUNvZmZlZXNcIilcbiAgICBjb2ZmZWVDYXRhb2xndWUub25jbGljayA9IGZ1bmN0aW9uKCl7Y29mZmVlQ2FyZCgpfVxuXG4gIC8vICBjb25zdCBuZXNwcmVzc29jYXJkUW4gPSAoKSA9PntcbiAgLy8gICAgICBjb25zb2xlLmxvZyhcInF1ZXN0aW9uP1wiKVxuIC8vICAgICAgIGNvbnN0IG5lc3ByZXNzb2NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvZmZlZUNhcmRzXCIpXG4gIC8vICAgICAgbmVzcHJlc3NvY2FyZC5mb3JFYWNoKGNhcmQgPT4gY2FyZC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7cm9hc3RQcm9maWxlUW4oKSxwdXNoUXVlc3Rpb24oY2FyZCl9KSBcbiAgLy8gIH1cblxuICAgIFxuXG4gICAgXG4gICAgXG59XG5cblxubWFpbigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=