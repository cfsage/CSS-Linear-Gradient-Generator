import React from 'react';
import { DisplayType, PositionType } from '../../types';

interface LayoutPanelProps {
  display: DisplayType;
  onDisplayChange: (display: DisplayType) => void;
  position: PositionType;
  onPositionChange: (position: PositionType) => void;
  top: string;
  onTopChange: (top: string) => void;
  right: string;
  onRightChange: (right: string) => void;
  bottom: string;
  onBottomChange: (bottom: string) => void;
  left: string;
  onLeftChange: (left: string) => void;
  zIndex: number;
  onZIndexChange: (zIndex: number) => void;
  width: string;
  onWidthChange: (width: string) => void;
  height: string;
  onHeightChange: (height: string) => void;
  minWidth: string;
  onMinWidthChange: (minWidth: string) => void;
  maxWidth: string;
  onMaxWidthChange: (maxWidth: string) => void;
  minHeight: string;
  onMinHeightChange: (minHeight: string) => void;
  maxHeight: string;
  onMaxHeightChange: (maxHeight: string) => void;
}

export const LayoutPanel: React.FC<LayoutPanelProps> = ({
  display,
  onDisplayChange,
  position,
  onPositionChange,
  top,
  onTopChange,
  right,
  onRightChange,
  bottom,
  onBottomChange,
  left,
  onLeftChange,
  zIndex,
  onZIndexChange,
  width,
  onWidthChange,
  height,
  onHeightChange,
  minWidth,
  onMinWidthChange,
  maxWidth,
  onMaxWidthChange,
  minHeight,
  onMinHeightChange,
  maxHeight,
  onMaxHeightChange
}) => {
  const displayOptions: DisplayType[] = [
    'block', 'inline', 'inline-block', 'flex', 'inline-flex', 
    'grid', 'inline-grid', 'table', 'table-cell', 'table-row', 
    'contents', 'none'
  ];

  const positionOptions: PositionType[] = [
    'static', 'relative', 'absolute', 'fixed', 'sticky'
  ];

  return (
    <div className="space-y-6">
      {/* Display */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Display</h3>
        <select
          value={display}
          onChange={(e) => onDisplayChange(e.target.value as DisplayType)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
        >
          {displayOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Position */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Position</h3>
        <select
          value={position}
          onChange={(e) => onPositionChange(e.target.value as PositionType)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
        >
          {positionOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Position Values */}
      {position !== 'static' && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Position Values</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Top</label>
              <input
                type="text"
                value={top}
                onChange={(e) => onTopChange(e.target.value)}
                placeholder="auto"
                className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Right</label>
              <input
                type="text"
                value={right}
                onChange={(e) => onRightChange(e.target.value)}
                placeholder="auto"
                className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Bottom</label>
              <input
                type="text"
                value={bottom}
                onChange={(e) => onBottomChange(e.target.value)}
                placeholder="auto"
                className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Left</label>
              <input
                type="text"
                value={left}
                onChange={(e) => onLeftChange(e.target.value)}
                placeholder="auto"
                className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
              />
            </div>
          </div>
        </div>
      )}

      {/* Z-Index */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Z-Index</h3>
        <input
          type="number"
          value={zIndex}
          onChange={(e) => onZIndexChange(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
        />
      </div>

      {/* Dimensions */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Dimensions</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Width</label>
            <input
              type="text"
              value={width}
              onChange={(e) => onWidthChange(e.target.value)}
              placeholder="auto"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Height</label>
            <input
              type="text"
              value={height}
              onChange={(e) => onHeightChange(e.target.value)}
              placeholder="auto"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Min Width</label>
            <input
              type="text"
              value={minWidth}
              onChange={(e) => onMinWidthChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Max Width</label>
            <input
              type="text"
              value={maxWidth}
              onChange={(e) => onMaxWidthChange(e.target.value)}
              placeholder="none"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Min Height</label>
            <input
              type="text"
              value={minHeight}
              onChange={(e) => onMinHeightChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">Max Height</label>
            <input
              type="text"
              value={maxHeight}
              onChange={(e) => onMaxHeightChange(e.target.value)}
              placeholder="none"
              className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};