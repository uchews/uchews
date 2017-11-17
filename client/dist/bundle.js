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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _home = __webpack_require__(/*! ./components/home.jsx */ 1);\n\nvar _home2 = _interopRequireDefault(_home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_React$Component) {\n  _inherits(Index, _React$Component);\n\n  function Index(props) {\n    _classCallCheck(this, Index);\n\n    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));\n\n    _this.state = {\n      appView: 'home'\n    };\n    _this.clickHandle = _this.clickHandle.bind(_this);\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: 'clickHandle',\n    value: function clickHandle(view) {\n      this.setState({\n        appView: view\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.state.appView === 'home') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'h1',\n            null,\n            'uChews'\n          ),\n          React.createElement(_home2.default, { appView: this.state.appView, clickHandle: this.clickHandle })\n        );\n      } else if (this.state.appView === 'login') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'h1',\n            null,\n            'uChews'\n          ),\n          React.createElement(Login, { appView: this.state.appView, clickHandle: this.clickHandle })\n        );\n      } else if (this.state.appView === 'input') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'h1',\n            null,\n            'uChews'\n          ),\n          React.createElement(Input, { appView: this.state.appView, clickHandle: this.clickHandle })\n        );\n      } else if (this.state.appView === 'types') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'h1',\n            null,\n            'uChews'\n          ),\n          React.createElement(Types, { appView: this.state.appView, clickHandle: this.clickHandle })\n        );\n      } else if (this.state.appView === 'waiting') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'h1',\n            null,\n            'uChews'\n          ),\n          React.createElement(Waiting, { appView: this.state.appView, clickHandle: this.clickHandle })\n        );\n      } else if (this.state.appView === 'results') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'h1',\n            null,\n            'uChews'\n          ),\n          React.createElement(Results, { appView: this.state.appView, clickHandle: this.clickHandle })\n        );\n      } else if (this.state.appView === 'signup') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'h1',\n            null,\n            'uChews'\n          ),\n          React.createElement(Signup, { appView: this.state.appView, clickHandle: this.clickHandle })\n        );\n      }\n    }\n  }]);\n\n  return Index;\n}(React.Component);\n\nReactDOM.render(React.createElement(Index, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2luZGV4LmpzP2MzZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUuanN4JztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlPSB7XG4gICAgICBhcHBWaWV3OiAnaG9tZSdcbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGUgPSB0aGlzLmNsaWNrSGFuZGxlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbGlja0hhbmRsZSh2aWV3KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhcHBWaWV3OiB2aWV3XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYXBwVmlldyA9PT0gJ2hvbWUnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT51Q2hld3M8L2gxPlxuICAgICAgICAgIDxIb21lIGFwcFZpZXc9e3RoaXMuc3RhdGUuYXBwVmlld30gY2xpY2tIYW5kbGU9e3RoaXMuY2xpY2tIYW5kbGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmFwcFZpZXcgPT09ICdsb2dpbicpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPnVDaGV3czwvaDE+XG4gICAgICAgICAgPExvZ2luIGFwcFZpZXc9e3RoaXMuc3RhdGUuYXBwVmlld30gY2xpY2tIYW5kbGU9e3RoaXMuY2xpY2tIYW5kbGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmFwcFZpZXcgPT09ICdpbnB1dCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPnVDaGV3czwvaDE+XG4gICAgICAgICAgPElucHV0IGFwcFZpZXc9e3RoaXMuc3RhdGUuYXBwVmlld30gY2xpY2tIYW5kbGU9e3RoaXMuY2xpY2tIYW5kbGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmFwcFZpZXcgPT09ICd0eXBlcycpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPnVDaGV3czwvaDE+XG4gICAgICAgICAgPFR5cGVzIGFwcFZpZXc9e3RoaXMuc3RhdGUuYXBwVmlld30gY2xpY2tIYW5kbGU9e3RoaXMuY2xpY2tIYW5kbGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmFwcFZpZXcgPT09ICd3YWl0aW5nJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+dUNoZXdzPC9oMT5cbiAgICAgICAgICA8V2FpdGluZyBhcHBWaWV3PXt0aGlzLnN0YXRlLmFwcFZpZXd9IGNsaWNrSGFuZGxlPXt0aGlzLmNsaWNrSGFuZGxlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5hcHBWaWV3ID09PSAncmVzdWx0cycpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPnVDaGV3czwvaDE+XG4gICAgICAgICAgPFJlc3VsdHMgYXBwVmlldz17dGhpcy5zdGF0ZS5hcHBWaWV3fSBjbGlja0hhbmRsZT17dGhpcy5jbGlja0hhbmRsZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuYXBwVmlldyA9PT0gJ3NpZ251cCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPnVDaGV3czwvaDE+XG4gICAgICAgICAgPFNpZ251cCBhcHBWaWV3PXt0aGlzLnN0YXRlLmFwcFZpZXd9IGNsaWNrSGFuZGxlPXt0aGlzLmNsaWNrSGFuZGxlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEluZGV4Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFDQTs7OztBQWxFQTtBQUNBO0FBb0VBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************!*\
  !*** ./client/src/components/home.jsx ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Home = function Home(_ref) {\n  var clickHandle = _ref.clickHandle;\n\n\n  return React.createElement(\n    'div',\n    null,\n    React.createElement(\n      'h1',\n      null,\n      'Home'\n    ),\n    React.createElement(\n      'button',\n      { onClick: function onClick() {\n          return clickHandle('input');\n        } },\n      'Get Started'\n    )\n  );\n};\n\nexports.default = Home;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS5qc3g/YWY5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIb21lID0gKHtjbGlja0hhbmRsZX0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiBjbGlja0hhbmRsZSgnaW5wdXQnKX0+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9ob21lLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);