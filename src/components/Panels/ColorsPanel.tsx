import React, { useState } from 'react';
import { BlendMode } from '../../types';
import { Palette, Plus, Trash2 } from 'lucide-react';

interface ColorsProps {
  color: string;
  onColorChange: (value: string) => void;
  backgroundColor: string;
  onBackgroundColorChange: (value: string) => void;
  opacity: number;
  onOpacityChange: (value: number) => void;
  backgroundImage: string;
  onBackgroundImageChange: (value: string) => void;
  backgroundSize: string;
  onBackgroundSizeChange: (value: string) => void;
  backgroundPosition: string;
  onBackgroundPositionChange: (value: string) => void;
  backgroundRepeat: string;
  onBackgroundRepeatChange: (value: string) => void;
  backgroundAttachment: string;
  onBackgroundAttachmentChange: (value: string) => void;
  backgroundClip: string;
  onBackgroundClipChange: (value: string) => void;
  backgroundOrigin: string;
  onBackgroundOriginChange: (value: string) => void;
  backgroundBlendMode: BlendMode;
  onBackgroundBlendModeChange: (value: BlendMode) => void;
}

export const ColorsPanel: React.FC<ColorsProps> = ({
  color,
  onColorChange,
  backgroundColor,
  onBackgroundColorChange,
  opacity,
  onOpacityChange,
  backgroundImage,
  onBackgroundImageChange,
  backgroundSize,
  onBackgroundSizeChange,
  backgroundPosition,
  onBackgroundPositionChange,
  backgroundRepeat,
  onBackgroundRepeatChange,
  backgroundAttachment,
  onBackgroundAttachmentChange,
  backgroundClip,
  onBackgroundClipChange,
  backgroundOrigin,
  onBackgroundOriginChange,
  backgroundBlendMode,
  onBackgroundBlendModeChange
}) => {
  const [colorPalette, setColorPalette] = useState<string[]>([
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3',
    '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43', '#ee5a24', '#0abde3'
  ]);

  const backgroundSizes = ['auto', 'cover', 'contain', '100%', '50%', '200px', '100px 200px'];
  const backgroundRepeats = ['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'space', 'round'];
  const backgroundAttachments = ['scroll', 'fixed', 'local'];
  const backgroundClips = ['border-box', 'padding-box', 'content-box', 'text'];
  const backgroundOrigins = ['border-box', 'padding-box', 'content-box'];
  const blendModes: BlendMode[] = [
    'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
    'color-dodge', 'color-burn', 'hard-light', 'soft-light',
    'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'
  ];

  const addToPalette = (newColor: string) => {
    if (!colorPalette.includes(newColor)) {
      setColorPalette([...colorPalette, newColor]);
    }
  };

  const removeFromPalette = (colorToRemove: string) => {
    setColorPalette(colorPalette.filter(c => c !== colorToRemove));
  };

  return (
    <div className="space-y-6">
      {/* Color Palette */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
            <Palette size={16} />
            <span>Color Palette</span>
          </h3>
          <button
            onClick={() => addToPalette(color)}
            className="flex items-center space-x-1 px-2 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700 transition-all duration-200 hover:shadow-sm"
          >
            <Plus size={12} />
            <span>Add</span>
          </button>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {colorPalette.map((paletteColor, index) => (
            <div key={index} className="relative group">
              <button
                onClick={() => onColorChange(paletteColor)}
                className="w-full h-8 rounded border-2 border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: paletteColor }}
                title={paletteColor}
              />
              <button
                onClick={() => removeFromPalette(paletteColor)}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center hover:bg-red-600"
              >
                <Trash2 size={8} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Text Color */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Text Color</h3>
        <div className="flex space-x-2">
          <input
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="w-12 h-10 rounded border-2 border-gray-200 dark:border-gray-600 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
          />
          <input
            type="text"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          />
        </div>
      </div>

      {/* Background Color */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Background Color</h3>
        <div className="flex space-x-2">
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => onBackgroundColorChange(e.target.value)}
            className="w-12 h-10 rounded border-2 border-gray-200 dark:border-gray-600 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
          />
          <input
            type="text"
            value={backgroundColor}
            onChange={(e) => onBackgroundColorChange(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
          />
        </div>
      </div>

      {/* Opacity */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Opacity: {opacity}</h3>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          onChange={(e) => onOpacityChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>

      {/* Background Image */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Background Image</h3>
        <input
          type="text"
          value={backgroundImage}
          onChange={(e) => onBackgroundImageChange(e.target.value)}
          placeholder="url('image.jpg') or none"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        />
        <div className="flex flex-wrap gap-1 mt-2">
          {[
            'none',
            "url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            "url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          ].map((preset, index) => (
            <button
              key={index}
              onClick={() => onBackgroundImageChange(preset)}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-all duration-200"
            >
              {preset === 'none' ? 'None' : `Image ${index}`}
            </button>
          ))}
        </div>
      </div>

      {/* Background Size */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Background Size</h3>
        <select
          value={backgroundSize}
          onChange={(e) => onBackgroundSizeChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {backgroundSizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

      {/* Background Position */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Background Position</h3>
        <input
          type="text"
          value={backgroundPosition}
          onChange={(e) => onBackgroundPositionChange(e.target.value)}
          placeholder="center center"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        />
        <div className="grid grid-cols-3 gap-1 mt-2">
          {[
            'left top', 'center top', 'right top',
            'left center', 'center center', 'right center',
            'left bottom', 'center bottom', 'right bottom'
          ].map((position) => (
            <button
              key={position}
              onClick={() => onBackgroundPositionChange(position)}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-all duration-200"
            >
              {position.replace(' ', '-')}
            </button>
          ))}
        </div>
      </div>

      {/* Background Repeat */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Background Repeat</h3>
        <select
          value={backgroundRepeat}
          onChange={(e) => onBackgroundRepeatChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {backgroundRepeats.map((repeat) => (
            <option key={repeat} value={repeat}>{repeat}</option>
          ))}
        </select>
      </div>

      {/* Background Attachment */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Background Attachment</h3>
        <select
          value={backgroundAttachment}
          onChange={(e) => onBackgroundAttachmentChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {backgroundAttachments.map((attachment) => (
            <option key={attachment} value={attachment}>{attachment}</option>
          ))}
        </select>
      </div>

      {/* Background Clip */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Background Clip</h3>
        <select
          value={backgroundClip}
          onChange={(e) => onBackgroundClipChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {backgroundClips.map((clip) => (
            <option key={clip} value={clip}>{clip}</option>
          ))}
        </select>
      </div>

      {/* Background Origin */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Background Origin</h3>
        <select
          value={backgroundOrigin}
          onChange={(e) => onBackgroundOriginChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {backgroundOrigins.map((origin) => (
            <option key={origin} value={origin}>{origin}</option>
          ))}
        </select>
      </div>

      {/* Background Blend Mode */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Background Blend Mode</h3>
        <select
          value={backgroundBlendMode}
          onChange={(e) => onBackgroundBlendModeChange(e.target.value as BlendMode)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-200 hover:border-purple-300"
        >
          {blendModes.map((mode) => (
            <option key={mode} value={mode}>{mode}</option>
          ))}
        </select>
      </div>
    </div>
  );
};