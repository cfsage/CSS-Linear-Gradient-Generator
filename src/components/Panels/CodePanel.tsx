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
      <div className="flex items-center space-x-1 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('css')}
          className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'css'
              ? 'bg-purple-100 text-purple-700 border-b-2 border-purple-500'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
          }`}
        >
          <Code size={16} />
          <span>CSS</span>
        </button>
        <button
          onClick={() => setActiveTab('html')}
          className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'html'
              ? 'bg-purple-100 text-purple-700 border-b-2 border-purple-500'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
          }`}
        >
          <FileText size={16} />
          <span>HTML</span>
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'preview'
              ? 'bg-purple-100 text-purple-700 border-b-2 border-purple-500'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
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
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              copied
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          <button
            onClick={onExport}
            className="flex items-center space-x-2 px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>

        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-96 overflow-y-auto">
          <code>
            {activeTab === 'css' && css}
            {activeTab === 'html' && html}
            {activeTab === 'preview' && generateFullHTML()}
          </code>
        </pre>
      </div>

      {/* Code Statistics */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-lg font-semibold text-gray-800">{css.split(';').filter(r => r.trim()).length}</div>
          <div className="text-xs text-gray-600">CSS Rules</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-lg font-semibold text-gray-800">{css.length}</div>
          <div className="text-xs text-gray-600">Characters</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-lg font-semibold text-gray-800">{css.split('\n').length}</div>
          <div className="text-xs text-gray-600">Lines</div>
        </div>
      </div>
    </div>
  );
};