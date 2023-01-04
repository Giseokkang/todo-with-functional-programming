import { arraySet, filter, findIndex, map, push } from "./utils";

test("push", () => {
  expect(push([1, 2, 3], 4)).toStrictEqual([1, 2, 3, 4]);
});

test("filter", () => {
  expect(filter([1, 2, 3], (item) => item === 3)).toStrictEqual([1, 2]);
});

test("setArray", () => {
  expect(arraySet([1, 2, 3], 2, 5)).toStrictEqual([1, 2, 5]);
});

test("findIndex", () => {
  expect(findIndex([1, 2, 3], (item) => item === 3)).toStrictEqual(1);
});

test("findIndex", () => {
  expect(findIndex([1, 2, 3], (item) => item === 5)).toStrictEqual(-1);
});

test("map", () => {
  expect(
    map([1, 2, 3], (item) => {
      return item * 2;
    })
  ).toStrictEqual([2, 4, 6]);
});
