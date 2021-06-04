import "./log.js";
function error(msg) {
    return new Error(msg);
}
function start_game(canvas) {
    full_screen(canvas);
}
function tell_user(e) { }
function full_screen(el) {
    el.width = window.innerWidth;
    el.height = window.innerHeight;
}
function if_string(x, f) {
    if (typeof x === "string") {
        return f(x);
    }
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
        cb(this.p);
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
        cb(this.p);
        return this;
    }
}
not_null(document.getElementById("canvas"))
    .then(start_game)
    .else(() => tell_user(error("Cannot initialize game")));
//# sourceMappingURL=main.js.map