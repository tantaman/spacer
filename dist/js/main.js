import "./log.js";
not_null(document.getElementById("canvas"))
    .then(init_game)
    .else(() => tell_user(error("Cannot initialize game")));
function error(msg) { }
function init_game(canvas) {
    full_screen(canvas);
}
function tell_user(e) { }
function full_screen(el) {
    if (el == null) {
        return;
    }
    el.style.width = parseInt(window.innerWidth, 10);
    el.style.height = parseInt(window.innerHeight, 10);
}
function not_null(x) {
    if (x == null) {
        return new Fail(null);
    }
    return new Pass(x);
}
class Pass {
    p;
    constructor(p) {
        this.p = p;
    }
    then(cb) {
        return this;
    }
    else(cb) {
        return this;
    }
}
class Fail {
    p;
    constructor(p) {
        this.p = p;
    }
    then(cb) {
        return this;
    }
    else(cb) {
        return this;
    }
}
//# sourceMappingURL=main.js.map