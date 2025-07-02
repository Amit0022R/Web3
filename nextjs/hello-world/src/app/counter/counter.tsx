"use client";
import {useState} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

// rename the component to counter as named export