// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`toolbar-item ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '100px', 
          height: '64px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '8px'
        }} 
        draggable
        role="button"
        aria-label={`${label} drag source`}
      >
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <span style={{ color: '#fff', display:'inline-flex', alignItems:'center' }}>{icon}</span>
            <span style={{ color: '#fff' }}>{label}</span>
          </div>
      </div>
    );
  };
  