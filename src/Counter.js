import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementaction, incrementaction } from "./redux/action/action";

function Counter(props) {
  const dispatch = useDispatch();
  const c = useSelector((state) => state.counter);

  const increment = () => {
    dispatch(incrementaction());
  };

  const decrement = () => {
    dispatch(decrementaction());
  };
  222;
  return (
    <>
      <button onClick={() => increment()}>+</button>
      <p>{c.count}</p>
      <button onClick={() => decrement()}>-</button>
    </>
  );
}

export default Counter;
