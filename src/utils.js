export function* range(end, start = 0, iter = 1) {
  for (let i = start; i < end; i += iter) {
    yield i;
  }
};

export function rotate(iterable, delta) {
  const l = iterable.length;
  return Array.from(range(l)).map(i => iterable[(i + delta) % l]);
};

export function classes(...classNames) {
  return classNames.filter(Boolean).join(' ');
}
