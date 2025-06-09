import React from 'react';

interface ToolbarButtonProps {
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ onClick, title, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-cyan-500"
    >
      {children}
    </button>
  );
};

export default ToolbarButton;