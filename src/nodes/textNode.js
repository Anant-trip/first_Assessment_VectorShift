// textNode.js

import React, { useEffect, useRef, useState } from 'react';
import BaseNode from './BaseNode';
import { useStore } from '../store';
import { TextIcon } from './icons';

const VAR_REGEX = /\{\{\s*([A-Za-z_$][\w$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const store = useStore();
  const initialText = data?.text || '{{input}}';
  const [currText, setCurrText] = useState(initialText);
  const [vars, setVars] = useState(data?.variables || []);
  const [size, setSize] = useState({ width: 220, height: 80 });
  const taRef = useRef(null);

  useEffect(() => {
    // ensure store has initial values
    store.updateNodeField(id, 'text', currText);
    store.updateNodeField(id, 'variables', vars);
  }, [id, currText, vars, store]);

  const parseVars = (text) => {
    const found = new Set();
    let m;
    while ((m = VAR_REGEX.exec(text)) !== null) {
      found.add(m[1]);
    }
    return Array.from(found);
  };

  const adjustSize = () => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = 'auto';
    const newHeight = Math.max(48, Math.min(el.scrollHeight, 240));
    const newWidth = Math.max(140, Math.min(el.scrollWidth + 24, 480));
    setSize({ width: newWidth, height: newHeight });
    el.style.height = `${newHeight}px`;
  };

  const handleTextChange = (e) => {
    const v = e.target.value;
    setCurrText(v);
    const newVars = parseVars(v);
    setVars(newVars);
    store.updateNodeField(id, 'text', v);
    store.updateNodeField(id, 'variables', newVars);
    adjustSize();
  };

  useEffect(() => {
    adjustSize();
  }, []);

  return (
    <BaseNode id={id} title="Text" inputs={vars} outputs={["output"]} style={{width: size.width}} className="text" icon={<TextIcon label="Text" />}>
      <div className="node-row">
        <div className="node-label">Text</div>
        <textarea
          ref={taRef}
          className="node-textarea"
          value={currText}
          onChange={handleTextChange}
          style={{height: size.height}}
        />
      </div>
    </BaseNode>
  );
}
