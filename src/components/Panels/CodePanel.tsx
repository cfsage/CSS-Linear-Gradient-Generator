import React, { useState } from 'react';
import { Copy, Check, Download, Eye, Code, FileText } from 'lucide-react';

interface CodePanelProps {
  css: string;
  html: string;
  onCopy: () => void;
  copied: boolean;
  onExport: () => void;
}

export const CodePanel: React.FC<CodePanelProps> = ({
  css,
  html,
  onCopy,
  copied,
  onExport
}) => {
  const [activeTab, setActiveTab] = useState<'css' | 'html' | 'preview'>('css');

  const formatCSS = (css: string) => {
    return css
      .split(';')
      .filter(rule => rule.trim())
      .map(rule => `  ${rule.trim()};`)
      .join('\n');
  };

  const generateFullHTML = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Studio Export</title>
  <style>
.element {
${formatCSS(css)}
}
  </style>
</head>
<body>
  <div class="element">
    ${html || 'Your styled element'}
  </div>
</body>
</html>`;
  };

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      <div className="flex items-center space-x-1 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('css')}
          className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-200 ${
            activeTab === 'css'
              ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-b-2 border-purple-500'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <Code size={16} />
          <span>CSS</span>
        </button>
        <button
          onClick={() => setActiveTab('html')}
          className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-200 ${
            activeTab === 'html'
              ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-b-2 border-purple-500'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <FileText size={16} />
          <span>HTML</span>
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-200 ${
            activeTab === 'preview'
              ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-b-2 border-purple-500'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <Eye size={16} />
          <span>Full HTML</span>
        </button>
      </div>

      {/* Code Content */}
      <div className="relative">
        <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
          <button
            onClick={onCopy}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              copied
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 hover:shadow-sm'
            }`}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          <button
            onClick={onExport}
            className="flex items-center space-x-2 px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-all duration-200 hover:shadow-sm"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>

        <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 dark:text-green-300 p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-96 overflow-y-auto border border-gray-700 dark:border-gray-600">
          <code>
            {activeTab === 'css' && css}
            {activeTab === 'html' && html}
            {activeTab === 'preview' && generateFullHTML()}
          </code>
        </pre>
      </div>

      {/* Code Statistics */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 transition-colors duration-200">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">{css.split(';').filter(r => r.trim()).length}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">CSS Rules</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 transition-colors duration-200">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">{css.length}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Characters</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 transition-colors duration-200">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">{css.split('\n').length}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Lines</div>
        </div>
      </div>
    </div>
  );
};