import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";
import { pull } from "../actions/numberAction";
import { Wrapper } from "./styled";

const Number = () => {
  const dispatch = useDispatch();
  const numbers = useSelector((state: State) => state.number);
  const handleClick = () => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      let randomNum = Math.floor(Math.random() * 3 + 1);
      arr.push(randomNum);
    }
    dispatch(pull(arr));
    console.log(print(arr));
  };
  return (
    <Wrapper>
      <div className="container">
        {numbers.map((number, idx) => (
          <div key={idx} className="item">
            {number}
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Pull Over</button>
    </Wrapper>
  );
};

const print = (arr: number[]) => {
  let firstNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== firstNum) {
      return "Try again";
    }
  }
  return "You win";
};

export default Number;
