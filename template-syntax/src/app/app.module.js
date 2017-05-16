"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var hero_detail_component_1 = require("./hero-detail.component");
var click_directive_1 = require("./click.directive");
var hero_form_component_1 = require("./hero-form.component");
var hero_switch_components_1 = require("./hero-switch.components");
var sizer_component_1 = require("./sizer.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            hero_detail_component_1.BigHeroDetailComponent,
            hero_detail_component_1.HeroDetailComponent,
            hero_form_component_1.HeroFormComponent,
            hero_switch_components_1.heroSwitchComponents,
            click_directive_1.ClickDirective,
            click_directive_1.ClickDirective2,
            sizer_component_1.SizerComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map