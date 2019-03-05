module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/twb":
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Bhuq");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-server/head"
var head_ = __webpack_require__("U7sd");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/navbar.js










var navbar_ProfileNavbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfileNavbar, _React$Component);

  function ProfileNavbar(props) {
    var _this;

    _classCallCheck(this, ProfileNavbar);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(ProfileNavbar).call(this, props));
    _this.toggleNavbar = _this.toggleNavbar.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      collapsed: true
    };
    return _this;
  }

  _createClass(ProfileNavbar, [{
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          image = _this$props.image,
          sections = _this$props.sections,
          focusedSection = _this$props.focusedSection;
      var navItems = sections.map(function (section, index) {
        var activeClass = '';

        if (section.id === focusedSection) {
          activeClass = 'active';
        }

        return external_react_default.a.createElement(external_reactstrap_["NavItem"], {
          key: index
        }, external_react_default.a.createElement(external_react_scroll_["Link"], {
          to: section.id,
          href: "",
          className: "nav-link ".concat(activeClass),
          smooth: true,
          hashSpy: true,
          duration: 500
        }, section.name));
      });
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Navbar"], {
        expand: "lg",
        fixed: "top",
        dark: true,
        className: "bg-primary"
      }, external_react_default.a.createElement(external_react_scroll_["Link"], {
        to: "about",
        href: "",
        className: "navbar-brand mr-auto",
        smooth: true,
        hashSpy: true,
        duration: 500
      }, external_react_default.a.createElement("span", null, external_react_default.a.createElement("img", {
        className: "img-fluid img-profile rounded-circle mx-auto mb-2",
        src: image,
        alt: ""
      })), external_react_default.a.createElement("span", {
        className: "navbar-name"
      }, name)), external_react_default.a.createElement(external_reactstrap_["NavbarToggler"], {
        onClick: this.toggleNavbar,
        className: "mr-2"
      }), external_react_default.a.createElement(external_reactstrap_["Collapse"], {
        isOpen: !this.state.collapsed,
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
        navbar: true
      }, navItems))));
    }
  }]);

  return ProfileNavbar;
}(external_react_default.a.Component);


;
// CONCATENATED MODULE: ./layouts/default.js



/* harmony default export */ var layouts_default = (function (_ref) {
  var children = _ref.children,
      name = _ref.name,
      image = _ref.image,
      sections = _ref.sections,
      focusedSection = _ref.focusedSection;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, name), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/static/favicon.ico"
  })), external_react_default.a.createElement(navbar_ProfileNavbar, {
    name: name,
    image: image,
    sections: sections,
    focusedSection: focusedSection
  }), external_react_default.a.createElement("div", {
    className: "container-fluid p-0"
  }, children));
});
// EXTERNAL MODULE: external "react-waypoint"
var external_react_waypoint_ = __webpack_require__("/twb");

// CONCATENATED MODULE: ./components/profileSection.js









var profileSection_ProfileSection =
/*#__PURE__*/
function (_Component) {
  _inherits(ProfileSection, _Component);

  function ProfileSection(props) {
    var _this;

    _classCallCheck(this, ProfileSection);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(ProfileSection).call(this, props));
    _this.handleWaypointEnter = _this.handleWaypointEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWaypointLeave = _this.handleWaypointLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ProfileSection, [{
    key: "getSectionInfo",
    value: function getSectionInfo() {
      return {
        number: this.props.number,
        id: this.props.id
      };
    }
  }, {
    key: "handleWaypointEnter",
    value: function handleWaypointEnter() {
      this.props.handleSectionEnter(this.getSectionInfo());
    }
  }, {
    key: "handleWaypointLeave",
    value: function handleWaypointLeave() {
      this.props.handleSectionLeave(this.getSectionInfo());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          id = _this$props.id,
          heading = _this$props.heading;
      var header = null;

      if (heading) {
        header = external_react_default.a.createElement("h2", {
          className: "mb-5"
        }, heading);
      }

      return external_react_default.a.createElement(external_react_waypoint_["Waypoint"], {
        onEnter: this.handleWaypointEnter,
        onLeave: this.handleWaypointLeave
      }, external_react_default.a.createElement("section", {
        className: "resume-section p-3 p-lg-5 d-flex align-items-center",
        id: id
      }, external_react_default.a.createElement("div", {
        className: "w-100"
      }, header, children)));
    }
  }]);

  return ProfileSection;
}(external_react_["Component"]);


;
// CONCATENATED MODULE: ./components/profileSectionSeparator.js

