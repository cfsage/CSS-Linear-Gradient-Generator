import React from 'react';
import { TextAlign, TextTransform, TextDecoration, FontWeight, FontStyle, WhiteSpace, WordBreak, TextOverflow, WritingMode } from '../../types';

interface TypographyPanelProps {
  fontFamily: string;
  onFontFamilyChange: (value: string) => void;
  fontSize: string;
  onFontSizeChange: (value: string) => void;
  fontWeight: FontWeight;
  onFontWeightChange: (value: FontWeight) => void;
  fontStyle: FontStyle;
  onFontStyleChange: (value: FontStyle) => void;
  lineHeight: string;
  onLineHeightChange: (value: string) => void;
  letterSpacing: string;
  onLetterSpacingChange: (value: string) => void;
  wordSpacing: string;
  onWordSpacingChange: (value: string) => void;
  textAlign: TextAlign;
  onTextAlignChange: (value: TextAlign) => void;
  textTransform: TextTransform;
  onTextTransformChange: (value: TextTransform) => void;
  textDecoration: TextDecoration;
  onTextDecorationChange: (value: TextDecoration) => void;
  textIndent: string;
  onTextIndentChange: (value: string) => void;
  whiteSpace: WhiteSpace;
  onWhiteSpaceChange: (value: WhiteSpace) => void;
  wordBreak: WordBreak;
  onWordBreakChange: (value: WordBreak) => void;
  textOverflow: TextOverflow;
  onTextOverflowChange: (value: TextOverflow) => void;
  writingMode: WritingMode;
  onWritingModeChange: (value: WritingMode) => void;
  color: string;
  onColorChange: (value: string) => void;
  textShadow: string;
  onTextShadowChange: (value: string) => void;
}

