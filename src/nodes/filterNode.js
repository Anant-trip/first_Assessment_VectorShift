import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { useStore } from '../store';
import { FilterIcon } from './icons';

export const FilterNode = ({ id, data }) => {
  const store = useStore();
  const [threshold, setThreshold] = useState(data?.threshold || 0.5);

  const onChange = (e) => {
    const v = parseFloat(e.target.value);
    setThreshold(v);
    store.updateNodeField(id, 'threshold', v);
  };

  return (
    <BaseNode id={id} title="Filter" inputs={["in"]} outputs={["out"]} className="filter" icon={<FilterIcon label="Filter" />}>
      <div className="node-row">
        <div className="node-label">Thresh</div>
        <input className="node-input" type="number" step="0.1" min="0" max="1" value={threshold} onChange={onChange} />
      </div>
    </BaseNode>
  );
};
