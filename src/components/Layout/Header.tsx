import React from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  Upload, 
  RotateCcw, 
  Save, 
  Share2,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface HeaderProps {
  copied: boolean;
  onCopy: () => void;
  onExport: () => void;
  onImport: () => void;
  onReset: () => void;
  onSave: () => void;
  onShare: () => void;
  previewMode: boolean;
  onTogglePreview: () => void;
  fullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  copied,
  onCopy,
  onExport,
  onImport,
  onReset,
  onSave,
  onShare,
  previewMode,
  onTogglePreview,
  fullscreen,
  onToggleFullscreen
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Ultimate CSS Studio
          </h1>
          <p className="text-purple-100 text-sm">
            Professional CSS styling tool with advanced features
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={onTogglePreview}
            className="flex items-center space-x-2 px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            {previewMode ? <EyeOff size={16} /> : <Eye size={16} />}
            <span className="text-sm">{previewMode ? 'Edit' : 'Preview'}</span>
          </button>
          
          <button
            onClick={onToggleFullscreen}
            className="flex items-center space-x-2 px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span className="text-sm">{fullscreen ? 'Exit' : 'Fullscreen'}</span>
          </button>
          
          <div className="w-px h-6 bg-white/20" />
          
          <button
            onClick={onReset}
            className="flex items-center space-x-2 px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            <RotateCcw size={16} />
            <span className="text-sm">Reset</span>
          </button>
          
          <button
            onClick={onSave}
            className="flex items-center space-x-2 px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            <Save size={16} />
            <span className="text-sm">Save</span>
          </button>
          
          <button
            onClick={onExport}
            className="flex items-center space-x-2 px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            <Download size={16} />
            <span className="text-sm">Export</span>
          </button>
          
          <button
            onClick={onShare}
            className="flex items-center space-x-2 px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            <Share2 size={16} />
            <span className="text-sm">Share</span>
          </button>
          
          <button
            onClick={onCopy}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-white text-purple-600 hover:bg-gray-100'
            }`}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span className="text-sm">{copied ? 'Copied!' : 'Copy CSS'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};