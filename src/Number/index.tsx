import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";
import { pull } from "../actions/numberAction";
import { Wrapper } from "./styled";
import { print, generateRandomArr } from "../utils";

const Number = () => {
  const dispatch = useDispatch();
  const numbers = useSelector((state: State) => state.number);

  const handleClick = () => {
    const randomArr: number[] = generateRandomArr();
    dispatch(pull(randomArr));
    console.log(print(randomArr));
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

export default Number;
