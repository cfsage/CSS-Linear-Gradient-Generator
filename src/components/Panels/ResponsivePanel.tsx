import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Plus, Trash2 } from 'lucide-react';

interface ResponsivePanelProps {
  mediaQueries: any[];
  onMediaQueriesChange: (queries: any[]) => void;
  containerQueries: any[];
  onContainerQueriesChange: (queries: any[]) => void;
}

export const ResponsivePanel: React.FC<ResponsivePanelProps> = ({
  mediaQueries,
  onMediaQueriesChange,
  containerQueries,
  onContainerQueriesChange
}) => {
  const [activeBreakpoint, setActiveBreakpoint] = useState('desktop');

  const breakpoints = [
    { name: 'mobile', label: 'Mobile', icon: Smartphone, query: '(max-width: 767px)' },
    { name: 'tablet', label: 'Tablet', icon: Tablet, query: '(min-width: 768px) and (max-width: 1023px)' },
    { name: 'desktop', label: 'Desktop', icon: Monitor, query: '(min-width: 1024px)' }
  ];

  const commonBreakpoints = [
    { name: 'xs', label: 'Extra Small', query: '(max-width: 575px)' },
    { name: 'sm', label: 'Small', query: '(min-width: 576px)' },
    { name: 'md', label: 'Medium', query: '(min-width: 768px)' },
    { name: 'lg', label: 'Large', query: '(min-width: 992px)' },
    { name: 'xl', label: 'Extra Large', query: '(min-width: 1200px)' },
    { name: 'xxl', label: 'Extra Extra Large', query: '(min-width: 1400px)' }
  ];

  const orientationQueries = [
    { name: 'portrait', label: 'Portrait', query: '(orientation: portrait)' },
    { name: 'landscape', label: 'Landscape', query: '(orientation: landscape)' }
  ];

  const featureQueries = [
    { name: 'hover', label: 'Hover Support', query: '(hover: hover)' },
    { name: 'touch', label: 'Touch Device', query: '(hover: none)' },
    { name: 'high-res', label: 'High Resolution', query: '(min-resolution: 2dppx)' },
    { name: 'dark-mode', label: 'Dark Mode', query: '(prefers-color-scheme: dark)' },
    { name: 'light-mode', label: 'Light Mode', query: '(prefers-color-scheme: light)' },
    { name: 'reduced-motion', label: 'Reduced Motion', query: '(prefers-reduced-motion: reduce)' }
  ];

  const addMediaQuery = (query: string, name: string) => {
    const newQuery = {
      id: Date.now().toString(),
      name,
      condition: query,
      styles: {}
    };
    onMediaQueriesChange([...mediaQueries, newQuery]);
  };

  const removeMediaQuery = (id: string) => {
    onMediaQueriesChange(mediaQueries.filter(q => q.id !== id));
  };

  const addContainerQuery = () => {
    const newQuery = {
      id: Date.now().toString(),
      name: 'container',
      condition: '(min-width: 300px)',
      styles: {}
    };
    onContainerQueriesChange([...containerQueries, newQuery]);
  };

  const removeContainerQuery = (id: string) => {
    onContainerQueriesChange(containerQueries.filter(q => q.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Viewport Preview */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Viewport Preview</h3>
        <div className="flex items-center space-x-2">
          {breakpoints.map((breakpoint) => {
            const Icon = breakpoint.icon;
            return (
              <button
                key={breakpoint.name}
                onClick={() => setActiveBreakpoint(breakpoint.name)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeBreakpoint === breakpoint.name
                    ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700 shadow-sm'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Icon size={16} />
                <span className="text-xs font-medium">{breakpoint.label}</span>
              </button>
            );
          })}
        </div>
        
        {/* Viewport Dimensions */}
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-200">
          <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Current Viewport:</div>
          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {activeBreakpoint === 'mobile' && '375px × 667px (iPhone)'}
            {activeBreakpoint === 'tablet' && '768px × 1024px (iPad)'}
            {activeBreakpoint === 'desktop' && '1920px × 1080px (Desktop)'}
          </div>
        </div>
      </div>

      {/* Common Breakpoints */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Common Breakpoints</h3>
        <div className="grid grid-cols-2 gap-2">
          {commonBreakpoints.map((breakpoint) => (
            <button
              key={breakpoint.name}
              onClick={() => addMediaQuery(breakpoint.query, breakpoint.label)}
              className="px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-md transition-all duration-200 border border-blue-200 dark:border-blue-700 text-left hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm"
            >
              <div className="font-semibold">{breakpoint.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{breakpoint.query}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Orientation Queries */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Orientation</h3>
        <div className="grid grid-cols-2 gap-2">
          {orientationQueries.map((query) => (
            <button
              key={query.name}
              onClick={() => addMediaQuery(query.query, query.label)}
              className="px-3 py-2 text-xs font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/50 rounded-md transition-all duration-200 border border-green-200 dark:border-green-700 hover:border-green-300 dark:hover:border-green-600 hover:shadow-sm"
            >
              {query.label}
            </button>
          ))}
        </div>
      </div>

      {/* Feature Queries */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Feature Queries</h3>
        <div className="grid grid-cols-2 gap-2">
          {featureQueries.map((query) => (
            <button
              key={query.name}
              onClick={() => addMediaQuery(query.query, query.label)}
              className="px-3 py-2 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/50 rounded-md transition-all duration-200 border border-purple-200 dark:border-purple-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-sm"
            >
              {query.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Media Queries */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Active Media Queries</h3>
          <button
            onClick={() => addMediaQuery('(min-width: 768px)', 'Custom Query')}
            className="flex items-center space-x-1 px-2 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700 transition-all duration-200 hover:shadow-sm"
          >
            <Plus size={12} />
            <span>Add Custom</span>
          </button>
        </div>
        
        {mediaQueries.length === 0 ? (
          <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            No media queries added yet. Click the buttons above to add responsive breakpoints.
          </div>
        ) : (
          <div className="space-y-2">
            {mediaQueries.map((query) => (
              <div key={query.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg transition-colors duration-200">
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-800 dark:text-gray-200">{query.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">{query.condition}</div>
                </div>
                <button
                  onClick={() => removeMediaQuery(query.id)}
                  className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/50 rounded transition-all duration-200"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Container Queries */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Container Queries</h3>
          <button
            onClick={addContainerQuery}
            className="flex items-center space-x-1 px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-all duration-200 hover:shadow-sm"
          >
            <Plus size={12} />
            <span>Add Container Query</span>
          </button>
        </div>
        
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-xs text-blue-800 dark:text-blue-300 font-medium mb-1">Container Queries</div>
          <div className="text-xs text-blue-600 dark:text-blue-400">
            Container queries allow you to apply styles based on the size of a containing element rather than the viewport.
          </div>
        </div>

        {containerQueries.length === 0 ? (
          <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            No container queries added yet.
          </div>
        ) : (
          <div className="space-y-2">
            {containerQueries.map((query) => (
              <div key={query.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg transition-colors duration-200">
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-800 dark:text-gray-200">{query.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">{query.condition}</div>
                </div>
                <button
                  onClick={() => removeContainerQuery(query.id)}
                  className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/50 rounded transition-all duration-200"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Custom Media Query Builder */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Custom Media Query Builder</h3>
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-3 transition-colors duration-200">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Property</label>
              <select className="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-200 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200">
                <option>min-width</option>
                <option>max-width</option>
                <option>min-height</option>
                <option>max-height</option>
                <option>orientation</option>
                <option>resolution</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Value</label>
              <input
                type="text"
                placeholder="768px"
                className="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-200 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
          <button className="w-full px-3 py-2 bg-purple-600 text-white rounded text-xs hover:bg-purple-700 transition-all duration-200 hover:shadow-sm">
            Add Custom Media Query
          </button>
        </div>
      </div>

      {/* Responsive Design Tips */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Responsive Design Tips</h3>
        <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
          <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-400">
            <strong>Mobile First:</strong> Start with mobile styles and add larger breakpoints progressively.
          </div>
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-400">
            <strong>Container Queries:</strong> Use for component-based responsive design.
          </div>
          <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-400">
            <strong>Feature Queries:</strong> Detect device capabilities like hover support.
          </div>
        </div>
      </div>
    </div>
  );
};