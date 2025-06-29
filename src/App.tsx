import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { Preview } from './components/Layout/Preview';
import { GradientsPanel } from './components/Panels/GradientsPanel';
import { LayoutPanel } from './components/Panels/LayoutPanel';
import { FlexboxPanel } from './components/Panels/FlexboxPanel';
import { CodePanel } from './components/Panels/CodePanel';
import { useStyleConfig } from './hooks/useStyleConfig';
import { gradientPresets } from './data/presets';

function App() {
  const [activeTab, setActiveTab] = useState('gradients');
  const [copied, setCopied] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [viewportSize, setViewportSize] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [htmlContent, setHtmlContent] = useState('<div>Your styled element</div>');

  const {
    config,
    updateConfig,
    resetConfig,
    generateCSS,
    gradientType,
    setGradientType,
    linearDirection,
    setLinearDirection,
    customAngle,
    setCustomAngle,
    colorStops,
    setColorStops,
    repeating,
    setRepeating
  } = useStyleConfig();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateCSS());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleExport = () => {
    const css = generateCSS();
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Studio Export</title>
  <style>
.element {
${css.split(';').filter(rule => rule.trim()).map(rule => `  ${rule.trim()};`).join('\n')}
}
  </style>
</head>
<body>
  <div class="element">
    ${htmlContent}
  </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'css-studio-export.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    // TODO: Implement import functionality
    console.log('Import functionality to be implemented');
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Save functionality to be implemented');
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log('Share functionality to be implemented');
  };

  const generatePreviewStyles = (): React.CSSProperties => {
    const styles: React.CSSProperties = {};
    
    // Convert config to React.CSSProperties
    Object.entries(config).forEach(([key, value]) => {
      if (value && value !== '' && typeof value !== 'object') {
        (styles as any)[key] = value;
      }
    });

    // Add gradient if configured
    if (colorStops.length > 0) {
      const sortedStops = [...colorStops].sort((a, b) => a.position - b.position);
      const colorStopString = sortedStops.map(stop => `${stop.color} ${stop.position}%`).join(', ');
      const prefix = repeating ? 'repeating-' : '';
      
      let gradient = '';
      switch (gradientType) {
        case 'linear':
          const direction = linearDirection === 'custom' ? `${customAngle}deg` : linearDirection;
          gradient = `${prefix}linear-gradient(${direction}, ${colorStopString})`;
          break;
        case 'radial':
          gradient = `${prefix}radial-gradient(circle, ${colorStopString})`;
          break;
        case 'conic':
          gradient = `${prefix}conic-gradient(${colorStopString})`;
          break;
      }
      
      if (gradient) {
        styles.backgroundImage = gradient;
      }
    }

    return styles;
  };

  const renderPanel = () => {
    switch (activeTab) {
      case 'gradients':
        return (
          <GradientsPanel
            gradientType={gradientType}
            onGradientTypeChange={setGradientType}
            linearDirection={linearDirection}
            onLinearDirectionChange={setLinearDirection}
            customAngle={customAngle}
            onCustomAngleChange={setCustomAngle}
            radialShape="circle"
            onRadialShapeChange={() => {}}
            radialSize="farthest-corner"
            onRadialSizeChange={() => {}}
            radialPosition="center"
            onRadialPositionChange={() => {}}
            colorStops={colorStops}
            onColorStopsChange={setColorStops}
            repeating={repeating}
            onRepeatingChange={setRepeating}
            presets={gradientPresets}
            onApplyPreset={(preset) => {
              setGradientType(preset.type);
              setColorStops(preset.colors);
              if (preset.direction) setLinearDirection(preset.direction);
              if (preset.angle) setCustomAngle(preset.angle);
            }}
          />
        );
      
      case 'layout':
        return (
          <LayoutPanel
            display={config.display}
            onDisplayChange={(display) => updateConfig({ display })}
            position={config.position}
            onPositionChange={(position) => updateConfig({ position })}
            top={config.top}
            onTopChange={(top) => updateConfig({ top })}
            right={config.right}
            onRightChange={(right) => updateConfig({ right })}
            bottom={config.bottom}
            onBottomChange={(bottom) => updateConfig({ bottom })}
            left={config.left}
            onLeftChange={(left) => updateConfig({ left })}
            zIndex={config.zIndex}
            onZIndexChange={(zIndex) => updateConfig({ zIndex })}
            width={config.width}
            onWidthChange={(width) => updateConfig({ width })}
            height={config.height}
            onHeightChange={(height) => updateConfig({ height })}
            minWidth={config.minWidth}
            onMinWidthChange={(minWidth) => updateConfig({ minWidth })}
            maxWidth={config.maxWidth}
            onMaxWidthChange={(maxWidth) => updateConfig({ maxWidth })}
            minHeight={config.minHeight}
            onMinHeightChange={(minHeight) => updateConfig({ minHeight })}
            maxHeight={config.maxHeight}
            onMaxHeightChange={(maxHeight) => updateConfig({ maxHeight })}
          />
        );
      
      case 'flexbox':
        return (
          <FlexboxPanel
            flexDirection={config.flexDirection}
            onFlexDirectionChange={(flexDirection) => updateConfig({ flexDirection })}
            flexWrap={config.flexWrap}
            onFlexWrapChange={(flexWrap) => updateConfig({ flexWrap })}
            justifyContent={config.justifyContent}
            onJustifyContentChange={(justifyContent) => updateConfig({ justifyContent })}
            alignItems={config.alignItems}
            onAlignItemsChange={(alignItems) => updateConfig({ alignItems })}
            alignContent={config.alignContent}
            onAlignContentChange={(alignContent) => updateConfig({ alignContent })}
            gap={config.gap}
            onGapChange={(gap) => updateConfig({ gap })}
            rowGap={config.rowGap}
            onRowGapChange={(rowGap) => updateConfig({ rowGap })}
            columnGap={config.columnGap}
            onColumnGapChange={(columnGap) => updateConfig({ columnGap })}
            flex={config.flex}
            onFlexChange={(flex) => updateConfig({ flex })}
            flexGrow={config.flexGrow}
            onFlexGrowChange={(flexGrow) => updateConfig({ flexGrow })}
            flexShrink={config.flexShrink}
            onFlexShrinkChange={(flexShrink) => updateConfig({ flexShrink })}
            flexBasis={config.flexBasis}
            onFlexBasisChange={(flexBasis) => updateConfig({ flexBasis })}
            alignSelf={config.alignSelf}
            onAlignSelfChange={(alignSelf) => updateConfig({ alignSelf })}
            order={config.order}
            onOrderChange={(order) => updateConfig({ order })}
          />
        );
      
      case 'code':
        return (
          <CodePanel
            css={generateCSS()}
            html={htmlContent}
            onCopy={handleCopy}
            copied={copied}
            onExport={handleExport}
          />
        );
      
      default:
        return (
          <div className="p-6 text-center text-gray-500">
            <p>Panel for "{activeTab}" is coming soon!</p>
            <p className="text-sm mt-2">This comprehensive CSS tool will include all advanced features.</p>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-gray-100 ${fullscreen ? 'fixed inset-0 z-50' : ''}`}>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header
          copied={copied}
          onCopy={handleCopy}
          onExport={handleExport}
          onImport={handleImport}
          onReset={resetConfig}
          onSave={handleSave}
          onShare={handleShare}
          previewMode={previewMode}
          onTogglePreview={() => setPreviewMode(!previewMode)}
          fullscreen={fullscreen}
          onToggleFullscreen={() => setFullscreen(!fullscreen)}
        />

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          {!previewMode && (
            <Sidebar
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          )}

          {/* Main Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Control Panel */}
            {!previewMode && (
              <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
                    {activeTab} Settings
                  </h2>
                  {renderPanel()}
                </div>
              </div>
            )}

            {/* Preview */}
            <Preview
              styles={generatePreviewStyles()}
              html={htmlContent}
              responsive={responsive}
              onToggleResponsive={() => setResponsive(!responsive)}
              viewportSize={viewportSize}
              onViewportChange={setViewportSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;