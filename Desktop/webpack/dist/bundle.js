/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/js/components/add_contact_form.js":
/*!***********************************************!*\
  !*** ./src/js/components/add_contact_form.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddContactForm\": () => (/* binding */ AddContactForm)\n/* harmony export */ });\n/* harmony import */ var _models_model_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/model_contact */ \"./src/js/models/model_contact.js\");\n\nclass AddContactForm {\n  constructor(selector, contactService) {\n    this.selector = selector;\n    this.contactService = contactService;\n\n    this.onregister = () => {};\n\n    document.addEventListener('DOMContentLoaded', () => {\n      this.init();\n      this.binds();\n    });\n  }\n\n  init() {\n    this.container = document.querySelector(this.selector);\n    this.nameInput = this.container.querySelector('.chosen-contact__add-form_name');\n    this.typeInput = this.container.querySelector('#type');\n    this.valueInput = this.container.querySelector('.chosen-contact__add-form_value');\n    this.button = this.container.querySelector('button');\n  }\n\n  binds() {\n    this.button.addEventListener('click', () => {\n      this.addContact();\n    });\n  }\n\n  addContact() {\n    let contact = new _models_model_contact__WEBPACK_IMPORTED_MODULE_0__.Contact(this.typeInput.value, this.nameInput.value, this.valueInput.value);\n\n    if (contact.name.trim() === '' || contact.value.trim() === '') {\n      alert('Fill form');\n      return;\n    }\n\n    this.contactService.addContact(contact).then(r => {\n      if (r.status == 'error') this.addContactError(r.error);else this.successAddContact();\n    });\n  }\n\n  addContactError(text) {\n    alert(text);\n  }\n\n  successAddContact() {\n    this.clearForm();\n    alert('Contact added!');\n    this.onregister();\n  }\n\n  clearForm() {\n    this.nameInput.value = '';\n    this.typeInput.value = '';\n    this.valueInput.value = '';\n  }\n\n}\n\n//# sourceURL=webpack://webpack-project/./src/js/components/add_contact_form.js?");

/***/ }),

/***/ "./src/js/components/login_form.js":
/*!*****************************************!*\
  !*** ./src/js/components/login_form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginForm\": () => (/* binding */ LoginForm)\n/* harmony export */ });\n/* harmony import */ var _models_model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/model_user */ \"./src/js/models/model_user.js\");\n\nclass LoginForm {\n  constructor(selector, userService) {\n    this.selector = selector;\n    this.userService = userService;\n\n    this.onregister = () => {};\n\n    document.addEventListener('DOMContentLoaded', () => {\n      this.init();\n      this.binds();\n    });\n  }\n\n  init() {\n    this.container = document.querySelector(this.selector);\n    this.loginInput = this.container.querySelector('#login_user_login');\n    this.passwordInput = this.container.querySelector('#login_user_password');\n    this.button = this.container.querySelector('.btn_login');\n  }\n\n  binds() {\n    this.button.addEventListener('click', () => this.login());\n  }\n\n  login() {\n    let user = new _models_model_user__WEBPACK_IMPORTED_MODULE_0__.User(this.loginInput.value, null, this.passwordInput.value);\n\n    if (user.password.trim() === '' || user.login.trim === '') {\n      alert('Fill form');\n      return;\n    }\n\n    this.userService.login(user).then(r => {\n      if (r.status == 'error') this.loginError(r.error);else if (r.token !== null) {\n        let token = r.token;\n        console.log(token);\n        this.successLogin();\n        return token;\n      }\n    });\n  }\n\n  loginError(text) {\n    alert(text);\n  }\n\n  successLogin() {\n    this.clearForm();\n    this.hide();\n    this.onregister();\n  }\n\n  clearForm() {\n    this.passwordInput.value = '';\n    this.loginInput.value = '';\n  }\n\n  hide() {\n    let unauthorizedScreen = document.querySelector('.unauthorized-screen');\n    unauthorizedScreen.style.display = 'none';\n    let authorizedScreen = document.querySelector('.autorized-screen');\n    authorizedScreen.style.display = 'flex';\n  }\n\n}\n\n//# sourceURL=webpack://webpack-project/./src/js/components/login_form.js?");

/***/ }),

