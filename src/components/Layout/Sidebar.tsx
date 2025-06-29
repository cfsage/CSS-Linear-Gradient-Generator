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
    <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto transition-colors duration-300">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">CSS Properties</h2>
        <nav className="space-y-1">
          {sidebarTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200'
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