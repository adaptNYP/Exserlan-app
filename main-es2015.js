(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field>\n    <mat-label>Email</mat-label>\n    <input matInput required #email>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-label>Password</mat-label>\n    <input matInput required #password type=\"password\">\n  </mat-form-field>\n  <button mat-raised-button (click)=\"login(email.value, password.value)\">Login</button>\n  <br>\n  <a [routerLink]=\"['/signup']\">Sign up</a>\n  <span style=\"color: red;\">{{warningMessage}}</span>\n</div>\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field>\n    <mat-label>Name</mat-label>\n    <input matInput required #name>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-label>Email</mat-label>\n    <input matInput required #email>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-label>Password</mat-label>\n    <input matInput required #password type=\"password\">\n    <mat-hint align=\"end\">Min 8 character</mat-hint>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-label>Re-enter Password</mat-label>\n    <input matInput required #repassword type=\"password\">\n    <mat-hint align=\"end\">Min 8 character</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button (click)=\"signup(name.value,email.value,password.value,repassword.value)\">Login</button>\n  <br>\n  <a [routerLink]=\"['/login']\">Login</a>\n  <span style=\"color: red;\">{{warningMessage}}</span>\n</div>\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/home/course/course.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/home/course/course.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\" (click)=\"cancel()\"></div>\n<div class=\"col-12 course\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title style=\"display: flex;\">\n        <div [className]=\"'circle ' + statusColor\"></div>\n        <span class=\"courseName\">\n          {{courseForm.value.name ? courseForm.value.name: 'Course Name'}}\n        </span>\n      </mat-card-title>\n      <button type=\"button\" class=\"close\" (click)=\"cancel()\">\n        <span>&times;</span>\n      </button>\n    </mat-card-header>\n    <form class=\"form\" [formGroup]=\"courseForm\" (ngSubmit)=\"onSubmit(courseForm)\">\n      <fieldset [disabled]=\"loading\">\n        <mat-card-content>\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Enter Course Name\" formControlName=\"name\" required autofocus\n              autocomplete=\"off\">\n          </mat-form-field>\n          <mat-radio-group formControlName=\"type\" required (change)=\"changeCircle(); changeForm();\">\n            <mat-radio-button *ngFor=\"let type of types\" [value]=\"type.value\">\n              {{type.text}}\n            </mat-radio-button>\n          </mat-radio-group>\n          <span *ngIf=\"courseForm.value.type === 2\">\n            <div>\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"sameDate\" [ngModelOptions]=\"{standalone: true}\"\n                class=\"full-width\" (change)=\"changeForm()\">\n                Same date\n              </mat-checkbox>\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"entireDay\" [ngModelOptions]=\"{standalone: true}\"\n                class=\"full-width\" (change)=\"changeForm()\">\n                Full Day\n              </mat-checkbox>\n            </div>\n            <div class=\"full-width\" *ngIf=\"sameDate\">\n              <div>\n                <mat-form-field class=\"date\" hintLabel=\"DD/MM/YYYY\">\n                  <input matInput [matDatepicker]=\"startDatepicker\" placeholder=\"Choose date\"\n                    formControlName=\"startDate\" required>\n                  <mat-datepicker-toggle matSuffix [for]=\"startDatepicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #startDatepicker></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div *ngIf=\"!entireDay\">\n                <mat-form-field class=\"time\" hintLabel=\"hh:mm AM/PM\">\n                  <input matInput [ngxTimepicker]=\"startTime\" formControlName=\"startTime\" placeholder=\"Start time\"\n                    required>\n                  <button mat-button matSuffix mat-icon-button type=\"button\">\n                    <mat-icon>timer</mat-icon>\n                  </button>\n                  <ngx-material-timepicker #startTime></ngx-material-timepicker>\n                </mat-form-field>\n                <mat-form-field class=\"time\" hintLabel=\"hh:mm AM/PM\">\n                  <input matInput [ngxTimepicker]=\"endTime\" formControlName=\"endTime\" placeholder=\"End time\" required>\n                  <button mat-button matSuffix mat-icon-button type=\"button\">\n                    <mat-icon>timer</mat-icon>\n                  </button>\n                  <ngx-material-timepicker #endTime></ngx-material-timepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"full-width\" *ngIf=\"!sameDate\">\n              <mat-form-field class=\"date\" hintLabel=\"DD/MM/YYYY\">\n                <input matInput [matDatepicker]=\"startDatepicker\" placeholder=\"Choose Start date\"\n                  formControlName=\"startDate\" required>\n                <mat-datepicker-toggle matSuffix [for]=\"startDatepicker\"></mat-datepicker-toggle>\n                <mat-datepicker #startDatepicker></mat-datepicker>\n              </mat-form-field>\n              <mat-form-field class=\"time\" *ngIf=\"!entireDay\" hintLabel=\"hh:mm AM/PM\">\n                <input matInput [ngxTimepicker]=\"startTime\" formControlName=\"startTime\" placeholder=\"Start time\"\n                  required>\n                <button mat-button matSuffix mat-icon-button type=\"button\">\n                  <mat-icon>timer</mat-icon>\n                </button>\n                <ngx-material-timepicker #startTime></ngx-material-timepicker>\n              </mat-form-field>\n            </div>\n            <div class=\"full-width\" *ngIf=\"!sameDate\">\n              <mat-form-field class=\"date\" hintLabel=\"DD/MM/YYYY\">\n                <input matInput [matDatepicker]=\"endDatepicker\" placeholder=\"Choose End date\" formControlName=\"endDate\"\n                  required>\n                <mat-datepicker-toggle matSuffix [for]=\"endDatepicker\"></mat-datepicker-toggle>\n                <mat-datepicker #endDatepicker></mat-datepicker>\n              </mat-form-field>\n              <mat-form-field class=\"time\" *ngIf=\"!entireDay\" hintLabel=\"hh:mm AM/PM\">\n                <input matInput [ngxTimepicker]=\"picker\" formControlName=\"endTime\" placeholder=\"End time\" required>\n                <button mat-button matSuffix mat-icon-button type=\"button\">\n                  <mat-icon>timer</mat-icon>\n                </button>\n                <ngx-material-timepicker #picker></ngx-material-timepicker>\n              </mat-form-field>\n            </div>\n          </span>\n        </mat-card-content>\n      </fieldset>\n      <mat-card-actions style=\"justify-content: space-between; display: flex;\">\n        <span style=\"text-align: center;\">\n          <span *ngIf=\"course\">\n            <button mat-button type=\"button\" color=\"warn\" style=\"padding: 0 8px; min-width: 0;\"\n              (click)=\"delete(course)\">\n              <mat-icon>delete</mat-icon>\n              Delete\n            </button>\n            <button mat-button type=\"button\" color=\"accent\" style=\"padding: 0 8px;\" (click)=\"downloadKey(course)\">\n              <mat-icon>cloud_download</mat-icon>\n              Key\n            </button>\n          </span>\n        </span>\n        <span style=\"text-align: end;\">\n          <button mat-button color=\"primary\" type=\"submit\" [disabled]=\"courseForm.invalid || loading\"\n            style=\"padding: 0 8px;\">\n            <mat-icon *ngIf=\"done\" color=\"primary\">done</mat-icon>\n            <mat-spinner *ngIf=\"loading && !done\" [diameter]=\"18\" style=\"display: inline-block;\">\n            </mat-spinner>\n            {{course? done ? 'Updated' : 'Update' : 'Create'}}\n          </button>\n          <button mat-button color=\"warn\" (click)=\"cancel()\" style=\"margin: 0; padding: 0 8px;\"\n            [disabled]=\"loading\">{{course? 'Close' : 'Cancel'}}</button>\n        </span>\n      </mat-card-actions>\n    </form>\n    <div [className]=\"'statusBar ' + statusColor\">{{course? course.key : ''}}</div>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style=\"display: flex; justify-content: space-between;\">\n  <span></span>\n  <span>Dashboard</span>\n  <button mat-icon-button (click)=\"logout()\">\n    <mat-icon>exit_to_app</mat-icon>\n  </button>\n</mat-toolbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"searchdiv\">\n        <ng-template [ngIf]=\"searchButton\" [ngIfElse]=\"searchbar\">\n          <button mat-button onclick=\"this.blur();\" (click)=\"this.searchButton = false\" class=\"search small\">\n            <mat-icon style=\"font-size: 20px;\">search</mat-icon> Search\n          </button>\n        </ng-template>\n        <ng-template #searchbar>\n          <div style=\"display: flex;\">\n            <input matInput placeholder=\"Course Name\" class=\"searchInput\" autofocus\n              (input)=\"search($event.target.value);\" autocomplete=\"false\">\n            <button mat-icon-button mat-button matSuffix onclick=\"this.blur();\" (click)=\"this.searchButton = true\"\n              class=\"small\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </div>\n        </ng-template>\n        <div>\n          <button mat-flat-button onclick=\"this.blur();\" style=\"line-height: 20px; padding: 0; font-weight: 400;\">\n            <span style=\"font-size: 12px;\"> By Latest </span>\n          </button>\n          <button mat-icon-button onclick=\"this.blur();\" class=\"small\">\n            <mat-icon>filter_list</mat-icon>\n          </button>\n          <button mat-icon-button onclick=\"this.blur();\" class=\"small\">\n            <mat-icon>expand_more</mat-icon>\n          </button>\n        </div>\n      </div>\n      <div style=\"display: flex; justify-content: center; margin-top: 10px;\" *ngIf=\"loading\">\n        <mat-spinner [diameter]=\"50\"></mat-spinner>\n      </div>\n      <mat-card style=\"margin: 10px 0; padding-bottom: 20px; padding-top: 0px;\" *ngFor=\"let item of keys | async\"\n        (click)=\"showCourse({ref:item.ref, data: item.data, key: item.key})\">\n        <mat-card-content>\n          <div style=\"display: flex; justify-content: space-between; padding: 10px 0;\">\n            <div style=\"margin: auto 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\">\n              {{ item.name }}\n            </div>\n            <button mat-icon-button onclick=\"this.blur();\"\n              [routerLink]=\"['/view', item.ref.ref.parent.parent.id, item.ref.ref.id ]\" style=\"margin: auto 0;\">\n              <mat-icon>keyboard_arrow_right</mat-icon>\n            </button>\n          </div>\n          <div\n            [className]=\"'card-bottom ' + (item.type === 0? 'not-published' : item.type === 1 ? 'published' : 'interval')\">\n            <div class=\"card-bottom-text\" style=\"text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\">\n              Latest Update: {{ item.latest | async }}\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n<button mat-fab color=\"primary\" id=\"generateButton\" [disabled]=\"loading\" onclick=\"this.blur();\"\n  (click)=\"courseData = undefined; this.courseDetails = true\">+</button>\n<app-course *ngIf=\"courseDetails\" (close)=\"hideCourse()\" [course]=\"courseData\"></app-course>\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/view/slider/slider.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/view/slider/slider.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sliderContainer\">\n  <mat-slider thumbLabel class=\"slider\" [min]=\"min\" [max]=\"max\" [displayWith]=\"displayWith\" [step]=\"1000\"\n    (input)=\"onChange($event.value)\" [value]=\"value\"></mat-slider>\n</div>\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/view/view.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/view/view.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: flex; justify-content: center; margin-top: 10px;\" *ngIf=\"!hasCourse\">\n  <div>\n    <mat-spinner [diameter]=\"50\" style=\"margin: auto;\"></mat-spinner>\n    Loading Course\n  </div>\n</div>\n<mat-toolbar style=\"display: flex; justify-content: space-between; position: fixed; z-index: 1;\"\n  [hidden]=\"!(course | async)\">\n  <mat-icon class=\"example-icon\" onclick=\"history.back()\">keyboard_arrow_left</mat-icon>\n  <span\n    style=\"white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding: 0 30px;\">{{ (course | async)?.data.name }}\n  </span>\n  <mat-icon class=\"example-icon\">settings</mat-icon>\n</mat-toolbar>\n<!-- <div class=\"container\" *ngIf=\"hasCourse\" style=\"margin-bottom: 100px; padding-top: 64px;\"> -->\n<div class=\"container\" *ngIf=\"true\" style=\"margin-bottom: 100px; padding-top: 64px;\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div *ngIf=\"!hasData\">\n        <div style=\"display: flex; margin: auto; justify-content: center;\">\n          <mat-spinner [diameter]=\"25\"></mat-spinner>\n          &nbsp;&nbsp;No data in course yet\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" [hidden]=\"(bardata | async)\">\n    <div class=\"col-12\">\n      <div *ngIf=\"hasData\">\n        <div style=\"display: flex; margin: auto; justify-content: center;\">\n          <mat-spinner [diameter]=\"25\"></mat-spinner>\n          &nbsp;&nbsp;Loading Data\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Select Date -->\n  <div class=\"row\" *ngIf=\"setDateBoo\" [hidden]=\"!(bardata | async)\">\n    <div class=\"col-12\" style=\"text-align: center;\">\n      <div style=\"height: 20px;\"></div>\n      <div class=\"yearMonthText\" *ngIf=\"selectedDate\">{{ selectedDate.monthText }} {{ selectedDate.yearText }}</div>\n      <div class=\"assessmentText\">Assessment Data</div>\n      <div style=\"height: 20px;\"> </div>\n      <div class=\"dateHolder\">\n        <div class=\"individualDate\" *ngFor=\"let date of $dateData | async\">\n          <div>{{ date.dayText }}</div>\n          <button mat-fab [ngClass]=\"{'dateButton': true, 'selected': date.text === selectedDate.text }\"\n            (click)=\"changeDate(date)\">\n            {{ date.dateText }}\n          </button>\n        </div>\n        <div class=\"individualDate\" *ngIf=\"($dateData | async)?.length !== 0\">\n          <div>All</div>\n          <button mat-fab [ngClass]=\"{'dateButton': true, 'selected': 'all' === selectedDate.text }\"\n            (click)=\"allDates()\">\n            ∞\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Bar -->\n  <div class=\"row\" [hidden]=\"!(bardata | async)\">\n    <div class=\"col-12\">\n      <div style=\"margin-top: 20px; padding-right: 10px;\">\n        <div style=\"position: absolute; right: 32px; top: 0;\">Σ</div>\n        <ng-template [ngIf]=\"true\" *ngFor=\"let bar of bardata | async\">\n          <div class=\"entireBar\">\n            <button mat-fab class=\"qnButton\"\n              (click)=\"bar.displayInfo = displayMore(bar.QnLabel)\">{{ bar.QnLabel }}</button>\n            <div class=\"backgroundBar bar\">\n              <div class=\"subBar\" [style.width]=\"chart.width\" *ngFor=\"let chart of bar.chart\">\n                <div class=\"otherbar bar\" [style.background-color]=\"chart.color\"></div>\n                <span class=\"barText\">{{ chart.text }}</span>\n              </div>\n            </div>\n            <div class=\"total\">{{ bar.Answers.length }}</div>\n          </div>\n          <div class=\"barInfo\" *ngIf=\"bar.displayInfo\">\n            <div *ngIf=\"bar.type === 'MS'\" style=\"text-align: center; padding-top: 5px;\">Milestone:\n              {{ bar.Answers.length }} Students</div>\n            <app-view-pie-chart [data]=\"bar\" *ngIf=\"bar.type !== 'MS'\"></app-view-pie-chart>\n            <div class=\"container studentAnswers\" *ngIf=\"bar.displayStudent\">\n              <ng-template [ngIf]=\"bar.type === 'MS'\">\n                <div class=\"row\">\n                  <div class=\"col-12\">Name</div>\n                </div>\n                <div class=\"row\" *ngFor=\"let answer of bar.Answers\">\n                  <div class=\"col-12\">\n                    <div class=\"name\">{{answer.Name}}</div>\n                  </div>\n                </div>\n              </ng-template>\n              <ng-template [ngIf]=\"bar.type === 'FR'\">\n                <div class=\"row\">\n                  <div class=\"col-6\"> Name </div>\n                  <div class=\"col-6\">Answer</div>\n                </div>\n                <div class=\"row\" *ngFor=\"let answer of bar.Answers\">\n                  <div class=\"col-6\">\n                    <div class=\"name\">{{answer.Name}}</div>\n                  </div>\n                  <div class=\"col-6\">{{answer.Answer}}</div>\n                </div>\n              </ng-template>\n              <ng-template [ngIf]=\"bar.type === 'TL'\">\n                <div class=\"row\">\n                  <div class=\"col-3\">Name</div>\n                  <div class=\"col-6\">Code</div>\n                  <div class=\"col-3\">Status</div>\n                </div>\n                <div class=\"row\" *ngFor=\"let answer of bar.Answers\">\n                  <div class=\"col-3\">\n                    <div class=\"name\">{{answer.Name}}</div>\n                  </div>\n                  <div class=\"col-6\">{{answer.Code}}</div>\n                  <div class=\"col-3\">\n                    <button mat-fab style=\"height: 30px; width: 30px\"\n                      [style.background-color]=\"answer.Resolved ? 'white' : answer.Code === 'codeGreen' ? '#77dd77' : answer.Code === 'codeOrange' ? '#ffb347' : '#ff6961'\"\n                      [style.border]=\"!answer.Resolved ? '' : '2px solid '.concat(answer.Code === 'codeGreen' ? '#77dd77' : answer.Code === 'codeOrange' ? '#ffb347' : '#ff6961')\"\n                      (click)=\"answer.Code !== 'codeGreen' ? answer.ref.update({Resolved: !answer.Resolved ? true : false}) : ''\"></button>\n                  </div>\n                </div>\n              </ng-template>\n              <ng-template [ngIf]=\"bar.type === ''\">\n                <div class=\"row\">\n                  <div class=\"col-3\">Name</div>\n                  <div class=\"col-6\">Answer</div>\n                  <div class=\"col-3\">Status</div>\n                </div>\n                <div class=\"row\" *ngFor=\"let answer of bar.Answers\">\n                  <div class=\"col-3\">\n                    <div class=\"name\">{{answer.Name}}</div>\n                  </div>\n                  <div class=\"col-6\">{{answer.Answer}}</div>\n                  <div class=\"col-3\">\n                    <button mat-fab style=\"height: 30px; width: 30px\"\n                      [style.background-color]=\"answer.Resolved ? 'white' : answer.Code === 'codeGreen'? 'green' : 'red'\"\n                      [ngStyle]=\"{border: !answer.Resolved ? '' : '2px solid red'}\"\n                      (click)=\"answer.Code !== 'codeGreen' ? answer.ref.update({Resolved: !answer.Resolved ? true : false}) : ''\"></button>\n                  </div>\n                </div>\n              </ng-template>\n            </div>\n            <div class=\"drop\" (click)=\"bar.displayStudent = displayStudent(bar.QnLabel)\">\n              <mat-icon class=\"dropIcon\" [hidden]=\"bar.displayStudent\">keyboard_arrow_down</mat-icon>\n              <mat-icon class=\"dropIcon\" [hidden]=\"!bar.displayStudent\">keyboard_arrow_up</mat-icon>\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"entireBar\" style=\"position: sticky; bottom: 45px;\">\n          <div class=\"bottomBar\">\n            <div *ngFor=\"let number of barMax; let i = index\">\n              <span class=\"text\" [ngClass]=\"{'text': true, 'last': i === barMax.length - 1}\">{{ number }}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"selectedDate\">\n    <div class=\"col-12\" [hidden]=\"hideSlider || selectedDate.dayText === 'All' \">\n      <app-slider [data]=\"timeData\" [date]=\"selectedDate.date\" (valueOnChange)=\"sliderOnChange($event)\"></app-slider>\n    </div>\n  </div>\n  <!-- Test -->\n  <!-- <div class=\"row\">\n    <div class=\"col-12\">\n      <div style=\"margin-top: 20px; padding-right: 10px;\">\n        <div style=\"position: absolute; right: 32px; top: 0;\">Σ</div>\n        <ng-template [ngIf]=\"true\" let-click>\n          <div class=\"entireBar\">\n            <button mat-fab class=\"qnButton\" (click)=\"click = click ? false : true\">A1</button>\n            <div class=\"backgroundBar bar\">\n              <div class=\"subBar\" [style.width]=\"'100%'\">\n                <div class=\"otherbar bar\" [style.background-color]=\"'green'\"></div>\n                <span class=\"barText\">1</span>\n              </div>\n            </div>\n            <div class=\"total\">1</div>\n          </div>\n          !click\n          <div class=\"barInfo\" *ngIf=\"true\">\n            <div style=\"height: 100px\"></div>\n            <div class=\"container\" style=\"text-align: center; font-size: 0.8em;\" *ngIf=\"true\">\n              <div class=\"row\">\n                <div class=\"col-3\">\n                  Name\n                </div>\n                <div class=\"col-6\">\n                  Answer\n                </div>\n                <div class=\"col-3\">\n                  Status\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-3\">\n                  Dr Strange\n                </div>\n                <div class=\"col-6\">\n                  Mobile-Enhanced\n                </div>\n                <div class=\"col-3\">\n                  <button mat-fab style=\"background-color: red; height: 30px; width: 30px\"></button>\n                </div>\n              </div>\n            </div>\n            <div class=\"drop\" (click)=\"testDrop = testDrop ? false : true\">\n              <mat-icon class=\"dropIcon\" [hidden]=\"testDrop\">keyboard_arrow_down</mat-icon>\n              <mat-icon class=\"dropIcon\" [hidden]=\"!testDrop\">keyboard_arrow_up</mat-icon>\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"entireBar\" style=\"position: sticky; bottom: 15px;\">\n          <div class=\"bottomBar\">\n            <div>\n              <span class=\"text\" class=\"text\">0</span>\n            </div>\n            <div>\n              <span class=\"text\" class=\"text last\">1</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <!-- End of Test -->\n  <!-- <div class=\"row\">\n    <div class=\"col-12\">\n      <app-slider></app-slider>\n    </div>\n  </div> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-raised-button>asdasd</button>\n<div>\n  <mat-button-toggle #togglebtn checked>Toggle</mat-button-toggle>\n  {{togglebtn.checked}}\n  <br>\n  <mat-button-toggle-group #toggleGroup=\"matButtonToggleGroup\" multiple>\n    <mat-button-toggle value=\"A\">A</mat-button-toggle>\n    <mat-button-toggle value=\"B\">B</mat-button-toggle>\n    <mat-button-toggle value=\"C\">C</mat-button-toggle>\n  </mat-button-toggle-group>\n  {{toggleGroup.value}}\n  <br>\n  <mat-icon color=\"primary\">grade</mat-icon>\n  <div>\n    <span matBadge=\"5\" matBadgeOverlap=\"false\">Notifications</span>\n  </div>\n  <div>\n    <span matBadge=\"5\" matBadgePosition=\"below before\" matBadgeColor=\"primary\" matBadgeOverlap=\"false\">Notifications</span>\n  </div>\n  <div>\n    <span matBadge=\"5\" matBadgePosition=\"below after\"  matBadgeColor=\"accent\" matBadgeOverlap=\"false\">Notifications</span>\n  </div>\n  <div>\n    <span matBadge=\"5\" matBadgePosition=\"above before\"  matBadgeColor=\"warn\" matBadgeOverlap=\"false\">Notifications</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/view/view.component */ "./src/app/components/view/view.component.ts");









const routes = [
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
    },
    {
        path: 'signup',
        component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
    },
    {
        path: '',
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            },
            {
                path: 'test',
                component: _test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"]
            },
            {
                path: 'view/:id/:key',
                component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Exserlan';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _module_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/material.module */ "./src/app/module/material.module.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm2015/ngx-material-timepicker.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/view/view.component */ "./src/app/components/view/view.component.ts");
/* harmony import */ var _components_home_course_course_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/course/course.component */ "./src/app/components/home/course/course.component.ts");
/* harmony import */ var _components_view_view_pie_chart_view_pie_chart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/view/view-pie-chart/view-pie-chart.component */ "./src/app/components/view/view-pie-chart/view-pie-chart.component.ts");
/* harmony import */ var _components_view_slider_slider_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/view/slider/slider.component */ "./src/app/components/view/slider/slider.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _test_test_component__WEBPACK_IMPORTED_MODULE_17__["TestComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _components_view_view_component__WEBPACK_IMPORTED_MODULE_20__["ViewComponent"],
            _components_home_course_course_component__WEBPACK_IMPORTED_MODULE_21__["CourseComponent"],
            _components_view_view_pie_chart_view_pie_chart_component__WEBPACK_IMPORTED_MODULE_22__["ViewPieChartComponent"],
            _components_view_slider_slider_component__WEBPACK_IMPORTED_MODULE_23__["SliderComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _module_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_10__["NgxMaterialTimepickerModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"],
        ],
        providers: [_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.warningMessage = '';
        this.auth.reRoute();
    }
    ngOnInit() {
    }
    login(email, password) {
        this.auth.emailLogin(email, password)
            .then(() => this.router.navigate(['/dashboard']))
            .catch(err => this.warningMessage = 'Wrong Email/Password');
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignupComponent = class SignupComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    signup(name, email, password, repassword) {
        if (password !== repassword) {
            this.warningMessage = 'Password and Re-enter Password is different';
        }
        else {
            this.auth.emailSignUp(email, password, name)
                .then(() => this.router.navigate(['/dashboard']))
                .catch(err => console.log(err));
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/components/home/course/course.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/home/course/course.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.published {\n  background-color: #77dd77;\n}\n.not-published {\n  background-color: #fda39f;\n}\n.interval {\n  background-color: #fdfd96;\n}\n.course {\n  position: absolute;\n  left: 0;\n  top: 20%;\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n}\n.form {\n  width: 100%;\n}\n.full-width {\n  width: 100%;\n  padding: 0 10px;\n}\n.mat-radio-button {\n  margin: 0 10px;\n}\n.date {\n  width: 60%;\n}\n.time {\n  width: 95px;\n}\n.circle {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle;\n  margin: auto;\n}\n.close {\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: -5px;\n  padding: 5px;\n  right: 15px;\n  position: absolute;\n}\n.courseName {\n  vertical-align: middle;\n  display: inline-block;\n  margin-left: 10px;\n  white-space: nowrap;\n}\n.statusBar {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  font-size: 10px;\n  border-radius: 0 0 4px 4px;\n  padding: 0 10px;\n  height: 14px;\n  text-align: center;\n}\n.background {\n  opacity: 0.4;\n  background: grey;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n}\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvdXJzZS9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXEV4c2VybGFuXFxFeHNlcmxhbi1hbmd1bGFyL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jb3Vyc2UvY291cnNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvY291cnNlL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcRXhzZXJsYW5cXEV4c2VybGFuLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGNvdXJzZVxcY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBS0E7RUFBYSxZQUFBO0FDRmI7QURHQTtFQUFPLFNBQUE7RUFBVyxpREFBQTtBQ0VsQjtBREFBO0VBQ0UseUJBUlU7QUNXWjtBRERBO0VBQ0UseUJBVmM7QUNjaEI7QURGQTtFQUNFLHlCQVpTO0FDaUJYO0FDbEJBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FEcUJGO0FDbEJBO0VBQ0UsV0FBQTtBRHFCRjtBQ2xCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FEcUJGO0FDbEJBO0VBQ0UsY0FBQTtBRHFCRjtBQ2xCQTtFQUNFLFVBQUE7QURxQkY7QUNsQkE7RUFDRSxXQUFBO0FEcUJGO0FDbEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FEcUJGO0FDbEJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEcUJGO0FDbEJBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURxQkY7QUNsQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURxQkY7QUNsQkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0FEcUJGO0FDbEJBO0VBQ0U7SUFDRSxVQUFBO0VEcUJGO0VDbkJBO0lBQ0UsVUFBQTtFRHFCRjtBQUNGO0FDM0JBO0VBQ0U7SUFDRSxVQUFBO0VEcUJGO0VDbkJBO0lBQ0UsVUFBQTtFRHFCRjtBQUNGO0FDbEJBO0VBQ0U7SUFDRSxVQUFBO0VEb0JGO0VDbEJBO0lBQ0UsVUFBQTtFRG9CRjtBQUNGO0FDMUJBO0VBQ0U7SUFDRSxVQUFBO0VEb0JGO0VDbEJBO0lBQ0UsVUFBQTtFRG9CRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4kcHVibGlzaGVkOiAjNzdkZDc3O1xuJG5vdC1wdWJsaXNoZWQ6ICNmZGEzOWY7XG4kaW50ZXJ2YWw6ICNmZGZkOTY7XG5cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cbmJvZHkgeyBtYXJnaW46IDA7IGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ucHVibGlzaGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHB1Ymxpc2hlZDtcbn1cbi5ub3QtcHVibGlzaGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5vdC1wdWJsaXNoZWQ7XG59XG4uaW50ZXJ2YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW50ZXJ2YWw7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wdWJsaXNoZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdkZDc3O1xufVxuXG4ubm90LXB1Ymxpc2hlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGEzOWY7XG59XG5cbi5pbnRlcnZhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkOTY7XG59XG5cbi5jb3Vyc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMjAlO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbi5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmRhdGUge1xuICB3aWR0aDogNjAlO1xufVxuXG4udGltZSB7XG4gIHdpZHRoOiA5NXB4O1xufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNsb3NlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb3Vyc2VOYW1lIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN0YXR1c0JhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2tncm91bmQge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbi5jb3Vyc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMjAlO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICB3aWR0aDogOTVweDtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY291cnNlTmFtZSB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnN0YXR1c0JhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/course/course.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/home/course/course.component.ts ***!
  \************************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_key_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/key.service */ "./src/app/core/key.service.ts");




let CourseComponent = class CourseComponent {
    constructor(ks) {
        this.ks = ks;
        // tslint:disable-next-line: no-output-native
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.courseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.courseForm.valueChanges.subscribe(() => this.done = false);
        this.types = [{ value: 0, text: 'Not Published' }, { value: 1, text: 'Published' }, { value: 2, text: 'Interval' }];
        this.courseForm.controls.type.setValue(this.types[0].value);
        this.done = false;
    }
    ngOnInit() {
        const course = this.course;
        if (course) {
            const { data } = course;
            this.courseForm.get('name').setValue(data.name);
            this.courseForm.get('type').setValue(data.type);
            if (data.type === 2) {
                const { interval } = data;
                const { sameDate, entireDay } = interval;
                let { start, end } = interval;
                start = firebaseDate(start);
                end = firebaseDate(end);
                this.sameDate = sameDate;
                this.entireDay = entireDay;
                const value = {};
                value.type = data.type;
                value.startDate = start;
                if (!this.entireDay || !this.sameDate) {
                    if (this.entireDay) {
                        value.endDate = end;
                    }
                    else {
                        if (!this.sameDate) {
                            value.endDate = end;
                        }
                        value.startTime = dateToTime(start);
                        value.endTime = dateToTime(end);
                    }
                }
                this.changeForm(value);
            }
            else {
                this.sameDate = true;
                this.entireDay = false;
            }
        }
        this.changeCircle();
        function dateToTime(date) {
            const hours = date.getHours() === 0 ? 12 : date.getHours();
            const minutes = date.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
        }
        function firebaseDate(date) {
            return date.toDate();
        }
    }
    cancel() {
        this.close.emit(null);
    }
    onSubmit(form) {
        if (form.valid) {
            this.loading = true;
            const value = form.value;
            const config = {
                name: value.name,
                type: value.type
            };
            if (config.type === 2) {
                const interval = config.interval = { sameDate: this.sameDate, entireDay: this.entireDay };
                if (this.sameDate && this.entireDay) { // Single Date
                    const date = value.startDate;
                    interval.start = new Date(date);
                    date.setHours(23, 59, 59, 999);
                    interval.end = date;
                }
                else if (this.sameDate) { // Single Date, with Start and End Time
                    interval.start = updateTime(value.startDate, value.startTime);
                    interval.end = updateTime(value.startDate, value.endTime);
                }
                else if (this.entireDay) { // Start and End Date, no Time
                    interval.start = value.startDate;
                    value.endDate.setDate(value.endDate.getDate() + 1);
                    interval.end = value.endDate;
                }
                else { // All
                    interval.start = updateTime(value.startDate, value.startTime);
                    interval.end = updateTime(value.endDate, value.endTime);
                }
            }
            ((a) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const data = Object.assign({ name_lowercase: a.name.toLowerCase() }, a);
                if (this.course) {
                    yield this.course.ref.update(data);
                }
                else {
                    const createdCourse = yield this.ks.generateCourse(data);
                    this.course = {
                        data: (yield createdCourse.get()).data(),
                        key: createdCourse.id,
                        ref: this.ks.referenceToAngularReference(createdCourse)
                    };
                    this.ngOnInit();
                }
            }))(config).catch(err => alert('Error adding/updating Course' + err))
                .finally(() => { this.loading = false; this.done = true; });
            function updateTime(date, time) {
                const holder = /(.+):(.+) (.+)/.exec(time);
                if (Number(holder[1]) === 12) {
                    if (holder[3] === 'AM') {
                        date.setHours(0);
                    }
                    else {
                        date.setHours(12);
                    }
                }
                else {
                    date.setHours(Number(holder[1]) + (holder[3] === 'AM' ? 0 : 12));
                }
                date.setMinutes(+holder[2]);
                return new Date(date);
            }
        }
    }
    changeCircle() {
        const type = this.courseForm.value.type;
        switch (type) {
            case 0:
                this.statusColor = 'not-published';
                break;
            case 1:
                this.statusColor = 'published';
                break;
            case 2:
                this.statusColor = 'interval';
                break;
        }
    }
    changeForm(val) {
        const form = this.courseForm;
        const value = val ? val : form.value;
        ['startDate', 'endDate', 'startTime', 'endTime']
            .forEach((control) => form.removeControl(control));
        if (value.type === 2) {
            date('start');
            if (!this.entireDay || !this.sameDate) {
                if (this.entireDay) {
                    date('end');
                }
                else {
                    if (!this.sameDate) {
                        date('end');
                    }
                    time('start');
                    time('end');
                }
            }
            function date(name) {
                form.addControl(`${name}Date`, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](value[`${name}Date`], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            }
            function time(name) {
                form.addControl(`${name}Time`, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](value[`${name}Time`], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            }
        }
    }
    delete(course) {
        if (confirm(`Are you sure you want to delete this course?`)) {
            course.ref.delete();
            this.cancel();
        }
    }
    downloadKey(course) {
        this.ks.generateAPIKeyFile(course.ref);
    }
};
CourseComponent.ctorParameters = () => [
    { type: _core_key_service__WEBPACK_IMPORTED_MODULE_3__["KeyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CourseComponent.prototype, "course", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CourseComponent.prototype, "close", void 0);
CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/home/course/course.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course.component.scss */ "./src/app/components/home/course/course.component.scss")).default]
    })
], CourseComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.published {\n  background-color: #77dd77;\n}\n.not-published {\n  background-color: #fda39f;\n}\n.interval {\n  background-color: #fdfd96;\n}\n#generateButton {\n  right: 20px;\n  bottom: 20px;\n  position: fixed;\n}\n.card-bottom {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  border-radius: 0 0 4px 4px;\n  height: 20px;\n}\n.card-bottom-text {\n  color: #707070;\n  font-size: 70%;\n  margin-top: 3px;\n  margin-left: 5px;\n}\n.mat-icon-button.small {\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n}\n.mat-icon-button.small .mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n}\n.search.small {\n  margin-top: 2px;\n  height: 20px;\n  padding: 0 5px 0 0;\n  line-height: 20px;\n}\n.search.small .mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n}\n.searchdiv {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  height: 24px;\n}\n.searchInput {\n  border: 0;\n  border-bottom: 1px solid;\n  outline: none;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcRXhzZXJsYW5cXEV4c2VybGFuLWFuZ3VsYXIvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXEV4c2VybGFuXFxFeHNlcmxhbi1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBS0E7RUFBYSxZQUFBO0FDRmI7QURHQTtFQUFPLFNBQUE7RUFBVyxpREFBQTtBQ0VsQjtBREFBO0VBQ0UseUJBUlU7QUNXWjtBRERBO0VBQ0UseUJBVmM7QUNjaEI7QURGQTtFQUNFLHlCQVpTO0FDaUJYO0FDakJBO0VBQ0UsV0FIUztFQUlULFlBSlM7RUFLVCxlQUFBO0FEb0JGO0FDakJBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QURvQkY7QUNqQkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRG9CRjtBQ2pCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURvQkY7QUNsQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRG9CSjtBQ2hCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRG1CRjtBQ2pCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEbUJKO0FDZkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QURrQkY7QUNmQTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FEa0JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4kcHVibGlzaGVkOiAjNzdkZDc3O1xuJG5vdC1wdWJsaXNoZWQ6ICNmZGEzOWY7XG4kaW50ZXJ2YWw6ICNmZGZkOTY7XG5cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cbmJvZHkgeyBtYXJnaW46IDA7IGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ucHVibGlzaGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHB1Ymxpc2hlZDtcbn1cbi5ub3QtcHVibGlzaGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5vdC1wdWJsaXNoZWQ7XG59XG4uaW50ZXJ2YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW50ZXJ2YWw7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wdWJsaXNoZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdkZDc3O1xufVxuXG4ubm90LXB1Ymxpc2hlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGEzOWY7XG59XG5cbi5pbnRlcnZhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkOTY7XG59XG5cbiNnZW5lcmF0ZUJ1dHRvbiB7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmNhcmQtYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY2FyZC1ib3R0b20tdGV4dCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDcwJTtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWF0LWljb24tYnV0dG9uLnNtYWxsIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubWF0LWljb24tYnV0dG9uLnNtYWxsIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5zZWFyY2guc21hbGwge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMCA1cHggMCAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5zZWFyY2guc21hbGwgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLnNlYXJjaGRpdiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc2VhcmNoSW5wdXQge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4kZGlzdGFuY2U6IDIwcHg7XHJcblxyXG4jZ2VuZXJhdGVCdXR0b24ge1xyXG4gIHJpZ2h0OiAkZGlzdGFuY2U7XHJcbiAgYm90dG9tOiAkZGlzdGFuY2U7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uY2FyZC1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvdHRvbS10ZXh0IHtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBmb250LXNpemU6IDcwJTtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbi5zbWFsbCB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2guc21hbGwge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZzogMCA1cHggMCAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2hkaXYge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uc2VhcmNoSW5wdXQge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_key_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/key.service */ "./src/app/core/key.service.ts");
/* harmony import */ var src_app_core_firedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/firedata.service */ "./src/app/core/firedata.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");






