import React, { useState } from 'react';
import { Zap, Layers, Grid3X3, Palette } from 'lucide-react';
import { SliderControl } from '../Common/SliderControl';

interface ModernCSSPanelProps {
  colorScheme: string;
  onColorSchemeChange: (value: string) => void;
  accentColor: string;
  onAccentColorChange: (value: string) => void;
  containerType: string;
  onContainerTypeChange: (value: string) => void;
  containerName: string;
  onContainerNameChange: (value: string) => void;
}

export const ModernCSSPanel: React.FC<ModernCSSPanelProps> = ({
  colorScheme,
  onColorSchemeChange,
  accentColor,
  onAccentColorChange,
  containerType,
  onContainerTypeChange,
  containerName,
  onContainerNameChange
}) => {
  const [aspectRatio, setAspectRatio] = useState('auto');
  const [objectFit, setObjectFit] = useState('fill');
  const [objectPosition, setObjectPosition] = useState('center');
  const [scrollbarWidth, setScrollbarWidth] = useState('auto');
  const [scrollbarColor, setScrollbarColor] = useState('auto');

  const colorSchemeOptions = ['normal', 'light', 'dark', 'light dark'];
  const containerTypeOptions = ['normal', 'size', 'inline-size', 'block-size'];
  
  const aspectRatioOptions = [
    'auto', '1/1', '16/9', '4/3', '3/2', '21/9', '9/16', '3/4', '2/3'
  ];
  
  const objectFitOptions = ['fill', 'contain', 'cover', 'none', 'scale-down'];
  const objectPositionOptions = [
    'center', 'top', 'bottom', 'left', 'right',
    'top left', 'top right', 'bottom left', 'bottom right'
  ];

  const scrollbarWidthOptions = ['auto', 'thin', 'none'];

  const logicalProperties = [
    { css: 'margin-inline-start', description: 'Start margin in writing direction' },
    { css: 'margin-inline-end', description: 'End margin in writing direction' },
    { css: 'margin-block-start', description: 'Block start margin' },
    { css: 'margin-block-end', description: 'Block end margin' },
    { css: 'padding-inline', description: 'Inline padding (left/right in LTR)' },
    { css: 'padding-block', description: 'Block padding (top/bottom)' },
    { css: 'border-inline-start', description: 'Start border in writing direction' },
    { css: 'border-inline-end', description: 'End border in writing direction' },
    { css: 'inset-inline-start', description: 'Logical left position' },
    { css: 'inset-inline-end', description: 'Logical right position' },
    { css: 'inset-block-start', description: 'Logical top position' },
    { css: 'inset-block-end', description: 'Logical bottom position' }
  ];

  const modernFeatures = [
    {
      name: 'CSS Subgrid',
      description: 'Inherit grid tracks from parent',
      example: 'grid-template-rows: subgrid;'
    },
    {
      name: 'CSS Cascade Layers',
      description: 'Control specificity with layers',
      example: '@layer base, components, utilities;'
    },
    {
      name: 'CSS Nesting',
      description: 'Nest selectors like Sass',
      example: '.card { &:hover { transform: scale(1.05); } }'
    },
    {
      name: 'CSS :has() Selector',
      description: 'Parent selector based on children',
      example: '.card:has(img) { padding: 0; }'
    },
    {
      name: 'CSS @supports',
      description: 'Feature detection in CSS',
      example: '@supports (display: grid) { .layout { display: grid; } }'
    },
    {
      name: 'CSS @container',
      description: 'Container-based responsive design',
      example: '@container (min-width: 400px) { .card { flex-direction: row; } }'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Color Scheme */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <Palette size={16} />
          <span>Color Scheme</span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {colorSchemeOptions.map((option) => (
            <label
              key={option}
              className={`relative flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                colorScheme === option
                  ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="colorScheme"
                value={option}
                checked={colorScheme === option}
                onChange={(e) => onColorSchemeChange(e.target.value)}
                className="sr-only"
              />
              <span className="text-xs font-medium capitalize">{option}</span>
            </label>
          ))}
        </div>
        
        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="text-xs text-blue-800 font-medium mb-1">Color Scheme</div>
          <div className="text-xs text-blue-600">
            Controls the default color scheme for form controls and scrollbars. Supports system preference detection.
          </div>
        </div>
      </div>

      {/* Accent Color */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Accent Color</h3>
        <div className="flex space-x-2">
          <input
            type="color"
            value={accentColor}
            onChange={(e) => onAccentColorChange(e.target.value)}
            className="w-12 h-10 rounded border-2 border-gray-200 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
          />
          <input
            type="text"
            value={accentColor}
            onChange={(e) => onAccentColorChange(e.target.value)}
            placeholder="auto"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          />
        </div>
        
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Accent Color Preview:</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked 
                readOnly
                style={{ accentColor: accentColor || undefined }}
                className="transition-all duration-200"
              />
              <label className="text-sm">Checkbox with custom accent color</label>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                checked 
                readOnly
                style={{ accentColor: accentColor || undefined }}
                className="transition-all duration-200"
              />
              <label className="text-sm">Radio button with custom accent color</label>
            </div>
            <input 
              type="range" 
              defaultValue="50"
              style={{ accentColor: accentColor || undefined }}
              className="w-full transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* Container Queries */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2 border-b pb-2">
          <Grid3X3 size={16} />
          <span>Container Queries</span>
        </h3>
        
        {/* Container Type */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Container Type</label>
          <select
            value={containerType}
            onChange={(e) => onContainerTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          >
            {containerTypeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Container Name */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Container Name</label>
          <input
            type="text"
            value={containerName}
            onChange={(e) => onContainerNameChange(e.target.value)}
            placeholder="sidebar, main, card"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          />
        </div>

        <div className="p-3 bg-green-50 rounded-lg">
          <div className="text-xs text-green-800 font-medium mb-1">Container Queries</div>
          <div className="text-xs text-green-600">
            Enable responsive design based on container size rather than viewport size. Perfect for component-based layouts.
          </div>
        </div>
      </div>

      {/* Aspect Ratio */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Aspect Ratio</h3>
        <select
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {aspectRatioOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        
        {/* Aspect Ratio Preview */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Aspect Ratio Preview:</div>
          <div 
            className="bg-gradient-to-br from-blue-400 to-purple-500 rounded transition-all duration-300"
            style={{ aspectRatio: aspectRatio === 'auto' ? undefined : aspectRatio }}
          >
            <div className="p-4 text-white text-sm font-medium">
              {aspectRatio === 'auto' ? 'Auto aspect ratio' : `${aspectRatio} aspect ratio`}
            </div>
          </div>
        </div>
      </div>

      {/* Object Fit & Position */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Object Fit & Position</h3>
        
        {/* Object Fit */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Object Fit</label>
          <select
            value={objectFit}
            onChange={(e) => setObjectFit(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          >
            {objectFitOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Object Position */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Object Position</label>
          <select
            value={objectPosition}
            onChange={(e) => setObjectPosition(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          >
            {objectPositionOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Object Fit Preview */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Object Fit Preview:</div>
          <div className="w-full h-32 bg-gray-200 rounded overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
              alt="Object fit example"
              className="w-full h-full transition-all duration-300"
              style={{ 
                objectFit: objectFit as any,
                objectPosition: objectPosition 
              }}
            />
          </div>
        </div>
      </div>

      {/* Scrollbar Styling */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Scrollbar Styling</h3>
        
        {/* Scrollbar Width */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Scrollbar Width</label>
          <select
            value={scrollbarWidth}
            onChange={(e) => setScrollbarWidth(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          >
            {scrollbarWidthOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Scrollbar Color */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Scrollbar Color</label>
          <div className="flex space-x-2">
            <input
              type="color"
              value={scrollbarColor === 'auto' ? '#6366f1' : scrollbarColor}
              onChange={(e) => setScrollbarColor(e.target.value)}
              className="w-12 h-10 rounded border-2 border-gray-200 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
            />
            <input
              type="text"
              value={scrollbarColor}
              onChange={(e) => setScrollbarColor(e.target.value)}
              placeholder="auto"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
            />
          </div>
        </div>

        {/* Scrollbar Preview */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Scrollbar Preview:</div>
          <div 
            className="w-full h-24 bg-white border border-gray-300 rounded p-2 overflow-auto"
            style={{ 
              scrollbarWidth: scrollbarWidth as any,
              scrollbarColor: scrollbarColor === 'auto' ? undefined : `${scrollbarColor} #f1f5f9`
            }}
          >
            <div className="w-96 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded p-2 text-white text-sm">
              This content is larger than its container. Scroll to see the custom scrollbar styling in action. The scrollbar width and color can be customized using modern CSS properties.
            </div>
          </div>
        </div>
      </div>

      {/* Logical Properties */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <Layers size={16} />
          <span>Logical Properties</span>
        </h3>
        <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
          {logicalProperties.map((property) => (
            <div key={property.css} className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-sm text-purple-600 font-mono">{property.css}</div>
              <div className="text-xs text-gray-600">{property.description}</div>
            </div>
          ))}
        </div>
        
        <div className="p-3 bg-yellow-50 rounded-lg">
          <div className="text-xs text-yellow-800 font-medium mb-1">Logical Properties</div>
          <div className="text-xs text-yellow-600">
            Use logical properties for internationalization. They adapt to different writing modes and text directions automatically.
          </div>
        </div>
      </div>

      {/* Modern CSS Features */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <Zap size={16} />
          <span>Modern CSS Features</span>
        </h3>
        <div className="space-y-3">
          {modernFeatures.map((feature) => (
            <div key={feature.name} className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="font-medium text-sm text-gray-800 mb-1">{feature.name}</div>
              <div className="text-xs text-gray-600 mb-2">{feature.description}</div>
              <code className="text-xs bg-gray-100 p-2 rounded font-mono block">
                {feature.example}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Feature Detection */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">CSS Feature Detection</h3>
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-xs text-blue-800 font-medium mb-2">@supports Examples</div>
          <div className="space-y-2 text-xs font-mono">
            <div className="bg-white p-2 rounded">
              @supports (display: grid) {'{'}
              <br />
              &nbsp;&nbsp;.layout {'{ display: grid; }'}
              <br />
              {'}'}
            </div>
            <div className="bg-white p-2 rounded">
              @supports (backdrop-filter: blur(10px)) {'{'}
              <br />
              &nbsp;&nbsp;.modal {'{ backdrop-filter: blur(10px); }'}
              <br />
              {'}'}
            </div>
            <div className="bg-white p-2 rounded">
              @supports (container-type: inline-size) {'{'}
              <br />
              &nbsp;&nbsp;.card {'{ container-type: inline-size; }'}
              <br />
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};