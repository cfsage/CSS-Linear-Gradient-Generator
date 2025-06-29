import React from 'react';

interface SliderControlProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  icon?: React.ReactNode;
  showProgress?: boolean;
  color?: 'purple' | 'blue' | 'green' | 'red' | 'yellow';
}

export const SliderControl: React.FC<SliderControlProps> = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  icon,
  showProgress = true,
  color = 'purple'
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  const colorClasses = {
    purple: {
      track: 'from-purple-400 to-purple-500',
      thumb: 'from-purple-500 to-purple-600',
      thumbHover: 'from-purple-600 to-purple-700',
      value: 'text-purple-600 bg-purple-50',
      valueHover: 'bg-purple-100 text-purple-700'
    },
    blue: {
      track: 'from-blue-400 to-blue-500',
      thumb: 'from-blue-500 to-blue-600',
      thumbHover: 'from-blue-600 to-blue-700',
      value: 'text-blue-600 bg-blue-50',
      valueHover: 'bg-blue-100 text-blue-700'
    },
    green: {
      track: 'from-green-400 to-green-500',
      thumb: 'from-green-500 to-green-600',
      thumbHover: 'from-green-600 to-green-700',
      value: 'text-green-600 bg-green-50',
      valueHover: 'bg-green-100 text-green-700'
    },
    red: {
      track: 'from-red-400 to-red-500',
      thumb: 'from-red-500 to-red-600',
      thumbHover: 'from-red-600 to-red-700',
      value: 'text-red-600 bg-red-50',
      valueHover: 'bg-red-100 text-red-700'
    },
    yellow: {
      track: 'from-yellow-400 to-yellow-500',
      thumb: 'from-yellow-500 to-yellow-600',
      thumbHover: 'from-yellow-600 to-yellow-700',
      value: 'text-yellow-600 bg-yellow-50',
      valueHover: 'bg-yellow-100 text-yellow-700'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-gray-700 flex items-center space-x-2">
          {icon && <span className="text-gray-500">{icon}</span>}
          <span>{label}</span>
        </label>
        <span className={`slider-value ${colors.value} transition-all duration-200`}>
          {value}{unit}
        </span>
      </div>
      
      <div className="slider-container relative group">
        {/* Progress track */}
        {showProgress && (
          <div 
            className={`slider-progress bg-gradient-to-r ${colors.track} opacity-80`}
            style={{ width: `${percentage}%` }}
          />
        )}
        
        {/* Main slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider w-full relative z-10"
          style={{
            background: 'transparent'
          }}
        />
        
        {/* Value tooltip on hover */}
        <div 
          className="absolute top-[-40px] bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20"
          style={{ 
            left: `calc(${percentage}% - 20px)`,
            transform: 'translateX(-50%)'
          }}
        >
          {value}{unit}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
      
      {/* Number input */}
      <div className="flex items-center space-x-2">
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-20 px-2 py-1 text-xs border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
        />
        <span className="text-xs text-gray-500">{unit}</span>
      </div>
    </div>
  );
};