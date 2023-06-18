/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/close__burger.js":
/*!****************************************!*\
  !*** ./src/assets/js/close__burger.js ***!
  \****************************************/
/***/ (function() {

eval("\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/close__burger.js?");

/***/ }),

/***/ "./src/assets/js/menu__scroll.js":
/*!***************************************!*\
  !*** ./src/assets/js/menu__scroll.js ***!
  \***************************************/
/***/ (function() {

eval("// Прокрут к блоку с каталогом\r\nconst anchorsCat = document.querySelectorAll('a[href*=\"#catalog\"]')\r\n\r\nfor (let anchorCat of anchorsCat) {\r\n    anchorCat.addEventListener('click', function (eCat) {\r\n        eCat.preventDefault()\r\n\r\n        const blockIDCat = anchorCat.getAttribute('href').substr(1)\r\n\r\n        document.getElementById(blockIDCat).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n    })\r\n}\r\n\r\n// Прокрут к блоку с информацией\r\nconst anchorsAbout = document.querySelectorAll('a[href*=\"#about\"]')\r\n\r\nfor (let anchorAbout of anchorsAbout) {\r\n    anchorAbout.addEventListener('click', function (eAbout) {\r\n        eAbout.preventDefault()\r\n\r\n        const blockIDAbout = anchorAbout.getAttribute('href').substr(1)\r\n\r\n        document.getElementById(blockIDAbout).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n    })\r\n}\r\n// Прокрут к блоку с контактами\r\nconst anchorsCont = document.querySelectorAll('a[href*=\"#contact\"]')\r\n\r\nfor (let anchorCont of anchorsCont) {\r\n    anchorCont.addEventListener('click', function (eCont) {\r\n        eCont.preventDefault()\r\n\r\n        const blockIDCont = anchorCont.getAttribute('href').substr(1)\r\n\r\n        document.getElementById(blockIDCont).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n    })\r\n}\r\n// Прокрут к блоку с рекомендациями\r\nconst anchorsRec = document.querySelectorAll('a[href*=\"#recommendations\"]')\r\n\r\nfor (let anchorRec of anchorsRec) {\r\n    anchorRec.addEventListener('click', function (eRec) {\r\n        eRec.preventDefault()\r\n\r\n        const blockIDRec = anchorRec.getAttribute('href').substr(1)\r\n\r\n        document.getElementById(blockIDRec).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/menu__scroll.js?");

/***/ }),

/***/ "./src/assets/js/scroll__up.js":
/*!*************************************!*\
  !*** ./src/assets/js/scroll__up.js ***!
  \*************************************/
/***/ (function() {

eval("const btnUp = {\r\n    el: document.querySelector('.btn-up'),\r\n    show() {\r\n        // удалим у кнопки класс btn-up_hide\r\n        this.el.classList.remove('btn-up_hide');\r\n    },\r\n    hide() {\r\n        // добавим к кнопке класс btn-up_hide\r\n        this.el.classList.add('btn-up_hide');\r\n    },\r\n    addEventListener() {\r\n        // при прокрутке содержимого страницы\r\n        window.addEventListener('scroll', () => {\r\n            // определяем величину прокрутки\r\n            const scrollY = window.scrollY || document.documentElement.scrollTop;\r\n            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем\r\n            scrollY > 400 ? this.show() : this.hide();\r\n        });\r\n        // при нажатии на кнопку .btn-up\r\n        document.querySelector('.btn-up').onclick = () => {\r\n            // переместим в начало страницы\r\n            window.scrollTo({\r\n                top: 0,\r\n                left: 0,\r\n                behavior: 'smooth'\r\n            });\r\n        }\r\n    }\r\n}\r\n\r\nbtnUp.addEventListener();\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/scroll__up.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/close__burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/menu__scroll.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/scroll__up.js"]();
/******/ 	
/******/ })()
;