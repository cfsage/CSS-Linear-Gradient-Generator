import React from 'react';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

interface PreviewProps {
  styles: React.CSSProperties;
  html: string;
  responsive: boolean;
  onToggleResponsive: () => void;
  viewportSize: 'desktop' | 'tablet' | 'mobile';
  onViewportChange: (size: 'desktop' | 'tablet' | 'mobile') => void;
}

export const Preview: React.FC<PreviewProps> = ({
  styles,
  html,
  responsive,
  onToggleResponsive,
  viewportSize,
  onViewportChange
}) => {
  const getPreviewWidth = () => {
    switch (viewportSize) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      case 'desktop': return '100%';
      default: return '100%';
    }
  };

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
        {/* Preview Controls */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Live Preview</h3>
          
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={responsive}
                onChange={onToggleResponsive}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700">Responsive Mode</span>
            </label>
            
            {responsive && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onViewportChange('desktop')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewportSize === 'desktop'
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Monitor size={18} />
                </button>
                <button
                  onClick={() => onViewportChange('tablet')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewportSize === 'tablet'
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Tablet size={18} />
                </button>
                <button
                  onClick={() => onViewportChange('mobile')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewportSize === 'mobile'
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Smartphone size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Preview Content */}
        <div className="flex-1 p-4 overflow-auto">
          <div 
            className="mx-auto transition-all duration-300 border border-gray-300 rounded-lg overflow-hidden"
            style={{ 
              width: responsive ? getPreviewWidth() : '100%',
              minHeight: '400px'
            }}
          >
            <div
              className="w-full h-full min-h-[400px] p-8"
              style={styles}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};