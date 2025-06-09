import React from 'react';
import ToolbarButton from './ToolbarButton';
import BoldIcon from './icons/BoldIcon';
import ItalicIcon from './icons/ItalicIcon';
import LinkIcon from './icons/LinkIcon';
import CodeIcon from './icons/CodeIcon';
import ListIcon from './icons/ListIcon';
import DownloadIcon from './icons/DownloadIcon';

interface ToolbarProps {
  onApplyStyle: (type: 'bold' | 'italic' | 'link' | 'code' | 'ul' | 'ol' | 'blockquote' | 'h1' | 'h2' | 'h3' | 'codeblock') => void;
  onDownloadMD: () => void;
  onDownloadPDF: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onApplyStyle, onDownloadMD, onDownloadPDF }) => {
  return (
    <div className="flex items-center justify-between flex-wrap p-2 bg-gray-850 border-b border-gray-700">
      <div className="flex items-center space-x-1 flex-wrap">
        <ToolbarButton onClick={() => onApplyStyle('h1')} title="Título 1">H1</ToolbarButton>
        <ToolbarButton onClick={() => onApplyStyle('h2')} title="Título 2">H2</ToolbarButton>
        <ToolbarButton onClick={() => onApplyStyle('h3')} title="Título 3">H3</ToolbarButton>
        <div className="border-l border-gray-700 h-6 mx-1 self-center"></div>
        <ToolbarButton onClick={() => onApplyStyle('bold')} title="Negrito (Ctrl+B)">
          <BoldIcon />
        </ToolbarButton>
        <ToolbarButton onClick={() => onApplyStyle('italic')} title="Itálico (Ctrl+I)">
          <ItalicIcon />
        </ToolbarButton>
        <div className="border-l border-gray-700 h-6 mx-1 self-center"></div>
        <ToolbarButton onClick={() => onApplyStyle('link')} title="Inserir Link">
          <LinkIcon />
        </ToolbarButton>
        <ToolbarButton onClick={() => onApplyStyle('blockquote')} title="Citação">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h12a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H3Z"/></svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => onApplyStyle('ul')} title="Lista não ordenada">
          <ListIcon />
        </ToolbarButton>
        <ToolbarButton onClick={() => onApplyStyle('ol')} title="Lista ordenada">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="10" x2="21" y1="6" y2="6"/><line x1="10" x2="21" y1="12" y2="12"/><line x1="10" x2="21" y1="18" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
        </ToolbarButton>
        <div className="border-l border-gray-700 h-6 mx-1 self-center"></div>
        <ToolbarButton onClick={() => onApplyStyle('code')} title="Código Inline">
          <CodeIcon />
        </ToolbarButton>
        <ToolbarButton onClick={() => onApplyStyle('codeblock')} title="Bloco de Código">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 9.5 8 12l2 2.5"/><path d="m14 9.5 2 2.5-2 2.5"/><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/></svg>
        </ToolbarButton>
      </div>
      <div className="flex items-center space-x-1 flex-wrap">
        <ToolbarButton onClick={onDownloadMD} title="Baixar .md">
            <DownloadIcon className="ml-1"/>MD
        </ToolbarButton>
        <ToolbarButton onClick={onDownloadPDF} title="Baixar .pdf">
            <DownloadIcon className="ml-1"/>PDF
        </ToolbarButton>
      </div>
    </div>
  );
};

export default Toolbar;