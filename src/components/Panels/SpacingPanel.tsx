import React from 'react';
import { BoxSizing } from '../../types';

interface SpacingPanelProps {
  margin: string;
  onMarginChange: (value: string) => void;
  marginTop: string;
  onMarginTopChange: (value: string) => void;
  marginRight: string;
  onMarginRightChange: (value: string) => void;
  marginBottom: string;
  onMarginBottomChange: (value: string) => void;
  marginLeft: string;
  onMarginLeftChange: (value: string) => void;
  padding: string;
  onPaddingChange: (value: string) => void;
  paddingTop: string;
  onPaddingTopChange: (value: string) => void;
  paddingRight: string;
  onPaddingRightChange: (value: string) => void;
  paddingBottom: string;
  onPaddingBottomChange: (value: string) => void;
  paddingLeft: string;
  onPaddingLeftChange: (value: string) => void;
  boxSizing: BoxSizing;
  onBoxSizingChange: (value: BoxSizing) => void;
}

export const SpacingPanel: React.FC<SpacingPanelProps> = ({
  margin,
  onMarginChange,
  marginTop,
  onMarginTopChange,
  marginRight,
  onMarginRightChange,
  marginBottom,
  onMarginBottomChange,
  marginLeft,
  onMarginLeftChange,
  padding,
  onPaddingChange,
  paddingTop,
  onPaddingTopChange,
  paddingRight,
  onPaddingRightChange,
  paddingBottom,
  onPaddingBottomChange,
  paddingLeft,
  onPaddingLeftChange,
  boxSizing,
  onBoxSizingChange
}) => {
  const spacingPresets = ['0', '4px', '8px', '12px', '16px', '20px', '24px', '32px', '40px', '48px', '64px'];
  const boxSizingOptions: BoxSizing[] = ['content-box', 'border-box'];

  return (
    <div className="space-y-6">
      {/* Box Sizing */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Box Sizing</h3>
        <div className="grid grid-cols-2 gap-2">
          {boxSizingOptions.map((option) => (
            <label
              key={option}
              className={`relative flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${
                boxSizing === option
                  ? 'border-purple-500 bg-purple-50 text-purple-700'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="boxSizing"
                value={option}
                checked={boxSizing === option}
                onChange={(e) => onBoxSizingChange(e.target.value as BoxSizing)}
                className="sr-only"
              />
              <span className="text-xs font-medium">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Margin */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Margin</h3>
        
        {/* Margin Shorthand */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Margin (shorthand)</label>
          <input
            type="text"
            value={margin}
            onChange={(e) => onMarginChange(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
          <div className="flex flex-wrap gap-1 mt-2">
            {spacingPresets.map((preset) => (
              <button
                key={preset}
                onClick={() => onMarginChange(preset)}
                className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Individual Margin Controls */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Margin Top</label>
            <input
              type="text"
              value={marginTop}
              onChange={(e) => onMarginTopChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Margin Right</label>
            <input
              type="text"
              value={marginRight}
              onChange={(e) => onMarginRightChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Margin Bottom</label>
            <input
              type="text"
              value={marginBottom}
              onChange={(e) => onMarginBottomChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Margin Left</label>
            <input
              type="text"
              value={marginLeft}
              onChange={(e) => onMarginLeftChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Visual Margin Control */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Visual Margin Control</div>
          <div className="relative bg-blue-100 p-4 rounded">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <input
                type="text"
                value={marginTop}
                onChange={(e) => onMarginTopChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border rounded text-center"
              />
            </div>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
              <input
                type="text"
                value={marginRight}
                onChange={(e) => onMarginRightChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border rounded text-center"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <input
                type="text"
                value={marginBottom}
                onChange={(e) => onMarginBottomChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border rounded text-center"
              />
            </div>
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
              <input
                type="text"
                value={marginLeft}
                onChange={(e) => onMarginLeftChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border rounded text-center"
              />
            </div>
            <div className="bg-green-100 p-4 rounded text-center text-xs">Element</div>
          </div>
        </div>
      </div>

      {/* Padding */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Padding</h3>
        
        {/* Padding Shorthand */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Padding (shorthand)</label>
          <input
            type="text"
            value={padding}
            onChange={(e) => onPaddingChange(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
          <div className="flex flex-wrap gap-1 mt-2">
            {spacingPresets.map((preset) => (
              <button
                key={preset}
                onClick={() => onPaddingChange(preset)}
                className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Individual Padding Controls */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Padding Top</label>
            <input
              type="text"
              value={paddingTop}
              onChange={(e) => onPaddingTopChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Padding Right</label>
            <input
              type="text"
              value={paddingRight}
              onChange={(e) => onPaddingRightChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Padding Bottom</label>
            <input
              type="text"
              value={paddingBottom}
              onChange={(e) => onPaddingBottomChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Padding Left</label>
            <input
              type="text"
              value={paddingLeft}
              onChange={(e) => onPaddingLeftChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Visual Padding Control */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Visual Padding Control</div>
          <div className="relative bg-green-100 p-8 rounded">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <input
                type="text"
                value={paddingTop}
                onChange={(e) => onPaddingTopChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border rounded text-center"
              />
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
              <input
                type="text"
                value={paddingRight}
                onChange={(e) => onPaddingRightChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border rounded text-center"
              />
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <input
                type="text"
                value={paddingBottom}
                onChange={(e) => onPaddingBottomChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border rounded text-center"
              />
            </div>
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
              <input
                type="text"
                value={paddingLeft}
                onChange={(e) => onPaddingLeftChange(e.target.value)}
                placeholder="0"
                className="w-12 px-1 py-0.5 text-xs border rounded text-center"
              />
            </div>
            <div className="bg-white p-4 rounded text-center text-xs">Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};