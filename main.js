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
        this.quillEditor.enable(false);
        setTimeout(function () {
            _this.quillEditor.enable(true);
        }, 0);
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
        if (changes['content'] && this.quillEditor) {
            this.quillEditor.pasteHTML(this.content);
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
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltcHUtbmd4LXF1aWxsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGltcHUvbmd4LXF1aWxsL2xpYi9uZ3gtcXVpbGwuY29tcG9uZW50LnRzIiwibmc6Ly9AZGltcHUvbmd4LXF1aWxsL2xpYi9uZ3gtcXVpbGwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5sZXQgUXVpbGw6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXF1aWxsJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJbbmd4LXF1aWxsLXRvb2xiYXJdXCI+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlVXJsczogW1xuICBdLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4UXVpbGxDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG4gIH1dLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE5neFF1aWxsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG5cbiAgcXVpbGxFZGl0b3I6IGFueTtcbiAgZWRpdG9yRWxlbTogSFRNTEVsZW1lbnQ7XG4gIGRlZmF1bHRNb2R1bGVzID0ge1xuICAgIHRvb2xiYXI6IFtcbiAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddLCAgICAgICAgLy8gdG9nZ2xlZCBidXR0b25zXG4gICAgICBbJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxuXG4gICAgICBbeyAnaGVhZGVyJzogMSB9LCB7ICdoZWFkZXInOiAyIH1dLCAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXG4gICAgICBbeyAnbGlzdCc6ICdvcmRlcmVkJ30sIHsgJ2xpc3QnOiAnYnVsbGV0JyB9XSxcbiAgICAgIFt7ICdzY3JpcHQnOiAnc3ViJ30sIHsgJ3NjcmlwdCc6ICdzdXBlcicgfV0sICAgICAgLy8gc3VwZXJzY3JpcHQvc3Vic2NyaXB0XG4gICAgICBbeyAnaW5kZW50JzogJy0xJ30sIHsgJ2luZGVudCc6ICcrMScgfV0sICAgICAgICAgIC8vIG91dGRlbnQvaW5kZW50XG4gICAgICBbeyAnZGlyZWN0aW9uJzogJ3J0bCcgfV0sICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHQgZGlyZWN0aW9uXG5cbiAgICAgIFt7ICdzaXplJzogWydzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZSddIH1dLCAgLy8gY3VzdG9tIGRyb3Bkb3duXG4gICAgICBbeyAnaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXSB9XSxcblxuICAgICAgW3sgJ2NvbG9yJzogbmV3IEFycmF5PGFueT4oKSB9LCB7ICdiYWNrZ3JvdW5kJzogbmV3IEFycmF5PGFueT4oKSB9XSwgICAgICAgICAgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXG4gICAgICBbeyAnZm9udCc6IG5ldyBBcnJheTxhbnk+KCkgfV0sXG4gICAgICBbeyAnYWxpZ24nOiBuZXcgQXJyYXk8YW55PigpIH1dLFxuXG4gICAgICBbJ2NsZWFuJ10sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cblxuICAgICAgWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10gICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGluayBhbmQgaW1hZ2UsIHZpZGVvXG4gICAgXVxuICB9O1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xuICBASW5wdXQoKSBjb250ZW50OiBhbnk7XG5cbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCB0b29sYmFyRWxlbSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnW25neC1xdWlsbC10b29sYmFyXSdcbiAgICApO1xuXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAnPGRpdiBuZ3gtcXVpbGwtZWxlbWVudD48L2Rpdj4nXG4gICAgKTtcbiAgICB0aGlzLmVkaXRvckVsZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ1tuZ3gtcXVpbGwtZWxlbWVudF0nXG4gICAgKTtcblxuXG4gICAgaWYgKCFRdWlsbCkge1xuICAgICAgUXVpbGwgPSByZXF1aXJlKCdxdWlsbCcpO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyAgPSAgey4uLntcbiAgICAgIG1vZHVsZXM6IHRoaXMuZGVmYXVsdE1vZHVsZXMsXG4gICAgICBwbGFjZWhvbGRlcjogJ0luc2VydCB0ZXh0IGhlcmUgLi4uJyxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgIHRoZW1lOiAnc25vdycsXG4gICAgICBib3VuZGFyeTogZG9jdW1lbnQuYm9keVxuICAgIH0sIC4uLnRoaXMub3B0aW9uc307XG5cbiAgICBpZiAodG9vbGJhckVsZW0pIHtcbiAgICAgIHRoaXMub3B0aW9ucy5tb2R1bGVzWyd0b29sYmFyJ10gPSB0b29sYmFyRWxlbTtcbiAgICB9XG5cbiAgICB0aGlzLnF1aWxsRWRpdG9yID0gbmV3IFF1aWxsKHRoaXMuZWRpdG9yRWxlbSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMucXVpbGxFZGl0b3IucGFzdGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWFkeS5lbWl0KHRoaXMucXVpbGxFZGl0b3IpO1xuXG4gICAgdGhpcy5xdWlsbEVkaXRvci5vbignc2VsZWN0aW9uLWNoYW5nZScsIChyYW5nZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICAgICAgdGhpcy5ibHVyLmVtaXQodGhpcy5xdWlsbEVkaXRvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvY3VzLmVtaXQodGhpcy5xdWlsbEVkaXRvcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnF1aWxsRWRpdG9yLm9uKCd0ZXh0LWNoYW5nZScsIChkZWx0YTogYW55LCBvbGREZWx0YTogYW55LCBzb3VyY2U6IGFueSkgPT4ge1xuICAgICAgbGV0IGh0bWwgPSB0aGlzLmVkaXRvckVsZW0uY2hpbGRyZW5bMF0uaW5uZXJIVE1MO1xuICAgICAgY29uc3QgdGV4dCA9IHRoaXMucXVpbGxFZGl0b3IuZ2V0VGV4dCgpO1xuXG4gICAgICBpZiAoaHRtbCA9PT0gJzxwPjxicj48L3A+Jykge1xuICAgICAgICBodG1sID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKGh0bWwpO1xuXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgZWRpdG9yOiB0aGlzLnF1aWxsRWRpdG9yLFxuICAgICAgICBodG1sOiBodG1sLFxuICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnF1aWxsRWRpdG9yLmVuYWJsZShmYWxzZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnF1aWxsRWRpdG9yLmVuYWJsZSh0cnVlKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1sncmVhZE9ubHknXSAmJiB0aGlzLnF1aWxsRWRpdG9yKSB7XG4gICAgICB0aGlzLnF1aWxsRWRpdG9yLmVuYWJsZSghY2hhbmdlc1sncmVhZE9ubHknXS5jdXJyZW50VmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzWydjb250ZW50J10gJiYgdGhpcy5xdWlsbEVkaXRvcikge1xuICAgICAgdGhpcy5xdWlsbEVkaXRvci5wYXN0ZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKGN1cnJlbnRWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY3VycmVudFZhbHVlO1xuXG4gICAgaWYgKHRoaXMucXVpbGxFZGl0b3IpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5xdWlsbEVkaXRvci5wYXN0ZUhUTUwoY3VycmVudFZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5xdWlsbEVkaXRvci5zZXRUZXh0KCcnKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iLCJpbXBvcnQgJ2thdGV4JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hRdWlsbENvbXBvbmVudCB9IGZyb20gJy4vbmd4LXF1aWxsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFsgTmd4UXVpbGxDb21wb25lbnQgXSxcbiAgZXhwb3J0czogWyBOZ3hRdWlsbENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFF1aWxsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFlSSxLQUFVO0FBRWQ7SUFtREUsMkJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFuQzFDLG1CQUFjLEdBQUc7WUFDZixPQUFPLEVBQUU7Z0JBQ1AsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUM7Z0JBQ3pDLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztnQkFFNUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDbEMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFF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

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _custom_toolbar_custom_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-toolbar/custom-toolbar.component */ "./src/app/custom-toolbar/custom-toolbar.component.ts");
/* harmony import */ var _themes_themes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themes/themes.component */ "./src/app/themes/themes.component.ts");
/* harmony import */ var _image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-handler/image-handler.component */ "./src/app/image-handler/image-handler.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'custom-toolbar', component: _custom_toolbar_custom_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["CustomToolbarComponent"] },
    { path: 'themes', component: _themes_themes_component__WEBPACK_IMPORTED_MODULE_5__["ThemesComponent"] },
    { path: 'image-handler', component: _image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_6__["ImageHandlerComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</app-layout>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtcXVpbGwtZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _custom_toolbar_custom_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-toolbar/custom-toolbar.component */ "./src/app/custom-toolbar/custom-toolbar.component.ts");
/* harmony import */ var _themes_themes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./themes/themes.component */ "./src/app/themes/themes.component.ts");
/* harmony import */ var _image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image-handler/image-handler.component */ "./src/app/image-handler/image-handler.component.ts");
/* harmony import */ var _modals_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/image-uploader/image-uploader.component */ "./src/app/modals/image-uploader/image-uploader.component.ts");
/* harmony import */ var _dimpu_ngx_file_manager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @dimpu/ngx-file-manager */ "../../node_modules/@dimpu/ngx-file-manager/fesm5/dimpu-ngx-file-manager.js");
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
                _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _custom_toolbar_custom_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["CustomToolbarComponent"],
                _themes_themes_component__WEBPACK_IMPORTED_MODULE_12__["ThemesComponent"],
                _image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_13__["ImageHandlerComponent"],
                _modals_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_14__["ImageUploaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _dimpu_ngx_file_manager__WEBPACK_IMPORTED_MODULE_15__["NgxFileManagerModule"],
                _dimpu_ngx_quill__WEBPACK_IMPORTED_MODULE_3__["NgxQuillModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            exports: [],
            entryComponents: [_modals_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_14__["ImageUploaderComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-toolbar/custom-toolbar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/custom-toolbar/custom-toolbar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtcXVpbGwtZGVtby9zcmMvYXBwL2N1c3RvbS10b29sYmFyL2N1c3RvbS10b29sYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/custom-toolbar/custom-toolbar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/custom-toolbar/custom-toolbar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Cutom toolbar </h2>\n\n<ngx-quill [options]=\"editorOptions\" (ready)=\"onReady($event)\">\n  <div ngx-quill-toolbar>\n    <div id=\"toolbar\">\n      <button class=\"ql-bold\"></button>\n      <button class=\"ql-italic\"></button>\n      <button class=\"ql-formula\"></button>\n\n      <button id=\"custom-button\">&#8486;</button>\n      <button id=\"custom-button2\">OI</button>\n    </div>\n  </div>\n</ngx-quill>\n"

/***/ }),

/***/ "./src/app/custom-toolbar/custom-toolbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/custom-toolbar/custom-toolbar.component.ts ***!
  \************************************************************/
/*! exports provided: CustomToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomToolbarComponent", function() { return CustomToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as QuillNS from 'quill';
// import { Quill } from 'quill';
var Quill = window.Quill;
if (!Quill) {
    Quill = __webpack_require__(/*! quill */ "../../node_modules/quill/dist/quill.js");
}
var BlockEmbed = Quill.import('blots/block/embed');
var OIBlot = /** @class */ (function (_super) {
    __extends(OIBlot, _super);
    function OIBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OIBlot;
}(BlockEmbed));
OIBlot.blotName = 'OI';
OIBlot.tagName = 'order-interation';
Quill.register(OIBlot);
var CustomToolbarComponent = /** @class */ (function () {
    function CustomToolbarComponent() {
        this.editorOptions = {
            modules: {
                formula: true,
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['formula'],
                    ['image', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                ],
            }
        };
    }
    CustomToolbarComponent.prototype.ngOnInit = function () {
        console.log(Quill);
    };
    CustomToolbarComponent.prototype.onReady = function (quill) {
        console.log(quill);
        var customButton = document.querySelector('#custom-button');
        customButton.addEventListener('click', function () {
            var range = quill.getSelection();
            if (range) {
                quill.insertText(range.index, 'Ω');
            }
        });
        var customButton2 = document.querySelector('#custom-button2');
        customButton2.addEventListener('click', function () {
            var range = quill.getSelection(true);
            if (range) {
                // quill.insertEmbed(range.index, '<order-interation></order-interation>');
                quill.insertText(range.index, '\n', Quill.sources.USER);
                var name_1 = 'samc-name-1';
                quill.insertEmbed(range.index + 1, 'order-interation', name_1, Quill.sources.USER);
                quill.formatText(range.index + 1, 1, { height: '170', width: '400' });
                quill.setSelection(range.index + 2, Quill.sources.SILENT);
            }
        });
    };
    CustomToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-toolbar',
            template: __webpack_require__(/*! ./custom-toolbar.component.html */ "./src/app/custom-toolbar/custom-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./custom-toolbar.component.css */ "./src/app/custom-toolbar/custom-toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomToolbarComponent);
    return CustomToolbarComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtcXVpbGwtZGVtby9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Default</h2>\n<ngx-quill [content]=\"content\" (change)=\"onContentChange($event)\"></ngx-quill>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.content = '<p>some content</p>';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onContentChange = function (e) {
        console.log(e);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image-handler/image-handler.component.css":
/*!***********************************************************!*\
  !*** ./src/app/image-handler/image-handler.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtcXVpbGwtZGVtby9zcmMvYXBwL2ltYWdlLWhhbmRsZXIvaW1hZ2UtaGFuZGxlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/image-handler/image-handler.component.html":
/*!************************************************************!*\
  !*** ./src/app/image-handler/image-handler.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Custom Image Handlers</h2>\n<ngx-quill [options]=\"editorOptionsImageOnly\"\n(ready)=\"onReady($event)\"\n></ngx-quill>\n"

/***/ }),

/***/ "./src/app/image-handler/image-handler.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/image-handler/image-handler.component.ts ***!
  \**********************************************************/
/*! exports provided: ImageHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHandlerComponent", function() { return ImageHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modals_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/image-uploader/image-uploader.component */ "./src/app/modals/image-uploader/image-uploader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageHandlerComponent = /** @class */ (function () {
    function ImageHandlerComponent(dialog) {
        var _this = this;
        this.dialog = dialog;
        this.editorOptionsImageOnly = {
            modules: {
                formula: true,
                toolbar: {
                    container: [['image']],
                    handlers: {
                        image: function () {
                            var dialogRef = _this.dialog.open(_modals_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_2__["ImageUploaderComponent"]);
                            dialogRef.afterClosed().subscribe(function (res) {
                                if (res) {
                                    var range = _this.editor.getSelection();
                                    _this.editor.insertEmbed(range.index, 'image', res.thumb);
                                }
                            });
                        }
                    }
                }
            }
        };
    }
    ImageHandlerComponent.prototype.ngOnInit = function () {
    };
    ImageHandlerComponent.prototype.onReady = function (quill) {
        this.editor = quill;
        console.log(quill);
    };
    ImageHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-handler',
            template: __webpack_require__(/*! ./image-handler.component.html */ "./src/app/image-handler/image-handler.component.html"),
            styles: [__webpack_require__(/*! ./image-handler.component.css */ "./src/app/image-handler/image-handler.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ImageHandlerComponent);
    return ImageHandlerComponent;
}());



/***/ }),

/***/ "./src/app/modals/image-uploader/image-uploader.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modals/image-uploader/image-uploader.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtcXVpbGwtZGVtby9zcmMvYXBwL21vZGFscy9pbWFnZS11cGxvYWRlci9pbWFnZS11cGxvYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modals/image-uploader/image-uploader.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modals/image-uploader/image-uploader.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-file-manager [apiConfig]=\"apiConfig\" (fileUploaded)=\"onFileUploaded($event)\" (fileSelected)=\"onFileSelected($event)\"></ngx-file-manager>\n"

/***/ }),

/***/ "./src/app/modals/image-uploader/image-uploader.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modals/image-uploader/image-uploader.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploaderComponent", function() { return ImageUploaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageUploaderComponent = /** @class */ (function () {
    function ImageUploaderComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.apiConfig = {
            baseUrl: 'http://localhost:3100/api/',
            listUrl: 'list',
            uploadUrl: 'upload'
        };
    }
    ImageUploaderComponent.prototype.onFileUploaded = function ($event) {
        this.dialogRef.close($event);
        console.log($event);
    };
    ImageUploaderComponent.prototype.onFileSelected = function ($event) {
        this.dialogRef.close($event);
        console.log($event);
    };
    ImageUploaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-uploader',
            template: __webpack_require__(/*! ./image-uploader.component.html */ "./src/app/modals/image-uploader/image-uploader.component.html"),
            styles: [__webpack_require__(/*! ./image-uploader.component.css */ "./src/app/modals/image-uploader/image-uploader.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ImageUploaderComponent);
    return ImageUploaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/layout.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/layout.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>NgxQuill</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item [routerLink]=\"['/home']\" routerLinkActive=\"active\">Home</a>\n      <a mat-list-item [routerLink]=\"['/custom-toolbar']\">Custom Toolbar</a>\n      <a mat-list-item [routerLink]=\"['/themes']\">Themes</a>\n      <a mat-list-item [routerLink]=\"['/image-handler']\">Image Handler</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n\n    <mat-toolbar class=\"mat-elevation-z6\" color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>NgxQuill</span>\n    </mat-toolbar>\n\n    <header class=\"header-background\">\n      <div class=\"header-section\">\n        <div class=\"header-headline\">\n          <h1 class=\"mat-h1\">Angular Quill Editor</h1>\n        </div>\n      </div>\n    </header>\n\n    <!-- content goes here  -->\n    <ng-content></ng-content>\n    <!-- content ends here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/shared/layout/layout.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/layout.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.header-background {\n  background: #3f51b5; }\n\n.header-section {\n  text-align: center;\n  padding: 60px 0; }\n\n.header-headline {\n  color: #fff; }\n\n.active {\n  background: rgba(0, 0, 0, 0.04); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJhdmluZC9DT0RFQkFTRS9naXRodWIvbmd4LXF1aWxsL3Byb2plY3RzL25neC1xdWlsbC1kZW1vL3NyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSx5QkFBZ0I7RUFBaEIsaUJBQWdCO0VBQ2hCLE9BQU07RUFDTixXQUFVLEVBQ1g7O0FBR0Q7RUFDRSxvQkFBbUIsRUFDcEI7O0FBR0Q7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDaEI7O0FBR0Q7RUFDRSxZQUFXLEVBQ1o7O0FBTUQ7RUFDRSxnQ0FBK0IsRUFDaEMiLCJmaWxlIjoicHJvamVjdHMvbmd4LXF1aWxsLWRlbW8vc3JjL2FwcC9zaGFyZWQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuXG4uaGVhZGVyLWJhY2tncm91bmR7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG59XG5cblxuLmhlYWRlci1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cblxuLmhlYWRlci1oZWFkbGluZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5cblxuXG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/layout/layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/shared/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/shared/layout/layout.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/themes/themes.component.css":
/*!*********************************************!*\
  !*** ./src/app/themes/themes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board-form {\n  border: 1px solid #ddd;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1xdWlsbC1kZW1vL3NyYy9hcHAvdGhlbWVzL3RoZW1lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0NBQ3hCIiwiZmlsZSI6InByb2plY3RzL25neC1xdWlsbC1kZW1vL3NyYy9hcHAvdGhlbWVzL3RoZW1lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkLWZvcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/themes/themes.component.html":
/*!**********************************************!*\
  !*** ./src/app/themes/themes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Bubble theme</h2>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form\" class=\"board-form\">\n  <ngx-quill [formControl]=\"content\" [options]=\"editorOptions\"></ngx-quill>\n</form>\n"

/***/ }),

/***/ "./src/app/themes/themes.component.ts":
/*!********************************************!*\
  !*** ./src/app/themes/themes.component.ts ***!
  \********************************************/
/*! exports provided: ThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesComponent", function() { return ThemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemesComponent = /** @class */ (function () {
    function ThemesComponent(_fb) {
        this._fb = _fb;
        this.editorOptions = {
            theme: 'bubble',
        };
        this.form = _fb.group({
            'content': ['<p>Im inline editor example </p>', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
        });
        this.content = this.form.controls['content'];
    }
    ThemesComponent.prototype.submitAnnouncement = function (values) {
        if (this.form.valid) {
            console.log('Submit!', values);
        }
    };
    ThemesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-themes',
            template: __webpack_require__(/*! ./themes.component.html */ "./src/app/themes/themes.component.html"),
            styles: [__webpack_require__(/*! ./themes.component.css */ "./src/app/themes/themes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ThemesComponent);
    return ThemesComponent;
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