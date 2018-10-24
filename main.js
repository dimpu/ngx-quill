(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/dimpu/ngx-quill/fesm5/dimpu-ngx-quill.js":
/*!***********************************************************************************************!*\
  !*** /Users/daravind/CODEBASE/github/ngx-quill/dist/dimpu/ngx-quill/fesm5/dimpu-ngx-quill.js ***!
  \***********************************************************************************************/
/*! exports provided: NgxQuillComponent, NgxQuillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxQuillComponent", function() { return NgxQuillComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxQuillModule", function() { return NgxQuillModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! katex */ "../../node_modules/katex/dist/katex.js");
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(katex__WEBPACK_IMPORTED_MODULE_3__);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var Quill;
var NgxQuillComponent = /** @class */ (function () {
    function NgxQuillComponent(elementRef) {
        this.elementRef = elementRef;
        this.defaultModules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': new Array() }, { 'background': new Array() }],
                [{ 'font': new Array() }],
                [{ 'align': new Array() }],
                ['clean'],
                ['link', 'image', 'video'] // link and image, video
            ]
        };
        this.options = {};
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    /**
     * @return {?}
     */
    NgxQuillComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var toolbarElem = this.elementRef.nativeElement.querySelector('[ngx-quill-toolbar]');
        this.elementRef.nativeElement.insertAdjacentHTML('beforeend', '<div ngx-quill-element></div>');
        this.editorElem = this.elementRef.nativeElement.querySelector('[ngx-quill-element]');
        if (!Quill) {
            Quill = __webpack_require__(/*! quill */ "../../node_modules/quill/dist/quill.js");
        }
        this.options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
            modules: this.defaultModules,
            placeholder: 'Insert text here ...',
            readOnly: false,
            theme: 'snow',
            boundary: document.body
        }, this.options);
        if (toolbarElem) {
            this.options.modules['toolbar'] = toolbarElem;
        }
        this.quillEditor = new Quill(this.editorElem, this.options);
        if (this.content) {
            this.quillEditor.pasteHTML(this.content);
        }
        this.ready.emit(this.quillEditor);
        this.quillEditor.on('selection-change', function (range) {
            if (!range) {
                _this.onModelTouched();
                _this.blur.emit(_this.quillEditor);
            }
            else {
                _this.focus.emit(_this.quillEditor);
            }
        });
        this.quillEditor.on('text-change', function (delta, oldDelta, source) {
            /** @type {?} */
            var html = _this.editorElem.children[0].innerHTML;
            /** @type {?} */
            var text = _this.quillEditor.getText();
            if (html === '<p><br></p>') {
                html = null;
            }
            _this.onModelChange(html);
            _this.change.emit({
                editor: _this.quillEditor,
                html: html,
                text: text
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxQuillComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['readOnly'] && this.quillEditor) {
            this.quillEditor.enable(!changes['readOnly'].currentValue);
        }
    };
    /**
     * @param {?} currentValue
     * @return {?}
     */
    NgxQuillComponent.prototype.writeValue = /**
     * @param {?} currentValue
     * @return {?}
     */
    function (currentValue) {
        this.content = currentValue;
        if (this.quillEditor) {
            if (currentValue) {
                this.quillEditor.pasteHTML(currentValue);
                return;
            }
            this.quillEditor.setText('');
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxQuillComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxQuillComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    NgxQuillComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngx-quill',
                    template: "<ng-content select=\"[ngx-quill-toolbar]\"></ng-content>",
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgxQuillComponent; }),
                            multi: true
                        }],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
                }] }
    ];
    /** @nocollapse */
    NgxQuillComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NgxQuillComponent.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return NgxQuillComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxQuillModule = /** @class */ (function () {
    function NgxQuillModule() {
    }
    NgxQuillModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [],
                    declarations: [NgxQuillComponent],
                    exports: [NgxQuillComponent]
                },] }
    ];
    return NgxQuillModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltcHUtbmd4LXF1aWxsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGltcHUvbmd4LXF1aWxsL2xpYi9uZ3gtcXVpbGwuY29tcG9uZW50LnRzIiwibmc6Ly9AZGltcHUvbmd4LXF1aWxsL2xpYi9uZ3gtcXVpbGwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5sZXQgUXVpbGw6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXF1aWxsJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJbbmd4LXF1aWxsLXRvb2xiYXJdXCI+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlVXJsczogW1xuICBdLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4UXVpbGxDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG4gIH1dLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE5neFF1aWxsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG5cbiAgcXVpbGxFZGl0b3I6IGFueTtcbiAgZWRpdG9yRWxlbTogSFRNTEVsZW1lbnQ7XG4gIGNvbnRlbnQ6IGFueTtcbiAgZGVmYXVsdE1vZHVsZXMgPSB7XG4gICAgdG9vbGJhcjogW1xuICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcbiAgICAgIFsnYmxvY2txdW90ZScsICdjb2RlLWJsb2NrJ10sXG5cbiAgICAgIFt7ICdoZWFkZXInOiAxIH0sIHsgJ2hlYWRlcic6IDIgfV0sICAgICAgICAgICAgICAgLy8gY3VzdG9tIGJ1dHRvbiB2YWx1ZXNcbiAgICAgIFt7ICdsaXN0JzogJ29yZGVyZWQnfSwgeyAnbGlzdCc6ICdidWxsZXQnIH1dLFxuICAgICAgW3sgJ3NjcmlwdCc6ICdzdWInfSwgeyAnc2NyaXB0JzogJ3N1cGVyJyB9XSwgICAgICAvLyBzdXBlcnNjcmlwdC9zdWJzY3JpcHRcbiAgICAgIFt7ICdpbmRlbnQnOiAnLTEnfSwgeyAnaW5kZW50JzogJysxJyB9XSwgICAgICAgICAgLy8gb3V0ZGVudC9pbmRlbnRcbiAgICAgIFt7ICdkaXJlY3Rpb24nOiAncnRsJyB9XSwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dCBkaXJlY3Rpb25cblxuICAgICAgW3sgJ3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ10gfV0sICAvLyBjdXN0b20gZHJvcGRvd25cbiAgICAgIFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxuXG4gICAgICBbeyAnY29sb3InOiBuZXcgQXJyYXk8YW55PigpIH0sIHsgJ2JhY2tncm91bmQnOiBuZXcgQXJyYXk8YW55PigpIH1dLCAgICAgICAgICAvLyBkcm9wZG93biB3aXRoIGRlZmF1bHRzIGZyb20gdGhlbWVcbiAgICAgIFt7ICdmb250JzogbmV3IEFycmF5PGFueT4oKSB9XSxcbiAgICAgIFt7ICdhbGlnbic6IG5ldyBBcnJheTxhbnk+KCkgfV0sXG5cbiAgICAgIFsnY2xlYW4nXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxuXG4gICAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsaW5rIGFuZCBpbWFnZSwgdmlkZW9cbiAgICBdXG4gIH07XG5cbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0ge307XG5cbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCB0b29sYmFyRWxlbSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnW25neC1xdWlsbC10b29sYmFyXSdcbiAgICApO1xuXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAnPGRpdiBuZ3gtcXVpbGwtZWxlbWVudD48L2Rpdj4nXG4gICAgKTtcbiAgICB0aGlzLmVkaXRvckVsZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ1tuZ3gtcXVpbGwtZWxlbWVudF0nXG4gICAgKTtcblxuXG4gICAgaWYgKCFRdWlsbCkge1xuICAgICAgUXVpbGwgPSByZXF1aXJlKCdxdWlsbCcpO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyAgPSAgey4uLntcbiAgICAgIG1vZHVsZXM6IHRoaXMuZGVmYXVsdE1vZHVsZXMsXG4gICAgICBwbGFjZWhvbGRlcjogJ0luc2VydCB0ZXh0IGhlcmUgLi4uJyxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgIHRoZW1lOiAnc25vdycsXG4gICAgICBib3VuZGFyeTogZG9jdW1lbnQuYm9keVxuICAgIH0sIC4uLnRoaXMub3B0aW9uc307XG5cbiAgICBpZiAodG9vbGJhckVsZW0pIHtcbiAgICAgIHRoaXMub3B0aW9ucy5tb2R1bGVzWyd0b29sYmFyJ10gPSB0b29sYmFyRWxlbTtcbiAgICB9XG5cbiAgICB0aGlzLnF1aWxsRWRpdG9yID0gbmV3IFF1aWxsKHRoaXMuZWRpdG9yRWxlbSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMucXVpbGxFZGl0b3IucGFzdGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWFkeS5lbWl0KHRoaXMucXVpbGxFZGl0b3IpO1xuXG4gICAgdGhpcy5xdWlsbEVkaXRvci5vbignc2VsZWN0aW9uLWNoYW5nZScsIChyYW5nZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICAgICAgdGhpcy5ibHVyLmVtaXQodGhpcy5xdWlsbEVkaXRvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvY3VzLmVtaXQodGhpcy5xdWlsbEVkaXRvcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnF1aWxsRWRpdG9yLm9uKCd0ZXh0LWNoYW5nZScsIChkZWx0YTogYW55LCBvbGREZWx0YTogYW55LCBzb3VyY2U6IGFueSkgPT4ge1xuICAgICAgbGV0IGh0bWwgPSB0aGlzLmVkaXRvckVsZW0uY2hpbGRyZW5bMF0uaW5uZXJIVE1MO1xuICAgICAgY29uc3QgdGV4dCA9IHRoaXMucXVpbGxFZGl0b3IuZ2V0VGV4dCgpO1xuXG4gICAgICBpZiAoaHRtbCA9PT0gJzxwPjxicj48L3A+Jykge1xuICAgICAgICBodG1sID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKGh0bWwpO1xuXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgZWRpdG9yOiB0aGlzLnF1aWxsRWRpdG9yLFxuICAgICAgICBodG1sOiBodG1sLFxuICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1sncmVhZE9ubHknXSAmJiB0aGlzLnF1aWxsRWRpdG9yKSB7XG4gICAgICB0aGlzLnF1aWxsRWRpdG9yLmVuYWJsZSghY2hhbmdlc1sncmVhZE9ubHknXS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUoY3VycmVudFZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjdXJyZW50VmFsdWU7XG5cbiAgICBpZiAodGhpcy5xdWlsbEVkaXRvcikge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnF1aWxsRWRpdG9yLnBhc3RlSFRNTChjdXJyZW50VmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnF1aWxsRWRpdG9yLnNldFRleHQoJycpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cbn1cbiIsImltcG9ydCAna2F0ZXgnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFF1aWxsQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtcXVpbGwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogWyBOZ3hRdWlsbENvbXBvbmVudCBdLFxuICBleHBvcnRzOiBbIE5neFF1aWxsQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4UXVpbGxNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQWVJLEtBQVU7QUFFZDtJQW1ERSwyQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWxDMUMsbUJBQWMsR0FBRztZQUNmLE9BQU8sRUFBRTtnQkFDUCxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQztnQkFDekMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUU1QixDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUM1QyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUMzQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN2QyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUV4QixDQUFDLEVBQUUs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

