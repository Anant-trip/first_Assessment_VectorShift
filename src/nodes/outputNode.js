// outputNode.js

import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { useStore } from '../store';
import { OutputIcon } from './icons';

export const OutputNode = ({ id, data }) => {
  const store = useStore();
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    const v = e.target.value;
    setCurrName(v);
    store.updateNodeField(id, 'outputName', v);
  };

  const handleTypeChange = (e) => {
    const v = e.target.value;
    setOutputType(v);
    store.updateNodeField(id, 'outputType', v);
  };

  return (
    <BaseNode id={id} title="Output" inputs={["value"]} className="output" icon={<OutputIcon label="Output" />}>
      <div className="node-row">
        <div className="node-label">Name</div>
        <input className="node-input" value={currName} onChange={handleNameChange} />
      </div>
      <div className="node-row">
        <div className="node-label">Type</div>
        <select className="node-select" value={outputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </div>
    </BaseNode>
  );
}
