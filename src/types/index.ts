// Core types for the CSS styling tool
export interface ColorStop {
  id: string;
  color: string;
  position: number;
}

export type GradientType = 'linear' | 'radial' | 'conic';
export type LinearDirection = 'to right' | 'to left' | 'to bottom' | 'to top' | 'to bottom right' | 'to bottom left' | 'to top right' | 'to top left' | 'custom';
export type RadialShape = 'circle' | 'ellipse';
export type RadialSize = 'closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner' | 'custom';
export type RadialPosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right' | 'custom';

export type BlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';

export type DisplayType = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'table' | 'table-cell' | 'table-row' | 'contents' | 'none';

export type PositionType = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
export type AlignContent = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

export type GridAutoFlow = 'row' | 'column' | 'row dense' | 'column dense';

export type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
export type TextDecoration = 'none' | 'underline' | 'overline' | 'line-through';
export type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export type FontStyle = 'normal' | 'italic' | 'oblique';

export type BorderStyle = 'none' | 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';

export type BoxSizing = 'content-box' | 'border-box';

export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto';

export type Cursor = 'auto' | 'default' | 'pointer' | 'text' | 'move' | 'not-allowed' | 'grab' | 'grabbing' | 'crosshair' | 'help' | 'wait';

export type UserSelect = 'auto' | 'none' | 'text' | 'all';

export type PointerEvents = 'auto' | 'none';

export type Visibility = 'visible' | 'hidden' | 'collapse';

export type WhiteSpace = 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'break-spaces';

export type WordBreak = 'normal' | 'break-all' | 'keep-all' | 'break-word';

export type TextOverflow = 'clip' | 'ellipsis';

export type WritingMode = 'horizontal-tb' | 'vertical-rl' | 'vertical-lr';

export type ScrollBehavior = 'auto' | 'smooth';

export type ScrollSnapType = 'none' | 'x mandatory' | 'y mandatory' | 'both mandatory' | 'x proximity' | 'y proximity' | 'both proximity';

export type ScrollSnapAlign = 'none' | 'start' | 'end' | 'center';

export type TouchAction = 'auto' | 'none' | 'pan-x' | 'pan-y' | 'pan-left' | 'pan-right' | 'pan-up' | 'pan-down' | 'pinch-zoom' | 'manipulation';

export type Resize = 'none' | 'both' | 'horizontal' | 'vertical';

export type Appearance = 'none' | 'auto';

export type ColorScheme = 'normal' | 'light' | 'dark' | 'light dark';

export type ContainerType = 'normal' | 'size' | 'inline-size' | 'block-size';

export interface CSSVariable {
  id: string;
  name: string;
  value: string;
  description?: string;
}

export interface MediaQuery {
  id: string;
  condition: string;
  styles: Partial<StyleConfig>;
}

export interface ContainerQuery {
  id: string;
  name: string;
  condition: string;
  styles: Partial<StyleConfig>;
}

export interface StyleConfig {
  // Layout
  display: DisplayType;
  position: PositionType;
  top: string;
  right: string;
  bottom: string;
  left: string;
  zIndex: number;
  
  // Box Model
  width: string;
  height: string;
  minWidth: string;
  maxWidth: string;
  minHeight: string;
  maxHeight: string;
  margin: string;
  marginTop: string;
  marginRight: string;
  marginBottom: string;
  marginLeft: string;
  padding: string;
  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;
  boxSizing: BoxSizing;
  
  // Flexbox
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  alignContent: AlignContent;
  gap: string;
  rowGap: string;
  columnGap: string;
  flex: string;
  flexGrow: number;
  flexShrink: number;
  flexBasis: string;
  alignSelf: AlignItems;
  order: number;
  
  // Grid
  gridTemplateColumns: string;
  gridTemplateRows: string;
  gridTemplateAreas: string;
  gridAutoFlow: GridAutoFlow;
  gridAutoRows: string;
  gridAutoColumns: string;
  gridColumn: string;
  gridRow: string;
  gridColumnStart: string;
  gridColumnEnd: string;
  gridRowStart: string;
  gridRowEnd: string;
  gridArea: string;
  
  // Typography
  fontFamily: string;
  fontSize: string;
  fontWeight: FontWeight;
  fontStyle: FontStyle;
  lineHeight: string;
  letterSpacing: string;
  wordSpacing: string;
  textAlign: TextAlign;
  textTransform: TextTransform;
  textDecoration: TextDecoration;
  textIndent: string;
  whiteSpace: WhiteSpace;
  wordBreak: WordBreak;
  textOverflow: TextOverflow;
  writingMode: WritingMode;
  
  // Colors
  color: string;
  backgroundColor: string;
  opacity: number;
  
  // Borders
  border: string;
  borderTop: string;
  borderRight: string;
  borderBottom: string;
  borderLeft: string;
  borderWidth: string;
  borderStyle: BorderStyle;
  borderColor: string;
  borderRadius: string;
  borderTopLeftRadius: string;
  borderTopRightRadius: string;
  borderBottomLeftRadius: string;
  borderBottomRightRadius: string;
  
  // Shadows
  boxShadow: string;
  textShadow: string;
  
  // Overflow
  overflow: Overflow;
  overflowX: Overflow;
  overflowY: Overflow;
  
  // Interactions
  cursor: Cursor;
  userSelect: UserSelect;
  pointerEvents: PointerEvents;
  
  // Visibility
  visibility: Visibility;
  
  // Scroll
  scrollBehavior: ScrollBehavior;
  scrollSnapType: ScrollSnapType;
  scrollSnapAlign: ScrollSnapAlign;
  
  // Touch
  touchAction: TouchAction;
  
  // Forms
  resize: Resize;
  appearance: Appearance;
  
  // Modern CSS
  colorScheme: ColorScheme;
  accentColor: string;
  
  // Container Queries
  containerType: ContainerType;
  containerName: string;
  
  // Filters
  filter: string;
  backdropFilter: string;
  
  // Transforms
  transform: string;
  transformOrigin: string;
  
  // Transitions
  transition: string;
  transitionProperty: string;
  transitionDuration: string;
  transitionTimingFunction: string;
  transitionDelay: string;
  
  // Animations
  animation: string;
  animationName: string;
  animationDuration: string;
  animationTimingFunction: string;
  animationDelay: string;
  animationIterationCount: string;
  animationDirection: string;
  animationFillMode: string;
  animationPlayState: string;
  
  // Clip Path
  clipPath: string;
  
  // Mask
  mask: string;
  maskImage: string;
  maskSize: string;
  maskPosition: string;
  maskRepeat: string;
  
  // Background (extended)
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundAttachment: string;
  backgroundClip: string;
  backgroundOrigin: string;
  backgroundBlendMode: BlendMode;
  
  // CSS Variables
  customProperties: CSSVariable[];
  
  // Media Queries
  mediaQueries: MediaQuery[];
  
  // Container Queries
  containerQueries: ContainerQuery[];
}

export interface GradientPreset {
  name: string;
  type: GradientType;
  colors: ColorStop[];
  direction?: LinearDirection;
  angle?: number;
  shape?: RadialShape;
  size?: RadialSize;
  position?: RadialPosition;
}

export interface ComponentTemplate {
  id: string;
  name: string;
  category: string;
  html: string;
  css: string;
  description: string;
  tags: string[];
}

export interface AnimationPreset {
  id: string;
  name: string;
  keyframes: string;
  duration: string;
  timingFunction: string;
  description: string;
}

export interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
  description: string;
}

export interface TypographyScale {
  id: string;
  name: string;
  baseSize: number;
  ratio: number;
  sizes: { [key: string]: string };
}