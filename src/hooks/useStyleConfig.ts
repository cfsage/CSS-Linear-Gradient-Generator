import { useState } from 'react';
import { StyleConfig, ColorStop, GradientType, LinearDirection } from '../types';

const defaultStyleConfig: StyleConfig = {
  // Layout
  display: 'block',
  position: 'static',
  top: '',
  right: '',
  bottom: '',
  left: '',
  zIndex: 0,
  
  // Box Model
  width: '300px',
  height: '200px',
  minWidth: '',
  maxWidth: '',
  minHeight: '',
  maxHeight: '',
  margin: '0',
  marginTop: '',
  marginRight: '',
  marginBottom: '',
  marginLeft: '',
  padding: '20px',
  paddingTop: '',
  paddingRight: '',
  paddingBottom: '',
  paddingLeft: '',
  boxSizing: 'border-box',
  
  // Flexbox
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  gap: '',
  rowGap: '',
  columnGap: '',
  flex: '',
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
  alignSelf: 'stretch',
  order: 0,
  
  // Grid
  gridTemplateColumns: '',
  gridTemplateRows: '',
  gridTemplateAreas: '',
  gridAutoFlow: 'row',
  gridAutoRows: '',
  gridAutoColumns: '',
  gridColumn: '',
  gridRow: '',
  gridColumnStart: '',
  gridColumnEnd: '',
  gridRowStart: '',
  gridRowEnd: '',
  gridArea: '',
  
  // Typography
  fontFamily: 'system-ui, sans-serif',
  fontSize: '16px',
  fontWeight: '400',
  fontStyle: 'normal',
  lineHeight: '1.5',
  letterSpacing: '',
  wordSpacing: '',
  textAlign: 'left',
  textTransform: 'none',
  textDecoration: 'none',
  textIndent: '',
  whiteSpace: 'normal',
  wordBreak: 'normal',
  textOverflow: 'clip',
  writingMode: 'horizontal-tb',
  
  // Colors
  color: '#333333',
  backgroundColor: '#ffffff',
  opacity: 1,
  
  // Borders
  border: '',
  borderTop: '',
  borderRight: '',
  borderBottom: '',
  borderLeft: '',
  borderWidth: '0',
  borderStyle: 'solid',
  borderColor: '#000000',
  borderRadius: '0',
  borderTopLeftRadius: '',
  borderTopRightRadius: '',
  borderBottomLeftRadius: '',
  borderBottomRightRadius: '',
  
  // Shadows
  boxShadow: '',
  textShadow: '',
  
  // Overflow
  overflow: 'visible',
  overflowX: 'visible',
  overflowY: 'visible',
  
  // Interactions
  cursor: 'auto',
  userSelect: 'auto',
  pointerEvents: 'auto',
  
  // Visibility
  visibility: 'visible',
  
  // Scroll
  scrollBehavior: 'auto',
  scrollSnapType: 'none',
  scrollSnapAlign: 'none',
  
  // Touch
  touchAction: 'auto',
  
  // Forms
  resize: 'none',
  appearance: 'auto',
  
  // Modern CSS
  colorScheme: 'normal',
  accentColor: '',
  
  // Container Queries
  containerType: 'normal',
  containerName: '',
  
  // Filters
  filter: '',
  backdropFilter: '',
  
  // Transforms
  transform: '',
  transformOrigin: 'center',
  
  // Transitions
  transition: '',
  transitionProperty: '',
  transitionDuration: '',
  transitionTimingFunction: '',
  transitionDelay: '',
  
  // Animations
  animation: '',
  animationName: '',
  animationDuration: '',
  animationTimingFunction: '',
  animationDelay: '',
  animationIterationCount: '',
  animationDirection: '',
  animationFillMode: '',
  animationPlayState: '',
  
  // Clip Path
  clipPath: '',
  
  // Mask
  mask: '',
  maskImage: '',
  maskSize: '',
  maskPosition: '',
  maskRepeat: '',
  
  // Background (extended)
  backgroundImage: '',
  backgroundSize: 'auto',
  backgroundPosition: '0% 0%',
  backgroundRepeat: 'repeat',
  backgroundAttachment: 'scroll',
  backgroundClip: 'border-box',
  backgroundOrigin: 'padding-box',
  backgroundBlendMode: 'normal',
  
  // CSS Variables
  customProperties: [],
  
  // Media Queries
  mediaQueries: [],
  
  // Container Queries
  containerQueries: []
};

export const useStyleConfig = () => {
  const [config, setConfig] = useState<StyleConfig>(defaultStyleConfig);
  
  // Gradient-specific state
  const [gradientType, setGradientType] = useState<GradientType>('linear');
  const [linearDirection, setLinearDirection] = useState<LinearDirection>('to right');
  const [customAngle, setCustomAngle] = useState(45);
  const [colorStops, setColorStops] = useState<ColorStop[]>([
    { id: '1', color: '#ff6b6b', position: 0 },
    { id: '2', color: '#4ecdc4', position: 100 }
  ]);
  const [repeating, setRepeating] = useState(false);

  const updateConfig = (updates: Partial<StyleConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const resetConfig = () => {
    setConfig(defaultStyleConfig);
    setGradientType('linear');
    setLinearDirection('to right');
    setCustomAngle(45);
    setColorStops([
      { id: '1', color: '#ff6b6b', position: 0 },
      { id: '2', color: '#4ecdc4', position: 100 }
    ]);
    setRepeating(false);
  };

  const generateGradient = () => {
    const sortedStops = [...colorStops].sort((a, b) => a.position - b.position);
    const colorStopString = sortedStops.map(stop => `${stop.color} ${stop.position}%`).join(', ');
    
    const prefix = repeating ? 'repeating-' : '';
    
    switch (gradientType) {
      case 'linear':
        const direction = linearDirection === 'custom' ? `${customAngle}deg` : linearDirection;
        return `${prefix}linear-gradient(${direction}, ${colorStopString})`;
      
      case 'radial':
        return `${prefix}radial-gradient(circle, ${colorStopString})`;
      
      case 'conic':
        return `${prefix}conic-gradient(${colorStopString})`;
      
      default:
        return `linear-gradient(to right, ${colorStopString})`;
    }
  };

  const generateCSS = () => {
    const styles: string[] = [];
    
    // Add gradient as background if configured
    if (colorStops.length > 0) {
      styles.push(`background-image: ${generateGradient()}`);
    }
    
    // Add all other styles
    Object.entries(config).forEach(([key, value]) => {
      if (value !== undefined && value !== '' && value !== null && typeof value !== 'object') {
        const cssProperty = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        styles.push(`${cssProperty}: ${value}`);
      }
    });
    
    return styles.join(';\n') + ';';
  };

  return {
    config,
    updateConfig,
    resetConfig,
    generateCSS,
    
    // Gradient-specific
    gradientType,
    setGradientType,
    linearDirection,
    setLinearDirection,
    customAngle,
    setCustomAngle,
    colorStops,
    setColorStops,
    repeating,
    setRepeating,
    generateGradient
  };
};