let HomeComponent = class HomeComponent {
    constructor(ks, fs, as) {
        this.ks = ks;
        this.fs = fs;
        this.as = as;
        this.courseDetails = false;
        this.loading = false;
        this.limit = 10;
        this.searchButton = true;
        this.keys = this.transform(this.ks.getKeys(ref => ref.limit(this.limit).orderBy('name')));
    }
    transform(ob) {
        this.loading = true;
        return ob.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            console.log(actions);
            this.loading = false;
            return actions.map(item => {
                return Object.assign({ ref: this.ks.referenceToAngularReference(item.payload.doc.ref) }, item.payload.doc.data(), { data: item.payload.doc.data(), key: item.payload.doc.id, latest: this.fs.getLatest(item.payload.doc.ref).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(a => {
                        if (a.length !== 0) {
                            const { Submitted, Name, QnLabel, Answer } = a[0].payload.doc.data();
                            return `${Submitted
                                .toDate().toLocaleString()} (${Name}, Qn ${QnLabel}${Answer ? `: ${Answer}` : ''})`;
                        }
                        else {
                            return 'Generated on ' + item.payload.doc.data().created.toDate().toLocaleString();
                        }
                    })) });
            });
        }));
    }
    search(search) {
        const nameKey = 'name_lowercase';
        this.keys = this.transform(this.ks.getKeys(ref => ref.where(nameKey, '>=', search).where(nameKey, '<=', search + '\uf8ff').limit(this.limit).orderBy(nameKey)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(a => a)));
    }
    hideCourse() {
        this.courseDetails = false;
    }
    showCourse(item) {
        this.courseData = item;
        this.courseDetails = true;
    }
    logout() {
        this.as.logout();
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_core_key_service__WEBPACK_IMPORTED_MODULE_2__["KeyService"] },
    { type: src_app_core_firedata_service__WEBPACK_IMPORTED_MODULE_3__["FiredataService"] },
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/view/slider/slider.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/view/slider/slider.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sliderContainer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0 15px;\n}\n.sliderContainer .slider {\n  width: 100%;\n}\n::ng-deep .mat-slider-thumb-label {\n  width: 35px !important;\n  height: 35px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3L3NsaWRlci9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXEV4c2VybGFuXFxFeHNlcmxhbi1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx2aWV3XFxzbGlkZXJcXHNsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy92aWV3L3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlckNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICAuc2xpZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcclxuICB3aWR0aDogMzVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5zbGlkZXJDb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5zbGlkZXJDb250YWluZXIgLnNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICB3aWR0aDogMzVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/view/slider/slider.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/view/slider/slider.component.ts ***!
  \************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() {
        this.valueOnChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (this.data.length > 0) {
            this.min = this.data[0].getTime();
            this.max = this.data[this.data.length - 1].getTime();
            if (changes.date) {
                if (changes.date.previousValue !== changes.date.currentValue) {
                    this.value = this.max;
                }
            }
        }
    }
    onChange(value) {
        this.valueOnChange.emit(value);
    }
    displayWith(value) {
        const date = new Date(value);
        return `${date.getHours().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SliderComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SliderComponent.prototype, "date", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SliderComponent.prototype, "valueOnChange", void 0);
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/view/slider/slider.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider.component.scss */ "./src/app/components/view/slider/slider.component.scss")).default]
    })
], SliderComponent);



/***/ }),

/***/ "./src/app/components/view/view-pie-chart/view-pie-chart.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/view/view-pie-chart/view-pie-chart.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy92aWV3LXBpZS1jaGFydC92aWV3LXBpZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/view/view-pie-chart/view-pie-chart.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/view/view-pie-chart/view-pie-chart.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewPieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPieChartComponent", function() { return ViewPieChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewPieChartComponent = class ViewPieChartComponent {
    constructor() {
        this.unique = (value, index, self) => {
            return self.indexOf(value) === index;
        };
    }
    ngOnInit() {
        // Not Applicable for Milestone
        this.pieChartLabels = [];
        this.pieChartData = [];
        let sort;
        let find = 'Answer';
        let order;
        switch (this.data.type) {
            case 'TL':
                find = 'Code';
                order = ['codeGreen', 'codeOrange', 'codeRed'];
                break;
            case '': // MCQ
                order = ['codeGreen', 'codeRed'];
                break;
            default: // Free response
                break;
        }
        if (order) {
            this.pieChartColors = [{ backgroundColor: [] }];
            sort = (a, b) => order.indexOf(a) - order.indexOf(b);
        }
        this.data.Answers.map(a => a[find]).filter(this.unique)
            .sort(sort)
            .forEach((unique) => {
            const numberOfData = this.data.Answers.filter(a => a[find] === unique).length;
            const dataText = `(${numberOfData})`;
            this.pieChartData.push(numberOfData);
            if (this.data.type === 'TL') {
                switch (unique) {
                    case 'codeGreen':
                        this.pieChartColors[0].backgroundColor.push('#77dd77');
                        this.pieChartLabels.push('CodeGreen' + dataText);
                        break;
                    case 'codeOrange':
                        this.pieChartColors[0].backgroundColor.push('#ffb347');
                        this.pieChartLabels.push('CodeOrange' + dataText);
                        break;
                    case 'codeRed':
                        this.pieChartColors[0].backgroundColor.push('#ff6961');
                        this.pieChartLabels.push('CodeRed' + dataText);
                        break;
                }
            }
            else {
                this.pieChartLabels.push(unique + dataText);
                if (this.data.type !== 'FR') { // MCQ
                    const { Code } = this.data.Answers.find(a => a[find] === unique);
                    if (Code === 'codeGreen') {
                        this.pieChartColors[0].backgroundColor.push('green');
                    }
                    else {
                        this.pieChartColors[0].backgroundColor.push('red');
                    }
                }
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewPieChartComponent.prototype, "data", void 0);
ViewPieChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-pie-chart',
        template: `
  <div style="display: block">
    <canvas baseChart [data]="pieChartData" [labels]="pieChartLabels" [chartType]="'pie'" [colors]="pieChartColors"></canvas>
  </div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-pie-chart.component.scss */ "./src/app/components/view/view-pie-chart/view-pie-chart.component.scss")).default]
    })
], ViewPieChartComponent);



