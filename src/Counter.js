import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Decrement, Increment } from './redux/action/Actioncounter';

function Counter(props) {
    const dispatch = useDispatch();
    const c = useSelector(state => state.counter) 

    const incrementfun = () =>{
        dispatch(Increment())
    }

    const decrementfun = () =>{
        dispatch(Decrement())
    }

    return (
        <div>
            <button onClick={incrementfun}>+</button>
            {c.counter}
            <button onClick={decrementfun}>-</button>
        </div>
    );
}

export default Counter;
