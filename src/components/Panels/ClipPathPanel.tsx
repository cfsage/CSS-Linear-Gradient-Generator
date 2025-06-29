import React, { useState } from 'react';
import { Scissors, Square, Circle, Triangle } from 'lucide-react';

interface ClipPathPanelProps {
  clipPath: string;
  onClipPathChange: (value: string) => void;
}

export const ClipPathPanel: React.FC<ClipPathPanelProps> = ({
  clipPath,
  onClipPathChange
}) => {
  const [shapeType, setShapeType] = useState<'polygon' | 'circle' | 'ellipse' | 'inset'>('polygon');
  const [polygonPoints, setPolygonPoints] = useState([
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 }
  ]);

  const [circleValues, setCircleValues] = useState({
    radius: 50,
    centerX: 50,
    centerY: 50
  });

  const [ellipseValues, setEllipseValues] = useState({
    radiusX: 50,
    radiusY: 30,
    centerX: 50,
    centerY: 50
  });

  const [insetValues, setInsetValues] = useState({
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    borderRadius: 0
  });

  const presetShapes = [
    {
      name: 'Rectangle',
      value: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      icon: Square
    },
    {
      name: 'Circle',
      value: 'circle(50% at 50% 50%)',
      icon: Circle
    },
    {
      name: 'Triangle',
      value: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      icon: Triangle
    },
    {
      name: 'Diamond',
      value: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
    },
    {
      name: 'Pentagon',
      value: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
    },
    {
      name: 'Hexagon',
      value: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
    },
    {
      name: 'Star',
      value: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
    },
    {
      name: 'Arrow Right',
      value: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)'
    },
    {
      name: 'Arrow Left',
      value: 'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)'
    },
    {
      name: 'Chevron Right',
      value: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)'
    },
    {
      name: 'Trapezoid',
      value: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
    },
    {
      name: 'Parallelogram',
      value: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'
    }
  ];

  const SliderControl = ({ 
    label, 
    value, 
    onChange, 
    min = 0, 
    max = 100, 
    step = 1, 
    unit = '%' 
  }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
  }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-gray-700">{label}</label>
        <span className="text-xs text-gray-500">{value}{unit}</span>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-16 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
    </div>
  );

  const generatePolygonPath = () => {
    const points = polygonPoints.map(point => `${point.x}% ${point.y}%`).join(', ');
    return `polygon(${points})`;
  };

  const generateCirclePath = () => {
    return `circle(${circleValues.radius}% at ${circleValues.centerX}% ${circleValues.centerY}%)`;
  };

  const generateEllipsePath = () => {
    return `ellipse(${ellipseValues.radiusX}% ${ellipseValues.radiusY}% at ${ellipseValues.centerX}% ${ellipseValues.centerY}%)`;
  };

  const generateInsetPath = () => {
    const borderRadius = insetValues.borderRadius > 0 ? ` round ${insetValues.borderRadius}%` : '';
    return `inset(${insetValues.top}% ${insetValues.right}% ${insetValues.bottom}% ${insetValues.left}%${borderRadius})`;
  };

  const updatePolygonPoint = (index: number, axis: 'x' | 'y', value: number) => {
    const newPoints = [...polygonPoints];
    newPoints[index][axis] = value;
    setPolygonPoints(newPoints);
    onClipPathChange(generatePolygonPath());
  };

  const addPolygonPoint = () => {
    const newPoint = { x: 50, y: 50 };
    setPolygonPoints([...polygonPoints, newPoint]);
  };

  const removePolygonPoint = (index: number) => {
    if (polygonPoints.length > 3) {
      const newPoints = polygonPoints.filter((_, i) => i !== index);
      setPolygonPoints(newPoints);
      onClipPathChange(generatePolygonPath());
    }
  };

  const updateCircleValue = (key: keyof typeof circleValues, value: number) => {
    const newValues = { ...circleValues, [key]: value };
    setCircleValues(newValues);
    onClipPathChange(generateCirclePath());
  };

  const updateEllipseValue = (key: keyof typeof ellipseValues, value: number) => {
    const newValues = { ...ellipseValues, [key]: value };
    setEllipseValues(newValues);
    onClipPathChange(generateEllipsePath());
  };

  const updateInsetValue = (key: keyof typeof insetValues, value: number) => {
    const newValues = { ...insetValues, [key]: value };
    setInsetValues(newValues);
    onClipPathChange(generateInsetPath());
  };

  return (
    <div className="space-y-6">
      {/* Clip Path Presets */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <Scissors size={16} />
          <span>Clip Path Presets</span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {presetShapes.map((shape) => {
            const Icon = shape.icon;
            return (
              <button
                key={shape.name}
                onClick={() => onClipPathChange(shape.value)}
                className="flex items-center space-x-2 px-3 py-2 text-xs font-medium text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-md transition-colors border border-purple-200"
              >
                {Icon && <Icon size={12} />}
                <span>{shape.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Shape Type Selector */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Shape Type</h3>
        <div className="grid grid-cols-2 gap-2">
          {(['polygon', 'circle', 'ellipse', 'inset'] as const).map((type) => (
            <label
              key={type}
              className={`relative flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${
                shapeType === type
                  ? 'border-purple-500 bg-purple-50 text-purple-700'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="shapeType"
                value={type}
                checked={shapeType === type}
                onChange={(e) => setShapeType(e.target.value as any)}
                className="sr-only"
              />
              <span className="text-xs font-medium capitalize">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Shape Controls */}
      {shapeType === 'polygon' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-800">Polygon Points</h3>
            <button
              onClick={addPolygonPoint}
              className="px-2 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700 transition-colors"
            >
              Add Point
            </button>
          </div>
          
          <div className="space-y-3">
            {polygonPoints.map((point, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-700">Point {index + 1}</span>
                  {polygonPoints.length > 3 && (
                    <button
                      onClick={() => removePolygonPoint(index)}
                      className="text-red-600 hover:text-red-800 text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <SliderControl
                    label="X"
                    value={point.x}
                    onChange={(value) => updatePolygonPoint(index, 'x', value)}
                    min={0}
                    max={100}
                    step={1}
                    unit="%"
                  />
                  <SliderControl
                    label="Y"
                    value={point.y}
                    onChange={(value) => updatePolygonPoint(index, 'y', value)}
                    min={0}
                    max={100}
                    step={1}
                    unit="%"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {shapeType === 'circle' && (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-800">Circle Properties</h3>
          <div className="space-y-3">
            <SliderControl
              label="Radius"
              value={circleValues.radius}
              onChange={(value) => updateCircleValue('radius', value)}
              min={0}
              max={100}
              step={1}
              unit="%"
            />
            <SliderControl
              label="Center X"
              value={circleValues.centerX}
              onChange={(value) => updateCircleValue('centerX', value)}
              min={0}
              max={100}
              step={1}
              unit="%"
            />
            <SliderControl
              label="Center Y"
              value={circleValues.centerY}
              onChange={(value) => updateCircleValue('centerY', value)}
              min={0}
              max={100}
              step={1}
              unit="%"
            />
          </div>
        </div>
      )}

      {shapeType === 'ellipse' && (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-800">Ellipse Properties</h3>
          <div className="space-y-3">
            <SliderControl
              label="Radius X"
              value={ellipseValues.radiusX}
              onChange={(value) => updateEllipseValue('radiusX', value)}
              min={0}
              max={100}
              step={1}
              unit="%"
            />
            <SliderControl
              label="Radius Y"
              value={ellipseValues.radiusY}
              onChange={(value) => updateEllipseValue('radiusY', value)}
              min={0}
              max={100}
              step={1}
              unit="%"
            />
            <SliderControl
              label="Center X"
              value={ellipseValues.centerX}
              onChange={(value) => updateEllipseValue('centerX', value)}
              min={0}
              max={100}
              step={1}
              unit="%"
            />
            <SliderControl
              label="Center Y"
              value={ellipseValues.centerY}
              onChange={(value) => updateEllipseValue('centerY', value)}
              min={0}
              max={100}
              step={1}
              unit="%"
            />
          </div>
        </div>
      )}

      {shapeType === 'inset' && (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-800">Inset Properties</h3>
          <div className="space-y-3">
            <SliderControl
              label="Top"
              value={insetValues.top}
              onChange={(value) => updateInsetValue('top', value)}
              min={0}
              max={50}
              step={1}
              unit="%"
            />
            <SliderControl
              label="Right"
              value={insetValues.right}
              onChange={(value) => updateInsetValue('right', value)}
              min={0}
              max={50}
              step={1}
              unit="%"
            />
            <SliderControl
              label="Bottom"
              value={insetValues.bottom}
              onChange={(value) => updateInsetValue('bottom', value)}
              min={0}
              max={50}
              step={1}
              unit="%"
            />
            <SliderControl
              label="Left"
              value={insetValues.left}
              onChange={(value) => updateInsetValue('left', value)}
              min={0}
              max={50}
              step={1}
              unit="%"
            />
            <SliderControl
              label="Border Radius"
              value={insetValues.borderRadius}
              onChange={(value) => updateInsetValue('borderRadius', value)}
              min={0}
              max={50}
              step={1}
              unit="%"
            />
          </div>
        </div>
      )}

      {/* Visual Preview */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Preview</h3>
        <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
          <div 
            className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500"
            style={{ clipPath: clipPath || 'none' }}
          />
        </div>
      </div>

      {/* Custom Clip Path Input */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Custom Clip Path</h3>
        <textarea
          value={clipPath}
          onChange={(e) => onClipPathChange(e.target.value)}
          placeholder="polygon(50% 0%, 0% 100%, 100% 100%)"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm font-mono"
        />
      </div>

      {/* Clip Path Tips */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-800">Tips</h3>
        <div className="space-y-1 text-xs text-gray-600">
          <div className="p-2 bg-blue-50 rounded border-l-4 border-blue-400">
            <strong>Polygon:</strong> Define custom shapes with multiple points
          </div>
          <div className="p-2 bg-green-50 rounded border-l-4 border-green-400">
            <strong>Circle:</strong> Perfect for circular crops and masks
          </div>
          <div className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
            <strong>Inset:</strong> Rectangular crops with optional rounded corners
          </div>
        </div>
      </div>
    </div>
  );
};