/***/ }),

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z6\">\n  <mat-toolbar color=\"primary\">\n    <span>NgxQuill</span>\n  </mat-toolbar>\n</div>\n\n<header class=\"header-background\">\n  <div class=\"header-section\">\n    <div class=\"header-headline\">\n      <h1 class=\"mat-h1\">Angular Quill Editor</h1>\n    </div>\n  </div>\n</header>\n\n<div class=\"container\">\n  <h2>Default</h2>\n  <ngx-quill></ngx-quill>\n\n  <h2> Cutom toolbar </h2>\n\n  <ngx-quill [options]=\"editorOptions\" (change)=\"onContentChanged($event)\" (ready)=\"onReady($event)\">\n    <div ngx-quill-toolbar>\n      <div id=\"toolbar\">\n        <button class=\"ql-bold\"></button>\n        <button class=\"ql-italic\"></button>\n        <button id=\"custom-button\">&#8486;</button>\n      </div>\n    </div>\n  </ngx-quill>\n\n\n\n  <h2>Inline (Bubble theme)</h2>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form\" class=\"board-form\">\n    <ngx-quill [formControl]=\"content\" [options]=\"editorOptions2\" (change)=\"onContentChanged($event)\" (ready)=\"onReady($event)\"></ngx-quill>\n  </form>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 20px; }\n\n.header-background {\n  background: #3f51b5; }\n\n.header-section {\n  text-align: center;\n  padding: 60px 0; }\n\n.header-headline {\n  color: #fff; }\n\n.board-form {\n  border: 1px solid #ddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJhdmluZC9DT0RFQkFTRS9naXRodWIvbmd4LXF1aWxsL3Byb2plY3RzL25neC1xdWlsbC1kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUdEO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2hCOztBQUdEO0VBQ0UsWUFBVyxFQUNaOztBQUdEO0VBQ0UsdUJBQXNCLEVBQ3ZCIiwiZmlsZSI6InByb2plY3RzL25neC1xdWlsbC1kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5oZWFkZXItYmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcbn1cblxuXG4uaGVhZGVyLXNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuXG4uaGVhZGVyLWhlYWRsaW5lIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cblxuLmJvYXJkLWZvcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var quill_image_drop_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-image-drop-module */ "../../node_modules/quill-image-drop-module/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Quill = __webpack_require__(/*! quill */ "../../node_modules/quill/dist/quill.js");


