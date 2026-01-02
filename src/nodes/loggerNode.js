import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { useStore } from '../store';
import { LoggerIcon } from './icons';

export const LoggerNode = ({ id, data }) => {
  const store = useStore();
  const [history, setHistory] = useState(data?.history || []);

  const push = () => {
    const next = [...history, `Log ${history.length + 1}`];
    setHistory(next);
    store.updateNodeField(id, 'history', next);
  };

  return (
    <BaseNode id={id} title="Logger" inputs={["msg"]} className="logger" icon={<LoggerIcon label="Logger" />}>
      <div className="node-row">
        <button className="node-button" onClick={push}>Add Log</button>
      </div>
    </BaseNode>
  );
};
