import React, { useState, useEffect, useCallback, useRef } from 'react';
import MarkdownInput from './components/MarkdownInput';
import HtmlPreview from './components/HtmlPreview';
import Toolbar from './components/Toolbar';
import StatusBar from './components/StatusBar';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const initialMarkdown = `# Bem-vindo ao Editor Markdown Profissional!

Use a **toolbar** acima ou digite *Markdown* diretamente.

## Funcionalidades
- Preview em tempo real
- Salva automaticamente
- Toolbar com ações rápidas
- Contador de palavras e caracteres
- Download como .MD ou .PDF

### Experimente:
* Listas
* **Negrito** e *Itálico*
* \`Código inline\`
* [Links](https://www.markdownguide.org)
* > Citações
* Títulos (H1, H2, H3)

\`\`\`javascript
function helloWorld() {
  console.log("Hello, professional Markdown editor!");
}
helloWorld();
\`\`\`
`;

const App: React.FC = () => {
  const [markdownText, setMarkdownText] = useState<string>(() => {
    const savedMarkdown = localStorage.getItem('markdown-editor-text-pro');
    return savedMarkdown !== null ? savedMarkdown : initialMarkdown;
  });

  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('markdown-editor-text-pro', markdownText);
  }, [markdownText]);

  const handleMarkdownChange = useCallback((newMarkdown: string) => {
    setMarkdownText(newMarkdown);
  }, []);

  const wordCount = markdownText.trim() === '' ? 0 : markdownText.trim().split(/\s+/).length;
  const charCount = markdownText.length;

  const applyStyle = (type: 'bold' | 'italic' | 'link' | 'code' | 'ul' | 'ol' | 'blockquote' | 'h1' | 'h2' | 'h3' | 'codeblock') => {
    const textarea = editorRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdownText.substring(start, end);
    let prefix = '';
    let suffix = '';
    let newText = '';
    let newStart = start;
    let newEnd = end;
    let placeholder = '';

    switch (type) {
      case 'bold':
        prefix = '**';
        suffix = '**';
        placeholder = 'texto em negrito';
        break;
      case 'italic':
        prefix = '*';
        suffix = '*';
        placeholder = 'texto em itálico';
        break;
      case 'code':
        prefix = '`';
        suffix = '`';
        placeholder = 'código';
        break;
      case 'link':
        const url = prompt("Digite a URL do link:", "https://");
        if (url) {
          prefix = `[${selectedText || 'texto do link'}](${url})`;
          suffix = '';
        } else {
          return;
        }
        break;
      case 'blockquote':
        prefix = '> ';
        suffix = '';
        placeholder = 'citar';
        if (start > 0 && markdownText[start -1] !== '\n' && markdownText.substring(0,start).trim() !== '') {
            prefix = '\n> ';
        }
        break;
      case 'ul':
        prefix = '- ';
        suffix = '';
        placeholder = 'item da lista';
         if (start > 0 && markdownText[start -1] !== '\n' && markdownText.substring(0,start).trim() !== '') {
            prefix = '\n- ';
        }
        break;
      case 'ol':
        prefix = '1. ';
        suffix = '';
        placeholder = 'item da lista';
        if (start > 0 && markdownText[start -1] !== '\n' && markdownText.substring(0,start).trim() !== '') {
            prefix = '\n1. ';
        }
        break;
      case 'h1': prefix = '# '; suffix = ''; placeholder = 'Título 1'; if (start > 0 && markdownText[start -1] !== '\n' && markdownText.substring(0,start).trim() !== '') { prefix = '\n# '; } break;
      case 'h2': prefix = '## '; suffix = ''; placeholder = 'Título 2'; if (start > 0 && markdownText[start -1] !== '\n' && markdownText.substring(0,start).trim() !== '') { prefix = '\n## '; } break;
      case 'h3': prefix = '### '; suffix = ''; placeholder = 'Título 3'; if (start > 0 && markdownText[start -1] !== '\n' && markdownText.substring(0,start).trim() !== '') { prefix = '\n### '; } break;
      case 'codeblock':
        prefix = '```javascript\n';
        suffix = '\n```';
        placeholder = 'seu código aqui';
         if (start > 0 && markdownText[start -1] !== '\n' && markdownText.substring(0,start).trim() !== '') {
            prefix = '\n```javascript\n';
        }
        break;
    }

    if (type === 'link' && prefix) {
        newText = markdownText.substring(0, start) + prefix + markdownText.substring(end);
        newStart = start + prefix.length - (selectedText ? 0 : (URL?.length || 0) + 3);
        newEnd = newStart + (selectedText ? 0 : (selectedText || 'texto do link').length);
        if (!selectedText) newEnd = newStart + 'texto do link'.length;


    } else if (selectedText) {
      newText = markdownText.substring(0, start) + prefix + selectedText + suffix + markdownText.substring(end);
      newStart = start + prefix.length;
      newEnd = end + prefix.length;
    } else {
      newText = markdownText.substring(0, start) + prefix + placeholder + suffix + markdownText.substring(end);
      newStart = start + prefix.length;
      newEnd = newStart + placeholder.length;
    }
    
    setMarkdownText(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newStart, newEnd);
    }, 0);
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key.toLowerCase()) {
        case 'b':
          event.preventDefault();
          applyStyle('bold');
          break;
        case 'i':
          event.preventDefault();
          applyStyle('italic');
          break;
      }
    }
     if (event.key === 'Tab') {
        event.preventDefault();
        const textarea = editorRef.current;
        if (textarea) {
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const newText = markdownText.substring(0, start) + '  ' + markdownText.substring(end);
            setMarkdownText(newText);
            setTimeout(() => {
                textarea.setSelectionRange(start + 2, start + 2);
            }, 0);
        }
    }
  };

  const handleDownloadMD = () => {
    const blob = new Blob([markdownText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'README.md');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPDF = async () => {
    const previewElement = previewRef.current;
    if (!previewElement) return;

    try {
        const canvas = await html2canvas(previewElement, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#111827' 
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: [canvas.width, canvas.height] 
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('documento.pdf');
    } catch (error) {
        console.error("Erro ao gerar PDF:", error);
        alert("Ocorreu um erro ao tentar gerar o PDF. Verifique o console para mais detalhes.");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-gray-200">
      <header className="bg-gray-900 text-white p-3 shadow-md">
        <h1 className="text-xl font-semibold text-cyan-400 text-center justify-center gap-2 flex">Markdown Editor Live </h1>
        <h1></h1>
      </header>
      <Toolbar onApplyStyle={applyStyle} onDownloadMD={handleDownloadMD} onDownloadPDF={handleDownloadPDF} />
      <main className="flex flex-1 overflow-hidden border-t border-gray-700">
        <div className="w-1/2 h-full relative">
          <MarkdownInput ref={editorRef} value={markdownText} onChange={handleMarkdownChange} onKeyDown={handleKeyDown} />
        </div>
        <div className="w-1/2 h-full border-l border-gray-700">
          <HtmlPreview ref={previewRef} markdownText={markdownText} />
        </div>
      </main>
      <StatusBar wordCount={wordCount} charCount={charCount} />
    </div>
  );
};

export default App;