/***/ }),

/***/ "./src/app/components/view/view.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/view/view.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-fab .mat-button-wrapper {\n  padding: 0 !important;\n}\n\n.bar {\n  border-radius: 0 50px 50px 0;\n}\n\n.entireBar {\n  margin: 10px 0;\n  display: flex;\n}\n\n.entireBar .qnButton {\n  width: 30px;\n  height: 30px;\n  vertical-align: top;\n  margin-right: 10px;\n  line-height: 30px;\n}\n\n.entireBar .backgroundBar {\n  background: beige;\n  width: 100%;\n  position: relative;\n  margin-right: 15px;\n}\n\n.entireBar .backgroundBar .subBar {\n  position: absolute;\n  display: inline-block;\n}\n\n.entireBar .backgroundBar .subBar .otherbar {\n  height: 30px;\n}\n\n.entireBar .backgroundBar .subBar .barText {\n  font-size: 10px;\n  line-height: 30px;\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 0;\n  right: -2px;\n  font-weight: 600;\n}\n\n.entireBar .bottomBar {\n  width: 100%;\n  position: relative;\n  border-top: 4px solid black;\n  display: flex;\n  justify-content: space-between;\n  height: 0px;\n  margin-left: 40px;\n  margin-right: 35px;\n}\n\n.entireBar .bottomBar div .text {\n  position: absolute;\n  text-align: center;\n  margin-left: -50px;\n  width: 100px;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n.entireBar .bottomBar div .text:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  height: 2px;\n  width: 1px;\n  background: black;\n}\n\n.entireBar .bottomBar div .text.last {\n  margin-left: -51px;\n}\n\n.entireBar .total {\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 30px;\n  width: 0;\n  margin-right: 20px;\n  position: relative;\n  left: 4px;\n}\n\n.entireBar .total:before {\n  content: \"\";\n  position: absolute;\n  left: -4px;\n  background: black;\n  width: 1px;\n  height: 100%;\n}\n\n.barInfo {\n  background: #e1e1e1;\n  border-radius: 15px;\n}\n\n.barInfo .drop {\n  width: 100%;\n  height: 15px;\n  margin-top: 10px;\n  background: lightgrey;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  justify-content: center;\n}\n\n.barInfo .drop .dropIcon {\n  line-height: 15px;\n}\n\n.yearMonthText {\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.assessmentText {\n  font-size: 0.6em;\n  font-weight: 600;\n  color: #aaaaaa;\n}\n\n.dateButton {\n  width: 30px;\n  height: 30px;\n  vertical-align: top;\n  line-height: 30px;\n  background-color: white;\n}\n\n.dateButton.selected {\n  background-color: grey;\n  color: white;\n}\n\n.dateHolder {\n  display: flex;\n  justify-content: center;\n}\n\n.individualDate {\n  margin: 0 10px;\n}\n\n.studentAnswers {\n  text-align: center;\n  font-size: 0.8em;\n  margin-top: 20px;\n  border-top: 1px solid grey;\n  padding-top: 10px;\n}\n\n.studentAnswers .row {\n  height: 42px;\n}\n\n.name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3L0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcRXhzZXJsYW5cXEV4c2VybGFuLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHZpZXdcXHZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURESTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNHTjs7QURGTTtFQUNFLFlBQUE7QUNJUjs7QURGTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSVI7O0FEQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQU07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7O0FERFE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0dWOztBRERRO0VBQ0Usa0JBQUE7QUNHVjs7QURFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQUo7O0FEQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NOOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURDSTtFQUNFLGlCQUFBO0FDQ047O0FESUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0RGOztBREVFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURDRTtFQUNFLFlBQUE7QUNDSjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZmFiIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcclxufVxyXG5cclxuLmVudGlyZUJhciB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAucW5CdXR0b24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5iYWNrZ3JvdW5kQmFyIHtcclxuICAgIGJhY2tncm91bmQ6IGJlaWdlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAmIC5zdWJCYXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLm90aGVyYmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJhclRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogLTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ib3R0b21CYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzVweDtcclxuICAgIGRpdiB7XHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubGFzdCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTUxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50b3RhbCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAtNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJhckluZm8ge1xyXG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAuZHJvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmRyb3BJY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ueWVhck1vbnRoVGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5hc3Nlc3NtZW50VGV4dCB7XHJcbiAgZm9udC1zaXplOiAwLjZlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjYWFhYWFhO1xyXG59XHJcblxyXG4uZGF0ZUJ1dHRvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4uZGF0ZUhvbGRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmluZGl2aWR1YWxEYXRlIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLnN0dWRlbnRBbnN3ZXJzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC5yb3cge1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm5hbWUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5tYXQtZmFiIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5iYXIge1xuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xufVxuXG4uZW50aXJlQmFyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZW50aXJlQmFyIC5xbkJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uZW50aXJlQmFyIC5iYWNrZ3JvdW5kQmFyIHtcbiAgYmFja2dyb3VuZDogYmVpZ2U7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5lbnRpcmVCYXIgLmJhY2tncm91bmRCYXIgLnN1YkJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmVudGlyZUJhciAuYmFja2dyb3VuZEJhciAuc3ViQmFyIC5vdGhlcmJhciB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5lbnRpcmVCYXIgLmJhY2tncm91bmRCYXIgLnN1YkJhciAuYmFyVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogLTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5lbnRpcmVCYXIgLmJvdHRvbUJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cbi5lbnRpcmVCYXIgLmJvdHRvbUJhciBkaXYgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5lbnRpcmVCYXIgLmJvdHRvbUJhciBkaXYgLnRleHQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuLmVudGlyZUJhciAuYm90dG9tQmFyIGRpdiAudGV4dC5sYXN0IHtcbiAgbWFyZ2luLWxlZnQ6IC01MXB4O1xufVxuLmVudGlyZUJhciAudG90YWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDRweDtcbn1cbi5lbnRpcmVCYXIgLnRvdGFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTRweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJhckluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmJhckluZm8gLmRyb3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJhckluZm8gLmRyb3AgLmRyb3BJY29uIHtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi55ZWFyTW9udGhUZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYXNzZXNzbWVudFRleHQge1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2FhYWFhYTtcbn1cblxuLmRhdGVCdXR0b24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZGF0ZUJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhdGVIb2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZGl2aWR1YWxEYXRlIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5zdHVkZW50QW5zd2VycyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnN0dWRlbnRBbnN3ZXJzIC5yb3cge1xuICBoZWlnaHQ6IDQycHg7XG59XG5cbi5uYW1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/view/view.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/view/view.component.ts ***!
  \***************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_firedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/firedata.service */ "./src/app/core/firedata.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_key_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/key.service */ "./src/app/core/key.service.ts");






