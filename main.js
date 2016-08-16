/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	window.REM_UNIT = 75; // NEED CONFIG IN EACH PROJECT
	window.CDN_URL = __webpack_require__(2);
	
	console.log(window.REM_UNIT, window.devicePixelRatio);
	
	addEventListener('DOMContentLoaded', function () {
	
	  var opt = __webpack_require__(3);
	  var app = new Vue(opt).$mount('#app');
	
	  window.app = app;
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"choose.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAYAAAB1h9JkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4M0UxMTA0NTlCNDExRTZCN0Q4QUEyRTg5NzMwNjg0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4M0UxMTA1NTlCNDExRTZCN0Q4QUEyRTg5NzMwNjg0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTgzRTExMDI1OUI0MTFFNkI3RDhBQTJFODk3MzA2ODQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTgzRTExMDM1OUI0MTFFNkI3RDhBQTJFODk3MzA2ODQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6l+iwrAAAYR0lEQVR42uxdaVBU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"
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(4)
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-63700571/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  color: #4e4e4e;\n}", "", {"version":3,"sources":["/./<input css 1>"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,WAAW;EACX,eAAe;CAChB","file":"main.vue","sourcesContent":["body {\n  margin: 0;\n  padding: 0;\n  color: #4e4e4e;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  components: {
	    'introduce': __webpack_require__(9),
	    'content': __webpack_require__(14)
	  },
	  data: {},
	  computed: {},
	  methods: {},
	  created: function created() {},
	  ready: function ready() {
	    this.$refs.introduce.onload();
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/introduce.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-763db353/introduce.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-763db353&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./introduce.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-763db353&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./introduce.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "#introduce[_v-763db353] {\n  position: relative;\n  width: 100%;\n}\n\n#introduce p[_v-763db353] {\n  position: relative;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n}\n\n#title[_v-763db353] {\n  font-family: Comic Sans MS;\n  margin-top: 10%;\n  top: 0.4rem;\n  -webkit-transition: opacity 2.4s, top 2.4s;\n}\n\n[data-dpr=\"1\"] #title[_v-763db353] {\n  font-size: 25px;\n}\n\n[data-dpr=\"2\"] #title[_v-763db353] {\n  font-size: 50px;\n}\n\n[data-dpr=\"3\"] #title[_v-763db353] {\n  font-size: 75px;\n}\n\n#word[_v-763db353] {\n  margin-top: 0.8rem;\n  top: 0.4rem;\n  -webkit-transition: opacity 2s, top 2s;\n}\n\n[data-dpr=\"1\"] #word[_v-763db353] {\n  font-size: 20px;\n}\n\n[data-dpr=\"2\"] #word[_v-763db353] {\n  font-size: 40px;\n}\n\n[data-dpr=\"3\"] #word[_v-763db353] {\n  font-size: 60px;\n}", "", {"version":3,"sources":["/./<input css 3>"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,WAAW;CACZ;;AAED;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,YAAY;EACZ,2CAA2C;CAC5C;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,uCAAuC;CACxC;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,gBAAgB;CACjB","file":"introduce.vue","sourcesContent":["#introduce {\n  position: relative;\n  width: 100%;\n}\n\n#introduce p {\n  position: relative;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n}\n\n#title {\n  font-family: Comic Sans MS;\n  margin-top: 10%;\n  top: 0.4rem;\n  -webkit-transition: opacity 2.4s, top 2.4s;\n}\n\n[data-dpr=\"1\"] #title {\n  font-size: 25px;\n}\n\n[data-dpr=\"2\"] #title {\n  font-size: 50px;\n}\n\n[data-dpr=\"3\"] #title {\n  font-size: 75px;\n}\n\n#word {\n  margin-top: 0.8rem;\n  top: 0.4rem;\n  -webkit-transition: opacity 2s, top 2s;\n}\n\n[data-dpr=\"1\"] #word {\n  font-size: 20px;\n}\n\n[data-dpr=\"2\"] #word {\n  font-size: 40px;\n}\n\n[data-dpr=\"3\"] #word {\n  font-size: 60px;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	    props: [''],
	    components: {},
	    data: function data() {
	        return {
	            classA: {},
	            classB: {}
	        };
	    },
	    methods: {
	        onload: function onload() {
	            var that = this;
	            setTimeout(function () {
	                that.classA = {
	                    opacity: "1",
	                    top: "0px"
	                };
	            }, 10);
	            setTimeout(function () {
	                that.classB = that.classA;
	            }, 2000);
	        }
	    },
	    ready: function ready() {}
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"introduce\" _v-763db353=\"\">\n    <p id=\"title\" :style=\"classA\" _v-763db353=\"\">ali-village</p>\n    <p id=\"word\" :style=\"classB\" _v-763db353=\"\">欢迎来到阿里乡</p>\n</div>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(15)
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/content.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3e518ea6/content.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3e518ea6&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./content.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3e518ea6&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./content.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "#content[_v-3e518ea6] {\n  position: relative;\n}\n\n.tip[_v-3e518ea6] {\n  width: 50%;\n  position: relative;\n  display: inline-block;\n  margin-top: 1.333333rem;\n}\n\n.choose[_v-3e518ea6] {\n  position: absolute;\n  width: 1.84rem;\n  height: 1.84rem;\n  border: 0.013333rem solid #000;\n  margin-left: 50%;\n  left: -0.933333rem;\n  background-image: url(" + __webpack_require__(17) + ");\n  background-size: 100%;\n  z-index: 1;\n  opacity: 0;\n}\n\n.tipImg[_v-3e518ea6] {\n  position: relative;\n  width: 1.333333rem;\n  height: 1.333333rem;\n  background-size: 100%;\n  border-width: 0.266667rem;\n  border-style: solid;\n  border-radius: 0.933333rem;\n  margin: auto;\n  top: 0;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  -webkit-animation: ani1 10s;\n}\n\n.tipTitle[_v-3e518ea6] {\n  position: relative;\n  width: 100%;\n  text-align: center;\n  margin-top: 0.266667rem;\n}\n\n[data-dpr=\"1\"] .tipTitle[_v-3e518ea6] {\n  font-size: 18px;\n}\n\n[data-dpr=\"2\"] .tipTitle[_v-3e518ea6] {\n  font-size: 36px;\n}\n\n[data-dpr=\"3\"] .tipTitle[_v-3e518ea6] {\n  font-size: 54px;\n}\n\n@-webkit-keyframes ani1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  15% {\n    -webkit-transform: rotate(105deg);\n            transform: rotate(105deg);\n  }\n\n  45% {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n\n  60% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n}", "", {"version":3,"sources":["/./<input css 2>"],"names":[],"mappings":"AAAA;EACE,mBAAmB;CACpB;;AAED;EACE,WAAW;EACX,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;CACzB;;AAED;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,+BAA+B;EAC/B,iBAAiB;EACjB,mBAAmB;EACnB,gDAA4C;EAC5C,sBAAsB;EACtB,WAAW;EACX,WAAW;CACZ;;AAED;EACE,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;EACtB,0BAA0B;EAC1B,oBAAoB;EACpB,2BAA2B;EAC3B,aAAa;EACb,OAAO;EACP,gCAAwB;UAAxB,wBAAwB;EACxB,4BAA4B;CAC7B;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;CACzB;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE;IACE,gCAAwB;YAAxB,wBAAwB;GACzB;;EAED;IACE,kCAA0B;YAA1B,0BAA0B;GAC3B;;EAED;IACE,kCAA0B;YAA1B,0BAA0B;GAC3B;;EAED;IACE,kCAA0B;YAA1B,0BAA0B;GAC3B;CACF","file":"content.vue","sourcesContent":["#content {\n  position: relative;\n}\n\n.tip {\n  width: 50%;\n  position: relative;\n  display: inline-block;\n  margin-top: 1.333333rem;\n}\n\n.choose {\n  position: absolute;\n  width: 1.84rem;\n  height: 1.84rem;\n  border: 0.013333rem solid #000;\n  margin-left: 50%;\n  left: -0.933333rem;\n  background-image: url(../images/choose.png);\n  background-size: 100%;\n  z-index: 1;\n  opacity: 0;\n}\n\n.tipImg {\n  position: relative;\n  width: 1.333333rem;\n  height: 1.333333rem;\n  background-size: 100%;\n  border-width: 0.266667rem;\n  border-style: solid;\n  border-radius: 0.933333rem;\n  margin: auto;\n  top: 0;\n  transform: rotate(0deg);\n  -webkit-animation: ani1 10s;\n}\n\n.tipTitle {\n  position: relative;\n  width: 100%;\n  text-align: center;\n  margin-top: 0.266667rem;\n}\n\n[data-dpr=\"1\"] .tipTitle {\n  font-size: 18px;\n}\n\n[data-dpr=\"2\"] .tipTitle {\n  font-size: 36px;\n}\n\n[data-dpr=\"3\"] .tipTitle {\n  font-size: 54px;\n}\n\n@-webkit-keyframes ani1 {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  15% {\n    transform: rotate(105deg);\n  }\n\n  45% {\n    transform: rotate(-90deg);\n  }\n\n  60% {\n    transform: rotate(180deg);\n  }\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = (function () {
	  var url = window.CDN_URL["choose.png"];
	  return /data:image\/.*;base64/.test(url) ? url : lib.img({q: ["q90", "q75"], sharpen: "s150"}).getNewUrl(url);
	}) ();

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	    props: [''],
	    components: {},
	    data: function data() {
	        return {
	            items: [{
	                imgUrl: "url(../images/literature.png)",
	                borderColor: "#feaa90",
	                title: "文艺",
	                index: 1
	            }, {
	                imgUrl: "url(../images/sport.png)",
	                borderColor: "#f08d70",
	                title: "运动",
	                index: 2
	            }, {
	                imgUrl: "url(../images/interest.png)",
	                borderColor: "#84d3b6",
	                title: "趣味",
	                index: 3
	            }, {
	                imgUrl: "url(../images/outdoors.png)",
	                borderColor: "#73ccac",
	                title: "户外",
	                index: 4
	            }, {
	                imgUrl: "url(../images/life.png)",
	                borderColor: "#00afa8",
	                title: "生活",
	                index: 5
	            }, {
	                imgUrl: "url(../images/science.png)",
	                borderColor: "#019e95",
	                title: "科普",
	                index: 6
	            }],
	
	            chooseFlag: [1, 1, 1, 1, 1, 1]
	        };
	    },
	    methods: {
	        chooseOk: function chooseOk(e) {
	            var that = this;
	            var target = e.target;
	            var index = target.getAttribute("s");
	            if (that.chooseFlag[index - 1] % 2 != 0) {
	                target.style.opacity = "1";
	            } else {
	                target.style.opacity = "0";
	            }
	            that.chooseFlag[index - 1]++;
	        }
	    },
	    ready: function ready() {}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"content\" _v-3e518ea6=\"\">\n        <div class=\"tip\" v-for=\"item in items\" _v-3e518ea6=\"\">\n            <div class=\"choose\" @click=\"chooseOk\" :s=\"item.index\" _v-3e518ea6=\"\"></div>\n            <div class=\"tipImg\" :style=\"{backgroundImage:item.imgUrl, borderColor: item.borderColor}\" _v-3e518ea6=\"\"></div>\n            <div class=\"tipTitle\" _v-3e518ea6=\"\">{{item.title}}</div>\n        </div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n<introduce v-ref:introduce></introduce>\n<content v-ref:content></content>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map