/***/ "./src/js/components/register_form.js":
/*!********************************************!*\
  !*** ./src/js/components/register_form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegisterForm\": () => (/* binding */ RegisterForm)\n/* harmony export */ });\nclass RegisterForm {\n  constructor(selector, userService) {\n    this.selector = selector;\n    this.userService = userService;\n\n    this.onregister = () => {};\n\n    document.addEventListener('DOMContentLoaded', () => {\n      this.init();\n      this.binds();\n    });\n  }\n\n  init() {\n    this.container = document.querySelector(this.selector);\n    this.loginInput = this.container.querySelector('#login_user_login');\n    this.bornInput = this.container.querySelector('#login_user_born');\n    this.passwordInput = this.container.querySelector('#login_user_password');\n    this.button = this.container.querySelector('button');\n  }\n\n  binds() {\n    this.button.addEventListener('click', () => this.register());\n  }\n\n  register() {\n    let user = new User(this.loginInput.value, this.bornInput.value, this.passwordInput.value);\n    this.userService.register(user).then(r => {\n      if (r.status == 'error') this.registerError(r.error);else this.successRegister();\n    });\n  }\n\n  registerError(text) {\n    alert(text);\n  }\n\n  successRegister() {\n    this.clearForm();\n    alert('You are registered!');\n    this.onregister();\n  }\n\n  clearForm() {\n    this.passwordInput.value = '';\n    this.loginInput.value = '';\n    this.bornInput.value = '';\n  }\n\n}\n\n//# sourceURL=webpack://webpack-project/./src/js/components/register_form.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _models_model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/model_user */ \"./src/js/models/model_user.js\");\n/* harmony import */ var _models_model_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/model_contact */ \"./src/js/models/model_contact.js\");\n/* harmony import */ var _services_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user_services */ \"./src/js/services/user_services.js\");\n/* harmony import */ var _services_contacts_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/contacts_services */ \"./src/js/services/contacts_services.js\");\n/* harmony import */ var _components_register_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register_form */ \"./src/js/components/register_form.js\");\n/* harmony import */ var _components_login_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login_form */ \"./src/js/components/login_form.js\");\n/* harmony import */ var _components_add_contact_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add_contact_form */ \"./src/js/components/add_contact_form.js\");\n\nlet activeName = null;\nlet nameElements;\nlet names = [];\nlet token = null;\n\n\n\nlet userService = new _services_user_services__WEBPACK_IMPORTED_MODULE_3__.UserServices();\n\nlet contactService = new _services_contacts_services__WEBPACK_IMPORTED_MODULE_4__.ContactServices();\n\nlet registerForm = new _components_register_form__WEBPACK_IMPORTED_MODULE_5__.RegisterForm('.register-form', userService);\n\nlet loginForm = new _components_login_form__WEBPACK_IMPORTED_MODULE_6__.LoginForm('.login_form', userService);\n\nloginForm.onregister = () => {\n  showPeople();\n};\n\n\nlet addContactForm = new _components_add_contact_form__WEBPACK_IMPORTED_MODULE_7__.AddContactForm('.chosen-contact__add-form', contactService);\n\naddContactForm.onregister = () => {\n  showPeople();\n};\n\nfunction showPeople() {\n  let nameList = document.querySelector('.name-list');\n  nameList.innerHTML = '';\n  nameElements = contactService.getAllContacts().then(c => c.map(c => _models_model_contact__WEBPACK_IMPORTED_MODULE_2__.Contact.createContactName(c))).then(rs => rs.map((r, i) => createNameElement(r, i))).then(rs => rs.forEach(r => append(r)));\n  nameList.addEventListener('click', e => {\n    if (!e.target.matches('.name-list__name-element')) return;\n    let index = e.target.dataset.index;\n    let chosenName = e.target.dataset.name;\n    let chosenValue = e.target.dataset.value;\n    contactService.findContact(chosenName, chosenValue).then(rs => rs.map(r => createChosenContactElement(r)));\n  });\n}\n\nfunction append(arg) {\n  let nameList = document.querySelector('.name-list');\n  nameList.append(arg);\n}\n\nfunction createChosenContactElement(contact) {\n  let chosenContactInformation = document.querySelector('.chosen-contact__information');\n  let chosenContactInformationElements = document.createElement('div');\n  chosenContactInformation.innerHTML = '';\n  chosenContactInformationElements.classList.add('chosen-contact__information-elements');\n  let chosenContactInformationName = document.createElement('div');\n  chosenContactInformationName.classList.add('chosen-contact__information_name');\n  let chosenContactInformationType = document.createElement('div');\n  chosenContactInformationType.classList.add('chosen-contact__information_type');\n  let chosenContactInformationValue = document.createElement('div');\n  chosenContactInformationValue.classList.add('chosen-contact__information_value');\n  chosenContactInformationName.append('Name: ' + contact.name);\n  chosenContactInformationType.append('Type: ' + contact.type);\n  chosenContactInformationValue.append('Value: ' + contact.value);\n  chosenContactInformationElements.append(chosenContactInformationName);\n  chosenContactInformationElements.append(chosenContactInformationType);\n  chosenContactInformationElements.append(chosenContactInformationValue);\n  chosenContactInformation.prepend(chosenContactInformationElements);\n  chosenContactInformationElements.style.display = 'flex';\n  return chosenContactInformationElements;\n}\n\nfunction createNameElement(c, i) {\n  let nameElement = document.createElement('div');\n  nameElement.classList.add('name-list__name-element');\n  nameElement.dataset.index = i;\n  nameElement.dataset.name = c.name;\n  nameElement.dataset.value = c.value;\n  nameElement.append(c.name);\n  return nameElement;\n}\n\n//# sourceURL=webpack://webpack-project/./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/model_contact.js":
