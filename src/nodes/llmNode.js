// llmNode.js

import React from 'react';
import BaseNode from './BaseNode';
import { LLMIcon } from './icons';

export const LLMNode = ({ id, data }) => {
  const inputs = ["system","prompt"];
  const outputs = ["response"];

  return (
    <BaseNode id={id} title="LLM" inputs={inputs} outputs={outputs} className="llm" icon={<LLMIcon label="LLM" />}>
      <div className="node-row">
        <div style={{fontSize:12,color:'#cbd5e1'}}>A language model node that accepts a system and prompt input and emits a response.</div>
      </div>
    </BaseNode>
  );
}
