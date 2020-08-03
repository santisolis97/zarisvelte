/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/service-worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/node_modules/@sapper/service-worker.js":
/*!****************************************************!*\
  !*** ./src/node_modules/@sapper/service-worker.js ***!
  \****************************************************/
/*! exports provided: timestamp, files, assets, shell, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timestamp\", function() { return timestamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"files\", function() { return files; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assets\", function() { return files; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shell\", function() { return shell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n// This file is generated by Sapper — do not edit it!\nconst timestamp = 1596463849924;\n\nconst files = [\n\t\"service-worker-index.html\",\n\t\".DS_Store\",\n\t\"assets/.DS_Store\",\n\t\"assets/Images/.DS_Store\",\n\t\"assets/Images/Logos/.DS_Store\",\n\t\"assets/Images/Logos/logo.png\",\n\t\"assets/Images/Logos/logo3.png\",\n\t\"assets/Images/about/.DS_Store\",\n\t\"assets/Images/about/ale.png\",\n\t\"assets/Images/about/download.png\",\n\t\"assets/Images/about/espacio.jpg\",\n\t\"assets/Images/about/estefi.png\",\n\t\"assets/Images/portabebes/.DS_Store\",\n\t\"assets/Images/portabebes/OSAD/1.jpg\",\n\t\"assets/Images/portabebes/OSAD/2.jpg\",\n\t\"assets/Images/portabebes/OSAD/3.jpg\",\n\t\"assets/Images/portabebes/OSAD/4.jpg\",\n\t\"assets/Images/portabebes/OSAD/5.jpg\",\n\t\"assets/Images/portabebes/OSAD/6.jpg\",\n\t\"assets/Images/portabebes/OSAD/7.jpg\",\n\t\"assets/Images/portabebes/OSAD/8.jpg\",\n\t\"assets/Images/portabebes/OSAD/9.jpg\",\n\t\"assets/Images/portabebes/bandolera/1.jpg\",\n\t\"assets/Images/portabebes/bandolera/2.jpg\",\n\t\"assets/Images/portabebes/fularel/1.jpg\",\n\t\"assets/Images/portabebes/fularel/2.jpg\",\n\t\"assets/Images/portabebes/fularel/3.jpg\",\n\t\"assets/Images/portabebes/fularel/4.jpg\",\n\t\"assets/Images/portabebes/fularpa/1.jpg\",\n\t\"assets/Images/portabebes/fularpa/2.jpg\",\n\t\"assets/Images/portabebes/fularpa/3.jpg\",\n\t\"assets/Images/portabebes/fularpa/4.jpg\",\n\t\"assets/Images/portabebes/fularse/1.jpg\",\n\t\"assets/Images/portabebes/fularse/2.jpg\",\n\t\"assets/Images/portabebes/fularse/3.jpg\",\n\t\"assets/Images/portabebes/fularse/4.jpg\",\n\t\"assets/Images/portabebes/fularse/5.jpg\",\n\t\"assets/Images/portabebes/fularse/6.jpg\",\n\t\"assets/Images/portabebes/meitai/1.jpg\",\n\t\"assets/Images/portabebes/meitai/2.jpg\",\n\t\"assets/Images/portabebes/meitai/3.jpg\",\n\t\"assets/Images/portabebes/meitai/4.jpg\",\n\t\"assets/Images/portabebes/meitai/5.jpg\",\n\t\"assets/Images/portabebes/mochilaergonomica/.DS_Store\",\n\t\"assets/Images/portabebes/mochilaergonomica/1.jpg\",\n\t\"assets/Images/portabebes/mochilaergonomica/2.jpg\",\n\t\"assets/Images/portabebes/mochilaergonomica/3.jpg\",\n\t\"assets/Images/portabebes/mochilaergonomica/4.jpg\",\n\t\"assets/Images/portabebes/mochilaergonomica/5.jpg\",\n\t\"assets/Images/portabebes/mochilaergonomica/6.jpg\",\n\t\"assets/Images/portabebes/mochilaergonomica/7.png\",\n\t\"assets/Images/portabebes/mochilaextensible/1.jpg\",\n\t\"assets/Images/portabebes/mochilaextensible/2.jpg\",\n\t\"assets/Images/portabebes/mochilaextensible/3.jpg\",\n\t\"assets/Images/portabebes/mochilaextensible/4.jpg\",\n\t\"assets/Images/portabebes/mochilaextensible/5.jpg\",\n\t\"assets/Images/portabebes/mochilaextensible/6.jpg\",\n\t\"assets/Images/portabebes/mochilaextensible/7.jpg\",\n\t\"assets/Images/portabebes/pouch/.DS_Store\",\n\t\"assets/Images/portabebes/pouch/1.jpg\",\n\t\"assets/Images/portabebes/pouch/2.jpg\",\n\t\"assets/Images/portabebes/pouch/3.jpg\",\n\t\"assets/Images/portabebes/pouch/4.png\",\n\t\"assets/Images/portada.png\",\n\t\"assets/fonts/Alleyn W01 Bold.ttf\",\n\t\"assets/fonts/Alleyn W01 Medium.ttf\",\n\t\"assets/fonts/CartoonScript.ttf\",\n\t\"assets/fonts/Cartoon_Regular.ttf\",\n\t\"assets/fonts/GOODDC__.TTF\",\n\t\"assets/fonts/GOODDP__.TTF\",\n\t\"assets/fonts/Lifeisgoofy.ttf\",\n\t\"favicon.png\",\n\t\"global.css\",\n\t\"manifest.json\"\n];\n // legacy\n\nconst shell = [\n\t\"client/65aab4462c6858f19412/0.0.js\",\n\t\"client/65aab4462c6858f19412/about.about.js\",\n\t\"client/65aab4462c6858f19412/index.index.js\",\n\t\"client/65aab4462c6858f19412/main.js\",\n\t\"client/65aab4462c6858f19412/portabebes.portabebes.js\",\n\t\"client/65aab4462c6858f19412/portabebes_$id.portabebes_$id.js\",\n\t\"client/65aab4462c6858f19412/portabebes~portabebes_$id.portabebes~portabebes_$id.js\"\n];\n\nconst routes = [\n\t{ pattern: /^\\/$/ },\n\t{ pattern: /^\\/portabebes\\/?$/ },\n\t{ pattern: /^\\/portabebes\\/([^\\/]+?)\\/?$/ },\n\t{ pattern: /^\\/about\\/?$/ }\n];\n\n//# sourceURL=webpack:///./src/node_modules/@sapper/service-worker.js?");

/***/ }),