let ViewComponent = class ViewComponent {
    constructor(fd, router, route, ks) {
        this.fd = fd;
        this.router = router;
        this.route = route;
        this.ks = ks;
        this.setDateBoo = false;
        this.hideSlider = true;
        this.unique = (value, index, self) => {
            return self.indexOf(value) === index;
        };
        this.loading = true;
        this.hasData = false;
        this.displayQns = [];
        this.displayStudents = [];
        this.max = 0;
        this.timeData = [];
    }
    ngOnInit() {
        this.keyRef = this.fd.toDoc(this.route.snapshot.paramMap.get('id'), this.route.snapshot.paramMap.get('key'));
        this.getCourse();
        this.fd.getData(this.keyRef, ref => ref.orderBy('Submitted', 'desc').limit(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe((d) => {
            if (d.length === 0) {
                this.hasData = false;
            }
            else {
                this.hasData = true;
                this.setupDate(this.dateToDateInfo(d[0].Submitted.toDate()));
                this.$dateData = this.fd.getData(this.keyRef, ref => ref.orderBy('Submitted'))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(action => {
                    if (action.length === 0) {
                        this.hasData = false;
                        return [];
                    }
                    this.hasData = true;
                    return action;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
                    if (data.length === 0) {
                        return [];
                    }
                    const dateArray = data
                        .map(item => this.transformData(item))
                        .map(({ Submitted }) => Submitted.toDateString())
                        .filter(this.unique)
                        .map(text => this.dateToDateInfo(new Date(text)));
                    return dateArray;
                }));
            }
        });
    }
    dateToDateInfo(date) {
        const text = date.toDateString();
        const textArray = text.split(' ');
        return {
            dayText: textArray[0],
            dateText: textArray[2],
            monthText: ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'][Number(new Date(text).getMonth())],
            yearText: textArray[3],
            text,
            date: new Date(text)
        };
    }
    setupDate(date) {
        if (!this.setDateBoo) {
            this.setDateBoo = true;
            this.selectedDate = date;
            this.changeDate();
        }
    }
    getCourse() {
        this.keyRef.valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(i => {
            if (!i) {
                alert('Course has been deleted/not found');
                this.router.navigate(['/dashboard']);
            }
            else {
                this.course = this.keyRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(item => {
                    if (!item.payload.exists) {
                        alert('Course has been deleted/not found');
                        this.router.navigate(['/dashboard']);
                        return;
                    }
                    this.hasCourse = true;
                    return {
                        ref: this.keyRef,
                        data: item.payload.data(),
                        key: item.payload.id,
                    };
                }));
            }
        });
    }
    refreshDate() {
        const { date } = this.selectedDate;
        const dateHolder = new Date(date);
        dateHolder.setDate(dateHolder.getDate() + 1);
        const endDate = dateHolder;
        this.getBarData(ref => {
            this.query = ref.where('Submitted', '>', date).where('Submitted', '<', endDate).orderBy('Submitted');
            return this.query;
        });
    }
    changeDate(d) {
        if (this.selectedDate.text !== (d ? d.text : null)) {
            this.hideSlider = true;
            this.displayQns = [];
            this.displayStudents = [];
            const { date } = this.selectedDate = d || this.selectedDate;
            const dateHolder = new Date(date);
            dateHolder.setDate(dateHolder.getDate() + 1);
            const endDate = dateHolder;
            this.getBarData(ref => {
                this.query = ref.where('Submitted', '>', date).where('Submitted', '<', endDate).orderBy('Submitted');
                return this.query;
            });
        }
    }
    getBarData(r) {
        this.bardata = this.fd.getDataState(this.keyRef, (r ? r : ref => ref)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(action => {
            let allData = action.map(item => {
                return Object.assign({ ref: this.ks.referenceToAngularReference(item.payload.doc.ref) }, this.transformData(item.payload.doc.data()));
            });
            this.timeData = allData.map(({ Submitted }) => Submitted);
            if (this.timeData.length > 1) {
                this.hideSlider = false;
                if (this.timeEnd) {
                    allData = allData.filter(({ Submitted }) => Submitted <= this.timeEnd);
                }
            }
            else {
                this.hideSlider = true;
            }
            return this.transformForBarChart(allData);
        }));
    }
    transformForBarChart(dataArray) {
        const uniqueQuestions = dataArray.map(({ QnLabel }) => QnLabel).filter(this.unique).map(QnLabel => {
            const Answers = dataArray.filter(data => data.QnLabel === QnLabel);
            const type = !Answers.find(s => s.Code || s.Answer)
                ? 'MS' // Milestone
                : !Answers.find(s => s.Code)
                    ? 'FR' // Free Response
                    : !Answers.find(s => s.Answer)
                        ? 'TL' // Traffic Light
                        : '';
            const chart = [];
            return {
                QnLabel, Answers, type, chart,
                displayInfo: this.displayQns.find(qn => qn === QnLabel) ? true : false,
                displayStudent: this.displayStudents.find(qn => qn === QnLabel) ? true : false
            };
        });
        const max = Math.max(...uniqueQuestions.map(({ Answers }) => Answers.length));
        this.barStats(max);
        uniqueQuestions.forEach(og => {
            const { Answers, type } = og;
            let sum = 0;
            switch (type) {
                case 'MS':
                    og.chart = [Object.assign({ color: 'grey' }, transform(Answers))];
                    break;
                case 'FR':
                    og.chart = [Object.assign({ color: '#007fff' }, transform(Answers))];
                    break;
                case 'TL':
                    const TLorder = ['codeGreen', 'codeOrange', 'codeRed'];
                    og.chart = Answers.map(({ Code }) => Code)
                        .filter(this.unique)
                        .sort((a, b) => TLorder.indexOf(a) - TLorder.indexOf(b))
                        .map(Code => {
                        switch (Code) {
                            case 'codeGreen':
                                return Object.assign({ color: '#77dd77' }, transform(Answers.filter(codeData => codeData.Code === Code)));
                            case 'codeOrange':
                                return Object.assign({ color: '#ffb347' }, transform(Answers.filter(codeData => codeData.Code === Code)));
                            case 'codeRed':
                                return Object.assign({ color: '#ff6961' }, transform(Answers.filter(codeData => codeData.Code === Code)));
                        }
                    }).reverse();
                    break;
                default:
                    const order = ['codeGreen', 'codeRed'];
                    og.chart = Answers.map(({ Code }) => Code)
                        .filter(this.unique)
                        .sort((a, b) => order.indexOf(a) - order.indexOf(b))
                        .map(Code => {
                        switch (Code) {
                            case 'codeGreen':
                                return Object.assign({ color: 'green' }, transform(Answers.filter(codeData => codeData.Code === Code)));
                            case 'codeRed':
                                return Object.assign({ color: 'red' }, transform(Answers.filter(codeData => codeData.Code === Code)));
                        }
                    }).reverse();
            }
            function transform(array) {
                sum += (array.length / max);
                return {
                    width: `${sum * 100}%`,
                    text: `${array.length}`
                };
            }
        });
        return uniqueQuestions;
    }
    barStats(max) {
        this.max = max;
        function test_prime(n) {
            if (n === 1) {
                return true;
            }
            else if (n === 2) {
                return true;
            }
            else {
                for (let x = 2; x < n; x++) {
                    if (n % x === 0) {
                        return false;
                    }
                }
                return true;
            }
        }
        let splitTo = 1;
        if (test_prime(max)) {
            splitTo = max;
        }
        else {
            if (max % 5 === 0) {
                if (max % 10 === 0) {
                    splitTo = 10;
                }
                else {
                    splitTo = 5;
                }
            }
            else if (max % 3 === 0) {
                if (max % 6 === 0) {
                    splitTo = 6;
                }
                else {
                    splitTo = 3;
                }
            }
            else if (max % 2 === 0) {
                if (max % 8 === 0) {
                    splitTo = 8;
                }
                else if (max % 4 === 0) {
                    splitTo = 4;
                }
                else {
                    splitTo = 2;
                }
            }
        }
        this.barMax = [];
        for (let index = 0; index <= splitTo; index++) {
            this.barMax.push(Math.round((max * (index / splitTo)) * 100) / 100);
        }
    }
    allDates() {
        this.timeEnd = undefined;
        this.selectedDate = {
            dayText: 'All',
            dateText: '∞',
            monthText: 'All',
            yearText: 'Dates',
            date: new Date(),
            text: 'all'
        };
        this.getBarData(ref => ref.orderBy('Submitted'));
    }
    transformData(item) {
        const data = item;
        data.Submitted = data.Submitted.toDate();
        return data;
    }
    displayMore(QnLabel) {
        let index = 0;
        if (this.displayQns.find((qn, i) => {
            if (QnLabel === qn) {
                index = i;
                return true;
            }
        })) {
            this.displayQns.splice(index, 1);
            return false;
        }
        else {
            this.displayQns.push(QnLabel);
            return true;
        }
    }
    displayStudent(QnLabel) {
        let index = 0;
        if (this.displayStudents.find((qn, i) => {
            if (QnLabel === qn) {
                index = i;
                return true;
            }
        })) {
            this.displayStudents.splice(index, 1);
            return false;
        }
        else {
            this.displayStudents.push(QnLabel);
            return true;
        }
    }
    sliderOnChange(value) {
        this.timeEnd = new Date(value);
        this.refreshDate();
    }
};
ViewComponent.ctorParameters = () => [
    { type: src_app_core_firedata_service__WEBPACK_IMPORTED_MODULE_3__["FiredataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_key_service__WEBPACK_IMPORTED_MODULE_5__["KeyService"] }
];
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/view/view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.scss */ "./src/app/components/view/view.component.scss")).default]
    })
], ViewComponent);



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuardService = class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next) {
        const url = next.routeConfig.path;
        return this.authService.$authenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(boo => {
            this.authService.setRedirectUrl(url);
            if (!boo) {
                this.router.navigate(['login']);
            }
            return boo;
        }));
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuardService);



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthService = class AuthService {
    constructor(af, router) {
        this.af = af;
        this.router = router;
        this.authState = null;
        af.authState.subscribe(a => {
            return this.authState = a;
        });
    }
    setRedirectUrl(url) {
        this.redirectUrl = url;
    }
    get authenticated() {
        return this.authState !== null;
    }
    get $authenticated() {
        return this.af.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => user !== null));
    }
    get currentUser() {
        return this.authenticated ? this.authState : null;
    }
    get currentUserId() {
        return this.authenticated ? this.authState.uid : '';
    }
    reRoute() {
        if (!this.authenticated) {
            this.router.navigate(['/dashboard']);
        }
    }
    logout() {
        this.af.auth.signOut();
        this.router.navigate(['/login']);
    }
    emailSignUp(email, password, name) {
        return this.af.auth.createUserWithEmailAndPassword(email, password)
            .then(user => user.user.updateProfile({ displayName: name }));
    }
    emailLogin(email, password) {
        return this.af.auth.signInWithEmailAndPassword(email, password);
    }
    login(email, password) {
        this.af.auth.signInWithEmailAndPassword(email, password).catch(err => console.log(err));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/core/firedata.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/firedata.service.ts ***!
  \******************************************/
/*! exports provided: FiredataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiredataService", function() { return FiredataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let FiredataService = class FiredataService {
    constructor(fs) {
        this.fs = fs;
    }
    getLatest(docref) {
        return this.fs.doc(docref).collection('data', ref => ref.orderBy('Submitted', 'desc').limit(1)).snapshotChanges();
    }
    getData(key, ref) {
        return key.collection('data', ref).valueChanges();
    }
    getDataState(key, ref) {
        return key.collection('data', ref).snapshotChanges();
    }
    toDoc(uid, key) {
        return this.fs.collection('uid').doc(uid).collection('keys').doc(key);
    }
};
FiredataService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FiredataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FiredataService);



/***/ }),

