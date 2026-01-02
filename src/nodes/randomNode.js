import React from 'react';
import BaseNode from './BaseNode';
import { RandomIcon } from './icons';

export const RandomNode = ({ id, data }) => {
  return (
    <BaseNode id={id} title="Random" outputs={["value"]} className="random" icon={<RandomIcon label="Random" />}>
      <div className="node-row">
        <div style={{fontSize:12,color:'#cbd5e1'}}>Emits a random number when triggered.</div>
      </div>
    </BaseNode>
  );
};
