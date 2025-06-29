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

  // Clean and process styles for better compatibility
  const processedStyles: React.CSSProperties = {
    ...styles,
    // Ensure proper display
    display: styles.display || 'block',
    // Ensure minimum dimensions for visibility
    minWidth: styles.minWidth || '100px',
    minHeight: styles.minHeight || '100px',
    // Default positioning
    position: styles.position === 'static' ? 'relative' : styles.position,
    // Ensure content is visible
    overflow: styles.overflow || 'visible',
    // Default background if none set
    backgroundColor: styles.backgroundColor || (styles.backgroundImage ? 'transparent' : '#f8fafc'),
    // Ensure text is visible
    color: styles.color || '#1f2937',
    // Add some default padding if none set
    padding: styles.padding || (styles.paddingTop || styles.paddingRight || styles.paddingBottom || styles.paddingLeft ? undefined : '20px'),
    // Ensure proper box sizing
    boxSizing: styles.boxSizing || 'border-box',
    // Add transition for smooth updates
    transition: 'all 0.2s ease'
  };

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col transition-colors duration-300">
        {/* Preview Controls */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Live Preview</h3>
          
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={responsive}
                onChange={onToggleResponsive}
                className="w-4 h-4 text-purple-600 border-gray-300 dark:border-gray-600 rounded focus:ring-purple-500 dark:bg-gray-700"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Responsive Mode</span>
            </label>
            
            {responsive && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onViewportChange('desktop')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewportSize === 'desktop'
                      ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Monitor size={18} />
                </button>
                <button
                  onClick={() => onViewportChange('tablet')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewportSize === 'tablet'
                      ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Tablet size={18} />
                </button>
                <button
                  onClick={() => onViewportChange('mobile')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewportSize === 'mobile'
                      ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Smartphone size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Preview Content */}
        <div className="flex-1 p-6 overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div 
            className="mx-auto transition-all duration-300 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            style={{ 
              width: responsive ? getPreviewWidth() : '100%',
              minHeight: '400px'
            }}
          >
            {/* Preview Element Container */}
            <div className="w-full h-full min-h-[400px] p-4 flex items-center justify-center">
              <div
                className="preview-element transition-all duration-200"
                style={processedStyles}
                dangerouslySetInnerHTML={{ __html: html || 'Your styled element' }}
              />
            </div>
          </div>
          
          {/* Style Debug Info */}
          <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <details className="text-xs">
              <summary className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors duration-200">
                Debug: Applied Styles ({Object.keys(processedStyles).length} properties)
              </summary>
              <div className="mt-2 space-y-1 max-h-32 overflow-y-auto">
                {Object.entries(processedStyles).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-xs">
                    <span className="text-purple-600 dark:text-purple-400 font-mono">{key}:</span>
                    <span className="text-gray-700 dark:text-gray-300 font-mono ml-2">{String(value)}</span>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};