export const TypographyPanel: React.FC<TypographyPanelProps> = ({
  fontFamily,
  onFontFamilyChange,
  fontSize,
  onFontSizeChange,
  fontWeight,
  onFontWeightChange,
  fontStyle,
  onFontStyleChange,
  lineHeight,
  onLineHeightChange,
  letterSpacing,
  onLetterSpacingChange,
  wordSpacing,
  onWordSpacingChange,
  textAlign,
  onTextAlignChange,
  textTransform,
  onTextTransformChange,
  textDecoration,
  onTextDecorationChange,
  textIndent,
  onTextIndentChange,
  whiteSpace,
  onWhiteSpaceChange,
  wordBreak,
  onWordBreakChange,
  textOverflow,
  onTextOverflowChange,
  writingMode,
  onWritingModeChange,
  color,
  onColorChange,
  textShadow,
  onTextShadowChange
}) => {
  const fontFamilies = [
    'system-ui, sans-serif',
    'Georgia, serif',
    '"Times New Roman", serif',
    'Arial, sans-serif',
    'Helvetica, sans-serif',
    '"Courier New", monospace',
    'Monaco, monospace',
    '"Comic Sans MS", cursive',
    'Impact, fantasy',
    '"Trebuchet MS", sans-serif',
    '"Palatino Linotype", serif',
    '"Book Antiqua", serif',
    '"Lucida Console", monospace',
    '"Arial Black", sans-serif',
    'Tahoma, sans-serif',
    'Verdana, sans-serif'
  ];

  const fontSizes = ['8px', '10px', '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px', '48px', '64px', '72px', '96px'];
  const fontWeights: FontWeight[] = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  const fontStyles: FontStyle[] = ['normal', 'italic', 'oblique'];
  const textAligns: TextAlign[] = ['left', 'right', 'center', 'justify', 'start', 'end'];
  const textTransforms: TextTransform[] = ['none', 'capitalize', 'uppercase', 'lowercase'];
  const textDecorations: TextDecoration[] = ['none', 'underline', 'overline', 'line-through'];
  const whiteSpaces: WhiteSpace[] = ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'];
  const wordBreaks: WordBreak[] = ['normal', 'break-all', 'keep-all', 'break-word'];
  const textOverflows: TextOverflow[] = ['clip', 'ellipsis'];
  const writingModes: WritingMode[] = ['horizontal-tb', 'vertical-rl', 'vertical-lr'];

  return (
    <div className="space-y-6">
      {/* Font Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Font Properties</h3>
        
        {/* Font Family */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Font Family</label>
          <select
            value={fontFamily}
            onChange={(e) => onFontFamilyChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {fontFamilies.map((family) => (
              <option key={family} value={family} style={{ fontFamily: family }}>
                {family.split(',')[0].replace(/"/g, '')}
              </option>
            ))}
          </select>
        </div>

        {/* Font Size */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Font Size</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={fontSize}
              onChange={(e) => onFontSizeChange(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
            <select
              value={fontSize}
              onChange={(e) => onFontSizeChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            >
              {fontSizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Font Weight */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Font Weight</label>
          <div className="grid grid-cols-3 gap-2">
            {fontWeights.map((weight) => (
              <label
                key={weight}
                className={`relative flex items-center justify-center p-2 rounded-lg border cursor-pointer transition-all ${
                  fontWeight === weight
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="fontWeight"
                  value={weight}
                  checked={fontWeight === weight}
                  onChange={(e) => onFontWeightChange(e.target.value as FontWeight)}
                  className="sr-only"
                />
                <span className="text-xs font-medium" style={{ fontWeight: weight }}>{weight}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Font Style */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Font Style</label>
          <div className="grid grid-cols-3 gap-2">
            {fontStyles.map((style) => (
              <label
                key={style}
                className={`relative flex items-center justify-center p-2 rounded-lg border cursor-pointer transition-all ${
                  fontStyle === style
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="fontStyle"
                  value={style}
                  checked={fontStyle === style}
                  onChange={(e) => onFontStyleChange(e.target.value as FontStyle)}
                  className="sr-only"
                />
                <span className="text-xs font-medium capitalize" style={{ fontStyle: style }}>{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Line Height */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Line Height</label>
          <input
            type="text"
            value={lineHeight}
            onChange={(e) => onLineHeightChange(e.target.value)}
            placeholder="1.5"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
          <div className="flex flex-wrap gap-1 mt-2">
            {['1', '1.2', '1.4', '1.5', '1.6', '2'].map((preset) => (
              <button
                key={preset}
                onClick={() => onLineHeightChange(preset)}
                className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Letter Spacing */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Letter Spacing</label>
          <input
            type="text"
            value={letterSpacing}
            onChange={(e) => onLetterSpacingChange(e.target.value)}
            placeholder="normal"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
          <div className="flex flex-wrap gap-1 mt-2">
            {['normal', '-0.05em', '0.05em', '0.1em', '0.2em', '0.5em'].map((preset) => (
              <button
                key={preset}
                onClick={() => onLetterSpacingChange(preset)}
                className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Word Spacing */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Word Spacing</label>
          <input
            type="text"
            value={wordSpacing}
            onChange={(e) => onWordSpacingChange(e.target.value)}
            placeholder="normal"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Text Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Text Properties</h3>
        
        {/* Text Align */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Text Align</label>
          <div className="grid grid-cols-3 gap-2">
            {textAligns.map((align) => (
              <label
                key={align}
                className={`relative flex items-center justify-center p-2 rounded-lg border cursor-pointer transition-all ${
                  textAlign === align
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="textAlign"
                  value={align}
                  checked={textAlign === align}
                  onChange={(e) => onTextAlignChange(e.target.value as TextAlign)}
                  className="sr-only"
                />
                <span className="text-xs font-medium capitalize">{align}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Text Transform */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Text Transform</label>
          <select
            value={textTransform}
            onChange={(e) => onTextTransformChange(e.target.value as TextTransform)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {textTransforms.map((transform) => (
              <option key={transform} value={transform}>{transform}</option>
            ))}
          </select>
        </div>

        {/* Text Decoration */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Text Decoration</label>
          <select
            value={textDecoration}
            onChange={(e) => onTextDecorationChange(e.target.value as TextDecoration)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {textDecorations.map((decoration) => (
              <option key={decoration} value={decoration}>{decoration}</option>
            ))}
          </select>
        </div>

        {/* Text Indent */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Text Indent</label>
          <input
            type="text"
            value={textIndent}
            onChange={(e) => onTextIndentChange(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Color */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Text Color</label>
          <div className="flex space-x-2">
            <input
              type="color"
              value={color}
              onChange={(e) => onColorChange(e.target.value)}
              className="w-12 h-10 rounded border-2 border-gray-200 cursor-pointer"
            />
            <input
              type="text"
              value={color}
              onChange={(e) => onColorChange(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Text Shadow */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Text Shadow</label>
          <input
            type="text"
            value={textShadow}
            onChange={(e) => onTextShadowChange(e.target.value)}
            placeholder="2px 2px 4px rgba(0,0,0,0.5)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
          <div className="flex flex-wrap gap-1 mt-2">
            {[
              'none',
              '1px 1px 2px rgba(0,0,0,0.3)',
              '2px 2px 4px rgba(0,0,0,0.5)',
              '0 0 10px rgba(255,255,255,0.8)',
              '3px 3px 0 #000'
            ].map((preset) => (
              <button
                key={preset}
                onClick={() => onTextShadowChange(preset)}
                className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              >
                {preset === 'none' ? 'None' : 'Preset'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Text Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Advanced Properties</h3>
        
        {/* White Space */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">White Space</label>
          <select
            value={whiteSpace}
            onChange={(e) => onWhiteSpaceChange(e.target.value as WhiteSpace)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {whiteSpaces.map((space) => (
              <option key={space} value={space}>{space}</option>
            ))}
          </select>
        </div>

        {/* Word Break */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Word Break</label>
          <select
            value={wordBreak}
            onChange={(e) => onWordBreakChange(e.target.value as WordBreak)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {wordBreaks.map((breakType) => (
              <option key={breakType} value={breakType}>{breakType}</option>
            ))}
          </select>
        </div>

        {/* Text Overflow */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Text Overflow</label>
          <select
            value={textOverflow}
            onChange={(e) => onTextOverflowChange(e.target.value as TextOverflow)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {textOverflows.map((overflow) => (
              <option key={overflow} value={overflow}>{overflow}</option>
            ))}
          </select>
        </div>

        {/* Writing Mode */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Writing Mode</label>
          <select
            value={writingMode}
            onChange={(e) => onWritingModeChange(e.target.value as WritingMode)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {writingModes.map((mode) => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};