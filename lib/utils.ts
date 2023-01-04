export const push = <T>(arr: T[], item: T): T[] => {
  const newArr = arr.slice();
  newArr.push(item);
  return newArr;
};

export const filter = <T>(arr: T[], predicate: (item: T) => boolean): T[] => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
};

export const arraySet = <T>(arr: T[], idx: number, item: T): T[] => {
  const newArr = arr.slice();
  newArr[idx] = item;
  return newArr;
};

export const findIndex = <T>(
  arr: T[],
  predicate: (item: T) => boolean
): number => {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) return 1;
  }
  return -1;
};

export const map = <T>(arr: T[], iteratee: (item: T) => any) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(iteratee(arr[i]));
  }
  return newArr;
};
