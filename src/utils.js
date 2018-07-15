export function* range(end, start = 0, iter = 1) {
  for (let i = start; i < end; i += iter) {
    yield i;
  }
}

export function rotate(iterable, delta) {
  const l = iterable.length;
  return Array.from(range(l)).map(i => iterable[(i + delta) % l]);
}

export function classes(...classNames) {
  return classNames.filter(Boolean).join(' ');
}

const defineProperty = (object, n, start) => {
  Object.defineProperty(object, String(n), {
    get: () => {
      defineProperty(object, n + 1, start);
      return n + start;
    },
  });
  return object;
};

export function Enum (start = 1) {
  return defineProperty([], 0, start);
}

export class TargetManager {
  constructor (config) {
    this._targetClassNames = new Map();
    this._targetQueries= new Map();
    Object.keys(config).forEach(eventType => {
      const classNames = config[eventType];
      this._targetClassNames.set(eventType, classNames);
      this._targetQueries.set(eventType,
        classNames.map(className => `.${className}`).join(', '));
    });
  }

  getTarget (event, eventType = event.type) {
    const target = event.target.closest(this._targetQueries.get(eventType));
    if (target) {
      const className = this._targetClassNames
        .get(eventType)
        .find(targetClassName => target.classList.contains(targetClassName));
      return {target, className};
    }
    return {};
  }
}
