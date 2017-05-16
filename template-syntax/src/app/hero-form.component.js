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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var hero_1 = require("./hero");
var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this._submitMessage = '';
    }
    Object.defineProperty(HeroFormComponent.prototype, "submitMessage", {
        get: function () {
            if (!this.form.valid) {
                this._submitMessage = '';
            }
            return this._submitMessage;
        },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent.prototype.onSubmit = function (form) {
        this._submitMessage = 'Submitted. form value is ' + JSON.stringify(form.value);
    };
    return HeroFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroFormComponent.prototype, "hero", void 0);
__decorate([
    core_1.ViewChild('heroForm'),
    __metadata("design:type", forms_1.NgForm)
], HeroFormComponent.prototype, "form", void 0);
HeroFormComponent = __decorate([
    core_1.Component({
        selector: 'hero-form',
        templateUrl: './hero-form.component.html',
        styles: ["\n\t\tbutton {\n\t\t\tmargin: 6px 0;\n\t\t}\n\n\t\t#heroForm {\n\t\t\tborder: 1px solid black;\n\t\t\tmargin: 20px 0;\n\t\t\tpadding: 8px;\n\t\t\tmax-width: 350px;\n\t\t}\n\t"]
    })
], HeroFormComponent);
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map