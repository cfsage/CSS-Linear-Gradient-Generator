import React from 'react';
import { Plus, Trash2, Palette } from 'lucide-react';
import { ColorStop, GradientType, LinearDirection, RadialShape, RadialSize, RadialPosition, GradientPreset } from '../../types';

interface GradientsPanelProps {
  gradientType: GradientType;
  onGradientTypeChange: (type: GradientType) => void;
  linearDirection: LinearDirection;
  onLinearDirectionChange: (direction: LinearDirection) => void;
  customAngle: number;
  onCustomAngleChange: (angle: number) => void;
  radialShape: RadialShape;
  onRadialShapeChange: (shape: RadialShape) => void;
  radialSize: RadialSize;
  onRadialSizeChange: (size: RadialSize) => void;
  radialPosition: RadialPosition;
  onRadialPositionChange: (position: RadialPosition) => void;
  colorStops: ColorStop[];
  onColorStopsChange: (stops: ColorStop[]) => void;
  repeating: boolean;
  onRepeatingChange: (repeating: boolean) => void;
  presets: GradientPreset[];
  onApplyPreset: (preset: GradientPreset) => void;
}

export const GradientsPanel: React.FC<GradientsPanelProps> = ({
  gradientType,
  onGradientTypeChange,
  linearDirection,
  onLinearDirectionChange,
  customAngle,
  onCustomAngleChange,
  radialShape,
  onRadialShapeChange,
  radialSize,
  onRadialSizeChange,
  radialPosition,
  onRadialPositionChange,
  colorStops,
  onColorStopsChange,
  repeating,
  onRepeatingChange,
  presets,
  onApplyPreset
}) => {
  const addColorStop = () => {
    const newId = Date.now().toString();
    const newPosition = colorStops.length > 0 ? 
      Math.min(100, Math.max(...colorStops.map(stop => stop.position)) + 20) : 50;
    
    onColorStopsChange([...colorStops, {
      id: newId,
      color: '#' + Math.floor(Math.random()*16777215).toString(16),
      position: newPosition
    }]);
  };

  const removeColorStop = (id: string) => {
    if (colorStops.length > 2) {
      onColorStopsChange(colorStops.filter(stop => stop.id !== id));
    }
  };

  const updateColorStop = (id: string, field: 'color' | 'position', value: string | number) => {
    onColorStopsChange(colorStops.map(stop => 
      stop.id === id ? { ...stop, [field]: value } : stop
    ));
  };

  const linearDirectionOptions = [
    { label: 'To Right', value: 'to right' as LinearDirection },
    { label: 'To Left', value: 'to left' as LinearDirection },
    { label: 'To Bottom', value: 'to bottom' as LinearDirection },
    { label: 'To Top', value: 'to top' as LinearDirection },
    { label: 'To Bottom Right', value: 'to bottom right' as LinearDirection },
    { label: 'To Bottom Left', value: 'to bottom left' as LinearDirection },
    { label: 'To Top Right', value: 'to top right' as LinearDirection },
    { label: 'To Top Left', value: 'to top left' as LinearDirection },
    { label: 'Custom Angle', value: 'custom' as LinearDirection },
  ];

  return (
    <div className="space-y-6">
      {/* Presets */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
          <Palette size={16} />
          <span>Gradient Presets</span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => onApplyPreset(preset)}
              className="px-3 py-2 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/50 rounded-md transition-all duration-200 border border-purple-200 dark:border-purple-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-sm"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gradient Type */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Gradient Type</h3>
        <div className="grid grid-cols-3 gap-2">
          {(['linear', 'radial', 'conic'] as GradientType[]).map((type) => (
            <label
              key={type}
              className={`relative flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                gradientType === type
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 shadow-sm'
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <input
                type="radio"
                name="gradientType"
                value={type}
                checked={gradientType === type}
                onChange={(e) => onGradientTypeChange(e.target.value as GradientType)}
                className="sr-only"
              />
              <span className="text-xs font-medium capitalize">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Repeating Option */}
      <div className="space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={repeating}
            onChange={(e) => onRepeatingChange(e.target.checked)}
            className="w-4 h-4 text-purple-600 border-gray-300 dark:border-gray-600 rounded focus:ring-purple-500 dark:bg-gray-700 transition-all duration-200"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Repeating Gradient</span>
        </label>
      </div>

      {/* Linear Direction */}
      {gradientType === 'linear' && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Direction</h3>
          <div className="grid grid-cols-2 gap-2">
            {linearDirectionOptions.map((option) => (
              <label
                key={option.value}
                className={`relative flex items-center justify-center p-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                  linearDirection === option.value
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 shadow-sm'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <input
                  type="radio"
                  name="linearDirection"
                  value={option.value}
                  checked={linearDirection === option.value}
                  onChange={(e) => onLinearDirectionChange(e.target.value as LinearDirection)}
                  className="sr-only"
                />
                <span className="text-xs font-medium">{option.label}</span>
              </label>
            ))}
          </div>
          {linearDirection === 'custom' && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Angle: {customAngle}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={customAngle}
                onChange={(e) => onCustomAngleChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          )}
        </div>
      )}

      {/* Color Stops */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Color Stops</h3>
          <button
            onClick={addColorStop}
            className="flex items-center space-x-1 px-2 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700 transition-all duration-200 hover:shadow-sm"
          >
            <Plus size={12} />
            <span>Add</span>
          </button>
        </div>
        
        <div className="space-y-3">
          {colorStops.map((stop) => (
            <div key={stop.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-200">
              <input
                type="color"
                value={stop.color}
                onChange={(e) => updateColorStop(stop.id, 'color', e.target.value)}
                className="w-8 h-8 rounded border-2 border-gray-200 dark:border-gray-600 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
              />
              <input
                type="text"
                value={stop.color}
                onChange={(e) => updateColorStop(stop.id, 'color', e.target.value)}
                className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-200 rounded text-xs focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
              />
              
              <div className="flex-1 space-y-1">
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                  {stop.position}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={stop.position}
                  onChange={(e) => updateColorStop(stop.id, 'position', Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              
              {colorStops.length > 2 && (
                <button
                  onClick={() => removeColorStop(stop.id)}
                  className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/50 rounded transition-all duration-200"
                >
                  <Trash2 size={12} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};