/* harmony default export */ var profileSectionSeparator = (function () {
  return external_react_default.a.createElement("hr", {
    className: "m-0"
  });
});
// CONCATENATED MODULE: ./components/experienceListing.js

/* harmony default export */ var experienceListing = (function (_ref) {
  var title = _ref.title,
      company = _ref.company,
      description = _ref.description,
      dates = _ref.dates;
  return external_react_default.a.createElement("div", {
    className: "resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
  }, external_react_default.a.createElement("div", {
    className: "resume-content"
  }, external_react_default.a.createElement("h3", {
    className: "mb-0"
  }, title), external_react_default.a.createElement("div", {
    className: "subheading mb-3"
  }, company), external_react_default.a.createElement("p", null, description)), external_react_default.a.createElement("div", {
    className: "resume-date text-md-right"
  }, external_react_default.a.createElement("span", {
    className: "text-primary"
  }, dates)));
});
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./components/skillsListing.js



/* harmony default export */ var skillsListing = (function (_ref) {
  var software = _ref.software,
      workflow = _ref.workflow;
  var softwareList = software.map(function (softwareEntry, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: "list-inline-item"
    }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: softwareEntry.icon
    }));
  });
  var workflowList = workflow.map(function (workflowEntry, index) {
    return external_react_default.a.createElement("li", {
      key: index
    }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faCheck"]
    }), workflowEntry);
  });
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "subheading mb-3"
  }, "Programming Languages & Tools"), external_react_default.a.createElement("ul", {
    className: "list-inline dev-icons"
  }, softwareList), external_react_default.a.createElement("div", {
    className: "subheading mb-3"
  }, "Workflow"), external_react_default.a.createElement("ul", {
    className: "fa-ul mb-0 dev-workflow"
  }, workflowList));
});
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: ./scss/styles.scss
var styles = __webpack_require__("u0UJ");

// CONCATENATED MODULE: ./pages/index.js

















