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
var hero_1 = require("./hero");
var HappyHeroComponent = (function () {
    function HappyHeroComponent() {
    }
    return HappyHeroComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HappyHeroComponent.prototype, "hero", void 0);
HappyHeroComponent = __decorate([
    core_1.Component({
        selector: 'happy-hero',
        template: "Wow. You like {{hero.name}}. What a happy hero ... just like you."
    })
], HappyHeroComponent);
exports.HappyHeroComponent = HappyHeroComponent;
var SadHeroComponent = (function () {
    function SadHeroComponent() {
    }
    return SadHeroComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], SadHeroComponent.prototype, "hero", void 0);
SadHeroComponent = __decorate([
    core_1.Component({
        selector: 'sad-hero',
        template: "You like {{hero.name}}? Such a sad hero. Are you sad too?"
    })
], SadHeroComponent);
exports.SadHeroComponent = SadHeroComponent;
var ConfusedHeroComponent = (function () {
    function ConfusedHeroComponent() {
    }
    return ConfusedHeroComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], ConfusedHeroComponent.prototype, "hero", void 0);
ConfusedHeroComponent = __decorate([
    core_1.Component({
        selector: 'confused-hero',
        template: "Are you as confused as {{hero.name}}?"
    })
], ConfusedHeroComponent);
exports.ConfusedHeroComponent = ConfusedHeroComponent;
var UnknownHeroComponent = (function () {
    function UnknownHeroComponent() {
    }
    Object.defineProperty(UnknownHeroComponent.prototype, "message", {
        get: function () {
            return this.hero && this.hero.name ?
                this.hero.name + " is strange and mysterious." :
                'Are you feeling indecisive?';
        },
        enumerable: true,
        configurable: true
    });
    return UnknownHeroComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], UnknownHeroComponent.prototype, "hero", void 0);
UnknownHeroComponent = __decorate([
    core_1.Component({
        selector: 'unknown-hero',
        template: "{{message}}"
    })
], UnknownHeroComponent);
exports.UnknownHeroComponent = UnknownHeroComponent;
exports.heroSwitchComponents = [HappyHeroComponent, SadHeroComponent, ConfusedHeroComponent, UnknownHeroComponent];
//# sourceMappingURL=hero-switch.components.js.map