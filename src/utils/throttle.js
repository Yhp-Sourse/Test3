// 节流
export function _throttle(fn, wait = 2000) {
    let last, timer,now;
    return function() {
        debugger
      now = Date.now();
      if (last && now - last < wait) {
        clearTimeout(timer);
        debugger
        timer = setTimeout(function() {
          last = now;
          fn.call(this, ...arguments);
        }, wait);
      } else {
        last = now;
        fn.call(this, ...arguments);
      }
    };
  }
  