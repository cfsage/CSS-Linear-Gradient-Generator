import React, { useState } from 'react';
import { Variable, Plus, Trash2, Copy, Check } from 'lucide-react';

interface VariablesPanelProps {
  customProperties: any[];
  onCustomPropertiesChange: (properties: any[]) => void;
}

export const VariablesPanel: React.FC<VariablesPanelProps> = ({
  customProperties,
  onCustomPropertiesChange
}) => {
  const [copied, setCopied] = useState<string | null>(null);

  const commonVariables = [
    { name: '--primary-color', value: '#3b82f6', description: 'Primary brand color' },
    { name: '--secondary-color', value: '#64748b', description: 'Secondary color' },
    { name: '--accent-color', value: '#f59e0b', description: 'Accent color' },
    { name: '--text-color', value: '#1f2937', description: 'Main text color' },
    { name: '--bg-color', value: '#ffffff', description: 'Background color' },
    { name: '--border-color', value: '#e5e7eb', description: 'Border color' },
    { name: '--shadow-color', value: 'rgba(0, 0, 0, 0.1)', description: 'Shadow color' },
    { name: '--border-radius', value: '8px', description: 'Default border radius' },
    { name: '--spacing-xs', value: '4px', description: 'Extra small spacing' },
    { name: '--spacing-sm', value: '8px', description: 'Small spacing' },
    { name: '--spacing-md', value: '16px', description: 'Medium spacing' },
    { name: '--spacing-lg', value: '24px', description: 'Large spacing' },
    { name: '--spacing-xl', value: '32px', description: 'Extra large spacing' },
    { name: '--font-size-xs', value: '12px', description: 'Extra small font size' },
    { name: '--font-size-sm', value: '14px', description: 'Small font size' },
    { name: '--font-size-base', value: '16px', description: 'Base font size' },
    { name: '--font-size-lg', value: '18px', description: 'Large font size' },
    { name: '--font-size-xl', value: '20px', description: 'Extra large font size' },
    { name: '--font-weight-normal', value: '400', description: 'Normal font weight' },
    { name: '--font-weight-medium', value: '500', description: 'Medium font weight' },
    { name: '--font-weight-bold', value: '700', description: 'Bold font weight' },
    { name: '--line-height-tight', value: '1.25', description: 'Tight line height' },
    { name: '--line-height-normal', value: '1.5', description: 'Normal line height' },
    { name: '--line-height-loose', value: '1.75', description: 'Loose line height' },
    { name: '--transition-fast', value: '0.15s ease', description: 'Fast transition' },
    { name: '--transition-normal', value: '0.3s ease', description: 'Normal transition' },
    { name: '--transition-slow', value: '0.5s ease', description: 'Slow transition' },
    { name: '--z-index-dropdown', value: '1000', description: 'Dropdown z-index' },
    { name: '--z-index-modal', value: '1050', description: 'Modal z-index' },
    { name: '--z-index-tooltip', value: '1070', description: 'Tooltip z-index' }
  ];

  const addVariable = (name: string, value: string, description: string = '') => {
    const newVariable = {
      id: Date.now().toString(),
      name,
      value,
      description
    };
    onCustomPropertiesChange([...customProperties, newVariable]);
  };

  const removeVariable = (id: string) => {
    onCustomPropertiesChange(customProperties.filter(v => v.id !== id));
  };

  const updateVariable = (id: string, field: string, value: string) => {
    onCustomPropertiesChange(
      customProperties.map(v => 
        v.id === id ? { ...v, [field]: value } : v
      )
    );
  };

  const copyVariable = async (variable: any) => {
    try {
      await navigator.clipboard.writeText(`${variable.name}: ${variable.value};`);
      setCopied(variable.id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const generateCSSVariables = () => {
    if (customProperties.length === 0) return '';
    
    const variables = customProperties
      .map(v => `  ${v.name}: ${v.value};`)
      .join('\n');
    
    return `:root {\n${variables}\n}`;
  };

  const copyAllVariables = async () => {
    try {
      await navigator.clipboard.writeText(generateCSSVariables());
      setCopied('all');
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Common Variables */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
          <Variable size={16} />
          <span>Common CSS Variables</span>
        </h3>
        <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
          {commonVariables.map((variable) => (
            <button
              key={variable.name}
              onClick={() => addVariable(variable.name, variable.value, variable.description)}
              className="flex items-center justify-between p-3 text-left text-xs bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-sm"
            >
              <div className="flex-1">
                <div className="font-medium text-purple-600 dark:text-purple-400">{variable.name}</div>
                <div className="text-gray-500 dark:text-gray-400 font-mono">{variable.value}</div>
                <div className="text-gray-400 dark:text-gray-500 text-xs">{variable.description}</div>
              </div>
              <Plus size={12} className="text-gray-400 dark:text-gray-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Custom Variables */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Custom Variables</h3>
          <button
            onClick={() => addVariable('--custom-var', '#000000', 'Custom variable')}
            className="flex items-center space-x-1 px-2 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700 transition-all duration-200 hover:shadow-sm"
          >
            <Plus size={12} />
            <span>Add Variable</span>
          </button>
        </div>

        {customProperties.length === 0 ? (
          <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            No custom variables added yet. Click "Add Variable" or select from common variables above.
          </div>
        ) : (
          <div className="space-y-3">
            {customProperties.map((variable) => (
              <div key={variable.id} className="p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg transition-colors duration-200">
                <div className="space-y-3">
                  {/* Variable Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Variable Name</label>
                    <input
                      type="text"
                      value={variable.name}
                      onChange={(e) => updateVariable(variable.id, 'name', e.target.value)}
                      placeholder="--my-variable"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm font-mono transition-all duration-200 hover:border-purple-300"
                    />
                  </div>

                  {/* Variable Value */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Value</label>
                    <div className="flex space-x-2">
                      {variable.value.startsWith('#') && (
                        <input
                          type="color"
                          value={variable.value}
                          onChange={(e) => updateVariable(variable.id, 'value', e.target.value)}
                          className="w-10 h-10 rounded border-2 border-gray-200 dark:border-gray-600 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
                        />
                      )}
                      <input
                        type="text"
                        value={variable.value}
                        onChange={(e) => updateVariable(variable.id, 'value', e.target.value)}
                        placeholder="16px, #ff0000, 1.5, etc."
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm font-mono transition-all duration-200 hover:border-purple-300"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Description (optional)</label>
                    <input
                      type="text"
                      value={variable.description}
                      onChange={(e) => updateVariable(variable.id, 'description', e.target.value)}
                      placeholder="Describe what this variable is used for"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-600">
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      {variable.name}: {variable.value};
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => copyVariable(variable)}
                        className={`flex items-center space-x-1 px-2 py-1 text-xs rounded transition-all duration-200 ${
                          copied === variable.id
                            ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                            : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
                        }`}
                      >
                        {copied === variable.id ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copied === variable.id ? 'Copied!' : 'Copy'}</span>
                      </button>
                      <button
                        onClick={() => removeVariable(variable.id)}
                        className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/50 rounded transition-all duration-200"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Generated CSS */}
      {customProperties.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Generated CSS</h3>
            <button
              onClick={copyAllVariables}
              className={`flex items-center space-x-1 px-2 py-1 text-xs rounded transition-all duration-200 ${
                copied === 'all'
                  ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                  : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
              }`}
            >
              {copied === 'all' ? <Check size={12} /> : <Copy size={12} />}
              <span>{copied === 'all' ? 'Copied!' : 'Copy All'}</span>
            </button>
          </div>
          <pre className="bg-gray-900 dark:bg-gray-950 text-green-400 dark:text-green-300 p-4 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 dark:border-gray-600">
            <code>{generateCSSVariables()}</code>
          </pre>
        </div>
      )}

      {/* Variable Usage Examples */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Usage Examples</h3>
        <div className="space-y-2 text-xs">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400">
            <div className="font-medium text-blue-800 dark:text-blue-300 mb-1">Using Variables in CSS</div>
            <code className="text-blue-600 dark:text-blue-400 font-mono">
              color: var(--primary-color);<br />
              margin: var(--spacing-md);<br />
              font-size: var(--font-size-lg);
            </code>
          </div>
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
            <div className="font-medium text-green-800 dark:text-green-300 mb-1">With Fallback Values</div>
            <code className="text-green-600 dark:text-green-400 font-mono">
              color: var(--text-color, #333);<br />
              padding: var(--spacing-md, 16px);
            </code>
          </div>
          <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
            <div className="font-medium text-yellow-800 dark:text-yellow-300 mb-1">Dynamic Updates with JavaScript</div>
            <code className="text-yellow-600 dark:text-yellow-400 font-mono">
              document.documentElement.style<br />
              .setProperty('--primary-color', '#ff0000');
            </code>
          </div>
        </div>
      </div>

      {/* Variable Categories */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Variable Categories</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              const colorVars = commonVariables.filter(v => v.name.includes('color'));
              colorVars.forEach(v => addVariable(v.name, v.value, v.description));
            }}
            className="px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-md transition-all duration-200 border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm"
          >
            Add All Colors
          </button>
          <button
            onClick={() => {
              const spacingVars = commonVariables.filter(v => v.name.includes('spacing'));
              spacingVars.forEach(v => addVariable(v.name, v.value, v.description));
            }}
            className="px-3 py-2 text-xs font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/50 rounded-md transition-all duration-200 border border-green-200 dark:border-green-700 hover:border-green-300 dark:hover:border-green-600 hover:shadow-sm"
          >
            Add All Spacing
          </button>
          <button
            onClick={() => {
              const fontVars = commonVariables.filter(v => v.name.includes('font'));
              fontVars.forEach(v => addVariable(v.name, v.value, v.description));
            }}
            className="px-3 py-2 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/50 rounded-md transition-all duration-200 border border-purple-200 dark:border-purple-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-sm"
          >
            Add All Typography
          </button>
          <button
            onClick={() => {
              const transitionVars = commonVariables.filter(v => v.name.includes('transition') || v.name.includes('z-index'));
              transitionVars.forEach(v => addVariable(v.name, v.value, v.description));
            }}
            className="px-3 py-2 text-xs font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/50 rounded-md transition-all duration-200 border border-orange-200 dark:border-orange-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-sm"
          >
            Add All Utilities
          </button>
        </div>
      </div>
    </div>
  );
};