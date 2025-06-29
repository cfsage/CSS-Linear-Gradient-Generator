import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Zap, Clock } from 'lucide-react';
import { SliderControl } from '../Common/SliderControl';

interface AnimationsPanelProps {
  animation: string;
  onAnimationChange: (value: string) => void;
  animationName: string;
  onAnimationNameChange: (value: string) => void;
  animationDuration: string;
  onAnimationDurationChange: (value: string) => void;
  animationTimingFunction: string;
  onAnimationTimingFunctionChange: (value: string) => void;
  animationDelay: string;
  onAnimationDelayChange: (value: string) => void;
  animationIterationCount: string;
  onAnimationIterationCountChange: (value: string) => void;
  animationDirection: string;
  onAnimationDirectionChange: (value: string) => void;
  animationFillMode: string;
  onAnimationFillModeChange: (value: string) => void;
  animationPlayState: string;
  onAnimationPlayStateChange: (value: string) => void;
}

export const AnimationsPanel: React.FC<AnimationsPanelProps> = ({
  animation,
  onAnimationChange,
  animationName,
  onAnimationNameChange,
  animationDuration,
  onAnimationDurationChange,
  animationTimingFunction,
  onAnimationTimingFunctionChange,
  animationDelay,
  onAnimationDelayChange,
  animationIterationCount,
  onAnimationIterationCountChange,
  animationDirection,
  onAnimationDirectionChange,
  animationFillMode,
  onAnimationFillModeChange,
  animationPlayState,
  onAnimationPlayStateChange
}) => {
  const [customKeyframes, setCustomKeyframes] = useState('');
  const [durationValue, setDurationValue] = useState(1);
  const [delayValue, setDelayValue] = useState(0);
  const [iterationValue, setIterationValue] = useState(1);

  const animationPresets = [
    {
      name: 'Fade In',
      keyframes: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
      animation: 'fadeIn 0.5s ease-in-out'
    },
    {
      name: 'Slide Up',
      keyframes: `@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
      animation: 'slideUp 0.6s ease-out'
    },
    {
      name: 'Bounce',
      keyframes: `@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0, -4px, 0); }
}`,
      animation: 'bounce 1s ease-in-out'
    },
    {
      name: 'Pulse',
      keyframes: `@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}`,
      animation: 'pulse 2s ease-in-out infinite'
    },
    {
      name: 'Shake',
      keyframes: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}`,
      animation: 'shake 0.5s ease-in-out'
    },
    {
      name: 'Rotate',
      keyframes: `@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
      animation: 'rotate 2s linear infinite'
    },
    {
      name: 'Scale',
      keyframes: `@keyframes scale {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`,
      animation: 'scale 1s ease-in-out infinite'
    },
    {
      name: 'Flip',
      keyframes: `@keyframes flip {
  0% { transform: perspective(400px) rotateY(0); }
  40% { transform: perspective(400px) rotateY(-90deg); }
  60% { transform: perspective(400px) rotateY(-90deg); }
  100% { transform: perspective(400px) rotateY(0); }
}`,
      animation: 'flip 1s ease-in-out'
    }
  ];

  const timingFunctions = [
    'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear',
    'cubic-bezier(0.25, 0.1, 0.25, 1)',
    'cubic-bezier(0.42, 0, 0.58, 1)',
    'cubic-bezier(0.42, 0, 1, 1)',
    'cubic-bezier(0, 0, 0.58, 1)',
    'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  ];

  const directions = ['normal', 'reverse', 'alternate', 'alternate-reverse'];
  const fillModes = ['none', 'forwards', 'backwards', 'both'];
  const playStates = ['running', 'paused'];

  const updateDuration = (value: number) => {
    setDurationValue(value);
    onAnimationDurationChange(`${value}s`);
  };

  const updateDelay = (value: number) => {
    setDelayValue(value);
    onAnimationDelayChange(`${value}s`);
  };

  const updateIteration = (value: number) => {
    setIterationValue(value);
    onAnimationIterationCountChange(value === 999 ? 'infinite' : value.toString());
  };

  return (
    <div className="space-y-6">
      {/* Animation Presets */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <Zap size={16} />
          <span>Animation Presets</span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {animationPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                onAnimationChange(preset.animation);
                setCustomKeyframes(preset.keyframes);
              }}
              className="px-3 py-2 text-xs font-medium text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-md transition-all duration-200 border border-purple-200 hover:border-purple-300 hover:shadow-sm"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Animation Controls */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800">Animation Controls</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onAnimationPlayStateChange(animationPlayState === 'running' ? 'paused' : 'running')}
              className={`flex items-center space-x-1 px-3 py-1.5 text-xs rounded-md transition-all duration-200 ${
                animationPlayState === 'running'
                  ? 'bg-red-100 text-red-700 hover:bg-red-200 hover:shadow-sm'
                  : 'bg-green-100 text-green-700 hover:bg-green-200 hover:shadow-sm'
              }`}
            >
              {animationPlayState === 'running' ? <Pause size={12} /> : <Play size={12} />}
              <span>{animationPlayState === 'running' ? 'Pause' : 'Play'}</span>
            </button>
          </div>
        </div>

        {/* Animation Name */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Animation Name</label>
          <input
            type="text"
            value={animationName}
            onChange={(e) => onAnimationNameChange(e.target.value)}
            placeholder="myAnimation"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          />
        </div>

        {/* Duration */}
        <SliderControl
          label="Duration"
          value={durationValue}
          onChange={updateDuration}
          min={0.1}
          max={10}
          step={0.1}
          unit="s"
          icon={<Clock size={12} />}
          color="purple"
        />

        {/* Delay */}
        <SliderControl
          label="Delay"
          value={delayValue}
          onChange={updateDelay}
          min={0}
          max={5}
          step={0.1}
          unit="s"
          icon={<Clock size={12} />}
          color="blue"
        />

        {/* Iteration Count */}
        <SliderControl
          label="Iteration Count"
          value={iterationValue}
          onChange={updateIteration}
          min={1}
          max={999}
          step={1}
          unit={iterationValue === 999 ? ' (infinite)' : ''}
          color="green"
        />

        {/* Timing Function */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Timing Function</label>
          <select
            value={animationTimingFunction}
            onChange={(e) => onAnimationTimingFunctionChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          >
            {timingFunctions.map((func) => (
              <option key={func} value={func}>{func}</option>
            ))}
          </select>
        </div>

        {/* Direction */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Direction</label>
          <div className="grid grid-cols-2 gap-2">
            {directions.map((direction) => (
              <label
                key={direction}
                className={`relative flex items-center justify-center p-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                  animationDirection === direction
                    ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="animationDirection"
                  value={direction}
                  checked={animationDirection === direction}
                  onChange={(e) => onAnimationDirectionChange(e.target.value)}
                  className="sr-only"
                />
                <span className="text-xs font-medium capitalize">{direction}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Fill Mode */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Fill Mode</label>
          <div className="grid grid-cols-2 gap-2">
            {fillModes.map((mode) => (
              <label
                key={mode}
                className={`relative flex items-center justify-center p-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                  animationFillMode === mode
                    ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="animationFillMode"
                  value={mode}
                  checked={animationFillMode === mode}
                  onChange={(e) => onAnimationFillModeChange(e.target.value)}
                  className="sr-only"
                />
                <span className="text-xs font-medium capitalize">{mode}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Custom Keyframes</h3>
        <textarea
          value={customKeyframes}
          onChange={(e) => setCustomKeyframes(e.target.value)}
          placeholder={`@keyframes myAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}`}
          rows={8}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm font-mono transition-all duration-200 hover:border-purple-300"
        />
      </div>

      {/* Animation Shorthand */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Animation Shorthand</h3>
        <textarea
          value={animation}
          onChange={(e) => onAnimationChange(e.target.value)}
          placeholder="myAnimation 2s ease-in-out infinite"
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm font-mono transition-all duration-200 hover:border-purple-300"
        />
      </div>

      {/* Animation Preview */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Animation Preview</h3>
        <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
          <div 
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg"
            style={{ 
              animation: animation || 'none',
              animationPlayState: animationPlayState 
            }}
          />
        </div>
      </div>
    </div>
  );
};