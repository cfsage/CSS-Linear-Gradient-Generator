import React from 'react';
import { Palette, Layout, Type, Box, Move, Layers, Zap, Image, Settings, Grid3X3, FileText as Flex, MousePointer, Eye, Smartphone, Code, Sparkles, Filter, Scissors, Variable, Monitor } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarTabs = [
  { id: 'gradients', label: 'Gradients', icon: Palette },
  { id: 'layout', label: 'Layout', icon: Layout },
  { id: 'flexbox', label: 'Flexbox', icon: Flex },
  { id: 'grid', label: 'Grid', icon: Grid3X3 },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'colors', label: 'Colors', icon: Box },
  { id: 'spacing', label: 'Spacing', icon: Move },
  { id: 'borders', label: 'Borders', icon: Layers },
  { id: 'effects', label: 'Effects', icon: Sparkles },
  { id: 'filters', label: 'Filters', icon: Filter },
  { id: 'transforms', label: 'Transforms', icon: Zap },
  { id: 'animations', label: 'Animations', icon: Image },
  { id: 'interactions', label: 'Interactions', icon: MousePointer },
  { id: 'visibility', label: 'Visibility', icon: Eye },
  { id: 'responsive', label: 'Responsive', icon: Smartphone },
  { id: 'clippath', label: 'Clip Path', icon: Scissors },
  { id: 'variables', label: 'Variables', icon: Variable },
  { id: 'modern', label: 'Modern CSS', icon: Monitor },
  { id: 'code', label: 'Code', icon: Code },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">CSS Properties</h2>
        <nav className="space-y-1">
          {sidebarTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-100 text-purple-700 border border-purple-200'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};