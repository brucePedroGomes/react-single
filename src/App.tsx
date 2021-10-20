import React, { useState } from "react";

type Props = {
  name: string;
};

export const App: React.FC<Props> = ({ name }) => {
  const [count, setCount] = useState(0);

  const handleCount = (number: number) => {
    setCount((oldState) => oldState + number);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h3>count: {count}</h3>
      <button onClick={() => handleCount(+1)}>+</button>
      <button onClick={() => handleCount(-1)}>-</button>
    </div>
  );
};