/*!****************************************!*\
  !*** ./src/js/models/model_contact.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => (/* binding */ Contact)\n/* harmony export */ });\nclass Contact {\n  constructor(type, name, value, id) {\n    this.type = type;\n    this.name = name;\n    this.value = value;\n    this.id = id;\n  }\n\n  static createContact(c) {\n    return new Contact(c.type, c.name, c.value, c.id);\n  }\n\n  static createContactName(c) {\n    return nameElement = {\n      name: c.name,\n      value: c.value\n    };\n  }\n\n}\nlet nameElement = {};\n\n//# sourceURL=webpack://webpack-project/./src/js/models/model_contact.js?");

/***/ }),

/***/ "./src/js/models/model_user.js":
/*!*************************************!*\
  !*** ./src/js/models/model_user.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n  constructor(login, bornDate, password) {\n    this.login = login;\n    this.bornDate = bornDate;\n    this.password = password;\n  }\n\n  static create(u) {\n    return new User(u.login, u.date_born, null);\n  }\n\n}\n\n//# sourceURL=webpack://webpack-project/./src/js/models/model_user.js?");

/***/ }),

/***/ "./src/js/services/contacts_services.js":
/*!**********************************************!*\
  !*** ./src/js/services/contacts_services.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContactServices\": () => (/* binding */ ContactServices)\n/* harmony export */ });\nclass ContactServices {\n  constructor(loginForm) {\n    this.loginForm = loginForm;\n  }\n\n  getAllContacts() {\n    let token = loginForm.token;\n    console.log(token);\n    return fetch(ContactServices.BASE_URL + 'contacts', {\n      method: 'GET',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json',\n        'Authorization': 'Bearer ' + token\n      }\n    }).then(r => r.json()).then(r => r.contacts).then(cs => cs.map(c => Contact.createContact(c)));\n  }\n\n  findContact(chosenName, chosenValue) {\n    return fetch(ContactServices.BASE_URL + 'contacts/find', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json',\n        'Authorization': 'Bearer ' + token.token\n      },\n      body: JSON.stringify({\n        name: chosenName,\n        value: chosenValue\n      })\n    }).then(r => r.json()).then(r => r.contacts).then(cs => cs.map(c => Contact.createContact(c)));\n  }\n\n  addContact(contact) {\n    return fetch(UserServices.BASE_URL + 'contacts/add', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json',\n        'Authorization': 'Bearer ' + token.token\n      },\n      body: JSON.stringify({\n        value: contact.value,\n        name: contact.name,\n        type: contact.type\n      })\n    });\n  }\n\n}\nContactServices.BASE_URL = 'https://mag-contacts-api.herokuapp.com/';\n\n//# sourceURL=webpack://webpack-project/./src/js/services/contacts_services.js?");

/***/ }),

