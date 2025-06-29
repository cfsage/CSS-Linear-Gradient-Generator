import React from 'react';
import { FlexDirection, FlexWrap, JustifyContent, AlignItems, AlignContent } from '../../types';

interface FlexboxPanelProps {
  flexDirection: FlexDirection;
  onFlexDirectionChange: (direction: FlexDirection) => void;
  flexWrap: FlexWrap;
  onFlexWrapChange: (wrap: FlexWrap) => void;
  justifyContent: JustifyContent;
  onJustifyContentChange: (justify: JustifyContent) => void;
  alignItems: AlignItems;
  onAlignItemsChange: (align: AlignItems) => void;
  alignContent: AlignContent;
  onAlignContentChange: (align: AlignContent) => void;
  gap: string;
  onGapChange: (gap: string) => void;
  rowGap: string;
  onRowGapChange: (gap: string) => void;
  columnGap: string;
  onColumnGapChange: (gap: string) => void;
  flex: string;
  onFlexChange: (flex: string) => void;
  flexGrow: number;
  onFlexGrowChange: (grow: number) => void;
  flexShrink: number;
  onFlexShrinkChange: (shrink: number) => void;
  flexBasis: string;
  onFlexBasisChange: (basis: string) => void;
  alignSelf: AlignItems;
  onAlignSelfChange: (align: AlignItems) => void;
  order: number;
  onOrderChange: (order: number) => void;
}

export const FlexboxPanel: React.FC<FlexboxPanelProps> = ({
  flexDirection,
  onFlexDirectionChange,
  flexWrap,
  onFlexWrapChange,
  justifyContent,
  onJustifyContentChange,
  alignItems,
  onAlignItemsChange,
  alignContent,
  onAlignContentChange,
  gap,
  onGapChange,
  rowGap,
  onRowGapChange,
  columnGap,
  onColumnGapChange,
  flex,
  onFlexChange,
  flexGrow,
  onFlexGrowChange,
  flexShrink,
  onFlexShrinkChange,
  flexBasis,
  onFlexBasisChange,
  alignSelf,
  onAlignSelfChange,
  order,
  onOrderChange
}) => {
  const flexDirectionOptions: FlexDirection[] = ['row', 'row-reverse', 'column', 'column-reverse'];
  const flexWrapOptions: FlexWrap[] = ['nowrap', 'wrap', 'wrap-reverse'];
  const justifyContentOptions: JustifyContent[] = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
  const alignItemsOptions: AlignItems[] = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'];
  const alignContentOptions: AlignContent[] = ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];

  return (
    <div className="space-y-6">
      {/* Container Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Container Properties</h3>
        
        {/* Flex Direction */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Flex Direction</label>
          <select
            value={flexDirection}
            onChange={(e) => onFlexDirectionChange(e.target.value as FlexDirection)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {flexDirectionOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Flex Wrap */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Flex Wrap</label>
          <select
            value={flexWrap}
            onChange={(e) => onFlexWrapChange(e.target.value as FlexWrap)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {flexWrapOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Justify Content */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Justify Content</label>
          <select
            value={justifyContent}
            onChange={(e) => onJustifyContentChange(e.target.value as JustifyContent)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {justifyContentOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Align Items */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Align Items</label>
          <select
            value={alignItems}
            onChange={(e) => onAlignItemsChange(e.target.value as AlignItems)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {alignItemsOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Align Content */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Align Content</label>
          <select
            value={alignContent}
            onChange={(e) => onAlignContentChange(e.target.value as AlignContent)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {alignContentOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Gap */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Gap</label>
          <input
            type="text"
            value={gap}
            onChange={(e) => onGapChange(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Row Gap */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Row Gap</label>
          <input
            type="text"
            value={rowGap}
            onChange={(e) => onRowGapChange(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Column Gap */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Column Gap</label>
          <input
            type="text"
            value={columnGap}
            onChange={(e) => onColumnGapChange(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Item Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Item Properties</h3>
        
        {/* Flex */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Flex (shorthand)</label>
          <input
            type="text"
            value={flex}
            onChange={(e) => onFlexChange(e.target.value)}
            placeholder="0 1 auto"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Flex Grow */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Flex Grow: {flexGrow}</label>
          <input
            type="range"
            min="0"
            max="10"
            value={flexGrow}
            onChange={(e) => onFlexGrowChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Flex Shrink */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Flex Shrink: {flexShrink}</label>
          <input
            type="range"
            min="0"
            max="10"
            value={flexShrink}
            onChange={(e) => onFlexShrinkChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Flex Basis */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Flex Basis</label>
          <input
            type="text"
            value={flexBasis}
            onChange={(e) => onFlexBasisChange(e.target.value)}
            placeholder="auto"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Align Self */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Align Self</label>
          <select
            value={alignSelf}
            onChange={(e) => onAlignSelfChange(e.target.value as AlignItems)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {alignItemsOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Order */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Order: {order}</label>
          <input
            type="range"
            min="-10"
            max="10"
            value={order}
            onChange={(e) => onOrderChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};