import React from 'react';

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  spinnerClassName?: string;
}

const spinnerStyle: React.CSSProperties = {
  width: '1.2em',
  height: '1.2em',
  border: '2px solid #ccc',
  borderTop: '2px solid #00a4a3',
  borderRadius: '50%',
  animation: 'spin 0.7s linear infinite',
  display: 'inline-block',
  verticalAlign: 'middle',
  marginRight: '0.5em',
};

const styleSheet = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

if (typeof window !== 'undefined' && !document.getElementById('loading-btn-spinner-style')) {
  const style = document.createElement('style');
  style.id = 'loading-btn-spinner-style';
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading = false,
  children,
  disabled,
  spinnerClassName = '',
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      style={{ position: 'relative', ...props.style }}
    >
      {loading && (
        <span
          className={spinnerClassName}
          style={spinnerStyle}
          aria-label="Loading"
        />
      )}
      <span style={{ opacity: loading ? 0.7 : 1 }}>{children}</span>
    </button>
  );
};

export default LoadingButton; 