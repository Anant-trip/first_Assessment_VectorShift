// inputNode.js

import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { useStore } from '../store';
import { InputIcon } from './icons';

export const InputNode = ({ id, data }) => {
  const store = useStore();
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    const v = e.target.value;
    setCurrName(v);
    store.updateNodeField(id, 'inputName', v);
  };

  const handleTypeChange = (e) => {
    const v = e.target.value;
    setInputType(v);
    store.updateNodeField(id, 'inputType', v);
  };

  return (
    <BaseNode id={id} title="Input" outputs={["value"]} className="input" icon={<InputIcon label="Input" />}>
      <div className="node-row">
        <div className="node-label">Name</div>
        <input className="node-input" value={currName} onChange={handleNameChange} />
      </div>
      <div className="node-row">
        <div className="node-label">Type</div>
        <select className="node-select" value={inputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
}
