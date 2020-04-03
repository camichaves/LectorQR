function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guardados-guardados-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guardados/guardados.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guardados/guardados.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGuardadosGuardadosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Historial</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-grid>\r\n    <ion-item *ngFor=\"let data of this.historial; let i = index\">\r\n      <ion-label>\r\n        <ion-button (click)=\"abrirScan(i)\" size=\"small\">\r\n          <p>{{data.info}}</p>\r\n        </ion-button>\r\n      </ion-label>\r\n      <ion-text>\r\n        <h3>{{data.tipo}}</h3>\r\n      </ion-text>\r\n    </ion-item>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/guardados/guardados-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/guardados/guardados-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: GuardadosPageRoutingModule */

  /***/
  function srcAppPagesGuardadosGuardadosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardadosPageRoutingModule", function () {
      return GuardadosPageRoutingModule;
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


    var _guardados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guardados.page */
    "./src/app/pages/guardados/guardados.page.ts");

    var routes = [{
      path: '',
      component: _guardados_page__WEBPACK_IMPORTED_MODULE_3__["GuardadosPage"]
    }];

    var GuardadosPageRoutingModule = function GuardadosPageRoutingModule() {
      _classCallCheck(this, GuardadosPageRoutingModule);
    };

    GuardadosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GuardadosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/guardados/guardados.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/guardados/guardados.module.ts ***!
    \*****************************************************/

  /*! exports provided: GuardadosPageModule */

  /***/
  function srcAppPagesGuardadosGuardadosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardadosPageModule", function () {
      return GuardadosPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _guardados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guardados-routing.module */
    "./src/app/pages/guardados/guardados-routing.module.ts");
    /* harmony import */


    var _guardados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./guardados.page */
    "./src/app/pages/guardados/guardados.page.ts");

    var GuardadosPageModule = function GuardadosPageModule() {
      _classCallCheck(this, GuardadosPageModule);
    };

    GuardadosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _guardados_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuardadosPageRoutingModule"]],
      declarations: [_guardados_page__WEBPACK_IMPORTED_MODULE_6__["GuardadosPage"]]
    })], GuardadosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/guardados/guardados.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/guardados/guardados.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGuardadosGuardadosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#86a6df;\n}\n\nion-toolbar {\n  --background:#5068a9;\n  --color: #ffffffff;\n}\n\nion-button {\n  --background: #324e7b;\n  --color: #ffffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3VhcmRhZG9zL0M6XFxVc2Vyc1xcQ2FtaWxhXFxEb2N1bWVudHNcXElPTklDXFxRUkFQUFxcdmVyc2lvbjRcXExlY3RvclFSL3NyY1xcYXBwXFxwYWdlc1xcZ3VhcmRhZG9zXFxndWFyZGFkb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ndWFyZGFkb3MvZ3VhcmRhZG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDhCQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ndWFyZGFkb3MvZ3VhcmRhZG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM4NmE2ZGY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IzUwNjhhOTtcclxuICAtLWNvbG9yOiAjZmZmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogIzMyNGU3YjtcclxuICAtLWNvbG9yOiAjZmZmZmZmZmY7XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM4NmE2ZGY7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiM1MDY4YTk7XG4gIC0tY29sb3I6ICNmZmZmZmZmZjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzMyNGU3YjtcbiAgLS1jb2xvcjogI2ZmZmZmZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/guardados/guardados.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/guardados/guardados.page.ts ***!
    \***************************************************/

  /*! exports provided: GuardadosPage */

  /***/
  function srcAppPagesGuardadosGuardadosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardadosPage", function () {
      return GuardadosPage;
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


    var _services_historial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/historial.service */
    "./src/app/services/historial.service.ts");

    var GuardadosPage =
    /*#__PURE__*/
    function () {
      function GuardadosPage(historialService) {
        _classCallCheck(this, GuardadosPage);

        this.historialService = historialService;
        this.historial = [];
      }

      _createClass(GuardadosPage, [{
        key: "abrirScan",
        value: function abrirScan(i) {
          this.historialService.abrirEscaneado(i);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.historial = this.historialService.cargarHistorial();
        }
      }]);

      return GuardadosPage;
    }();

    GuardadosPage.ctorParameters = function () {
      return [{
        type: _services_historial_service__WEBPACK_IMPORTED_MODULE_2__["HistorialService"]
      }];
    };

    GuardadosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-guardados',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./guardados.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guardados/guardados.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./guardados.page.scss */
      "./src/app/pages/guardados/guardados.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_historial_service__WEBPACK_IMPORTED_MODULE_2__["HistorialService"]])], GuardadosPage);
    /***/
  }
}]);
//# sourceMappingURL=guardados-guardados-module-es5.js.map