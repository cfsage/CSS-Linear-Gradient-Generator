import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { Preview } from './components/Layout/Preview';
import { GradientsPanel } from './components/Panels/GradientsPanel';
import { LayoutPanel } from './components/Panels/LayoutPanel';
import { FlexboxPanel } from './components/Panels/FlexboxPanel';
import { GridPanel } from './components/Panels/GridPanel';
import { TypographyPanel } from './components/Panels/TypographyPanel';
import { ColorsPanel } from './components/Panels/ColorsPanel';
import { SpacingPanel } from './components/Panels/SpacingPanel';
import { BordersPanel } from './components/Panels/BordersPanel';
import { EffectsPanel } from './components/Panels/EffectsPanel';
import { FiltersPanel } from './components/Panels/FiltersPanel';
import { TransformsPanel } from './components/Panels/TransformsPanel';
import { AnimationsPanel } from './components/Panels/AnimationsPanel';
import { InteractionsPanel } from './components/Panels/InteractionsPanel';
import { VisibilityPanel } from './components/Panels/VisibilityPanel';
import { ResponsivePanel } from './components/Panels/ResponsivePanel';
import { ClipPathPanel } from './components/Panels/ClipPathPanel';
import { VariablesPanel } from './components/Panels/VariablesPanel';
import { ModernCSSPanel } from './components/Panels/ModernCSSPanel';
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
    console.log('Import functionality to be implemented');
  };

  const handleSave = () => {
    console.log('Save functionality to be implemented');
  };

  const handleShare = () => {
    console.log('Share functionality to be implemented');
  };

  const generatePreviewStyles = (): React.CSSProperties => {
    const styles: React.CSSProperties = {};
    
    Object.entries(config).forEach(([key, value]) => {
      if (value && value !== '' && typeof value !== 'object') {
        (styles as any)[key] = value;
      }
    });

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

      case 'grid':
        return (
          <GridPanel
            gridTemplateColumns={config.gridTemplateColumns}
            onGridTemplateColumnsChange={(gridTemplateColumns) => updateConfig({ gridTemplateColumns })}
            gridTemplateRows={config.gridTemplateRows}
            onGridTemplateRowsChange={(gridTemplateRows) => updateConfig({ gridTemplateRows })}
            gridTemplateAreas={config.gridTemplateAreas}
            onGridTemplateAreasChange={(gridTemplateAreas) => updateConfig({ gridTemplateAreas })}
            gridAutoFlow={config.gridAutoFlow}
            onGridAutoFlowChange={(gridAutoFlow) => updateConfig({ gridAutoFlow })}
            gridAutoRows={config.gridAutoRows}
            onGridAutoRowsChange={(gridAutoRows) => updateConfig({ gridAutoRows })}
            gridAutoColumns={config.gridAutoColumns}
            onGridAutoColumnsChange={(gridAutoColumns) => updateConfig({ gridAutoColumns })}
            gridColumn={config.gridColumn}
            onGridColumnChange={(gridColumn) => updateConfig({ gridColumn })}
            gridRow={config.gridRow}
            onGridRowChange={(gridRow) => updateConfig({ gridRow })}
            gridColumnStart={config.gridColumnStart}
            onGridColumnStartChange={(gridColumnStart) => updateConfig({ gridColumnStart })}
            gridColumnEnd={config.gridColumnEnd}
            onGridColumnEndChange={(gridColumnEnd) => updateConfig({ gridColumnEnd })}
            gridRowStart={config.gridRowStart}
            onGridRowStartChange={(gridRowStart) => updateConfig({ gridRowStart })}
            gridRowEnd={config.gridRowEnd}
            onGridRowEndChange={(gridRowEnd) => updateConfig({ gridRowEnd })}
            gridArea={config.gridArea}
            onGridAreaChange={(gridArea) => updateConfig({ gridArea })}
            gap={config.gap}
            onGapChange={(gap) => updateConfig({ gap })}
            rowGap={config.rowGap}
            onRowGapChange={(rowGap) => updateConfig({ rowGap })}
            columnGap={config.columnGap}
            onColumnGapChange={(columnGap) => updateConfig({ columnGap })}
          />
        );

      case 'typography':
        return (
          <TypographyPanel
            fontFamily={config.fontFamily}
            onFontFamilyChange={(fontFamily) => updateConfig({ fontFamily })}
            fontSize={config.fontSize}
            onFontSizeChange={(fontSize) => updateConfig({ fontSize })}
            fontWeight={config.fontWeight}
            onFontWeightChange={(fontWeight) => updateConfig({ fontWeight })}
            fontStyle={config.fontStyle}
            onFontStyleChange={(fontStyle) => updateConfig({ fontStyle })}
            lineHeight={config.lineHeight}
            onLineHeightChange={(lineHeight) => updateConfig({ lineHeight })}
            letterSpacing={config.letterSpacing}
            onLetterSpacingChange={(letterSpacing) => updateConfig({ letterSpacing })}
            wordSpacing={config.wordSpacing}
            onWordSpacingChange={(wordSpacing) => updateConfig({ wordSpacing })}
            textAlign={config.textAlign}
            onTextAlignChange={(textAlign) => updateConfig({ textAlign })}
            textTransform={config.textTransform}
            onTextTransformChange={(textTransform) => updateConfig({ textTransform })}
            textDecoration={config.textDecoration}
            onTextDecorationChange={(textDecoration) => updateConfig({ textDecoration })}
            textIndent={config.textIndent}
            onTextIndentChange={(textIndent) => updateConfig({ textIndent })}
            whiteSpace={config.whiteSpace}
            onWhiteSpaceChange={(whiteSpace) => updateConfig({ whiteSpace })}
            wordBreak={config.wordBreak}
            onWordBreakChange={(wordBreak) => updateConfig({ wordBreak })}
            textOverflow={config.textOverflow}
            onTextOverflowChange={(textOverflow) => updateConfig({ textOverflow })}
            writingMode={config.writingMode}
            onWritingModeChange={(writingMode) => updateConfig({ writingMode })}
            color={config.color}
            onColorChange={(color) => updateConfig({ color })}
            textShadow={config.textShadow}
            onTextShadowChange={(textShadow) => updateConfig({ textShadow })}
          />
        );

      case 'colors':
        return (
          <ColorsPanel
            color={config.color}
            onColorChange={(color) => updateConfig({ color })}
            backgroundColor={config.backgroundColor}
            onBackgroundColorChange={(backgroundColor) => updateConfig({ backgroundColor })}
            opacity={config.opacity}
            onOpacityChange={(opacity) => updateConfig({ opacity })}
            backgroundImage={config.backgroundImage}
            onBackgroundImageChange={(backgroundImage) => updateConfig({ backgroundImage })}
            backgroundSize={config.backgroundSize}
            onBackgroundSizeChange={(backgroundSize) => updateConfig({ backgroundSize })}
            backgroundPosition={config.backgroundPosition}
            onBackgroundPositionChange={(backgroundPosition) => updateConfig({ backgroundPosition })}
            backgroundRepeat={config.backgroundRepeat}
            onBackgroundRepeatChange={(backgroundRepeat) => updateConfig({ backgroundRepeat })}
            backgroundAttachment={config.backgroundAttachment}
            onBackgroundAttachmentChange={(backgroundAttachment) => updateConfig({ backgroundAttachment })}
            backgroundClip={config.backgroundClip}
            onBackgroundClipChange={(backgroundClip) => updateConfig({ backgroundClip })}
            backgroundOrigin={config.backgroundOrigin}
            onBackgroundOriginChange={(backgroundOrigin) => updateConfig({ backgroundOrigin })}
            backgroundBlendMode={config.backgroundBlendMode}
            onBackgroundBlendModeChange={(backgroundBlendMode) => updateConfig({ backgroundBlendMode })}
          />
        );

      case 'spacing':
        return (
          <SpacingPanel
            margin={config.margin}
            onMarginChange={(margin) => updateConfig({ margin })}
            marginTop={config.marginTop}
            onMarginTopChange={(marginTop) => updateConfig({ marginTop })}
            marginRight={config.marginRight}
            onMarginRightChange={(marginRight) => updateConfig({ marginRight })}
            marginBottom={config.marginBottom}
            onMarginBottomChange={(marginBottom) => updateConfig({ marginBottom })}
            marginLeft={config.marginLeft}
            onMarginLeftChange={(marginLeft) => updateConfig({ marginLeft })}
            padding={config.padding}
            onPaddingChange={(padding) => updateConfig({ padding })}
            paddingTop={config.paddingTop}
            onPaddingTopChange={(paddingTop) => updateConfig({ paddingTop })}
            paddingRight={config.paddingRight}
            onPaddingRightChange={(paddingRight) => updateConfig({ paddingRight })}
            paddingBottom={config.paddingBottom}
            onPaddingBottomChange={(paddingBottom) => updateConfig({ paddingBottom })}
            paddingLeft={config.paddingLeft}
            onPaddingLeftChange={(paddingLeft) => updateConfig({ paddingLeft })}
            boxSizing={config.boxSizing}
            onBoxSizingChange={(boxSizing) => updateConfig({ boxSizing })}
          />
        );

      case 'borders':
        return (
          <BordersPanel
            border={config.border}
            onBorderChange={(border) => updateConfig({ border })}
            borderTop={config.borderTop}
            onBorderTopChange={(borderTop) => updateConfig({ borderTop })}
            borderRight={config.borderRight}
            onBorderRightChange={(borderRight) => updateConfig({ borderRight })}
            borderBottom={config.borderBottom}
            onBorderBottomChange={(borderBottom) => updateConfig({ borderBottom })}
            borderLeft={config.borderLeft}
            onBorderLeftChange={(borderLeft) => updateConfig({ borderLeft })}
            borderWidth={config.borderWidth}
            onBorderWidthChange={(borderWidth) => updateConfig({ borderWidth })}
            borderStyle={config.borderStyle}
            onBorderStyleChange={(borderStyle) => updateConfig({ borderStyle })}
            borderColor={config.borderColor}
            onBorderColorChange={(borderColor) => updateConfig({ borderColor })}
            borderRadius={config.borderRadius}
            onBorderRadiusChange={(borderRadius) => updateConfig({ borderRadius })}
            borderTopLeftRadius={config.borderTopLeftRadius}
            onBorderTopLeftRadiusChange={(borderTopLeftRadius) => updateConfig({ borderTopLeftRadius })}
            borderTopRightRadius={config.borderTopRightRadius}
            onBorderTopRightRadiusChange={(borderTopRightRadius) => updateConfig({ borderTopRightRadius })}
            borderBottomLeftRadius={config.borderBottomLeftRadius}
            onBorderBottomLeftRadiusChange={(borderBottomLeftRadius) => updateConfig({ borderBottomLeftRadius })}
            borderBottomRightRadius={config.borderBottomRightRadius}
            onBorderBottomRightRadiusChange={(borderBottomRightRadius) => updateConfig({ borderBottomRightRadius })}
          />
        );

      case 'effects':
        return (
          <EffectsPanel
            boxShadow={config.boxShadow}
            onBoxShadowChange={(boxShadow) => updateConfig({ boxShadow })}
            textShadow={config.textShadow}
            onTextShadowChange={(textShadow) => updateConfig({ textShadow })}
            filter={config.filter}
            onFilterChange={(filter) => updateConfig({ filter })}
            backdropFilter={config.backdropFilter}
            onBackdropFilterChange={(backdropFilter) => updateConfig({ backdropFilter })}
            transform={config.transform}
            onTransformChange={(transform) => updateConfig({ transform })}
            transformOrigin={config.transformOrigin}
            onTransformOriginChange={(transformOrigin) => updateConfig({ transformOrigin })}
          />
        );

      case 'filters':
        return (
          <FiltersPanel
            filter={config.filter}
            onFilterChange={(filter) => updateConfig({ filter })}
            backdropFilter={config.backdropFilter}
            onBackdropFilterChange={(backdropFilter) => updateConfig({ backdropFilter })}
          />
        );

      case 'transforms':
        return (
          <TransformsPanel
            transform={config.transform}
            onTransformChange={(transform) => updateConfig({ transform })}
            transformOrigin={config.transformOrigin}
            onTransformOriginChange={(transformOrigin) => updateConfig({ transformOrigin })}
          />
        );

      case 'animations':
        return (
          <AnimationsPanel
            animation={config.animation}
            onAnimationChange={(animation) => updateConfig({ animation })}
            animationName={config.animationName}
            onAnimationNameChange={(animationName) => updateConfig({ animationName })}
            animationDuration={config.animationDuration}
            onAnimationDurationChange={(animationDuration) => updateConfig({ animationDuration })}
            animationTimingFunction={config.animationTimingFunction}
            onAnimationTimingFunctionChange={(animationTimingFunction) => updateConfig({ animationTimingFunction })}
            animationDelay={config.animationDelay}
            onAnimationDelayChange={(animationDelay) => updateConfig({ animationDelay })}
            animationIterationCount={config.animationIterationCount}
            onAnimationIterationCountChange={(animationIterationCount) => updateConfig({ animationIterationCount })}
            animationDirection={config.animationDirection}
            onAnimationDirectionChange={(animationDirection) => updateConfig({ animationDirection })}
            animationFillMode={config.animationFillMode}
            onAnimationFillModeChange={(animationFillMode) => updateConfig({ animationFillMode })}
            animationPlayState={config.animationPlayState}
            onAnimationPlayStateChange={(animationPlayState) => updateConfig({ animationPlayState })}
          />
        );

      case 'interactions':
        return (
          <InteractionsPanel
            cursor={config.cursor}
            onCursorChange={(cursor) => updateConfig({ cursor })}
            userSelect={config.userSelect}
            onUserSelectChange={(userSelect) => updateConfig({ userSelect })}
            pointerEvents={config.pointerEvents}
            onPointerEventsChange={(pointerEvents) => updateConfig({ pointerEvents })}
            touchAction={config.touchAction}
            onTouchActionChange={(touchAction) => updateConfig({ touchAction })}
            scrollBehavior={config.scrollBehavior}
            onScrollBehaviorChange={(scrollBehavior) => updateConfig({ scrollBehavior })}
            scrollSnapType={config.scrollSnapType}
            onScrollSnapTypeChange={(scrollSnapType) => updateConfig({ scrollSnapType })}
            scrollSnapAlign={config.scrollSnapAlign}
            onScrollSnapAlignChange={(scrollSnapAlign) => updateConfig({ scrollSnapAlign })}
            resize={config.resize}
            onResizeChange={(resize) => updateConfig({ resize })}
            appearance={config.appearance}
            onAppearanceChange={(appearance) => updateConfig({ appearance })}
          />
        );

      case 'visibility':
        return (
          <VisibilityPanel
            visibility={config.visibility}
            onVisibilityChange={(visibility) => updateConfig({ visibility })}
            opacity={config.opacity}
            onOpacityChange={(opacity) => updateConfig({ opacity })}
            overflow={config.overflow}
            onOverflowChange={(overflow) => updateConfig({ overflow })}
            overflowX={config.overflowX}
            onOverflowXChange={(overflowX) => updateConfig({ overflowX })}
            overflowY={config.overflowY}
            onOverflowYChange={(overflowY) => updateConfig({ overflowY })}
            zIndex={config.zIndex}
            onZIndexChange={(zIndex) => updateConfig({ zIndex })}
          />
        );

      case 'responsive':
        return (
          <ResponsivePanel
            mediaQueries={config.mediaQueries}
            onMediaQueriesChange={(mediaQueries) => updateConfig({ mediaQueries })}
            containerQueries={config.containerQueries}
            onContainerQueriesChange={(containerQueries) => updateConfig({ containerQueries })}
          />
        );

      case 'clippath':
        return (
          <ClipPathPanel
            clipPath={config.clipPath}
            onClipPathChange={(clipPath) => updateConfig({ clipPath })}
          />
        );

      case 'variables':
        return (
          <VariablesPanel
            customProperties={config.customProperties}
            onCustomPropertiesChange={(customProperties) => updateConfig({ customProperties })}
          />
        );

      case 'modern':
        return (
          <ModernCSSPanel
            colorScheme={config.colorScheme}
            onColorSchemeChange={(colorScheme) => updateConfig({ colorScheme })}
            accentColor={config.accentColor}
            onAccentColorChange={(accentColor) => updateConfig({ accentColor })}
            containerType={config.containerType}
            onContainerTypeChange={(containerType) => updateConfig({ containerType })}
            containerName={config.containerName}
            onContainerNameChange={(containerName) => updateConfig({ containerName })}
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
          {!previewMode && (
            <Sidebar
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          )}

          <div className="flex flex-1 overflow-hidden">
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