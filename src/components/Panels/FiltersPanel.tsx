import React, { useState } from 'react';
import { Sliders, RotateCcw, Eye } from 'lucide-react';
import { SliderControl } from '../Common/SliderControl';

interface FiltersPanelProps {
  filter: string;
  onFilterChange: (value: string) => void;
  backdropFilter: string;
  onBackdropFilterChange: (value: string) => void;
}

interface FilterValues {
  blur: number;
  brightness: number;
  contrast: number;
  grayscale: number;
  hueRotate: number;
  invert: number;
  opacity: number;
  saturate: number;
  sepia: number;
  dropShadowX: number;
  dropShadowY: number;
  dropShadowBlur: number;
  dropShadowColor: string;
}

export const FiltersPanel: React.FC<FiltersPanelProps> = ({
  filter,
  onFilterChange,
  backdropFilter,
  onBackdropFilterChange
}) => {
  const [filterValues, setFilterValues] = useState<FilterValues>({
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0,
    dropShadowX: 0,
    dropShadowY: 0,
    dropShadowBlur: 0,
    dropShadowColor: '#000000'
  });

  const [backdropValues, setBackdropValues] = useState<FilterValues>({
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0,
    dropShadowX: 0,
    dropShadowY: 0,
    dropShadowBlur: 0,
    dropShadowColor: '#000000'
  });

  const updateFilterValue = (key: keyof FilterValues, value: number | string, isBackdrop = false) => {
    const values = isBackdrop ? backdropValues : filterValues;
    const setValues = isBackdrop ? setBackdropValues : setFilterValues;
    const onChange = isBackdrop ? onBackdropFilterChange : onFilterChange;

    const newValues = { ...values, [key]: value };
    setValues(newValues);

    const filterString = generateFilterString(newValues);
    onChange(filterString);
  };

  const generateFilterString = (values: FilterValues) => {
    const filters: string[] = [];

    if (values.blur > 0) filters.push(`blur(${values.blur}px)`);
    if (values.brightness !== 100) filters.push(`brightness(${values.brightness}%)`);
    if (values.contrast !== 100) filters.push(`contrast(${values.contrast}%)`);
    if (values.grayscale > 0) filters.push(`grayscale(${values.grayscale}%)`);
    if (values.hueRotate !== 0) filters.push(`hue-rotate(${values.hueRotate}deg)`);
    if (values.invert > 0) filters.push(`invert(${values.invert}%)`);
    if (values.opacity !== 100) filters.push(`opacity(${values.opacity}%)`);
    if (values.saturate !== 100) filters.push(`saturate(${values.saturate}%)`);
    if (values.sepia > 0) filters.push(`sepia(${values.sepia}%)`);
    
    if (values.dropShadowX !== 0 || values.dropShadowY !== 0 || values.dropShadowBlur !== 0) {
      filters.push(`drop-shadow(${values.dropShadowX}px ${values.dropShadowY}px ${values.dropShadowBlur}px ${values.dropShadowColor})`);
    }

    return filters.length > 0 ? filters.join(' ') : 'none';
  };

  const resetFilters = (isBackdrop = false) => {
    const defaultValues: FilterValues = {
      blur: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      hueRotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0,
      dropShadowX: 0,
      dropShadowY: 0,
      dropShadowBlur: 0,
      dropShadowColor: '#000000'
    };

    if (isBackdrop) {
      setBackdropValues(defaultValues);
      onBackdropFilterChange('none');
    } else {
      setFilterValues(defaultValues);
      onFilterChange('none');
    }
  };

  const presets = [
    { name: 'None', value: 'none' },
    { name: 'Blur', value: 'blur(5px)' },
    { name: 'Brightness', value: 'brightness(1.2)' },
    { name: 'Contrast', value: 'contrast(1.5)' },
    { name: 'Grayscale', value: 'grayscale(100%)' },
    { name: 'Sepia', value: 'sepia(100%)' },
    { name: 'Invert', value: 'invert(100%)' },
    { name: 'Saturate', value: 'saturate(2)' },
    { name: 'Hue Rotate', value: 'hue-rotate(90deg)' },
    { name: 'Drop Shadow', value: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' },
    { name: 'Vintage', value: 'sepia(50%) contrast(1.2) brightness(1.1)' },
    { name: 'Cool', value: 'hue-rotate(180deg) saturate(1.2)' }
  ];

  return (
    <div className="space-y-6">
      {/* Filter Presets */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
          <Eye size={16} />
          <span>Filter Presets</span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => onFilterChange(preset.value)}
              className="px-3 py-2 text-xs font-medium text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-md transition-all duration-200 border border-purple-200 hover:border-purple-300 hover:shadow-sm"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Regular Filters */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
            <Sliders size={16} />
            <span>Filter Controls</span>
          </h3>
          <button
            onClick={() => resetFilters(false)}
            className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-all duration-200"
          >
            <RotateCcw size={12} />
            <span>Reset</span>
          </button>
        </div>

        <div className="space-y-4">
          <SliderControl
            label="Blur"
            value={filterValues.blur}
            onChange={(value) => updateFilterValue('blur', value)}
            min={0}
            max={50}
            step={0.1}
            unit="px"
            color="blue"
          />

          <SliderControl
            label="Brightness"
            value={filterValues.brightness}
            onChange={(value) => updateFilterValue('brightness', value)}
            min={0}
            max={300}
            step={1}
            unit="%"
            color="yellow"
          />

          <SliderControl
            label="Contrast"
            value={filterValues.contrast}
            onChange={(value) => updateFilterValue('contrast', value)}
            min={0}
            max={300}
            step={1}
            unit="%"
            color="purple"
          />

          <SliderControl
            label="Grayscale"
            value={filterValues.grayscale}
            onChange={(value) => updateFilterValue('grayscale', value)}
            min={0}
            max={100}
            step={1}
            unit="%"
            color="red"
          />

          <SliderControl
            label="Hue Rotate"
            value={filterValues.hueRotate}
            onChange={(value) => updateFilterValue('hueRotate', value)}
            min={0}
            max={360}
            step={1}
            unit="deg"
            color="green"
          />

          <SliderControl
            label="Invert"
            value={filterValues.invert}
            onChange={(value) => updateFilterValue('invert', value)}
            min={0}
            max={100}
            step={1}
            unit="%"
            color="blue"
          />

          <SliderControl
            label="Opacity"
            value={filterValues.opacity}
            onChange={(value) => updateFilterValue('opacity', value)}
            min={0}
            max={100}
            step={1}
            unit="%"
            color="purple"
          />

          <SliderControl
            label="Saturate"
            value={filterValues.saturate}
            onChange={(value) => updateFilterValue('saturate', value)}
            min={0}
            max={300}
            step={1}
            unit="%"
            color="green"
          />

          <SliderControl
            label="Sepia"
            value={filterValues.sepia}
            onChange={(value) => updateFilterValue('sepia', value)}
            min={0}
            max={100}
            step={1}
            unit="%"
            color="yellow"
          />

          {/* Drop Shadow Controls */}
          <div className="space-y-3 p-3 bg-gray-50 rounded-lg">
            <h4 className="text-xs font-semibold text-gray-700">Drop Shadow</h4>
            
            <div className="grid grid-cols-2 gap-3">
              <SliderControl
                label="X Offset"
                value={filterValues.dropShadowX}
                onChange={(value) => updateFilterValue('dropShadowX', value)}
                min={-50}
                max={50}
                step={1}
                unit="px"
                color="blue"
              />
              <SliderControl
                label="Y Offset"
                value={filterValues.dropShadowY}
                onChange={(value) => updateFilterValue('dropShadowY', value)}
                min={-50}
                max={50}
                step={1}
                unit="px"
                color="green"
              />
            </div>

            <SliderControl
              label="Blur Radius"
              value={filterValues.dropShadowBlur}
              onChange={(value) => updateFilterValue('dropShadowBlur', value)}
              min={0}
              max={50}
              step={1}
              unit="px"
              color="purple"
            />

            <div className="space-y-2">
              <label className="block text-xs font-medium text-gray-700">Shadow Color</label>
              <div className="flex space-x-2">
                <input
                  type="color"
                  value={filterValues.dropShadowColor}
                  onChange={(e) => updateFilterValue('dropShadowColor', e.target.value)}
                  className="w-8 h-8 rounded border-2 border-gray-200 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
                />
                <input
                  type="text"
                  value={filterValues.dropShadowColor}
                  onChange={(e) => updateFilterValue('dropShadowColor', e.target.value)}
                  className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop Filters */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800">Backdrop Filter Controls</h3>
          <button
            onClick={() => resetFilters(true)}
            className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-all duration-200"
          >
            <RotateCcw size={12} />
            <span>Reset</span>
          </button>
        </div>

        <div className="space-y-4">
          <SliderControl
            label="Backdrop Blur"
            value={backdropValues.blur}
            onChange={(value) => updateFilterValue('blur', value, true)}
            min={0}
            max={50}
            step={0.1}
            unit="px"
            color="blue"
          />

          <SliderControl
            label="Backdrop Brightness"
            value={backdropValues.brightness}
            onChange={(value) => updateFilterValue('brightness', value, true)}
            min={0}
            max={300}
            step={1}
            unit="%"
            color="yellow"
          />

          <SliderControl
            label="Backdrop Contrast"
            value={backdropValues.contrast}
            onChange={(value) => updateFilterValue('contrast', value, true)}
            min={0}
            max={300}
            step={1}
            unit="%"
            color="purple"
          />

          <SliderControl
            label="Backdrop Saturate"
            value={backdropValues.saturate}
            onChange={(value) => updateFilterValue('saturate', value, true)}
            min={0}
            max={300}
            step={1}
            unit="%"
            color="green"
          />
        </div>
      </div>

      {/* Custom Filter Input */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Custom Filter</h3>
        <textarea
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          placeholder="blur(5px) brightness(1.2) contrast(1.1)"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm font-mono transition-all duration-200 hover:border-purple-300"
        />
      </div>

      {/* Custom Backdrop Filter Input */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Custom Backdrop Filter</h3>
        <textarea
          value={backdropFilter}
          onChange={(e) => onBackdropFilterChange(e.target.value)}
          placeholder="blur(10px) saturate(180%)"
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm font-mono transition-all duration-200 hover:border-purple-300"
        />
      </div>
    </div>
  );
};