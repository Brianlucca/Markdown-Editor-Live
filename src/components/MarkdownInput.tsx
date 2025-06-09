import React, { forwardRef } from 'react';

interface MarkdownInputProps {
  value: string;
  onChange: (markdown: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput = forwardRef<HTMLTextAreaElement, MarkdownInputProps>(
  ({ value, onChange, onKeyDown }, ref) => {
    return (
      <textarea
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="w-full h-full p-4 bg-gray-800 text-gray-200 resize-none focus:outline-none"
        placeholder="Digite seu Markdown aqui..."
      />
    );
  }
);

MarkdownInput.displayName = 'MarkdownInput';
export default MarkdownInput;