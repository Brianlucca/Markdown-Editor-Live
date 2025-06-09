import { GithubIcon } from "lucide-react";
import React from "react";

interface StatusBarProps {
  wordCount: number;
  charCount: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ wordCount, charCount }) => {
  return (
    <div className="bg-gray-900 text-gray-500 p-2 px-4 text-sm border-t border-gray-700 flex justify-between items-center">
      <div>
        <a 
          href='https://github.com/Brianlucca' 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Ver o projeto no GitHub"
          className="hover:text-cyan-400 transition-colors duration-200 animate-pulse text-red-500"
        >
          <GithubIcon size={16} />
        </a>
      </div>

      <div className="flex space-x-4">
        <span>Palavras: {wordCount}</span>
        <span>Caracteres: {charCount}</span>
      </div>
    </div>
  );
};

export default StatusBar;