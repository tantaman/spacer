import "./log.js";

function error(msg: string): Error {
  return new Error(msg);
}

function tell_user(e: Error) {}

function full_screen(el: HTMLCanvasElement) {
  el.width = window.innerWidth;
  el.height = window.innerHeight;
}

function if_string<R>(x: any, f: (x: string) => R): R | undefined {
  if (typeof x === "string") {
    return f(x);
  }
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
    cb(this.p);
    return this;
  }

  else(cb: (x: any) => void): this {
    return this;
  }
}

class Fail<Y> implements Condition<any, Y> {
  constructor(private p: Y) {}

  then(cb: (x: any) => void): this {
    return this;
  }

  else(cb: (x: Y) => void): this {
    cb(this.p);
    return this;
  }
}

function start_game(canvas: HTMLCanvasElement) {
  full_screen(canvas);
}

not_null(document.getElementById("canvas"))
  .then(start_game)
  .else(() => tell_user(error("Cannot initialize game")));
