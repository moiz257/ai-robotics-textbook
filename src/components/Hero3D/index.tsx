import React from 'react';

const sectionStyle: React.CSSProperties = {
  width: '100%',
  padding: '1.5rem 0',
  background:
    'radial-gradient(circle at top left, #1f2937 0, #020617 45%, #000 100%)',
  borderBottom: '1px solid rgba(148, 163, 184, 0.35)',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.5rem',
};

const titleStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#e5e7eb',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: '#9ca3af',
};

const pillStyle: React.CSSProperties = {
  padding: '0.4rem 0.9rem',
  borderRadius: 999,
  border: '1px solid rgba(148, 163, 184, 0.45)',
  background: 'rgba(15, 23, 42, 0.92)',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.9)',
};

function Hero3D() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <span style={titleStyle}>AI‑Native Robotics Textbook</span>
          <span style={subtitleStyle}>
            A premium, agentic learning experience with integrated AI tutor.
          </span>
        </div>
        <div style={pillStyle}>
          <span style={{ fontSize: '0.78rem', color: '#e5e7eb' }}>
            Live preview · Spec‑driven · Open source
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero3D;


