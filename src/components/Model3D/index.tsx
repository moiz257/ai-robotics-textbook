import React from 'react';

type Model3DProps = {
  modelPath?: string;
};

const wrapperStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '960px',
  margin: '2.5rem auto',
  padding: '1.8rem',
  borderRadius: '1.5rem',
  background:
    'radial-gradient(circle at top left, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 1))',
  border: '1px solid rgba(148, 163, 184, 0.35)',
  boxShadow: '0 26px 80px rgba(15, 23, 42, 0.9)',
  color: '#e5e7eb',
};

const titleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: '0.35rem',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#9ca3af',
  marginBottom: '0.9rem',
};

const barStyle: React.CSSProperties = {
  height: '220px',
  borderRadius: '1.1rem',
  border: '1px dashed rgba(75, 85, 99, 0.9)',
  background:
    'radial-gradient(circle at 10% 10%, rgba(59, 130, 246, 0.25), transparent 60%), radial-gradient(circle at 90% 90%, rgba(236, 72, 153, 0.25), transparent 60%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.9rem',
  color: '#9ca3af',
};

function Model3D({ modelPath }: Model3DProps) {
  return (
    <section style={wrapperStyle}>
      <div style={titleStyle}>Interactive 3D Scene</div>
      <div style={subtitleStyle}>
        A dedicated space for future GLB/robot simulations. For now, enjoy a clean
        placeholder that won&apos;t block the rest of the content.
      </div>
      <div style={barStyle}>
        <span>
          3D model placeholder
          {modelPath ? ` · Source: ${modelPath}` : ''}
        </span>
      </div>
    </section>
  );
}

export default Model3D;


