import React, { useState } from 'react';
import { Move, RotateCw, Maximize, RotateCcw } from 'lucide-react';
import { SliderControl } from '../Common/SliderControl';

interface TransformsPanelProps {
  transform: string;
  onTransformChange: (value: string) => void;
  transformOrigin: string;
  onTransformOriginChange: (value: string) => void;
}

interface TransformValues {
  translateX: number;
  translateY: number;
  translateZ: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  skewX: number;
  skewY: number;
  perspective: number;
}

export const TransformsPanel: React.FC<TransformsPanelProps> = ({
  transform,
  onTransformChange,
  transformOrigin,
  onTransformOriginChange
}) => {
  const [transformValues, setTransformValues] = useState<TransformValues>({
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    skewX: 0,
    skewY: 0,
    perspective: 1000
  });

  const [originValues, setOriginValues] = useState({
    x: 50,
    y: 50,
    z: 0
  });

  const updateTransformValue = (key: keyof TransformValues, value: number) => {
    const newValues = { ...transformValues, [key]: value };
    setTransformValues(newValues);
    
    const transformString = generateTransformString(newValues);
    onTransformChange(transformString);
  };

  const generateTransformString = (values: TransformValues) => {
    const transforms: string[] = [];

    if (values.perspective !== 1000) transforms.push(`perspective(${values.perspective}px)`);
    if (values.translateX !== 0 || values.translateY !== 0 || values.translateZ !== 0) {
      if (values.translateZ !== 0) {
        transforms.push(`translate3d(${values.translateX}px, ${values.translateY}px, ${values.translateZ}px)`);
      } else {
        transforms.push(`translate(${values.translateX}px, ${values.translateY}px)`);
      }
    }
    if (values.scaleX !== 1 || values.scaleY !== 1 || values.scaleZ !== 1) {
      if (values.scaleZ !== 1) {
        transforms.push(`scale3d(${values.scaleX}, ${values.scaleY}, ${values.scaleZ})`);
      } else if (values.scaleX === values.scaleY) {
        transforms.push(`scale(${values.scaleX})`);
      } else {
        transforms.push(`scaleX(${values.scaleX}) scaleY(${values.scaleY})`);
      }
    }
    if (values.rotateX !== 0) transforms.push(`rotateX(${values.rotateX}deg)`);
    if (values.rotateY !== 0) transforms.push(`rotateY(${values.rotateY}deg)`);
    if (values.rotateZ !== 0) transforms.push(`rotateZ(${values.rotateZ}deg)`);
    if (values.skewX !== 0) transforms.push(`skewX(${values.skewX}deg)`);
    if (values.skewY !== 0) transforms.push(`skewY(${values.skewY}deg)`);

    return transforms.length > 0 ? transforms.join(' ') : 'none';
  };

  const updateOrigin = (axis: 'x' | 'y' | 'z', value: number) => {
    const newValues = { ...originValues, [axis]: value };
    setOriginValues(newValues);
    onTransformOriginChange(`${newValues.x}% ${newValues.y}% ${newValues.z}px`);
  };

  const resetTransforms = () => {
    const defaultValues: TransformValues = {
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      skewX: 0,
      skewY: 0,
      perspective: 1000
    };
    setTransformValues(defaultValues);
    onTransformChange('none');
  };

  const presets = [
    { name: 'None', value: 'none' },
    { name: 'Scale Up', value: 'scale(1.1)' },
    { name: 'Scale Down', value: 'scale(0.9)' },
    { name: 'Rotate 45°', value: 'rotate(45deg)' },
    { name: 'Rotate -45°', value: 'rotate(-45deg)' },
    { name: 'Flip X', value: 'scaleX(-1)' },
    { name: 'Flip Y', value: 'scaleY(-1)' },
    { name: 'Skew', value: 'skew(15deg, 5deg)' },
    { name: '3D Rotate', value: 'perspective(1000px) rotateX(45deg) rotateY(45deg)' },
    { name: 'Slide Right', value: 'translateX(20px)' },
    { name: 'Slide Up', value: 'translateY(-20px)' },
    { name: 'Complex', value: 'scale(1.1) rotate(5deg) translateX(10px)' }
  ];

  const originPresets = [
    { name: 'Center', value: 'center' },
    { name: 'Top Left', value: 'top left' },
    { name: 'Top', value: 'top' },
    { name: 'Top Right', value: 'top right' },
    { name: 'Left', value: 'left' },
    { name: 'Right', value: 'right' },
    { name: 'Bottom Left', value: 'bottom left' },
    { name: 'Bottom', value: 'bottom' },
    { name: 'Bottom Right', value: 'bottom right' }
  ];

  return (
    <div className="space-y-6">
      {/* Transform Presets */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <Move size={16} />
          <span>Transform Presets</span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => onTransformChange(preset.value)}
              className="px-3 py-2 text-xs font-medium text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-md transition-all duration-200 border border-purple-200 hover:border-purple-300 hover:shadow-sm"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Transform Controls */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800">Transform Controls</h3>
          <button
            onClick={resetTransforms}
            className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-all duration-200"
          >
            <RotateCcw size={12} />
            <span>Reset</span>
          </button>
        </div>

        {/* Perspective */}
        <div className="p-3 bg-blue-50 rounded-lg">
          <SliderControl
            label="Perspective"
            value={transformValues.perspective}
            onChange={(value) => updateTransformValue('perspective', value)}
            min={100}
            max={3000}
            step={10}
            unit="px"
            icon={<Maximize size={12} />}
            color="blue"
          />
        </div>

        {/* Translation */}
        <div className="space-y-3 p-3 bg-green-50 rounded-lg">
          <h4 className="text-xs font-semibold text-gray-700 flex items-center space-x-1">
            <Move size={12} />
            <span>Translation</span>
          </h4>
          
          <div className="grid grid-cols-1 gap-3">
            <SliderControl
              label="Translate X"
              value={transformValues.translateX}
              onChange={(value) => updateTransformValue('translateX', value)}
              min={-500}
              max={500}
              step={1}
              unit="px"
              color="green"
            />
            <SliderControl
              label="Translate Y"
              value={transformValues.translateY}
              onChange={(value) => updateTransformValue('translateY', value)}
              min={-500}
              max={500}
              step={1}
              unit="px"
              color="green"
            />
            <SliderControl
              label="Translate Z"
              value={transformValues.translateZ}
              onChange={(value) => updateTransformValue('translateZ', value)}
              min={-500}
              max={500}
              step={1}
              unit="px"
              color="green"
            />
          </div>
        </div>

        {/* Scale */}
        <div className="space-y-3 p-3 bg-yellow-50 rounded-lg">
          <h4 className="text-xs font-semibold text-gray-700 flex items-center space-x-1">
            <Maximize size={12} />
            <span>Scale</span>
          </h4>
          
          <div className="grid grid-cols-1 gap-3">
            <SliderControl
              label="Scale X"
              value={transformValues.scaleX}
              onChange={(value) => updateTransformValue('scaleX', value)}
              min={0}
              max={3}
              step={0.01}
              unit=""
              color="yellow"
            />
            <SliderControl
              label="Scale Y"
              value={transformValues.scaleY}
              onChange={(value) => updateTransformValue('scaleY', value)}
              min={0}
              max={3}
              step={0.01}
              unit=""
              color="yellow"
            />
            <SliderControl
              label="Scale Z"
              value={transformValues.scaleZ}
              onChange={(value) => updateTransformValue('scaleZ', value)}
              min={0}
              max={3}
              step={0.01}
              unit=""
              color="yellow"
            />
          </div>
        </div>

        {/* Rotation */}
        <div className="space-y-3 p-3 bg-purple-50 rounded-lg">
          <h4 className="text-xs font-semibold text-gray-700 flex items-center space-x-1">
            <RotateCw size={12} />
            <span>Rotation</span>
          </h4>
          
          <div className="grid grid-cols-1 gap-3">
            <SliderControl
              label="Rotate X"
              value={transformValues.rotateX}
              onChange={(value) => updateTransformValue('rotateX', value)}
              min={-360}
              max={360}
              step={1}
              unit="deg"
              color="purple"
            />
            <SliderControl
              label="Rotate Y"
              value={transformValues.rotateY}
              onChange={(value) => updateTransformValue('rotateY', value)}
              min={-360}
              max={360}
              step={1}
              unit="deg"
              color="purple"
            />
            <SliderControl
              label="Rotate Z"
              value={transformValues.rotateZ}
              onChange={(value) => updateTransformValue('rotateZ', value)}
              min={-360}
              max={360}
              step={1}
              unit="deg"
              color="purple"
            />
          </div>
        </div>

        {/* Skew */}
        <div className="space-y-3 p-3 bg-red-50 rounded-lg">
          <h4 className="text-xs font-semibold text-gray-700">Skew</h4>
          
          <div className="grid grid-cols-1 gap-3">
            <SliderControl
              label="Skew X"
              value={transformValues.skewX}
              onChange={(value) => updateTransformValue('skewX', value)}
              min={-90}
              max={90}
              step={1}
              unit="deg"
              color="red"
            />
            <SliderControl
              label="Skew Y"
              value={transformValues.skewY}
              onChange={(value) => updateTransformValue('skewY', value)}
              min={-90}
              max={90}
              step={1}
              unit="deg"
              color="red"
            />
          </div>
        </div>
      </div>

      {/* Transform Origin */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800">Transform Origin</h3>
        
        {/* Origin Presets */}
        <div className="grid grid-cols-3 gap-1">
          {originPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => onTransformOriginChange(preset.value)}
              className={`px-2 py-1 text-xs rounded transition-all duration-200 ${
                transformOrigin === preset.value
                  ? 'bg-purple-500 text-white shadow-sm'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Custom Origin Controls */}
        <div className="space-y-3">
          <SliderControl
            label="Origin X"
            value={originValues.x}
            onChange={(value) => updateOrigin('x', value)}
            min={0}
            max={100}
            step={1}
            unit="%"
            color="blue"
          />
          <SliderControl
            label="Origin Y"
            value={originValues.y}
            onChange={(value) => updateOrigin('y', value)}
            min={0}
            max={100}
            step={1}
            unit="%"
            color="green"
          />
          <SliderControl
            label="Origin Z"
            value={originValues.z}
            onChange={(value) => updateOrigin('z', value)}
            min={-500}
            max={500}
            step={1}
            unit="px"
            color="purple"
          />
        </div>
      </div>

      {/* Custom Transform Input */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Custom Transform</h3>
        <textarea
          value={transform}
          onChange={(e) => onTransformChange(e.target.value)}
          placeholder="scale(1.1) rotate(5deg) translateX(10px)"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm font-mono transition-all duration-200 hover:border-purple-300"
        />
      </div>
    </div>
  );
};