/***/ "./src/js/services/user_services.js":
/*!******************************************!*\
  !*** ./src/js/services/user_services.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserServices\": () => (/* binding */ UserServices)\n/* harmony export */ });\nclass UserServices {\n  getAll() {\n    return fetch(UserServices.BASE_URL + 'users').then(r => r.json()).then(r => r.users).then(us => us.map(u => User.create(u)));\n  }\n\n  register(user) {\n    return fetch(UserServices.BASE_URL + 'register', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        login: user.login,\n        password: user.password,\n        date_born: user.bornDate\n      })\n    }).then(r => r.json());\n  }\n\n  login(user) {\n    return fetch(UserServices.BASE_URL + 'login', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        login: user.login,\n        password: user.password\n      })\n    }).then(r => r.json());\n  }\n\n}\nUserServices.BASE_URL = 'https://mag-contacts-api.herokuapp.com/';\n\n//# sourceURL=webpack://webpack-project/./src/js/services/user_services.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n*{\\n\\t\\t\\tfont-size: 20px;\\n\\t\\t\\tfont-family: Helvetica, Arial;\\n\\t\\t\\tmargin: 0;\\n\\t\\t\\tpadding: 0;\\n\\t\\t\\tcolor: #77582F;\\n\\t\\t}\\n\\n\\n\\n\\t\\tbody{\\n\\t\\t\\tbackground-color: #FFF8EE;\\n\\t\\t}\\n\\t\\t.row{\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\tflex-direction: row;\\n\\t\\t\\talign-items: stretch;\\n\\t\\t\\tpadding: 20px;\\n\\t\\t}\\n\\t\\t.row__col{\\n\\t\\t\\tflex-grow: 1;\\n\\t\\t\\tborder: 1px solid #916935;\\n\\t\\t\\tbox-shadow: 1px 1px 2px #916935;;\\n\\n\\t\\t\\n\\n\\t\\t}\\n\\t\\t\\n\\t\\t.form .form__header{\\n\\t\\t\\tborder-bottom: 1px solid #916935;\\n\\t\\t\\tpadding: 10px;\\n\\t\\t\\tcolor: #77582F;\\n\\t\\t\\ttext-shadow: 1px 1px 2px #916935;;\\n\\t\\t\\tbox-shadow: 1px 1px 2px #916935;;\\n\\t\\t\\ttext-align: center;\\n\\t\\t\\tfont-size: 26px;\\n\\t\\t}\\n\\n\\t\\t.form .form__body{\\n\\t\\t\\tpadding: 10px;\\n\\t\\t\\tpadding-top: 20px;\\n\\t\\t}\\n\\n\\t\\t.form__control{\\n\\t\\t\\tmargin-bottom: 10px;\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\tfont-display: row;\\n\\t\\t}\\n\\n\\t\\t#login_user_login{\\n\\t\\t\\tdisplay: block;\\n\\t\\t}\\n\\n\\t\\t.autorized-screen{\\n\\t\\t\\tdisplay: none;\\n\\t\\t\\tborder: 1px solid #916935;\\n\\t\\t\\tbox-shadow: 1px 1px 2px #916935;\\n\\t\\t}\\n\\n\\t\\t.unauthorized-screen{\\n\\t\\t\\tmargin-top: 10%;\\n\\t\\t}\\n\\n\\t\\t.header__logo{\\n\\t\\t\\ttext-align: center;\\n\\t\\t\\tpadding-top: 20px;\\n\\t\\t\\tpadding-bottom: 20px;\\n\\t\\t\\tfont-size: 36px;\\n\\t\\t\\tcolor: #77582F;\\n\\t\\t\\ttext-shadow: 1px 1px 2px #916935;\\n\\t\\t}\\n\\n\\n\\t\\t.autorized-screen__aside-part{\\n\\t\\t\\tflex-grow: 1;\\n\\t\\t\\tbackground-color: #D29350;\\n\\t\\t\\tcolor: white;\\n\\n\\t\\t}\\n\\t\\t\\n\\t\\t.chosen-contact{\\n\\t\\t\\tflex-grow: 3;\\n\\t\\t\\tdisplay: flex;\\n\\t\\t}\\n\\t\\t.chosen-contact__information-elements{\\n\\t\\t\\tflex-grow: 1;\\n\\t\\t\\tflex-direction: column;\\n\\t\\t\\tpadding: 20px;\\n\\t\\t\\tdisplay: none;\\n\\t\\t\\tmargin-top: 35px;\\n\\t\\t}\\n\\t\\t.chosen-contact__add-form, .chosen-contact__information{\\n\\t\\t\\tflex-grow: 1;\\n\\t\\t\\tpadding: 20px;\\n\\t\\t\\t\\n\\t\\t}\\n\\n\\n\\t\\t.chosen-contact__add-form_name, .chosen-contact__add-form_type, \\n\\t\\t.chosen-contact__add-form_value{\\n\\t\\t\\tdisplay: block;\\n\\t\\t\\tmargin-bottom: 10px;\\n\\t\\t\\tpadding: 10px;\\n\\t\\t\\tborder-radius: 20px;\\n\\t\\t\\theight: 20px;\\n\\t\\t\\tbackground-color: #FFF8EE;\\n\\t\\t}\\n\\n\\t\\t.form-header{\\n\\t\\t\\tmargin: 0;\\n\\t\\t\\tpadding: 20px;\\n\\t\\t\\tmargin-bottom: 10px;\\n\\t\\t\\tfont-size: 26px;\\n\\t\\t\\ttext-shadow: 1px 1px 2px #916935;\\n\\t\\t}\\n\\t\\t#type{\\n\\t\\t\\tmargin-bottom: 10px;\\n\\t\\t\\t\\n\\n\\n\\t\\t}\\n\\t\\tinput, #type{\\n\\t\\t\\theight: 20px;\\n\\t\\t\\tborder-radius: 10px;\\n\\t\\t\\tborder: none;\\n\\t\\t\\toutline: none;\\n\\t\\t\\tpadding: 10px;\\n\\t\\t\\tbackground-color: white;\\n\\t\\t\\tfont-size: 16px;\\n\\t\\t\\t\\n\\t\\t}\\n\\n\\t\\tlabel{\\n\\t\\t\\tpadding-right: 20px;\\n\\t\\t\\tdisplay: block;\\n\\t\\t\\tpadding-top: 10px;\\n\\t\\t\\t\\n\\t\\t}\\n\\n\\t\\tlabel[for=login_user_login]{\\n\\t\\t\\tmargin-right: 39px;\\n\\t\\t}\\n\\t\\tlabel[for=login_user_born]{\\n\\t\\t\\tmargin-right: 15px;\\n\\t\\t}\\n\\n\\t\\t.name-list__name-element{\\n\\t\\t\\tpadding: 10px;\\n\\t\\t\\tbox-shadow: 1px 1px 2px #916935;\\n\\t\\t\\tcolor: #FFDFBE;\\n\\t\\t\\t\\n\\t\\t}\\n\\n\\t\\tbutton{\\n\\t\\t\\tpadding: 10px;\\n\\t\\t\\tborder-radius: 10px;\\n\\t\\t\\tbackground-color: #FFF8EE;\\n\\t\\t\\tborder: none;\\n\\t\\t\\tbox-shadow: 1px 1px 2px #916935;\\n\\t\\t\\ttext-transform: uppercase;\\n\\t\\t}\\n\\t\\t.name-list__header{\\n\\t\\t\\tborder: 1px solid #916935;\\n\\t\\t\\tbox-shadow: 1px 1px 2px #916935;\\n\\t\\t\\tcolor: #FFDFBE;\\n\\t\\t}\\n\\t\\t.chosen-contact__information_name, .chosen-contact__information_type, \\n\\t\\t.chosen-contact__information_value{\\n\\t\\t\\t\\n\\t\\t\\tbox-shadow: 1px 1px 2px #916935;\\n\\t\\t\\tmargin-bottom: 2px;\\n\\t\\t\\tpadding: 10px;\\n\\t\\t\\tborder-radius: 10px;\\n\\t\\t\\tbackground-color: #FFF8EE;\\n\\t\\t\\t\\n\\t\\t}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-project/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-project/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;