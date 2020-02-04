function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav></app-nav>\n<div class=\"container mb-5\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-create/employees-create.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-create/employees-create.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmployeesEmployeesCreateEmployeesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createEmployeeForm\" (ngSubmit)=\"createEmployee()\" class=\"mt-3\">\r\n  <h2 class=\"text-center mb-3\">Employee Creation</h2>\r\n\r\n  <div class=\"col-md-4 col-md-offset-3 text-center container\">\r\n    <!-- FirstName -->\r\n    <div class=\"form-group\">\r\n      <input\r\n        type=\"text\"\r\n        maxlength=\"15\"\r\n        pattern=\"[a-zA-Z]*\"\r\n        [ngClass]=\"{\r\n          'is-invalid':\r\n          createEmployeeForm.get('firstName').errors &&\r\n          createEmployeeForm.get('firstName').touched\r\n        }\"\r\n        class=\"form-control\"\r\n        formControlName=\"firstName\"\r\n        placeholder=\"FirstName...\"\r\n        autocomplete=\"firstName\"\r\n      />\r\n      <div class=\"invalid-feedback text-left\"\r\n      *ngIf=\"\r\n          createEmployeeForm.get('firstName').touched &&\r\n          createEmployeeForm.get('firstName').hasError('required')\r\n          \">\r\n        Please provide a First Name\r\n      </div>\r\n      <div class=\"invalid-feedback text-left\"\r\n      *ngIf=\"\r\n          createEmployeeForm.get('firstName').touched &&\r\n          createEmployeeForm.get('firstName').hasError('pattern')\r\n          \">\r\n        You must use alphabet characters only\r\n      </div>\r\n    </div>\r\n    <!-- LastName -->\r\n    <div class=\"form-group\">\r\n      <input\r\n        type=\"text\"\r\n        maxlength=\"15\"\r\n        pattern=\"[a-zA-Z]*\"\r\n        [ngClass]=\"{\r\n          'is-invalid':\r\n          createEmployeeForm.get('lastName').errors &&\r\n          createEmployeeForm.get('lastName').touched\r\n        }\"\r\n        class=\"form-control\"\r\n        formControlName=\"lastName\"\r\n        placeholder=\"LastName...\"\r\n        autocomplete=\"lastName\"\r\n      />\r\n      <div class=\"invalid-feedback text-left\"\r\n      *ngIf=\"\r\n          createEmployeeForm.get('lastName').touched &&\r\n          createEmployeeForm.get('lastName').hasError('required')\r\n          \">\r\n        Please provide a Last Name\r\n      </div>\r\n      <div class=\"invalid-feedback text-left\"\r\n      *ngIf=\"\r\n          createEmployeeForm.get('lastName').touched &&\r\n          createEmployeeForm.get('lastName').hasError('pattern')\r\n          \">\r\n        You must use alphabet characters only\r\n      </div>\r\n    </div>\r\n    <!-- PID -->\r\n    <div class=\"form-group\">\r\n      <input\r\n        type=\"text\"\r\n        maxlength=\"9\"\r\n        [ngClass]=\"{\r\n          'is-invalid':\r\n          createEmployeeForm.get('personalIdentity').errors &&\r\n          createEmployeeForm.get('personalIdentity').touched\r\n        }\"\r\n        class=\"form-control\"\r\n        formControlName=\"personalIdentity\"\r\n        placeholder=\"PersonalIdentity...\"\r\n        autocomplete=\"personalIdentity\"\r\n      />\r\n      <div class=\"invalid-feedback text-left\"\r\n      *ngIf=\"\r\n          createEmployeeForm.get('personalIdentity').touched &&\r\n          createEmployeeForm.get('personalIdentity').hasError('required')\r\n          \">\r\n        Please provide a PersonalIdentity\r\n      </div>\r\n      <div class=\"invalid-feedback text-left\"\r\n      *ngIf=\"\r\n          createEmployeeForm.get('personalIdentity').touched &&\r\n          createEmployeeForm.get('personalIdentity').hasError('minlength')\r\n          \">\r\n        ID must be 9 characters long\r\n      </div>\r\n      <div class=\"invalid-feedback text-left\"\r\n      *ngIf=\"\r\n          createEmployeeForm.get('personalIdentity').touched &&\r\n          createEmployeeForm.get('personalIdentity').hasError('pattern')\r\n          \">\r\n        Please use numbers only\r\n      </div>\r\n    </div>\r\n    <!-- ManagerSelection -->\r\n    <div class=\"form-group\">\r\n      <select\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n        createEmployeeForm.get('managerId').errors &&\r\n        createEmployeeForm.get('managerId').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      formControlName=\"managerId\"\r\n      autocomplete=\"managerId\"\r\n      >\r\n        <option *ngFor=\"let manager of managers\" value=\"{{ manager.id }}\">{{ manager.firstName }} {{ manager.lastName }}</option>\r\n      </select>\r\n      <div class=\"invalid-feedback text-left\"\r\n      *ngIf=\"\r\n          createEmployeeForm.get('managerId').touched &&\r\n          createEmployeeForm.get('managerId').hasError('required')\r\n          \">\r\n        Please provide a Manager for the Employee\r\n      </div>\r\n    </div>\r\n    <!-- Buttons -->\r\n    <div class=\"form-group text-center\">\r\n      <button class=\"btn btn-outline-success mr-2\" type=\"submit\" [disabled]=\"!createEmployeeForm.valid\">Create</button>\r\n      <button class=\"btn btn-outline-dark\" type=\"button\" (click)=\"cancel()\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-create/employees-edit/employees-edit.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-create/employees-edit/employees-edit.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmployeesEmployeesCreateEmployeesEditEmployeesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"editEmployeeForm\" (ngSubmit)=\"updateEmployee()\" class=\"mt-3\">\n  <h2 class=\"text-center mb-3\">Edit Employee {{ employee.id }}</h2>\n\n  <div class=\"col-md-4 col-md-offset-3 text-center container\">\n    <!-- FirstName -->\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        maxlength=\"15\"\n        pattern=\"[a-zA-Z]*\"\n        [ngClass]=\"{\n          'is-invalid':\n          editEmployeeForm.get('firstName').errors &&\n          editEmployeeForm.get('firstName').touched\n        }\"\n        class=\"form-control\"\n        formControlName=\"firstName\"\n        placeholder=\"FirstName...\"\n        autocomplete=\"firstName\"\n      />\n      <div class=\"invalid-feedback text-left\"\n      *ngIf=\"\n          editEmployeeForm.get('firstName').touched &&\n          editEmployeeForm.get('firstName').hasError('required')\n          \">\n        Please provide a First Name\n      </div>\n      <div class=\"invalid-feedback text-left\"\n      *ngIf=\"\n          editEmployeeForm.get('firstName').touched &&\n          editEmployeeForm.get('firstName').hasError('pattern')\n          \">\n        You must use alphabet characters only\n      </div>\n    </div>\n    <!-- LastName -->\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        maxlength=\"15\"\n        pattern=\"[a-zA-Z]*\"\n        [ngClass]=\"{\n          'is-invalid':\n          editEmployeeForm.get('lastName').errors &&\n          editEmployeeForm.get('lastName').touched\n        }\"\n        class=\"form-control\"\n        formControlName=\"lastName\"\n        placeholder=\"LastName...\"\n        autocomplete=\"lastName\"\n      />\n      <div class=\"invalid-feedback text-left\"\n      *ngIf=\"\n          editEmployeeForm.get('lastName').touched &&\n          editEmployeeForm.get('lastName').hasError('required')\n          \">\n        Please provide a Last Name\n      </div>\n      <div class=\"invalid-feedback text-left\"\n      *ngIf=\"\n          editEmployeeForm.get('lastName').touched &&\n          editEmployeeForm.get('lastName').hasError('pattern')\n          \">\n        You must use alphabet characters only\n      </div>\n    </div>\n    <!-- PID -->\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        maxlength=\"9\"\n        [ngClass]=\"{\n          'is-invalid':\n          editEmployeeForm.get('personalIdentity').errors &&\n          editEmployeeForm.get('personalIdentity').touched\n        }\"\n        class=\"form-control\"\n        formControlName=\"personalIdentity\"\n        placeholder=\"PersonalIdentity...\"\n        autocomplete=\"personalIdentity\"\n      />\n      <div class=\"invalid-feedback text-left\"\n      *ngIf=\"\n          editEmployeeForm.get('personalIdentity').touched &&\n          editEmployeeForm.get('personalIdentity').hasError('required')\n          \">\n        Please provide a PersonalIdentity\n      </div>\n      <div class=\"invalid-feedback text-left\"\n      *ngIf=\"\n          editEmployeeForm.get('personalIdentity').touched &&\n          editEmployeeForm.get('personalIdentity').hasError('minlength')\n          \">\n        ID must be 9 characters long\n      </div>\n      <div class=\"invalid-feedback text-left\"\n      *ngIf=\"\n          editEmployeeForm.get('personalIdentity').touched &&\n          editEmployeeForm.get('personalIdentity').hasError('pattern')\n          \">\n        Please use numbers only\n      </div>\n    </div>\n    <!-- ManagerSelection -->\n    <div class=\"form-group\">\n      <select\n      [ngClass]=\"{\n        'is-invalid':\n        editEmployeeForm.get('managerId').errors &&\n        editEmployeeForm.get('managerId').touched\n      }\"\n      class=\"form-control\"\n      formControlName=\"managerId\"\n      autocomplete=\"managerId\"\n      >\n        <option *ngFor=\"let manager of managers\" value=\"{{ manager.id }}\">{{ manager.firstName }} {{ manager.lastName }}</option>\n      </select>\n      <div class=\"invalid-feedback text-left\"\n      *ngIf=\"\n          editEmployeeForm.get('managerId').touched &&\n          editEmployeeForm.get('managerId').hasError('required')\n          \">\n        Please provide a Manager for the Employee\n      </div>\n    </div>\n    <!-- Buttons -->\n    <div class=\"form-group text-center\">\n      <button class=\"btn btn-outline-success mr-2\" type=\"submit\" [disabled]=\"!editEmployeeForm.valid\">Save</button>\n      <button class=\"btn btn-outline-dark\" type=\"button\" (click)=\"cancel()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-create/employees-list/employees-list.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-create/employees-list/employees-list.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmployeesEmployeesCreateEmployeesListEmployeesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col\">\n      <div class=\"row table-responsive-lg\">\n        <div class=\"form-group\">\n            <h2>Managers</h2>\n          <select\n          class=\"form-control\"\n          autocomplete=\"managerId\"\n          (change)=\"loadEmployees($event.target.value)\" [(ngModel)]=\"managerIdSelector\"\n          >\n            <option *ngFor=\"let manager of managers\" value=\"{{ manager.id }}\">{{ manager.firstName }} {{ manager.lastName }}</option>\n          </select>\n          <div class=\"row mt-3\">\n            <h1 class=\"col\">Employees List</h1>\n          </div>\n        </div>\n        <table class=\"table w-100\">\n          <thead>\n            <tr>\n              <th scope=\"col\">FirstName</th>\n              <th scope=\"col\">LastName</th>\n              <th scope=\"col\">PID</th>\n              <th scope=\"col\">Manager</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n          <tbody *ngFor=\"let employee of employees\">\n            <tr>\n              <td class=\"align-middle\">{{ employee.firstName }}</td>\n              <td class=\"align-middle\">{{ employee.lastName }}</td>\n              <td class=\"align-middle\">{{ employee.personalIdentity }}</td>\n              <td class=\"align-middle text-danger\">{{ employee.manager.firstName }} {{ employee.manager.lastName }}</td>\n              <td class=\"align-middle text-right\">\n                <button class=\"btn btn-primary\" [routerLink]=\"['/employees', employee.id]\" routerLinkActive=\"router-link-active\" >Edit</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-3\">\n  <div class=\"col-sm-6\">\n    <button class=\"btn btn-success mb-3\" [routerLink]=\"['/employees/create']\" routerLinkActive=\"router-link-active\" >New Employee</button>\n    <form class=\"form-inline mb-3\" #form=\"ngForm\" (ngSubmit)=\"searchEmployees()\" novalidate>\n      <div class=\"\">\n        <input [(ngModel)]=\"employeeParams.lastName\" name=\"lastName\" type=\"text\" class=\"form-control col-10 mr-1\" placeholder=\"Search for an Employee\" aria-label=\"Search for an Employee\" aria-describedby=\"basic-addon2\">\n        <button class=\"btn btn-outline-success\" type=\"submit\">Search</button>\n      </div>\n    </form>\n    <div *ngFor=\"let employee of employees\">\n      <span>{{ employee.firstName }} {{ employee.lastName }} - {{ employee.personalIdentity }} / {{ employee.manager.firstName }} {{ employee.manager.lastName }}</span>\n    </div>\n    <!--<app-managers-list></app-managers-list>-->\n  </div\n  >\n  <div class=\"col-sm-6\">\n    <app-employees-list></app-employees-list>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/managers/managers-create/managers-create.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/managers/managers-create/managers-create.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManagersManagersCreateManagersCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  managers-create works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/managers/managers-create/managers-list/managers-list.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/managers/managers-create/managers-list/managers-list.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManagersManagersCreateManagersListManagersListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-dark bg-success\">\n  <div class=\"container\">\n  <a class=\"navbar-brand pb-2\" [routerLink]=\"['/']\" >EmployeeManagement</a>\n    <!-- <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/confessions']\" >Employees</a>\n      </li>\n    </ul> -->\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/_resolvers/employee-edit.resolver.ts":
  /*!******************************************************!*\
    !*** ./src/app/_resolvers/employee-edit.resolver.ts ***!
    \******************************************************/

  /*! exports provided: EmployeeEditResolver */

  /***/
  function srcApp_resolversEmployeeEditResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeEditResolver", function () {
      return EmployeeEditResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/employee.service */
    "./src/app/_services/employee.service.ts");

    var EmployeeEditResolver =
    /*#__PURE__*/
    function () {
      function EmployeeEditResolver(employeeService, router) {
        _classCallCheck(this, EmployeeEditResolver);

        this.employeeService = employeeService;
        this.router = router;
      }

      _createClass(EmployeeEditResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this = this;

          return this.employeeService.getSingleEmployee(route.params.employeeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log(err);

            _this.router.navigate(['/']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          }));
        }
      }]);

      return EmployeeEditResolver;
    }();

    EmployeeEditResolver.ctorParameters = function () {
      return [{
        type: _services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    EmployeeEditResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], EmployeeEditResolver);
    /***/
  },

  /***/
  "./src/app/_services/employee.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_services/employee.service.ts ***!
    \***********************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcApp_servicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var EmployeeService =
    /*#__PURE__*/
    function () {
      function EmployeeService(http) {
        _classCallCheck(this, EmployeeService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
      }

      _createClass(EmployeeService, [{
        key: "getEmployees",
        value: function getEmployees(employeeParams) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

          if (employeeParams != null) {
            params = params.append('firstName', employeeParams.firstName);
            params = params.append('lastName', employeeParams.lastName);
            params = params.append('personalIdentity', employeeParams.personalIdentity);
          }

          return this.http.get(this.baseUrl + 'employees', {
            params: params
          });
        }
      }, {
        key: "getSingleEmployee",
        value: function getSingleEmployee(employeeId) {
          return this.http.get(this.baseUrl + 'employees/' + employeeId);
        }
      }, {
        key: "updateEmployee",
        value: function updateEmployee(employeeId, employee) {
          return this.http.put(this.baseUrl + 'employees/' + employeeId, employee);
        }
      }, {
        key: "createEmployee",
        value: function createEmployee(employee) {
          return this.http.post(this.baseUrl + 'employees', employee);
        }
      }, {
        key: "getEmployeesByManagerId",
        value: function getEmployeesByManagerId(managerId) {
          return this.http.get(this.baseUrl + 'employees/manager/' + managerId);
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EmployeeService);
    /***/
  },

  /***/
  "./src/app/_services/manager.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/_services/manager.service.ts ***!
    \**********************************************/

  /*! exports provided: ManagerService */

  /***/
  function srcApp_servicesManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagerService", function () {
      return ManagerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ManagerService =
    /*#__PURE__*/
    function () {
      function ManagerService(http) {
        _classCallCheck(this, ManagerService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL;
      }

      _createClass(ManagerService, [{
        key: "getManagers",
        value: function getManagers() {
          return this.http.get(this.baseUrl + 'managers');
        }
      }]);

      return ManagerService;
    }();

    ManagerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ManagerService);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'EmployeeManagement-SPA';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./routes */
    "./src/app/routes.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _employees_employees_create_employees_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./employees/employees-create/employees-create.component */
    "./src/app/employees/employees-create/employees-create.component.ts");
    /* harmony import */


    var _employees_employees_create_employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./employees/employees-create/employees-list/employees-list.component */
    "./src/app/employees/employees-create/employees-list/employees-list.component.ts");
    /* harmony import */


    var _managers_managers_create_managers_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./managers/managers-create/managers-create.component */
    "./src/app/managers/managers-create/managers-create.component.ts");
    /* harmony import */


    var _managers_managers_create_managers_list_managers_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./managers/managers-create/managers-list/managers-list.component */
    "./src/app/managers/managers-create/managers-list/managers-list.component.ts");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./_services/employee.service */
    "./src/app/_services/employee.service.ts");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./_services/manager.service */
    "./src/app/_services/manager.service.ts");
    /* harmony import */


    var _employees_employees_create_employees_edit_employees_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./employees/employees-create/employees-edit/employees-edit.component */
    "./src/app/employees/employees-create/employees-edit/employees-edit.component.ts");
    /* harmony import */


    var _resolvers_employee_edit_resolver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./_resolvers/employee-edit.resolver */
    "./src/app/_resolvers/employee-edit.resolver.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _employees_employees_create_employees_create_component__WEBPACK_IMPORTED_MODULE_11__["EmployeesCreateComponent"], _employees_employees_create_employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_12__["EmployeesListComponent"], _employees_employees_create_employees_edit_employees_edit_component__WEBPACK_IMPORTED_MODULE_17__["EmployeesEditComponent"], _managers_managers_create_managers_create_component__WEBPACK_IMPORTED_MODULE_13__["ManagersCreateComponent"], _managers_managers_create_managers_list_managers_list_component__WEBPACK_IMPORTED_MODULE_14__["ManagersListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"])],
      providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_15__["EmployeeService"], _services_manager_service__WEBPACK_IMPORTED_MODULE_16__["ManagerService"], _resolvers_employee_edit_resolver__WEBPACK_IMPORTED_MODULE_18__["EmployeeEditResolver"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/employees/employees-create/employees-create.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/employees/employees-create/employees-create.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmployeesEmployeesCreateEmployeesCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMtY3JlYXRlL2VtcGxveWVlcy1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/employees/employees-create/employees-create.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/employees/employees-create/employees-create.component.ts ***!
    \**************************************************************************/

  /*! exports provided: EmployeesCreateComponent */

  /***/
  function srcAppEmployeesEmployeesCreateEmployeesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesCreateComponent", function () {
      return EmployeesCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/employee.service */
    "./src/app/_services/employee.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/manager.service */
    "./src/app/_services/manager.service.ts");

    var EmployeesCreateComponent =
    /*#__PURE__*/
    function () {
      function EmployeesCreateComponent(employeeService, router, formBuilder, managerService) {
        _classCallCheck(this, EmployeesCreateComponent);

        this.employeeService = employeeService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.managerService = managerService;
      }

      _createClass(EmployeesCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
          this.getManagers();
        }
      }, {
        key: "getManagers",
        value: function getManagers() {
          var _this2 = this;

          this.managerService.getManagers().subscribe(function (managers) {
            _this2.managers = managers;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "createEmployee",
        value: function createEmployee() {
          var _this3 = this;

          if (this.createEmployeeForm.valid) {
            this.employee = Object.assign({}, this.createEmployeeForm.value);
          }

          this.employeeService.createEmployee(this.employee).subscribe(function () {
            console.log('Employee has been created');
          }, function (err) {
            console.log('Employee creation failed');
          }, function () {
            _this3.router.navigate(['/']);
          });
        }
      }, {
        key: "createForm",
        value: function createForm() {
          // Only Numbers Regex
          var numericRegex = /^-?(0|[1-9]\d*)?$/; // Only Alphabet Regex

          var alphabetRegex = /[a-zA-Z]+/;
          this.createEmployeeForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(alphabetRegex)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(alphabetRegex)]],
            personalIdentity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(numericRegex)]],
            managerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigate(['/']);
        }
      }]);

      return EmployeesCreateComponent;
    }();

    EmployeesCreateComponent.ctorParameters = function () {
      return [{
        type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_5__["ManagerService"]
      }];
    };

    EmployeesCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employees-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employees-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-create/employees-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employees-create.component.css */
      "./src/app/employees/employees-create/employees-create.component.css")).default]
    })], EmployeesCreateComponent);
    /***/
  },

  /***/
  "./src/app/employees/employees-create/employees-edit/employees-edit.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/employees/employees-create/employees-edit/employees-edit.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmployeesEmployeesCreateEmployeesEditEmployeesEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMtY3JlYXRlL2VtcGxveWVlcy1lZGl0L2VtcGxveWVlcy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/employees/employees-create/employees-edit/employees-edit.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/employees/employees-create/employees-edit/employees-edit.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: EmployeesEditComponent */

  /***/
  function srcAppEmployeesEmployeesCreateEmployeesEditEmployeesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesEditComponent", function () {
      return EmployeesEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/employee.service */
    "./src/app/_services/employee.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/manager.service */
    "./src/app/_services/manager.service.ts");

    var EmployeesEditComponent =
    /*#__PURE__*/
    function () {
      function EmployeesEditComponent(employeeService, route, formBuilder, router, managerService) {
        _classCallCheck(this, EmployeesEditComponent);

        this.employeeService = employeeService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.managerService = managerService;
      }

      _createClass(EmployeesEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.data.subscribe(function (data) {
            _this4.employee = data.employee;
          });
          this.editForm();
          this.getManagers();
        }
      }, {
        key: "updateEmployee",
        value: function updateEmployee() {
          var _this5 = this;

          if (this.editEmployeeForm.valid) {
            this.employee = Object.assign({}, this.editEmployeeForm.value);
          }

          console.log(this.employee);
          this.employeeService.updateEmployee(this.route.snapshot.params.employeeId, this.employee).subscribe(function (next) {
            console.log('Updated Employee successfully');
          }, function (err) {
            console.log(err);
          }, function () {
            _this5.router.navigate(['/']);
          });
        }
      }, {
        key: "editForm",
        value: function editForm() {
          // Only Numbers Regex
          var numericRegex = /^-?(0|[1-9]\d*)?$/; // Only Alphabet Regex

          var alphabetRegex = /[a-zA-Z]+/;
          this.editEmployeeForm = this.formBuilder.group({
            firstName: [this.employee.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(alphabetRegex)]],
            lastName: [this.employee.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(alphabetRegex)]],
            personalIdentity: [this.employee.personalIdentity, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(numericRegex)]],
            managerId: [this.employee.managerId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigate(['/']);
        }
      }, {
        key: "getManagers",
        value: function getManagers() {
          var _this6 = this;

          this.managerService.getManagers().subscribe(function (managers) {
            _this6.managers = managers;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return EmployeesEditComponent;
    }();

    EmployeesEditComponent.ctorParameters = function () {
      return [{
        type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_5__["ManagerService"]
      }];
    };

    EmployeesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employees-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employees-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-create/employees-edit/employees-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employees-edit.component.css */
      "./src/app/employees/employees-create/employees-edit/employees-edit.component.css")).default]
    })], EmployeesEditComponent);
    /***/
  },

  /***/
  "./src/app/employees/employees-create/employees-list/employees-list.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/employees/employees-create/employees-list/employees-list.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmployeesEmployeesCreateEmployeesListEmployeesListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMtY3JlYXRlL2VtcGxveWVlcy1saXN0L2VtcGxveWVlcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/employees/employees-create/employees-list/employees-list.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/employees/employees-create/employees-list/employees-list.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: EmployeesListComponent */

  /***/
  function srcAppEmployeesEmployeesCreateEmployeesListEmployeesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesListComponent", function () {
      return EmployeesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/employee.service */
    "./src/app/_services/employee.service.ts");
    /* harmony import */


    var src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/manager.service */
    "./src/app/_services/manager.service.ts");

    var EmployeesListComponent =
    /*#__PURE__*/
    function () {
      function EmployeesListComponent(employeeService, managerService) {
        _classCallCheck(this, EmployeesListComponent);

        this.employeeService = employeeService;
        this.managerService = managerService;
      }

      _createClass(EmployeesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadManagers();
        }
      }, {
        key: "loadEmployees",
        value: function loadEmployees() {
          var _this7 = this;

          this.employeeService.getEmployeesByManagerId(this.managerIdSelector).subscribe(function (employees) {
            _this7.employees = employees;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "loadManagers",
        value: function loadManagers() {
          var _this8 = this;

          this.managerService.getManagers().subscribe(function (managers) {
            _this8.managers = managers;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "searchEmp",
        value: function searchEmp() {}
      }]);

      return EmployeesListComponent;
    }();

    EmployeesListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }, {
        type: src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_3__["ManagerService"]
      }];
    };

    EmployeesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employees-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employees-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-create/employees-list/employees-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employees-list.component.css */
      "./src/app/employees/employees-create/employees-list/employees-list.component.css")).default]
    })], EmployeesListComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/employee.service */
    "./src/app/_services/employee.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(employeeService) {
        _classCallCheck(this, HomeComponent);

        this.employeeService = employeeService;
        this.employeeParams = {};
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchEmployees",
        value: function searchEmployees() {
          var _this9 = this;

          this.employeeService.getEmployees(this.employeeParams).subscribe(function (employees) {
            _this9.employees = employees;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/managers/managers-create/managers-create.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/managers/managers-create/managers-create.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManagersManagersCreateManagersCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXJzL21hbmFnZXJzLWNyZWF0ZS9tYW5hZ2Vycy1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/managers/managers-create/managers-create.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/managers/managers-create/managers-create.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ManagersCreateComponent */

  /***/
  function srcAppManagersManagersCreateManagersCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagersCreateComponent", function () {
      return ManagersCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ManagersCreateComponent =
    /*#__PURE__*/
    function () {
      function ManagersCreateComponent() {
        _classCallCheck(this, ManagersCreateComponent);
      }

      _createClass(ManagersCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManagersCreateComponent;
    }();

    ManagersCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-managers-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./managers-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/managers/managers-create/managers-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./managers-create.component.css */
      "./src/app/managers/managers-create/managers-create.component.css")).default]
    })], ManagersCreateComponent);
    /***/
  },

  /***/
  "./src/app/managers/managers-create/managers-list/managers-list.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/managers/managers-create/managers-list/managers-list.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManagersManagersCreateManagersListManagersListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXJzL21hbmFnZXJzLWNyZWF0ZS9tYW5hZ2Vycy1saXN0L21hbmFnZXJzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/managers/managers-create/managers-list/managers-list.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/managers/managers-create/managers-list/managers-list.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ManagersListComponent */

  /***/
  function srcAppManagersManagersCreateManagersListManagersListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagersListComponent", function () {
      return ManagersListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/manager.service */
    "./src/app/_services/manager.service.ts");

    var ManagersListComponent =
    /*#__PURE__*/
    function () {
      function ManagersListComponent(managerService) {
        _classCallCheck(this, ManagersListComponent);

        this.managerService = managerService;
      }

      _createClass(ManagersListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadManagers();
        }
      }, {
        key: "loadManagers",
        value: function loadManagers() {
          var _this10 = this;

          this.managerService.getManagers().subscribe(function (managers) {
            _this10.managers = managers;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ManagersListComponent;
    }();

    ManagersListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"]
      }];
    };

    ManagersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-managers-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./managers-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/managers/managers-create/managers-list/managers-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./managers-list.component.css */
      "./src/app/managers/managers-create/managers-list/managers-list.component.css")).default]
    })], ManagersListComponent);
    /***/
  },

  /***/
  "./src/app/nav/nav.component.css":
  /*!***************************************!*\
    !*** ./src/app/nav/nav.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.css */
      "./src/app/nav/nav.component.css")).default]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/routes.ts":
  /*!***************************!*\
    !*** ./src/app/routes.ts ***!
    \***************************/

  /*! exports provided: appRoutes */

  /***/
  function srcAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _employees_employees_create_employees_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./employees/employees-create/employees-create.component */
    "./src/app/employees/employees-create/employees-create.component.ts");
    /* harmony import */


    var _employees_employees_create_employees_edit_employees_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employees/employees-create/employees-edit/employees-edit.component */
    "./src/app/employees/employees-create/employees-edit/employees-edit.component.ts");
    /* harmony import */


    var _resolvers_employee_edit_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./_resolvers/employee-edit.resolver */
    "./src/app/_resolvers/employee-edit.resolver.ts");

    var appRoutes = [// Home Page Router
    {
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, // Employees Router
    {
      path: 'employees/create',
      component: _employees_employees_create_employees_create_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesCreateComponent"]
    }, {
      path: 'employees/:employeeId',
      component: _employees_employees_create_employees_edit_employees_edit_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesEditComponent"],
      resolve: {
        employee: _resolvers_employee_edit_resolver__WEBPACK_IMPORTED_MODULE_4__["EmployeeEditResolver"]
      }
    }, // Managers Router
    // Redirect to home page if href is incorrect
    {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      API_URL: 'https://localhost:5001/api/v1/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\visualstudioProjects\EmployeeManagement\EmployeeManagement-SPA\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map