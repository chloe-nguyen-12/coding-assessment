export const print = (arr: number[]) => {
  let firstNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== firstNum) {
      return "Try again";
    }
  }
  return "You win";
};

export const generateRandomArr = () => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    let randomNum = Math.floor(Math.random() * 3 + 1);
    arr.push(randomNum);
  }
  return arr;
};
