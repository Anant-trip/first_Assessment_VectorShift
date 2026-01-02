import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { useStore } from '../store';
import { CounterIcon } from './icons';

export const CounterNode = ({ id, data }) => {
  const store = useStore();
  const [count, setCount] = useState(data?.count || 0);

  const inc = () => {
    const n = count + 1;
    setCount(n);
    store.updateNodeField(id, 'count', n);
  };

  return (
    <BaseNode id={id} title="Counter" outputs={["count"]} className="counter" icon={<CounterIcon label="Counter" />}>
      <div className="node-row">
        <div style={{fontSize:13}}>{count}</div>
        <button className="node-button" onClick={inc}>+1</button>
      </div>
    </BaseNode>
  );
};
