import React from 'react';
import { Handle, Position } from 'reactflow';
import './nodes.css';

export const BaseNode = ({ id, title, inputs = [], outputs = [], children, className='', style = {}, icon = '' }) => {
  const renderHandles = (items, position, type) => {
    if (!items || items.length === 0) return null;

    const step = 100 / (items.length + 1);

    return items.map((it, idx) => {
      const top = `${(idx + 1) * step}%`;
      const handleId = it.id || it;
      const handleStyle = { top };
      return (
        <Handle
          key={`${id}-${handleId}`}
          type={type}
          position={position}
          id={`${id}-${handleId}`}
          data-handle={handleId}
          className={`handle-${handleId}`}
          style={handleStyle}
        />
      );
    });
  };

  return (
    <div className={`node-card ${className}`} style={style} role="group" aria-label={`${title} node`}>
      {renderHandles(inputs, Position.Left, 'target')}
      <div className="node-header">
        <div className="node-title"><span className="node-icon" role="img" aria-label={`${title} icon`}>{icon}</span><span>{title}</span></div>
      </div>
      <div className="node-content">{children}</div>
      {renderHandles(outputs, Position.Right, 'source')}
    </div>
  );
};

export default BaseNode;
