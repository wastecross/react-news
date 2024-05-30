const countArray = (arr) => {
  const numberPassed = [];
  const newArr = arr.map((number) => {
    if (!numberPassed.includes(number)) {
      const counter = arr.filter((num) => num === number).length;
      numberPassed.push(number);

      return [number, counter];
    }
    return undefined;
  });
  const newNumberArr = newArr.filter((val) => val !== undefined);

  console.log(newNumberArr);
};

const arrNumber = [1, 2, 3, 4, 5, 2, 1, 5];
countArray(arrNumber);
