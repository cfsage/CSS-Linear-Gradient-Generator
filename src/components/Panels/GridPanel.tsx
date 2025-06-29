import React from 'react';
import { GridAutoFlow } from '../../types';

interface GridPanelProps {
  gridTemplateColumns: string;
  onGridTemplateColumnsChange: (value: string) => void;
  gridTemplateRows: string;
  onGridTemplateRowsChange: (value: string) => void;
  gridTemplateAreas: string;
  onGridTemplateAreasChange: (value: string) => void;
  gridAutoFlow: GridAutoFlow;
  onGridAutoFlowChange: (value: GridAutoFlow) => void;
  gridAutoRows: string;
  onGridAutoRowsChange: (value: string) => void;
  gridAutoColumns: string;
  onGridAutoColumnsChange: (value: string) => void;
  gridColumn: string;
  onGridColumnChange: (value: string) => void;
  gridRow: string;
  onGridRowChange: (value: string) => void;
  gridColumnStart: string;
  onGridColumnStartChange: (value: string) => void;
  gridColumnEnd: string;
  onGridColumnEndChange: (value: string) => void;
  gridRowStart: string;
  onGridRowStartChange: (value: string) => void;
  gridRowEnd: string;
  onGridRowEndChange: (value: string) => void;
  gridArea: string;
  onGridAreaChange: (value: string) => void;
  gap: string;
  onGapChange: (value: string) => void;
  rowGap: string;
  onRowGapChange: (value: string) => void;
  columnGap: string;
  onColumnGapChange: (value: string) => void;
}

export const GridPanel: React.FC<GridPanelProps> = ({
  gridTemplateColumns,
  onGridTemplateColumnsChange,
  gridTemplateRows,
  onGridTemplateRowsChange,
  gridTemplateAreas,
  onGridTemplateAreasChange,
  gridAutoFlow,
  onGridAutoFlowChange,
  gridAutoRows,
  onGridAutoRowsChange,
  gridAutoColumns,
  onGridAutoColumnsChange,
  gridColumn,
  onGridColumnChange,
  gridRow,
  onGridRowChange,
  gridColumnStart,
  onGridColumnStartChange,
  gridColumnEnd,
  onGridColumnEndChange,
  gridRowStart,
  onGridRowStartChange,
  gridRowEnd,
  onGridRowEndChange,
  gridArea,
  onGridAreaChange,
  gap,
  onGapChange,
  rowGap,
  onRowGapChange,
  columnGap,
  onColumnGapChange
}) => {
  const gridAutoFlowOptions: GridAutoFlow[] = ['row', 'column', 'row dense', 'column dense'];

  const commonGridValues = [
    'auto', 'min-content', 'max-content', 'fit-content()', 
    '1fr', '2fr', '3fr', 'minmax()', 'repeat()'
  ];

  return (
    <div className="space-y-6">
      {/* Container Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Container Properties</h3>
        
        {/* Grid Template Columns */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Grid Template Columns</label>
          <input
            type="text"
            value={gridTemplateColumns}
            onChange={(e) => onGridTemplateColumnsChange(e.target.value)}
            placeholder="repeat(3, 1fr)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
          <div className="flex flex-wrap gap-1 mt-2">
            {['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', '1fr 2fr 1fr', 'auto 1fr auto', 'minmax(200px, 1fr) 1fr'].map((preset) => (
              <button
                key={preset}
                onClick={() => onGridTemplateColumnsChange(preset)}
                className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Template Rows */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Grid Template Rows</label>
          <input
            type="text"
            value={gridTemplateRows}
            onChange={(e) => onGridTemplateRowsChange(e.target.value)}
            placeholder="auto"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
          <div className="flex flex-wrap gap-1 mt-2">
            {['auto', 'repeat(3, 100px)', '1fr 2fr', 'minmax(100px, auto)', 'repeat(auto-fit, minmax(100px, 1fr))'].map((preset) => (
              <button
                key={preset}
                onClick={() => onGridTemplateRowsChange(preset)}
                className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Template Areas */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Grid Template Areas</label>
          <textarea
            value={gridTemplateAreas}
            onChange={(e) => onGridTemplateAreasChange(e.target.value)}
            placeholder='"header header header" "sidebar main main" "footer footer footer"'
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Grid Auto Flow */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Grid Auto Flow</label>
          <select
            value={gridAutoFlow}
            onChange={(e) => onGridAutoFlowChange(e.target.value as GridAutoFlow)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            {gridAutoFlowOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Grid Auto Rows */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Grid Auto Rows</label>
          <input
            type="text"
            value={gridAutoRows}
            onChange={(e) => onGridAutoRowsChange(e.target.value)}
            placeholder="auto"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Grid Auto Columns */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Grid Auto Columns</label>
          <input
            type="text"
            value={gridAutoColumns}
            onChange={(e) => onGridAutoColumnsChange(e.target.value)}
            placeholder="auto"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Gap Controls */}
        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Gap</label>
            <input
              type="text"
              value={gap}
              onChange={(e) => onGapChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Row Gap</label>
            <input
              type="text"
              value={rowGap}
              onChange={(e) => onRowGapChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Column Gap</label>
            <input
              type="text"
              value={columnGap}
              onChange={(e) => onColumnGapChange(e.target.value)}
              placeholder="0"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Item Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">Item Properties</h3>
        
        {/* Grid Column */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Grid Column</label>
          <input
            type="text"
            value={gridColumn}
            onChange={(e) => onGridColumnChange(e.target.value)}
            placeholder="auto"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Grid Row */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Grid Row</label>
          <input
            type="text"
            value={gridRow}
            onChange={(e) => onGridRowChange(e.target.value)}
            placeholder="auto"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Grid Column Start/End */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Column Start</label>
            <input
              type="text"
              value={gridColumnStart}
              onChange={(e) => onGridColumnStartChange(e.target.value)}
              placeholder="auto"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Column End</label>
            <input
              type="text"
              value={gridColumnEnd}
              onChange={(e) => onGridColumnEndChange(e.target.value)}
              placeholder="auto"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Grid Row Start/End */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Row Start</label>
            <input
              type="text"
              value={gridRowStart}
              onChange={(e) => onGridRowStartChange(e.target.value)}
              placeholder="auto"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-gray-700">Row End</label>
            <input
              type="text"
              value={gridRowEnd}
              onChange={(e) => onGridRowEndChange(e.target.value)}
              placeholder="auto"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Grid Area */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-gray-700">Grid Area</label>
          <input
            type="text"
            value={gridArea}
            onChange={(e) => onGridAreaChange(e.target.value)}
            placeholder="auto / auto / auto / auto"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
          <div className="flex flex-wrap gap-1 mt-2">
            {['header', 'sidebar', 'main', 'footer'].map((preset) => (
              <button
                key={preset}
                onClick={() => onGridAreaChange(preset)}
                className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};