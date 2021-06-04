import "./log.js";

not_null(document.getElementById("canvas"))
  .then(init_game)
  .else(() => tell_user(error("Cannot initialize game")));

function error(msg: string) {}

function init_game(canvas: HTMLCanvasElement) {
  full_screen(canvas);
}

function tell_user(e: Error) {}

function full_screen(el: HTMLElement | null) {
  if (el == null) {
    return;
  }
  el.style.width = parseInt(window.innerWidth, 10);
  el.style.height = parseInt(window.innerHeight, 10);
}

function not_null<T>(x: T | null): Condition<T, null> {
  if (x == null) {
    return new Fail(null);
  }

  return new Pass(x);
}

interface Condition<T, Y> {
  then(cb: (x: T) => void): this;
  else(cb: (x: any) => void): this;
}

class Pass<T> implements Condition<T, any> {
  constructor(private p: T) {}

  then(cb: (x: T) => void): this {
    return this;
  }

  else(cb: (x: any) => void): this {
    return this;
  }
}

class Fail<Y> implements Condition<any, Y> {
  constructor(private p: Y) {}

  then(cb: (x: T) => void): this {
    return this;
  }

  else(cb: (X: Y) => void): this {
    return this;
  }
}