/***/ "./src/app/core/key.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/key.service.ts ***!
  \*************************************/
/*! exports provided: KeyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyService", function() { return KeyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let KeyService = class KeyService {
    constructor(fs, as) {
        this.fs = fs;
        this.as = as;
        this.fileName = 'dbInfo';
        this.database = this.fs.collection('uid');
    }
    setkey(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
    getKeys(ref) {
        return this.database.doc(this.as.currentUserId).collection('keys', ref).snapshotChanges();
    }
    referenceToAngularReference(ref) {
        return this.fs.doc(ref.path);
    }
    generateCourse(config) {
        return this.database
            .doc(this.as.currentUserId)
            .collection('keys')
            .add(Object.assign({ created: firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].Timestamp.now() }, config));
    }
    updatetest(doc) {
        return doc.update({ name: 'asdasadasdd' });
    }
    getKeyData(doc) {
        return doc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(item => {
            return Object.assign({ id: item.payload.id }, item.payload.data());
        }));
    }
    generateAPIKeyFile(doc) {
        Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(new Blob([`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiLocation}?uid=${doc.ref.parent.parent.id}&key=${doc.ref.id}`], { type: 'text/plain;charset=utf-8' }), `${this.fileName}.txt`);
    }
};
KeyService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
KeyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], KeyService);



/***/ }),

/***/ "./src/app/module/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/module/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");












const MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [MaterialComponents],
        exports: [MaterialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponent = class TestComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")).default]
    })
], TestComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    firebase: {
        apiKey: 'AIzaSyBpdT0azJaqUsP6QdFYPZtgmd8FRa4zUjI',
        authDomain: 'exserlan.firebaseapp.com',
        databaseURL: 'https://exserlan.firebaseio.com',
        projectId: 'exserlan',
        storageBucket: 'exserlan.appspot.com',
        messagingSenderId: '883299265109',
        appId: '1:883299265109:web:05894690574e0e844042dc',
        measurementId: 'G-75CN2M4KZE'
    },
    apiLocation: 'https://us-central1-exserlan.cloudfunctions.net/data',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Documents\Exserlan\Exserlan-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map