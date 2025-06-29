import React from 'react';

interface EffectsPanelProps {
  boxShadow: string;
  onBoxShadowChange: (value: string) => void;
  textShadow: string;
  onTextShadowChange: (value: string) => void;
  filter: string;
  onFilterChange: (value: string) => void;
  backdropFilter: string;
  onBackdropFilterChange: (value: string) => void;
  transform: string;
  onTransformChange: (value: string) => void;
  transformOrigin: string;
  onTransformOriginChange: (value: string) => void;
}

export const EffectsPanel: React.FC<EffectsPanelProps> = ({
  boxShadow,
  onBoxShadowChange,
  textShadow,
  onTextShadowChange,
  filter,
  onFilterChange,
  backdropFilter,
  onBackdropFilterChange,
  transform,
  onTransformChange,
  transformOrigin,
  onTransformOriginChange
}) => {
  const boxShadowPresets = [
    'none',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    'inset 0 2px 4px rgba(0,0,0,0.1)',
    '0 0 20px rgba(255,255,255,0.8)'
  ];

  const textShadowPresets = [
    'none',
    '1px 1px 2px rgba(0,0,0,0.3)',
    '2px 2px 4px rgba(0,0,0,0.5)',
    '0 0 10px rgba(255,255,255,0.8)',
    '3px 3px 0 #000',
    '1px 1px 0 #000, 2px 2px 0 #000',
    '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb'
  ];

  const filterPresets = [
    'none',
    'blur(5px)',
    'brightness(1.2)',
    'contrast(1.5)',
    'grayscale(100%)',
    'hue-rotate(90deg)',
    'invert(100%)',
    'saturate(2)',
    'sepia(100%)',
    'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))',
    'blur(2px) brightness(1.1) contrast(1.2)'
  ];

  const backdropFilterPresets = [
    'none',
    'blur(10px)',
    'blur(5px) brightness(1.1)',
    'blur(20px) saturate(180%)',
    'blur(10px) contrast(1.2)',
    'blur(8px) hue-rotate(90deg)'
  ];

  const transformPresets = [
    'none',
    'scale(1.1)',
    'scale(0.9)',
    'rotate(45deg)',
    'rotate(-45deg)',
    'translateX(10px)',
    'translateY(-10px)',
    'translate(10px, -10px)',
    'skew(15deg, 0deg)',
    'scale(1.1) rotate(5deg)',
    'perspective(1000px) rotateX(45deg)'
  ];

  const transformOriginPresets = [
    'center',
    'top',
    'bottom',
    'left',
    'right',
    'top left',
    'top right',
    'bottom left',
    'bottom right',
    '50% 50%',
    '0% 0%',
    '100% 100%'
  ];

  return (
    <div className="space-y-6">
      {/* Box Shadow */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Box Shadow</h3>
        <input
          type="text"
          value={boxShadow}
          onChange={(e) => onBoxShadowChange(e.target.value)}
          placeholder="0 2px 4px rgba(0,0,0,0.1)"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        />
        <div className="grid grid-cols-2 gap-1">
          {boxShadowPresets.map((preset, index) => (
            <button
              key={index}
              onClick={() => onBoxShadowChange(preset)}
              className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors text-left"
              title={preset}
            >
              {preset === 'none' ? 'None' : `Shadow ${index}`}
            </button>
          ))}
        </div>
      </div>

      {/* Text Shadow */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Text Shadow</h3>
        <input
          type="text"
          value={textShadow}
          onChange={(e) => onTextShadowChange(e.target.value)}
          placeholder="2px 2px 4px rgba(0,0,0,0.5)"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        />
        <div className="grid grid-cols-2 gap-1">
          {textShadowPresets.map((preset, index) => (
            <button
              key={index}
              onClick={() => onTextShadowChange(preset)}
              className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors text-left"
              title={preset}
            >
              {preset === 'none' ? 'None' : `Text ${index}`}
            </button>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Filter</h3>
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          placeholder="blur(5px) brightness(1.2)"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        />
        <div className="grid grid-cols-2 gap-1">
          {filterPresets.map((preset, index) => (
            <button
              key={index}
              onClick={() => onFilterChange(preset)}
              className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors text-left"
              title={preset}
            >
              {preset === 'none' ? 'None' : `Filter ${index}`}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Backdrop Filter</h3>
        <input
          type="text"
          value={backdropFilter}
          onChange={(e) => onBackdropFilterChange(e.target.value)}
          placeholder="blur(10px)"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        />
        <div className="grid grid-cols-2 gap-1">
          {backdropFilterPresets.map((preset, index) => (
            <button
              key={index}
              onClick={() => onBackdropFilterChange(preset)}
              className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors text-left"
              title={preset}
            >
              {preset === 'none' ? 'None' : `Backdrop ${index}`}
            </button>
          ))}
        </div>
      </div>

      {/* Transform */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Transform</h3>
        <input
          type="text"
          value={transform}
          onChange={(e) => onTransformChange(e.target.value)}
          placeholder="scale(1.1) rotate(5deg)"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        />
        <div className="grid grid-cols-2 gap-1">
          {transformPresets.map((preset, index) => (
            <button
              key={index}
              onClick={() => onTransformChange(preset)}
              className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors text-left"
              title={preset}
            >
              {preset === 'none' ? 'None' : `Transform ${index}`}
            </button>
          ))}
        </div>
      </div>

      {/* Transform Origin */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Transform Origin</h3>
        <input
          type="text"
          value={transformOrigin}
          onChange={(e) => onTransformOriginChange(e.target.value)}
          placeholder="center"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        />
        <div className="grid grid-cols-3 gap-1">
          {transformOriginPresets.map((preset) => (
            <button
              key={preset}
              onClick={() => onTransformOriginChange(preset)}
              className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors text-center"
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Transform Origin Control */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="text-xs text-gray-600 mb-2">Visual Transform Origin</div>
        <div className="relative bg-blue-100 p-8 rounded-lg">
          <div className="grid grid-cols-3 gap-1 h-full">
            {[
              'top left', 'top', 'top right',
              'left', 'center', 'right',
              'bottom left', 'bottom', 'bottom right'
            ].map((origin) => (
              <button
                key={origin}
                onClick={() => onTransformOriginChange(origin)}
                className={`p-2 rounded text-xs transition-colors ${
                  transformOrigin === origin
                    ? 'bg-purple-500 text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {origin.replace(' ', '-')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};