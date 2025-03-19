import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';   

export function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    
    return (
        <div>
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
        </div>
    );
}