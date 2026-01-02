import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { useStore } from '../store';
import { MathIcon } from './icons';

export const MathNode = ({ id, data }) => {
  const store = useStore();
  const [op, setOp] = useState(data?.op || 'add');

  const compute = () => {
    // This demo doesn't actually compute from inputs; it just shows how a node can expose config
    store.updateNodeField(id, 'op', op);
  };

  return (
    <BaseNode id={id} title="Math" inputs={["a","b"]} outputs={["result"]} className="math" icon={<MathIcon label="Math" />}>
      <div className="node-row">
        <div className="node-label">Op</div>
        <select className="node-select" value={op} onChange={(e) => setOp(e.target.value)} onBlur={compute}>
          <option value="add">Add</option>
          <option value="sub">Subtract</option>
          <option value="mul">Multiply</option>
          <option value="div">Divide</option>
        </select>
      </div>
    </BaseNode>
  );
};
