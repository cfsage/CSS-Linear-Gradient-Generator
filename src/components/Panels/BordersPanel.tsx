import React from 'react';
import { BorderStyle } from '../../types';

interface BordersPanelProps {
  border: string;
  onBorderChange: (value: string) => void;
  borderTop: string;
  onBorderTopChange: (value: string) => void;
  borderRight: string;
  onBorderRightChange: (value: string) => void;
  borderBottom: string;
  onBorderBottomChange: (value: string) => void;
  borderLeft: string;
  onBorderLeftChange: (value: string) => void;
  borderWidth: string;
  onBorderWidthChange: (value: string) => void;
  borderStyle: BorderStyle;
  onBorderStyleChange: (value: BorderStyle) => void;
  borderColor: string;
  onBorderColorChange: (value: string) => void;
  borderRadius: string;
  onBorderRadiusChange: (value: string) => void;
  borderTopLeftRadius: string;
  onBorderTopLeftRadiusChange: (value: string) => void;
  borderTopRightRadius: string;
  onBorderTopRightRadiusChange: (value: string) => void;
  borderBottomLeftRadius: string;
  onBorderBottomLeftRadiusChange: (value: string) => void;
  borderBottomRightRadius: string;
  onBorderBottomRightRadiusChange: (value: string) => void;
}

export const BordersPanel: React.FC<BordersPanelProps> = ({
  border,
  onBorderChange,
  borderTop,
  onBorderTopChange,
  borderRight,
  onBorderRightChange,
  borderBottom,
  onBorderBottomChange,
  borderLeft,
  onBorderLeftChange,
  borderWidth,
  onBorderWidthChange,
  borderStyle,
  onBorderStyleChange,
  borderColor,
  onBorderColorChange,
  borderRadius,
  onBorderRadiusChange,
  borderTopLeftRadius,
  onBorderTopLeftRadiusChange,
  borderTopRightRadius,
  onBorderTopRightRadiusChange,
  borderBottomLeftRadius,
  onBorderBottomLeftRadiusChange,
  borderBottomRightRadius,
  onBorderBottomRightRadiusChange
}) => {
  const borderStyles: BorderStyle[] = [
    'none', 'solid', 'dashed', 'dotted', 'double', 
    'groove', 'ridge', 'inset', 'outset'
  ];

  const borderWidths = ['0', '1px', '2px', '3px', '4px', '5px', '8px', '10px'];
  const borderRadiusPresets = ['0', '4px', '8px', '12px', '16px', '20px', '24px', '50%', '9999px'];

  return (
    <div className="space-y-6">
      {/* Border Shorthand */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Border (shorthand)</h3>
        <input
          type="text"
          value={border}
          onChange={(e) => onBorderChange(e.target.value)}
          placeholder="1px solid #000000"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
        />
        <div className="flex flex-wrap gap-1 mt-2">
          {[
            'none',
            '1px solid #000000',
            '2px solid #333333',
            '1px dashed #666666',
            '3px double #000000'
          ].map((preset) => (
            <button
              key={preset}
              onClick={() => onBorderChange(preset)}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded transition-all duration-200"
            >
              {preset === 'none' ? 'None' : 'Preset'}
            </button>
          ))}
        </div>
      </div>

      {/* Individual Border Sides */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">Individual Borders</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Border Top</label>
            <input
              type="text"
              value={borderTop}
              onChange={(e) => onBorderTopChange(e.target.value)}
              placeholder="1px solid #000"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Border Right</label>
            <input
              type="text"
              value={borderRight}
              onChange={(e) => onBorderRightChange(e.target.value)}
              placeholder="1px solid #000"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Border Bottom</label>
            <input
              type="text"
              value={borderBottom}
              onChange={(e) => onBorderBottomChange(e.target.value)}
              placeholder="1px solid #000"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Border Left</label>
            <input
              type="text"
              value={borderLeft}
              onChange={(e) => onBorderLeftChange(e.target.value)}
              placeholder="1px solid #000"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
        </div>
      </div>

      {/* Border Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">Border Properties</h3>
        
        {/* Border Width */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Border Width</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={borderWidth}
              onChange={(e) => onBorderWidthChange(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
            <select
              value={borderWidth}
              onChange={(e) => onBorderWidthChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            >
              {borderWidths.map((width) => (
                <option key={width} value={width}>{width}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Border Style */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Border Style</label>
          <div className="grid grid-cols-3 gap-2">
            {borderStyles.map((style) => (
              <label
                key={style}
                className={`relative flex items-center justify-center p-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                  borderStyle === style
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 shadow-sm'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="borderStyle"
                  value={style}
                  checked={borderStyle === style}
                  onChange={(e) => onBorderStyleChange(e.target.value as BorderStyle)}
                  className="sr-only"
                />
                <span className="text-xs font-medium capitalize">{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Border Color */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Border Color</label>
          <div className="flex space-x-2">
            <input
              type="color"
              value={borderColor}
              onChange={(e) => onBorderColorChange(e.target.value)}
              className="w-12 h-10 rounded border-2 border-gray-200 dark:border-gray-600 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
            />
            <input
              type="text"
              value={borderColor}
              onChange={(e) => onBorderColorChange(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
        </div>
      </div>

      {/* Border Radius */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">Border Radius</h3>
        
        {/* Border Radius Shorthand */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Border Radius (shorthand)</label>
          <input
            type="text"
            value={borderRadius}
            onChange={(e) => onBorderRadiusChange(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
          />
          <div className="flex flex-wrap gap-1 mt-2">
            {borderRadiusPresets.map((preset) => (
              <button
                key={preset}
                onClick={() => onBorderRadiusChange(preset)}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded transition-all duration-200"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Individual Border Radius */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Top Left</label>
            <input
              type="text"
              value={borderTopLeftRadius}
              onChange={(e) => onBorderTopLeftRadiusChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Top Right</label>
            <input
              type="text"
              value={borderTopRightRadius}
              onChange={(e) => onBorderTopRightRadiusChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Bottom Left</label>
            <input
              type="text"
              value={borderBottomLeftRadius}
              onChange={(e) => onBorderBottomLeftRadiusChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Bottom Right</label>
            <input
              type="text"
              value={borderBottomRightRadius}
              onChange={(e) => onBorderBottomRightRadiusChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
        </div>

        {/* Visual Border Radius Control */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Visual Border Radius Control</div>
          <div className="relative bg-blue-100 dark:bg-blue-900/30 p-8 rounded-lg border border-blue-200 dark:border-blue-700">
            <div className="absolute top-2 left-2">
              <input
                type="text"
                value={borderTopLeftRadius}
                onChange={(e) => onBorderTopLeftRadiusChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-center transition-all duration-200"
              />
            </div>
            <div className="absolute top-2 right-2">
              <input
                type="text"
                value={borderTopRightRadius}
                onChange={(e) => onBorderTopRightRadiusChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-center transition-all duration-200"
              />
            </div>
            <div className="absolute bottom-2 left-2">
              <input
                type="text"
                value={borderBottomLeftRadius}
                onChange={(e) => onBorderBottomLeftRadiusChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-center transition-all duration-200"
              />
            </div>
            <div className="absolute bottom-2 right-2">
              <input
                type="text"
                value={borderBottomRightRadius}
                onChange={(e) => onBorderBottomRightRadiusChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-center transition-all duration-200"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded text-center text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">Element</div>
          </div>
        </div>
      </div>
    </div>
  );
};