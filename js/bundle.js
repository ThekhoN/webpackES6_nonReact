/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _DoSomething = __webpack_require__(1);

	var _DoSomething2 = _interopRequireDefault(_DoSomething);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Jack = new _DoSomething2.default({
	  saying: 'Weehaaaa',
	  doing: 'something wicked'
	});

	console.log('let us all go home!');

	Jack.doing_something();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var DoSomething = function () {
	  function DoSomething(options) {
	    _classCallCheck(this, DoSomething);

	    if (!options) {
	      options = {};
	    }
	    this.name = options.name ? options.name : 'Jack';
	    this.saying = options.saying ? options.saying : 'hello';
	    this.doing = options.doing ? options.doing : 'work';
	  }

	  _createClass(DoSomething, [{
	    key: 'saying_something',
	    value: function saying_something() {
	      console.log(this.name + ' is saying ' + this.saying);
	    }
	  }, {
	    key: 'doing_something',
	    value: function doing_something() {
	      console.log(this.name + ' is doing ' + this.doing);
	    }
	  }]);

	  return DoSomething;
	}();

	module.exports = DoSomething;

/***/ }
/******/ ]);