var pages_IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage(props) {
    var _this;

    _classCallCheck(this, IndexPage);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(IndexPage).call(this, props));
    _this.state = {
      visibleSections: new Array(_this.getSections().length)
    };
    _this.handleSectionEnter = _this.handleSectionEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSectionLeave = _this.handleSectionLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getFocusedSection = _this.getFocusedSection.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(IndexPage, [{
    key: "handleSectionEnter",
    value: function handleSectionEnter(section) {
      this.setState(function (prevState) {
        var visibleSections = prevState.visibleSections;
        visibleSections[section.number] = section.id;
        return {
          visibleSections: visibleSections
        };
      });
    }
  }, {
    key: "handleSectionLeave",
    value: function handleSectionLeave(section) {
      this.setState(function (prevState) {
        var visibleSections = prevState.visibleSections;
        visibleSections[section.number] = undefined;
        return {
          visibleSections: visibleSections
        };
      });
    }
  }, {
    key: "getFocusedSection",
    value: function getFocusedSection() {
      var visibleSections = this.state.visibleSections;

      if (visibleSections !== undefined) {
        for (var i = 0; i < visibleSections.length; i++) {
          var id = visibleSections[i];

          if (id !== undefined) {
            return id;
          }
        }
      }
    }
  }, {
    key: "getSections",
    value: function getSections() {
      return [{
        id: 'about',
        name: 'About'
      }, {
        id: 'experience',
        name: 'Experience'
      }, {
        id: 'education',
        name: 'Education'
      }, {
        id: 'skills',
        name: 'Skills'
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var firstName = "Josh";
      var lastName = "Kay";
      var name = "".concat(firstName, " ").concat(lastName);
      var email = "josh.m.kay@gmail.com";
      var phoneNumber = "(416) 464-4510";
      var description = "I am a web developer who has a passion for creating easy to use software.";
      var github = "https://github.com/joshkay";
      var linkedIn = "https://www.linkedin.com/in/joshmkay";
      var twitter = "https://twitter.com/joshmkay";
      var experience = [{
        title: 'Contractor',
        company: 'MARCOMM Integrated Business Solutions',
        description: '',
        dates: 'Apr 2018 - Present'
      }, {
        title: 'Executive Vice President',
        company: 'Hailstone Games',
        description: '',
        dates: 'Jan 2017 - Apr 2018'
      }, {
        title: 'Software Engineer',
        company: 'OSnap! Games',
        description: '',
        dates: 'Jan 2015 - Jan 2017'
      }, {
        title: 'Contractor',
        company: 'MMARCOMM Integrated Business Solutions',
        description: 'Contracted by Apotex Inc. to develop web software that managed data centers, cabling, work orders, inventory and more.  Worked with SQL, VB, and ASP.NET. ',
        dates: 'May 2011 - Dec 2012'
      }];
      var education = [{
        title: 'Bloc',
        company: 'Full Stack Web Development Certification',
        description: '',
        dates: 'Apr 2018 - Present'
      }, {
        title: 'George Brown College',
        company: 'Game Programming Diploma',
        description: 'With Honours',
        dates: 'Jan 2013 - Apr 2016'
      }];
      var software = [{
        icon: free_brands_svg_icons_["faHtml5"]
      }, {
        icon: free_brands_svg_icons_["faCss3Alt"]
      }, {
        icon: free_brands_svg_icons_["faJsSquare"]
      }, {
        icon: free_brands_svg_icons_["faReact"]
      }, {
        icon: free_brands_svg_icons_["faNodeJs"]
      }, {
        icon: free_brands_svg_icons_["faSass"]
      }, {
        icon: free_brands_svg_icons_["faNpm"]
      }, {
        icon: free_brands_svg_icons_["faJava"]
      }];
      var workflow = ['Test Driven Development', 'Mobile-First, Responsive Design', 'Thorough Debugging', 'Agile Development &amp; Scrum'];
      var experienceList = experience.map(function (experienceEntry, index) {
        return external_react_default.a.createElement(experienceListing, {
          key: index,
          title: experienceEntry.title,
          company: experienceEntry.company,
          description: experienceEntry.description,
          dates: experienceEntry.dates
        });
      });
      var educationList = education.map(function (educationEntry, index) {
        return external_react_default.a.createElement(experienceListing, {
          key: index,
          title: educationEntry.title,
          company: educationEntry.company,
          description: educationEntry.description,
          dates: educationEntry.dates
        });
      });
      var sections = this.getSections();
      return external_react_default.a.createElement(layouts_default, {
        name: name,
        image: "/static/profile.png",
        sections: sections,
        focusedSection: this.getFocusedSection()
      }, external_react_default.a.createElement(profileSection_ProfileSection, {
        id: sections[0].id,
        number: 0,
        handleSectionEnter: this.handleSectionEnter,
        handleSectionLeave: this.handleSectionLeave
      }, external_react_default.a.createElement("h1", {
        className: "mb-0"
      }, "".concat(firstName, " "), external_react_default.a.createElement("span", {
        className: "text-primary"
      }, lastName)), external_react_default.a.createElement("div", {
        className: "mb-5"
      }, "".concat(phoneNumber, " \xB7 "), external_react_default.a.createElement("a", {
        href: "mailto:name@email.com"
      }, email)), external_react_default.a.createElement("p", {
        className: "lead mb-5"
      }, description), external_react_default.a.createElement("div", {
        className: "social-icons"
      }, external_react_default.a.createElement("a", {
        href: linkedIn,
        target: "_blank"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_brands_svg_icons_["faLinkedinIn"]
      })), external_react_default.a.createElement("a", {
        href: github,
        target: "_blank"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_brands_svg_icons_["faGithub"]
      })), external_react_default.a.createElement("a", {
        href: twitter,
        target: "_blank"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_brands_svg_icons_["faTwitter"]
      })))), external_react_default.a.createElement(profileSectionSeparator, null), external_react_default.a.createElement(profileSection_ProfileSection, {
        heading: "Experience",
        id: sections[1].id,
        number: 1,
        handleSectionEnter: this.handleSectionEnter,
        handleSectionLeave: this.handleSectionLeave
      }, experienceList), external_react_default.a.createElement(profileSectionSeparator, null), external_react_default.a.createElement(profileSection_ProfileSection, {
        heading: "Education",
        id: sections[2].id,
        number: 2,
        handleSectionEnter: this.handleSectionEnter,
        handleSectionLeave: this.handleSectionLeave
      }, educationList), external_react_default.a.createElement(profileSectionSeparator, null), external_react_default.a.createElement(profileSection_ProfileSection, {
        heading: "Skills",
        id: sections[3].id,
        number: 3,
        handleSectionEnter: this.handleSectionEnter,
        handleSectionLeave: this.handleSectionLeave
      }, external_react_default.a.createElement(skillsListing, {
        software: software,
        workflow: workflow
      })));
    }
  }]);

  return IndexPage;
}(external_react_default.a.Component);

;
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_IndexPage);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U7sd":
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "u0UJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });