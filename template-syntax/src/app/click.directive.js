"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable use-output-property-decorator */
var core_1 = require("@angular/core");
var ClickDirective = (function () {
    function ClickDirective(el) {
        var _this = this;
        this.clicks = new core_1.EventEmitter(); //  @Output(alias) propertyName = ...
        this.toggle = false;
        el.nativeElement
            .addEventListener('click', function (event) {
            _this.toggle = !_this.toggle;
            _this.clicks.emit(_this.toggle ? 'Click!' : '');
        });
    }
    return ClickDirective;
}());
__decorate([
    core_1.Output('myClick'),
    __metadata("design:type", Object)
], ClickDirective.prototype, "clicks", void 0);
ClickDirective = __decorate([
    core_1.Directive({ selector: '[myClick]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ClickDirective);
exports.ClickDirective = ClickDirective;
var ClickDirective2 = (function () {
    function ClickDirective2(el) {
        var _this = this;
        this.clicks = new core_1.EventEmitter();
        this.toggle = false;
        el.nativeElement
            .addEventListener('click', function (event) {
            _this.toggle = !_this.toggle;
            _this.clicks.emit(_this.toggle ? 'Click2!' : '');
        });
    }
    return ClickDirective2;
}());
ClickDirective2 = __decorate([
    core_1.Directive({
        selector: '[myClick2]',
        outputs: ['clicks:myClick'] // propertyName:alias
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ClickDirective2);
exports.ClickDirective2 = ClickDirective2;
//# sourceMappingURL=click.directive.js.map