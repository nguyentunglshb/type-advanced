function myForEach<T>(items: T[], forEachFn: (value: T) => void): void {
  items.reduce((prev, item) => {
    forEachFn(item);
    return undefined;
  }, undefined);
}

console.log(myForEach(["a", "b", "c"], console.log));

function myFilter<T>(items: T[], filterFn: (v: T) => boolean): T[] {
  return items.reduce(
    (prev, item) => (filterFn(item) ? [...prev, item] : prev),
    [] as T[]
  );
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7], (v) => v % 2 === 0));

function myMap<T, K>(items: T[], mapFn: (v: T) => K): K[] {
  return items.reduce((prev, item) => [...prev, mapFn(item)], [] as K[]);
}

console.log(myMap([1, 3, 5, 7], (v) => v * 5));