Quill.register('modules/imageDrop', quill_image_drop_module__WEBPACK_IMPORTED_MODULE_1__["ImageDrop"]);
var AppComponent = /** @class */ (function () {
    function AppComponent(_fb) {
        this._fb = _fb;
        this.editorOptions = {
            modules: {
                formula: true,
                imageDrop: true,
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['formula'],
                    ['image', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                ],
            }
        };
        this.editorOptions2 = {
            theme: 'bubble',
            modules: {
                formula: true,
                imageDrop: true,
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['formula'],
                    ['image', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                ],
            }
        };
        this.form = _fb.group({
            'content': ['<p>Im inline editor exmaple </p>', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        this.content = this.form.controls['content'];
    }
    AppComponent.prototype.onContentChanged = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onReady = function ($event) {
        this.quill = $event;
        var customButton = document.querySelector('#custom-button');
        customButton.addEventListener('click', function () {
            var range = this.quill.getSelection();
            if (range) {
                this.quill.insertText(range.index, 'Ω');
            }
        });
    };
    AppComponent.prototype.submitAnnouncement = function (values) {
        if (this.form.valid) {
            console.log('Submit!', values);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.quill.disable();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dimpu_ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dimpu/ngx-quill */ "../../dist/dimpu/ngx-quill/fesm5/dimpu-ngx-quill.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _dimpu_ngx_quill__WEBPACK_IMPORTED_MODULE_3__["NgxQuillModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! katex */ "../../node_modules/katex/dist/katex.js");
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(katex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daravind/CODEBASE/github/ngx-quill/projects/ngx-quill-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map