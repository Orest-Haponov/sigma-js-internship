import _ from 'lodash';
import dayjs from 'dayjs';

const obj = { id: 1, name: 'one' };
const arr = [
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: 'three' }
];
export const lodash = () => {
  const lodashFilterArr = _.filter(arr, item => {
    return item.id === 3;
  });
  const lodashFilterObj = _.filter(obj, item => {
    return item === 'one';
  });
  const newObj = {
    id: _.random(1, 10000, false),
    name: 'new'
  };
  console.log(lodashFilterArr, lodashFilterObj, newObj);
};

export const dayJs = () => {
  const now = dayjs();
  const date = dayjs(now).format('DD/MM/YYYY');
  const month = dayjs(now).format('MM');
  const minutes = dayjs(now).format('m');
  console.log(now, date, month, minutes);
};

export const fib = (n: number) => {
  let prev = 0;
  let next = 1;
  for (let i = 0; i < n; i++) {
    let result = next;
    next = prev + next;
    prev = result;
    console.log(result);
  }
};

export const bubbleSort = <T>(arr: Array<T>) => {
  const length = arr.length;
  Object.seal(arr);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log(arr);
      }
    }
  }
  return arr;
};

export const binarySearchVariantOne = (arr: Array<number>, x: number) => {
  let middle = Math.floor(arr.length / 2);
  const start = 0;
  while (x) {
    if (arr[middle] === x) {
      return arr[middle];
    } else if (arr[middle] > x && arr.length > 1) {
      arr = arr.splice(start, middle);
      middle = Math.floor(arr.length / 2);
    } else if (arr[middle] < x && arr.length > 1) {
      arr = arr.splice(middle, arr.length);
      middle = Math.floor(arr.length / 2);
    } else {
      return -1;
    }
  }
};

export const binarySearchVariantTwo = (arr: Array<number>, x: number) => {
  let middle = Math.floor(arr.length / 2);
  let start = 0;
  if (arr[middle] === x) {
    return arr[middle];
  } else if (arr[middle] > x && arr.length > 1) {
    return binarySearchVariantTwo(arr.splice(start, middle), x);
  } else if (arr[middle] < x && arr.length > 1) {
    return binarySearchVariantTwo(arr.splice(middle, arr.length), x);
  } else {
    return -1;
  }
};