/***/ "./src/service-worker.js":
/*!*******************************!*\
  !*** ./src/service-worker.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sapper/service-worker */ \"./src/node_modules/@sapper/service-worker.js\");\n\n\nconst ASSETS = `cache${_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"timestamp\"]}`;\n\n// `shell` is an array of all the files generated by the bundler,\n// `files` is an array of everything in the `static` directory\nconst to_cache = _sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"shell\"].concat(_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"files\"]);\nconst cached = new Set(to_cache);\n\nself.addEventListener('install', (event) => {\n    event.waitUntil(\n        caches\n            .open(ASSETS)\n            .then((cache) => cache.addAll(to_cache))\n            .then(() => {\n                self.skipWaiting();\n            })\n    );\n});\n\nself.addEventListener('activate', (event) => {\n    event.waitUntil(\n        caches.keys().then(async (keys) => {\n            // delete old caches\n            for (const key of keys) {\n                if (key !== ASSETS) await caches.delete(key);\n            }\n\n            self.clients.claim();\n        })\n    );\n});\n\nself.addEventListener('fetch', (event) => {\n    if (event.request.method !== 'GET' || event.request.headers.has('range')) return;\n\n    const url = new URL(event.request.url);\n\n    // don't try to handle e.g. data: URIs\n    if (!url.protocol.startsWith('http')) return;\n\n    // ignore dev server requests\n    if (url.hostname === self.location.hostname && url.port !== self.location.port) return;\n\n    // always serve static files and bundler-generated assets from cache\n    if (url.host === self.location.host && cached.has(url.pathname)) {\n        event.respondWith(caches.match(event.request));\n        return;\n    }\n\n    // for pages, you might want to serve a shell `service-worker-index.html` file,\n    // which Sapper has generated for you. It's not right for every\n    // app, but if it's right for yours then uncomment this section\n    /*\n\tif (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {\n\t\tevent.respondWith(caches.match('/service-worker-index.html'));\n\t\treturn;\n\t}\n\t*/\n\n    if (event.request.cache === 'only-if-cached') return;\n\n    // for everything else, try the network first, falling back to\n    // cache if the user is offline. (If the pages never change, you\n    // might prefer a cache-first approach to a network-first one.)\n    event.respondWith(\n        caches.open(`offline${_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"timestamp\"]}`).then(async (cache) => {\n            try {\n                const response = await fetch(event.request);\n                cache.put(event.request, response.clone());\n                return response;\n            } catch (err) {\n                const response = await cache.match(event.request);\n                if (response) return response;\n\n                throw err;\n            }\n        })\n    );\n});\n\n\n//# sourceURL=webpack:///./src/service-worker.js?");

/***/ })

/******/ });