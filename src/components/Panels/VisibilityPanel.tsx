import React from 'react';
import { Eye, EyeOff, Layers } from 'lucide-react';
import { SliderControl } from '../Common/SliderControl';

interface VisibilityPanelProps {
  visibility: string;
  onVisibilityChange: (value: string) => void;
  opacity: number;
  onOpacityChange: (value: number) => void;
  overflow: string;
  onOverflowChange: (value: string) => void;
  overflowX: string;
  onOverflowXChange: (value: string) => void;
  overflowY: string;
  onOverflowYChange: (value: string) => void;
  zIndex: number;
  onZIndexChange: (value: number) => void;
}

export const VisibilityPanel: React.FC<VisibilityPanelProps> = ({
  visibility,
  onVisibilityChange,
  opacity,
  onOpacityChange,
  overflow,
  onOverflowChange,
  overflowX,
  onOverflowXChange,
  overflowY,
  onOverflowYChange,
  zIndex,
  onZIndexChange
}) => {
  const visibilityOptions = ['visible', 'hidden', 'collapse'];
  const overflowOptions = ['visible', 'hidden', 'scroll', 'auto', 'clip'];

  return (
    <div className="space-y-6">
      {/* Visibility */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <Eye size={16} />
          <span>Visibility</span>
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {visibilityOptions.map((option) => (
            <label
              key={option}
              className={`relative flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                visibility === option
                  ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="visibility"
                value={option}
                checked={visibility === option}
                onChange={(e) => onVisibilityChange(e.target.value)}
                className="sr-only"
              />
              <span className="text-xs font-medium capitalize">{option}</span>
            </label>
          ))}
        </div>
        
        {/* Visibility Demo */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Visibility Test:</div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white text-xs">
              Always Visible
            </div>
            <div 
              className="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white text-xs"
              style={{ visibility: visibility as any }}
            >
              Test Element
            </div>
            <div className="w-16 h-16 bg-green-500 rounded flex items-center justify-center text-white text-xs">
              Always Visible
            </div>
          </div>
        </div>
      </div>

      {/* Opacity */}
      <div className="space-y-3">
        <SliderControl
          label="Opacity"
          value={opacity}
          onChange={onOpacityChange}
          min={0}
          max={1}
          step={0.01}
          unit=""
          icon={<EyeOff size={12} />}
          color="purple"
        />
        
        {/* Opacity Demo */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Opacity Test:</div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white text-xs">
              Opaque
            </div>
            <div 
              className="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white text-xs"
              style={{ opacity }}
            >
              Test Element
            </div>
            <div className="w-16 h-16 bg-green-500 rounded flex items-center justify-center text-white text-xs">
              Opaque
            </div>
          </div>
        </div>
      </div>

      {/* Z-Index */}
      <div className="space-y-3">
        <SliderControl
          label="Z-Index"
          value={zIndex}
          onChange={onZIndexChange}
          min={-100}
          max={100}
          step={1}
          unit=""
          icon={<Layers size={12} />}
          color="blue"
        />
        
        {/* Z-Index Demo */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Z-Index Test:</div>
          <div className="relative h-24">
            <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white text-xs z-10">
              Z: 10
            </div>
            <div 
              className="absolute top-4 left-8 w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white text-xs"
              style={{ zIndex }}
            >
              Z: {zIndex}
            </div>
            <div className="absolute top-8 left-16 w-16 h-16 bg-green-500 rounded flex items-center justify-center text-white text-xs z-5">
              Z: 5
            </div>
          </div>
        </div>
      </div>

      {/* Overflow */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Overflow</h3>
        
        {/* Overflow (shorthand) */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Overflow (both axes)</label>
          <select
            value={overflow}
            onChange={(e) => onOverflowChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          >
            {overflowOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Overflow X */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Overflow X (horizontal)</label>
          <select
            value={overflowX}
            onChange={(e) => onOverflowXChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          >
            {overflowOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Overflow Y */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Overflow Y (vertical)</label>
          <select
            value={overflowY}
            onChange={(e) => onOverflowYChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          >
            {overflowOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Overflow Demo */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Overflow Test:</div>
          <div 
            className="w-full h-24 border-2 border-gray-300 rounded p-2 text-sm"
            style={{ 
              overflow: overflow as any,
              overflowX: overflowX as any,
              overflowY: overflowY as any
            }}
          >
            <div className="w-96 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded p-2 text-white">
              This content is larger than its container. The overflow behavior determines how this content is displayed when it exceeds the container boundaries. You can scroll or see clipped content based on the overflow settings.
            </div>
          </div>
        </div>
      </div>

      {/* Visibility Presets */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Visibility Presets</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              onVisibilityChange('visible');
              onOpacityChange(1);
            }}
            className="px-3 py-2 text-xs font-medium text-green-600 hover:text-green-800 hover:bg-green-50 rounded-md transition-all duration-200 border border-green-200 hover:border-green-300 hover:shadow-sm"
          >
            Fully Visible
          </button>
          <button
            onClick={() => {
              onVisibilityChange('hidden');
              onOpacityChange(0);
            }}
            className="px-3 py-2 text-xs font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-all duration-200 border border-red-200 hover:border-red-300 hover:shadow-sm"
          >
            Fully Hidden
          </button>
          <button
            onClick={() => {
              onVisibilityChange('visible');
              onOpacityChange(0.5);
            }}
            className="px-3 py-2 text-xs font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-all duration-200 border border-blue-200 hover:border-blue-300 hover:shadow-sm"
          >
            Semi-Transparent
          </button>
          <button
            onClick={() => {
              onVisibilityChange('visible');
              onOpacityChange(0.1);
            }}
            className="px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-all duration-200 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
          >
            Nearly Hidden
          </button>
        </div>
      </div>
    </div>
  );
};