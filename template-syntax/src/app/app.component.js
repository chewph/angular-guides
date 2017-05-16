"use strict";
/* tslint:disable:forin member-ordering */
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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color = exports.Color || (exports.Color = {}));
;
/**
 * Giant grab bag of stuff to drive the chapter
 */
var AppComponent = (function () {
    function AppComponent() {
        this.actionName = 'Go for it';
        this.badCurly = 'bad curly';
        this.classes = 'special';
        this.help = '';
        this.canSave = true;
        this.clicked = '';
        this.clickMessage = '';
        this.clickMessage2 = '';
        this.Color = Color;
        this.color = Color.Red;
        this.evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
        this.fontSizePx = 16;
        this.title = 'Template Syntax';
        this.name = hero_1.Hero.heroes[0].name;
        // trackBy change counting
        this.heroesNoTrackByCount = 0;
        this.heroesWithTrackByCount = 0;
        this.heroesWithTrackByCountReset = 0;
        this.heroIdIncrement = 1;
        // heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
        // Public Domain terms of use: http://www.wpclipart.com/terms.html
        this.heroImageUrl = 'images/hero.png';
        // villainImageUrl = 'http://www.clker.com/cliparts/u/s/y/L/x/9/villain-man-hi.png'
        // Public Domain terms of use http://www.clker.com/disclaimer.html
        this.villainImageUrl = 'images/villain.png';
        this.iconUrl = 'images/ng-logo.png';
        this.isActive = false;
        this.isSpecial = true;
        this.isUnchanged = true;
        this.product = {
            name: 'frimfram',
            price: 42
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.resetHeroes();
        this.setCurrentClasses();
        this.setCurrentStyles();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Detect effects of NgForTrackBy
        trackChanges(this.heroesNoTrackBy, function () { return _this.heroesNoTrackByCount++; });
        trackChanges(this.heroesWithTrackBy, function () { return _this.heroesWithTrackByCount++; });
    };
    AppComponent.prototype.alert = function (msg) { window.alert(msg); };
    AppComponent.prototype.callFax = function (value) { this.alert("Faxing " + value + " ..."); };
    AppComponent.prototype.callPhone = function (value) { this.alert("Calling " + value + " ..."); };
    AppComponent.prototype.changeIds = function () {
        var _this = this;
        this.resetHeroes();
        this.heroes.forEach(function (h) { return h.id += 10 * _this.heroIdIncrement++; });
        this.heroesWithTrackByCountReset = -1;
    };
    AppComponent.prototype.clearTrackByCounts = function () {
        var trackByCountReset = this.heroesWithTrackByCountReset;
        this.resetHeroes();
        this.heroesNoTrackByCount = -1;
        this.heroesWithTrackByCount = trackByCountReset;
        this.heroIdIncrement = 1;
    };
    AppComponent.prototype.colorToggle = function () { this.color = (this.color === Color.Red) ? Color.Blue : Color.Red; };
    AppComponent.prototype.deleteHero = function (hero) {
        this.alert("Delete " + (hero ? hero.name : 'the hero') + ".");
    };
    AppComponent.prototype.getVal = function () { return 2; };
    Object.defineProperty(AppComponent.prototype, "nullHero", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onClickMe = function (event) {
        var evtMsg = event ? ' Event target class is ' + event.target.className : '';
        this.alert('Click me.' + evtMsg);
    };
    AppComponent.prototype.onSave = function (event) {
        var evtMsg = event ? ' Event target is ' + event.target.innerText : '';
        this.alert('Saved.' + evtMsg);
        if (event) {
            event.stopPropagation();
        }
    };
    AppComponent.prototype.onSubmit = function () { };
    // updates with fresh set of cloned heroes
    AppComponent.prototype.resetHeroes = function () {
        this.heroes = hero_1.Hero.heroes.map(function (hero) { return hero.clone(); });
        this.currentHero = this.heroes[0];
        this.heroesWithTrackByCountReset = 0;
    };
    AppComponent.prototype.setUppercaseName = function (name) {
        this.currentHero.name = name.toUpperCase();
    };
    AppComponent.prototype.setCurrentClasses = function () {
        // CSS classes: added/removed per current state of component properties
        this.currentClasses = {
            saveable: this.canSave,
            modified: !this.isUnchanged,
            special: this.isSpecial
        };
    };
    AppComponent.prototype.setCurrentStyles = function () {
        // CSS styles: set per current state of component properties
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-weight': !this.isUnchanged ? 'bold' : 'normal',
            'font-size': this.isSpecial ? '24px' : '12px'
        };
    };
    AppComponent.prototype.trackByHeroes = function (index, hero) { return hero.id; };
    AppComponent.prototype.trackById = function (index, item) { return item['id']; };
    return AppComponent;
}());
__decorate([
    core_1.ViewChildren('noTrackBy'),
    __metadata("design:type", core_1.QueryList)
], AppComponent.prototype, "heroesNoTrackBy", void 0);
__decorate([
    core_1.ViewChildren('withTrackBy'),
    __metadata("design:type", core_1.QueryList)
], AppComponent.prototype, "heroesWithTrackBy", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
// helper to track changes to viewChildren
function trackChanges(views, changed) {
    var oldRefs = views.toArray();
    views.changes.subscribe(function (changes) {
        var changedRefs = changes.toArray();
        // Is every changed ElemRef the same as old and in the same position
        var isSame = oldRefs.every(function (v, i) { return v === changedRefs[i]; });
        if (!isSame) {
            oldRefs = changedRefs;
            // wait a tick because called after views are constructed
            setTimeout(changed, 0);
        }
    });
}
//# sourceMappingURL=app.component.js.map