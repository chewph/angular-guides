"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* tslint:disable use-input-property-decorator use-output-property-decorator */
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
        this.hero = new hero_1.Hero(-1, '', 'Zzzzzzzz'); // default sleeping hero
        // heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
        // Public Domain terms of use: http://www.wpclipart.com/terms.html
        this.heroImageUrl = 'images/hero.png';
        this.lineThrough = '';
        this.prefix = '';
        // This component make a request but it can't actually delete a hero.
        this.deleteRequest = new core_1.EventEmitter();
    }
    HeroDetailComponent.prototype.delete = function () {
        this.deleteRequest.emit(this.hero);
        this.lineThrough = this.lineThrough ? '' : 'line-through';
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeroDetailComponent.prototype, "prefix", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        inputs: ['hero'],
        outputs: ['deleteRequest'],
        styles: ['button {margin-left: 8px} div {margin: 8px 0} img {height:24px}'],
        template: "\n\t\t<div>\n\t\t\t<img src=\"{{heroImageUrl}}\">\n\t\t\t<span [style.text-decoration]=\"lineThrough\">\n      {{prefix}} {{hero?.name}}\n    </span>\n\t\t\t<button (click)=\"delete()\">Delete</button>\n\t\t</div>"
    })
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
var BigHeroDetailComponent = (function (_super) {
    __extends(BigHeroDetailComponent, _super);
    function BigHeroDetailComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deleteRequest = new core_1.EventEmitter();
        return _this;
    }
    BigHeroDetailComponent.prototype.delete = function () {
        this.deleteRequest.emit(this.hero);
    };
    return BigHeroDetailComponent;
}(HeroDetailComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], BigHeroDetailComponent.prototype, "hero", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BigHeroDetailComponent.prototype, "deleteRequest", void 0);
BigHeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'big-hero-detail',
        template: "\n\t\t<div class=\"detail\">\n\t\t\t<img src=\"{{heroImageUrl}}\">\n\t\t\t<div><b>{{hero?.name}}</b></div>\n\t\t\t<div>Name: {{hero?.name}}</div>\n\t\t\t<div>Emotion: {{hero?.emotion}}</div>\n\t\t\t<div>Birthdate: {{hero?.birthdate | date:'longDate'}}</div>\n\t\t\t<div>Web: <a href=\"{{hero?.url}}\" target=\"_blank\">{{hero?.url}}</a></div>\n\t\t\t<div>Rate/hr: {{hero?.rate | currency:'EUR'}}</div>\n\t\t\t<br clear=\"all\">\n\t\t\t<button (click)=\"delete()\">Delete</button>\n\t\t</div>\n\t",
        styles: ["\n\t\t.detail {\n\t\t\tborder: 1px solid black;\n\t\t\tpadding: 4px;\n\t\t\tmax-width: 450px;\n\t\t}\n\n\t\timg {\n\t\t\tfloat: left;\n\t\t\tmargin-right: 8px;\n\t\t\theight: 100px;\n\t\t}\n\t"]
    })
], BigHeroDetailComponent);
exports.BigHeroDetailComponent = BigHeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map