"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hero = (function () {
    function Hero(id, name, emotion, birthdate, url, rate) {
        if (rate === void 0) { rate = 100; }
        this.id = id;
        this.name = name;
        this.emotion = emotion;
        this.birthdate = birthdate;
        this.url = url;
        this.rate = rate;
        this.id = id ? id : Hero.nextId++;
    }
    Hero.prototype.clone = function () {
        return Object.assign(new Hero(), this);
    };
    return Hero;
}());
Hero.nextId = 0;
Hero.heroes = [
    new Hero(null, 'Hercules', 'happy', new Date(1970, 1, 25), 'http://www.imdb.com/title/tt0065832/', 325),
    new Hero(1, 'Mr. Nice', 'happy'),
    new Hero(2, 'Narco', 'sad'),
    new Hero(3, 'Windstorm', 'confused'),
    new Hero(4, 'Magneta')
];
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map