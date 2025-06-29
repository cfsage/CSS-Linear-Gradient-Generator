import React from 'react';
import { MousePointer, Hand, Eye, TextCursor as Cursor } from 'lucide-react';

interface InteractionsPanelProps {
  cursor: string;
  onCursorChange: (value: string) => void;
  userSelect: string;
  onUserSelectChange: (value: string) => void;
  pointerEvents: string;
  onPointerEventsChange: (value: string) => void;
  touchAction: string;
  onTouchActionChange: (value: string) => void;
  scrollBehavior: string;
  onScrollBehaviorChange: (value: string) => void;
  scrollSnapType: string;
  onScrollSnapTypeChange: (value: string) => void;
  scrollSnapAlign: string;
  onScrollSnapAlignChange: (value: string) => void;
  resize: string;
  onResizeChange: (value: string) => void;
  appearance: string;
  onAppearanceChange: (value: string) => void;
}

export const InteractionsPanel: React.FC<InteractionsPanelProps> = ({
  cursor,
  onCursorChange,
  userSelect,
  onUserSelectChange,
  pointerEvents,
  onPointerEventsChange,
  touchAction,
  onTouchActionChange,
  scrollBehavior,
  onScrollBehaviorChange,
  scrollSnapType,
  onScrollSnapTypeChange,
  scrollSnapAlign,
  onScrollSnapAlignChange,
  resize,
  onResizeChange,
  appearance,
  onAppearanceChange
}) => {
  const cursorOptions = [
    'auto', 'default', 'pointer', 'text', 'move', 'not-allowed',
    'grab', 'grabbing', 'crosshair', 'help', 'wait', 'progress',
    'cell', 'context-menu', 'copy', 'alias', 'no-drop', 'zoom-in',
    'zoom-out', 'col-resize', 'row-resize', 'n-resize', 's-resize',
    'e-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize'
  ];

  const userSelectOptions = ['auto', 'none', 'text', 'all', 'contain'];
  const pointerEventsOptions = ['auto', 'none', 'visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted', 'fill', 'stroke', 'all'];
  
  const touchActionOptions = [
    'auto', 'none', 'pan-x', 'pan-y', 'pan-left', 'pan-right',
    'pan-up', 'pan-down', 'pinch-zoom', 'manipulation'
  ];

  const scrollBehaviorOptions = ['auto', 'smooth'];
  
  const scrollSnapTypeOptions = [
    'none', 'x mandatory', 'y mandatory', 'both mandatory',
    'x proximity', 'y proximity', 'both proximity'
  ];

  const scrollSnapAlignOptions = ['none', 'start', 'end', 'center'];
  const resizeOptions = ['none', 'both', 'horizontal', 'vertical', 'block', 'inline'];
  const appearanceOptions = ['none', 'auto', 'button', 'textfield', 'searchfield', 'textarea', 'push-button', 'slider-horizontal', 'checkbox', 'radio', 'square-button', 'menulist', 'listbox', 'meter', 'progress-bar'];

  const CursorPreview = ({ cursorType }: { cursorType: string }) => (
    <div 
      className="w-8 h-8 bg-purple-100 rounded border-2 border-purple-300 flex items-center justify-center text-xs font-medium cursor-pointer transition-all duration-200 hover:bg-purple-200 hover:scale-105"
      style={{ cursor: cursorType }}
      title={`Cursor: ${cursorType}`}
    >
      <MousePointer size={12} />
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Cursor */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <Cursor size={16} />
          <span>Cursor</span>
        </h3>
        
        <div className="space-y-2">
          <select
            value={cursor}
            onChange={(e) => onCursorChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          >
            {cursorOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          
          {/* Cursor Preview Grid */}
          <div className="grid grid-cols-8 gap-2 p-3 bg-gray-50 rounded-lg">
            {cursorOptions.slice(0, 16).map((cursorType) => (
              <button
                key={cursorType}
                onClick={() => onCursorChange(cursorType)}
                className={`p-1 rounded transition-all duration-200 ${
                  cursor === cursorType ? 'bg-purple-200 shadow-sm' : 'hover:bg-gray-200'
                }`}
                title={cursorType}
              >
                <CursorPreview cursorType={cursorType} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Select */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <Hand size={16} />
          <span>User Select</span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {userSelectOptions.map((option) => (
            <label
              key={option}
              className={`relative flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                userSelect === option
                  ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="userSelect"
                value={option}
                checked={userSelect === option}
                onChange={(e) => onUserSelectChange(e.target.value)}
                className="sr-only"
              />
              <span className="text-xs font-medium capitalize">{option}</span>
            </label>
          ))}
        </div>
        
        {/* User Select Demo */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Selection Test:</div>
          <div 
            className="p-2 bg-white rounded border text-sm"
            style={{ userSelect: userSelect as any }}
          >
            Try to select this text to see the user-select effect in action.
          </div>
        </div>
      </div>

      {/* Pointer Events */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <MousePointer size={16} />
          <span>Pointer Events</span>
        </h3>
        <select
          value={pointerEvents}
          onChange={(e) => onPointerEventsChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {pointerEventsOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        
        {/* Pointer Events Demo */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-600 mb-2">Interaction Test:</div>
          <button 
            className="px-3 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-all duration-200"
            style={{ pointerEvents: pointerEvents as any }}
          >
            {pointerEvents === 'none' ? 'Non-interactive Button' : 'Interactive Button'}
          </button>
        </div>
      </div>

      {/* Touch Action */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Touch Action</h3>
        <select
          value={touchAction}
          onChange={(e) => onTouchActionChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {touchActionOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        
        <div className="text-xs text-gray-500 p-2 bg-blue-50 rounded">
          Touch action controls how touch gestures are handled on touch devices.
        </div>
      </div>

      {/* Scroll Behavior */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Scroll Behavior</h3>
        <div className="grid grid-cols-2 gap-2">
          {scrollBehaviorOptions.map((option) => (
            <label
              key={option}
              className={`relative flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                scrollBehavior === option
                  ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="scrollBehavior"
                value={option}
                checked={scrollBehavior === option}
                onChange={(e) => onScrollBehaviorChange(e.target.value)}
                className="sr-only"
              />
              <span className="text-xs font-medium capitalize">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Scroll Snap */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Scroll Snap</h3>
        
        {/* Scroll Snap Type */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Scroll Snap Type</label>
          <select
            value={scrollSnapType}
            onChange={(e) => onScrollSnapTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          >
            {scrollSnapTypeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Scroll Snap Align */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Scroll Snap Align</label>
          <div className="grid grid-cols-2 gap-2">
            {scrollSnapAlignOptions.map((option) => (
              <label
                key={option}
                className={`relative flex items-center justify-center p-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                  scrollSnapAlign === option
                    ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="scrollSnapAlign"
                  value={option}
                  checked={scrollSnapAlign === option}
                  onChange={(e) => onScrollSnapAlignChange(e.target.value)}
                  className="sr-only"
                />
                <span className="text-xs font-medium capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Resize */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Resize</h3>
        <select
          value={resize}
          onChange={(e) => onResizeChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {resizeOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        
        {/* Resize Demo */}
        {resize !== 'none' && (
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-xs text-gray-600 mb-2">Resize Test:</div>
            <textarea 
              className="w-full h-20 p-2 border border-gray-300 rounded text-sm transition-all duration-200"
              style={{ resize: resize as any }}
              placeholder="Try resizing this textarea..."
            />
          </div>
        )}
      </div>

      {/* Appearance */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Appearance</h3>
        <select
          value={appearance}
          onChange={(e) => onAppearanceChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {appearanceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        
        {/* Appearance Demo */}
        <div className="p-3 bg-gray-50 rounded-lg space-y-2">
          <div className="text-xs text-gray-600">Appearance Test:</div>
          <input 
            type="text" 
            placeholder="Text input"
            className="w-full px-2 py-1 border border-gray-300 rounded text-sm transition-all duration-200"
            style={{ appearance: appearance as any }}
          />
          <div className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="transition-all duration-200"
              style={{ appearance: appearance as any }}
            />
            <label className="text-sm">Checkbox with custom appearance</label>
          </div>
        </div>
      </div>
    </div>
  );
};