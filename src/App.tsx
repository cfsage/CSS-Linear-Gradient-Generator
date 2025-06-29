import React, { useState } from 'react';
import { Copy, Check, Plus, Trash2, RotateCcw, Download, Upload, Palette, Settings, Image, Sparkles, Square, Type, Zap, Move, Filter } from 'lucide-react';

interface ColorStop {
  id: string;
  color: string;
  position: number;
}

interface Shadow {
  id: string;
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  inset: boolean;
}

type GradientType = 'linear' | 'radial' | 'conic';
type LinearDirection = 'to right' | 'to left' | 'to bottom' | 'to top' | 'to bottom right' | 'to bottom left' | 'to top right' | 'to top left' | 'custom';
type RadialShape = 'circle' | 'ellipse';
type RadialSize = 'closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner' | 'custom';
type RadialPosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right' | 'custom';
type BlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
type BackgroundSize = 'auto' | 'cover' | 'contain' | 'custom';
type BackgroundRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'space' | 'round';
type BackgroundAttachment = 'scroll' | 'fixed' | 'local';
type BorderStyle = 'none' | 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
type AnimationType = 'none' | 'pulse' | 'bounce' | 'spin' | 'ping' | 'fade' | 'slideIn' | 'slideOut' | 'custom';
type TimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier';
type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
type FontFamily = 'Inter' | 'Arial' | 'Georgia' | 'Times' | 'Courier' | 'Helvetica' | 'Verdana' | 'custom';
type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type TextAlign = 'left' | 'center' | 'right' | 'justify';
type TextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';
type TextDecoration = 'none' | 'underline' | 'overline' | 'line-through';

type Category = 'gradients' | 'images' | 'shadows' | 'borders' | 'animations' | 'transforms' | 'filters' | 'typography';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('gradients');
  const [copied, setCopied] = useState(false);
  
  // Gradient states
  const [gradientType, setGradientType] = useState<GradientType>('linear');
  const [linearDirection, setLinearDirection] = useState<LinearDirection>('to right');
  const [customAngle, setCustomAngle] = useState(45);
  const [radialShape, setRadialShape] = useState<RadialShape>('circle');
  const [radialSize, setRadialSize] = useState<RadialSize>('farthest-corner');
  const [radialPosition, setRadialPosition] = useState<RadialPosition>('center');
  const [customRadialX, setCustomRadialX] = useState(50);
  const [customRadialY, setCustomRadialY] = useState(50);
  const [customRadialWidth, setCustomRadialWidth] = useState(100);
  const [customRadialHeight, setCustomRadialHeight] = useState(100);
  const [conicAngle, setConicAngle] = useState(0);
  const [conicPositionX, setConicPositionX] = useState(50);
  const [conicPositionY, setConicPositionY] = useState(50);
  const [colorStops, setColorStops] = useState<ColorStop[]>([
    { id: '1', color: '#ff6b6b', position: 0 },
    { id: '2', color: '#4ecdc4', position: 100 }
  ]);
  const [repeating, setRepeating] = useState(false);
  const [gradientBlendMode, setGradientBlendMode] = useState<BlendMode>('normal');
  
  // Image states
  const [backgroundImage, setBackgroundImage] = useState('');
  const [backgroundSize, setBackgroundSize] = useState<BackgroundSize>('cover');
  const [customBackgroundWidth, setCustomBackgroundWidth] = useState(100);
  const [customBackgroundHeight, setCustomBackgroundHeight] = useState(100);
  const [backgroundPositionX, setBackgroundPositionX] = useState(50);
  const [backgroundPositionY, setBackgroundPositionY] = useState(50);
  const [backgroundRepeat, setBackgroundRepeat] = useState<BackgroundRepeat>('no-repeat');
  const [backgroundAttachment, setBackgroundAttachment] = useState<BackgroundAttachment>('scroll');
  const [imageBlendMode, setImageBlendMode] = useState<BlendMode>('normal');
  const [imageOpacity, setImageOpacity] = useState(100);
  
  // Shadow states
  const [shadows, setShadows] = useState<Shadow[]>([
    { id: '1', x: 0, y: 4, blur: 6, spread: 0, color: '#00000040', inset: false }
  ]);
  const [textShadowX, setTextShadowX] = useState(2);
  const [textShadowY, setTextShadowY] = useState(2);
  const [textShadowBlur, setTextShadowBlur] = useState(4);
  const [textShadowColor, setTextShadowColor] = useState('#00000080');
  const [enableTextShadow, setEnableTextShadow] = useState(false);
  
  // Border states
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderStyle, setBorderStyle] = useState<BorderStyle>('solid');
  const [borderColor, setBorderColor] = useState('#e5e7eb');
  const [borderRadiusTopLeft, setBorderRadiusTopLeft] = useState(8);
  const [borderRadiusTopRight, setBorderRadiusTopRight] = useState(8);
  const [borderRadiusBottomLeft, setBorderRadiusBottomLeft] = useState(8);
  const [borderRadiusBottomRight, setBorderRadiusBottomRight] = useState(8);
  const [uniformRadius, setUniformRadius] = useState(true);
  const [uniformBorderRadius, setUniformBorderRadius] = useState(8);
  
  // Animation states
  const [animationType, setAnimationType] = useState<AnimationType>('none');
  const [animationDuration, setAnimationDuration] = useState(1);
  const [animationDelay, setAnimationDelay] = useState(0);
  const [animationIterations, setAnimationIterations] = useState('infinite');
  const [animationTimingFunction, setAnimationTimingFunction] = useState<TimingFunction>('ease');
  const [animationDirection, setAnimationDirection] = useState<AnimationDirection>('normal');
  const [animationFillMode, setAnimationFillMode] = useState('none');
  
  // Transform states
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  
  // Filter states
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [saturate, setSaturate] = useState(100);
  const [sepia, setSepia] = useState(0);
  const [filterOpacity, setFilterOpacity] = useState(100);
  
  // Typography states
  const [fontFamily, setFontFamily] = useState<FontFamily>('Inter');
  const [customFontFamily, setCustomFontFamily] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [fontWeight, setFontWeight] = useState<FontWeight>('400');
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textAlign, setTextAlign] = useState<TextAlign>('left');
  const [textTransform, setTextTransform] = useState<TextTransform>('none');
  const [textDecoration, setTextDecoration] = useState<TextDecoration>('none');
  const [textColor, setTextColor] = useState('#1f2937');
  const [previewText, setPreviewText] = useState('The quick brown fox jumps over the lazy dog. This is a sample text to preview typography styling.');

  const categories = [
    { id: 'gradients' as Category, name: 'Gradients', icon: Palette },
    { id: 'images' as Category, name: 'Images', icon: Image },
    { id: 'shadows' as Category, name: 'Shadows', icon: Sparkles },
    { id: 'borders' as Category, name: 'Borders', icon: Square },
    { id: 'animations' as Category, name: 'Animations', icon: Zap },
    { id: 'transforms' as Category, name: 'Transforms', icon: Move },
    { id: 'filters' as Category, name: 'Filters', icon: Filter },
    { id: 'typography' as Category, name: 'Typography', icon: Type },
  ];

  const imagePresets = [
    { name: 'Nature', url: 'https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Abstract', url: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Geometric', url: 'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Texture', url: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  const blendModeOptions: BlendMode[] = [
    'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
    'color-dodge', 'color-burn', 'hard-light', 'soft-light',
    'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'
  ];

  // Helper functions
  const addColorStop = () => {
    const newId = Date.now().toString();
    const newPosition = colorStops.length > 0 ? 
      Math.min(100, Math.max(...colorStops.map(stop => stop.position)) + 20) : 50;
    
    setColorStops([...colorStops, {
      id: newId,
      color: '#' + Math.floor(Math.random()*16777215).toString(16),
      position: newPosition
    }]);
  };

  const removeColorStop = (id: string) => {
    if (colorStops.length > 2) {
      setColorStops(colorStops.filter(stop => stop.id !== id));
    }
  };

  const updateColorStop = (id: string, field: 'color' | 'position', value: string | number) => {
    setColorStops(colorStops.map(stop => 
      stop.id === id ? { ...stop, [field]: value } : stop
    ));
  };

  const addShadow = () => {
    const newId = Date.now().toString();
    setShadows([...shadows, {
      id: newId,
      x: 0,
      y: 4,
      blur: 6,
      spread: 0,
      color: '#00000040',
      inset: false
    }]);
  };

  const removeShadow = (id: string) => {
    if (shadows.length > 1) {
      setShadows(shadows.filter(shadow => shadow.id !== id));
    }
  };

  const updateShadow = (id: string, field: keyof Shadow, value: any) => {
    setShadows(shadows.map(shadow => 
      shadow.id === id ? { ...shadow, [field]: value } : shadow
    ));
  };

  const generateGradient = () => {
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
        const shape = radialShape;
        const size = radialSize === 'custom' ? `${customRadialWidth}px ${customRadialHeight}px` : radialSize;
        const position = radialPosition === 'custom' ? 
          `${customRadialX}% ${customRadialY}%` : radialPosition;
        gradient = `${prefix}radial-gradient(${shape} ${size} at ${position}, ${colorStopString})`;
        break;
      
      case 'conic':
        const angle = conicAngle;
        const conicPosition = `${conicPositionX}% ${conicPositionY}%`;
        gradient = `${prefix}conic-gradient(from ${angle}deg at ${conicPosition}, ${colorStopString})`;
        break;
      
      default:
        gradient = `linear-gradient(to right, ${colorStopString})`;
    }

    return gradient;
  };

  const generateBoxShadow = () => {
    return shadows.map(shadow => 
      `${shadow.inset ? 'inset ' : ''}${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
    ).join(', ');
  };

  const generateTextShadow = () => {
    if (!enableTextShadow) return 'none';
    return `${textShadowX}px ${textShadowY}px ${textShadowBlur}px ${textShadowColor}`;
  };

  const generateTransform = () => {
    const transforms = [];
    if (translateX !== 0 || translateY !== 0) transforms.push(`translate(${translateX}px, ${translateY}px)`);
    if (scaleX !== 1 || scaleY !== 1) transforms.push(`scale(${scaleX}, ${scaleY})`);
    if (rotate !== 0) transforms.push(`rotate(${rotate}deg)`);
    if (skewX !== 0 || skewY !== 0) transforms.push(`skew(${skewX}deg, ${skewY}deg)`);
    return transforms.length > 0 ? transforms.join(' ') : 'none';
  };

  const generateFilter = () => {
    const filters = [];
    if (blur > 0) filters.push(`blur(${blur}px)`);
    if (brightness !== 100) filters.push(`brightness(${brightness}%)`);
    if (contrast !== 100) filters.push(`contrast(${contrast}%)`);
    if (grayscale > 0) filters.push(`grayscale(${grayscale}%)`);
    if (hueRotate !== 0) filters.push(`hue-rotate(${hueRotate}deg)`);
    if (saturate !== 100) filters.push(`saturate(${saturate}%)`);
    if (sepia > 0) filters.push(`sepia(${sepia}%)`);
    return filters.length > 0 ? filters.join(' ') : 'none';
  };

  const generateAnimation = () => {
    if (animationType === 'none') return 'none';
    
    const keyframes = {
      pulse: '@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }',
      bounce: '@keyframes bounce { 0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); } 40%, 43% { transform: translate3d(0, -30px, 0); } 70% { transform: translate3d(0, -15px, 0); } 90% { transform: translate3d(0,-4px,0); } }',
      spin: '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }',
      ping: '@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }',
      fade: '@keyframes fade { 0% { opacity: 0; } 100% { opacity: 1; } }',
      slideIn: '@keyframes slideIn { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }',
      slideOut: '@keyframes slideOut { 0% { transform: translateX(0); } 100% { transform: translateX(100%); } }'
    };

    const iterations = animationIterations === 'infinite' ? 'infinite' : animationIterations;
    const animation = `${animationType} ${animationDuration}s ${animationTimingFunction} ${animationDelay}s ${iterations} ${animationDirection} ${animationFillMode}`;
    
    return { animation, keyframes: keyframes[animationType as keyof typeof keyframes] || '' };
  };

  const generateCSS = () => {
    let css = '';
    
    switch (activeCategory) {
      case 'gradients':
        css += `background-image: ${generateGradient()};\n`;
        if (gradientBlendMode !== 'normal') {
          css += `background-blend-mode: ${gradientBlendMode};\n`;
        }
        break;
        
      case 'images':
        if (backgroundImage) {
          css += `background-image: url('${backgroundImage}');\n`;
          css += `background-size: ${backgroundSize === 'custom' ? `${customBackgroundWidth}% ${customBackgroundHeight}%` : backgroundSize};\n`;
          css += `background-position: ${backgroundPositionX}% ${backgroundPositionY}%;\n`;
          css += `background-repeat: ${backgroundRepeat};\n`;
          css += `background-attachment: ${backgroundAttachment};\n`;
          if (imageBlendMode !== 'normal') {
            css += `background-blend-mode: ${imageBlendMode};\n`;
          }
          if (imageOpacity !== 100) {
            css += `opacity: ${imageOpacity / 100};\n`;
          }
        }
        break;
        
      case 'shadows':
        const boxShadow = generateBoxShadow();
        if (boxShadow) {
          css += `box-shadow: ${boxShadow};\n`;
        }
        const textShadow = generateTextShadow();
        if (textShadow !== 'none') {
          css += `text-shadow: ${textShadow};\n`;
        }
        break;
        
      case 'borders':
        css += `border: ${borderWidth}px ${borderStyle} ${borderColor};\n`;
        if (uniformRadius) {
          css += `border-radius: ${uniformBorderRadius}px;\n`;
        } else {
          css += `border-radius: ${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px;\n`;
        }
        break;
        
      case 'animations':
        const animationData = generateAnimation();
        if (animationData.animation !== 'none') {
          css += `animation: ${animationData.animation};\n\n`;
          css += `${animationData.keyframes}\n`;
        }
        break;
        
      case 'transforms':
        const transform = generateTransform();
        if (transform !== 'none') {
          css += `transform: ${transform};\n`;
        }
        break;
        
      case 'filters':
        const filter = generateFilter();
        if (filter !== 'none') {
          css += `filter: ${filter};\n`;
        }
        if (filterOpacity !== 100) {
          css += `opacity: ${filterOpacity / 100};\n`;
        }
        break;
        
      case 'typography':
        const family = fontFamily === 'custom' ? customFontFamily : fontFamily;
        css += `font-family: ${family};\n`;
        css += `font-size: ${fontSize}px;\n`;
        css += `font-weight: ${fontWeight};\n`;
        css += `line-height: ${lineHeight};\n`;
        if (letterSpacing !== 0) {
          css += `letter-spacing: ${letterSpacing}px;\n`;
        }
        css += `text-align: ${textAlign};\n`;
        if (textTransform !== 'none') {
          css += `text-transform: ${textTransform};\n`;
        }
        if (textDecoration !== 'none') {
          css += `text-decoration: ${textDecoration};\n`;
        }
        css += `color: ${textColor};\n`;
        const textShadowTypo = generateTextShadow();
        if (textShadowTypo !== 'none') {
          css += `text-shadow: ${textShadowTypo};\n`;
        }
        break;
    }
    
    return css;
  };

  const getPreviewStyle = () => {
    const baseStyle: React.CSSProperties = {
      width: '100%',
      height: '300px',
      borderRadius: '12px',
      border: '2px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    };

    switch (activeCategory) {
      case 'gradients':
        return {
          ...baseStyle,
          backgroundImage: generateGradient(),
          backgroundBlendMode: gradientBlendMode
        };
        
      case 'images':
        return {
          ...baseStyle,
          backgroundImage: backgroundImage ? `url('${backgroundImage}')` : 'none',
          backgroundSize: backgroundSize === 'custom' ? `${customBackgroundWidth}% ${customBackgroundHeight}%` : backgroundSize,
          backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
          backgroundRepeat,
          backgroundAttachment,
          backgroundBlendMode: imageBlendMode,
          opacity: imageOpacity / 100,
          backgroundColor: '#f3f4f6'
        };
        
      case 'shadows':
        return {
          ...baseStyle,
          backgroundColor: '#ffffff',
          boxShadow: generateBoxShadow()
        };
        
      case 'borders':
        return {
          ...baseStyle,
          backgroundColor: '#ffffff',
          border: `${borderWidth}px ${borderStyle} ${borderColor}`,
          borderRadius: uniformRadius 
            ? `${uniformBorderRadius}px` 
            : `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`
        };
        
      case 'animations':
        const animationData = generateAnimation();
        return {
          ...baseStyle,
          backgroundColor: '#3b82f6',
          animation: animationData.animation !== 'none' ? animationData.animation : undefined
        };
        
      case 'transforms':
        return {
          ...baseStyle,
          backgroundColor: '#10b981',
          transform: generateTransform()
        };
        
      case 'filters':
        return {
          ...baseStyle,
          backgroundColor: '#8b5cf6',
          backgroundImage: 'url("https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&w=800")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: generateFilter(),
          opacity: filterOpacity / 100
        };
        
      case 'typography':
        const family = fontFamily === 'custom' ? customFontFamily : fontFamily;
        return {
          ...baseStyle,
          backgroundColor: '#ffffff',
          fontFamily: family,
          fontSize: `${fontSize}px`,
          fontWeight: fontWeight,
          lineHeight: lineHeight,
          letterSpacing: `${letterSpacing}px`,
          textAlign: textAlign as any,
          textTransform: textTransform as any,
          textDecoration: textDecoration as any,
          color: textColor,
          textShadow: generateTextShadow(),
          padding: '20px',
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        };
        
      default:
        return baseStyle;
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateCSS());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const resetCategory = () => {
    switch (activeCategory) {
      case 'gradients':
        setGradientType('linear');
        setLinearDirection('to right');
        setCustomAngle(45);
        setColorStops([
          { id: '1', color: '#ff6b6b', position: 0 },
          { id: '2', color: '#4ecdc4', position: 100 }
        ]);
        setRepeating(false);
        setGradientBlendMode('normal');
        break;
        
      case 'images':
        setBackgroundImage('');
        setBackgroundSize('cover');
        setCustomBackgroundWidth(100);
        setCustomBackgroundHeight(100);
        setBackgroundPositionX(50);
        setBackgroundPositionY(50);
        setBackgroundRepeat('no-repeat');
        setBackgroundAttachment('scroll');
        setImageBlendMode('normal');
        setImageOpacity(100);
        break;
        
      case 'shadows':
        setShadows([{ id: '1', x: 0, y: 4, blur: 6, spread: 0, color: '#00000040', inset: false }]);
        setTextShadowX(2);
        setTextShadowY(2);
        setTextShadowBlur(4);
        setTextShadowColor('#00000080');
        setEnableTextShadow(false);
        break;
        
      case 'borders':
        setBorderWidth(1);
        setBorderStyle('solid');
        setBorderColor('#e5e7eb');
        setUniformRadius(true);
        setUniformBorderRadius(8);
        setBorderRadiusTopLeft(8);
        setBorderRadiusTopRight(8);
        setBorderRadiusBottomLeft(8);
        setBorderRadiusBottomRight(8);
        break;
        
      case 'animations':
        setAnimationType('none');
        setAnimationDuration(1);
        setAnimationDelay(0);
        setAnimationIterations('infinite');
        setAnimationTimingFunction('ease');
        setAnimationDirection('normal');
        setAnimationFillMode('none');
        break;
        
      case 'transforms':
        setTranslateX(0);
        setTranslateY(0);
        setScaleX(1);
        setScaleY(1);
        setRotate(0);
        setSkewX(0);
        setSkewY(0);
        break;
        
      case 'filters':
        setBlur(0);
        setBrightness(100);
        setContrast(100);
        setGrayscale(0);
        setHueRotate(0);
        setSaturate(100);
        setSepia(0);
        setFilterOpacity(100);
        break;
        
      case 'typography':
        setFontFamily('Inter');
        setCustomFontFamily('');
        setFontSize(16);
        setFontWeight('400');
        setLineHeight(1.5);
        setLetterSpacing(0);
        setTextAlign('left');
        setTextTransform('none');
        setTextDecoration('none');
        setTextColor('#1f2937');
        setEnableTextShadow(false);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white text-center">
              Visual CSS Styling Studio
            </h1>
            <p className="text-purple-100 text-center mt-2">
              Complete visual CSS editor with live preview - gradients, images, shadows, borders, animations & more
            </p>
          </div>

          <div className="p-8">
            {/* Category Navigation */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all ${
                        activeCategory === category.id
                          ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                      }`}
                    >
                      <IconComponent size={18} />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <button
                  onClick={resetCategory}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white rounded-lg transition-colors"
                >
                  <RotateCcw size={16} />
                  <span>Reset {categories.find(c => c.id === activeCategory)?.name}</span>
                </button>
              </div>
              
              <button
                onClick={copyToClipboard}
                className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-all ${
                  copied
                    ? 'bg-green-600 text-white'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy CSS</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Controls Panel */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                  {categories.find(c => c.id === activeCategory)?.name} Controls
                </h2>

                {/* Gradients Controls */}
                {activeCategory === 'gradients' && (
                  <div className="space-y-6">
                    {/* Gradient Type */}
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">Gradient Type</label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['linear', 'radial', 'conic'] as GradientType[]).map((type) => (
                          <label
                            key={type}
                            className={`relative flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              gradientType === type
                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="gradientType"
                              value={type}
                              checked={gradientType === type}
                              onChange={(e) => setGradientType(e.target.value as GradientType)}
                              className="sr-only"
                            />
                            <span className="text-sm font-medium capitalize">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Linear Direction */}
                    {gradientType === 'linear' && (
                      <div className="space-y-3">
                        <label className="block text-sm font-medium text-gray-700">Direction</label>
                        <select
                          value={linearDirection}
                          onChange={(e) => setLinearDirection(e.target.value as LinearDirection)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="to right">To Right</option>
                          <option value="to left">To Left</option>
                          <option value="to bottom">To Bottom</option>
                          <option value="to top">To Top</option>
                          <option value="to bottom right">To Bottom Right</option>
                          <option value="to bottom left">To Bottom Left</option>
                          <option value="to top right">To Top Right</option>
                          <option value="to top left">To Top Left</option>
                          <option value="custom">Custom Angle</option>
                        </select>
                        {linearDirection === 'custom' && (
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Angle: {customAngle}°
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="360"
                              value={customAngle}
                              onChange={(e) => setCustomAngle(Number(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Color Stops */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700">Color Stops</label>
                        <button
                          onClick={addColorStop}
                          className="flex items-center space-x-1 px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
                        >
                          <Plus size={14} />
                          <span>Add</span>
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        {colorStops.map((stop) => (
                          <div key={stop.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <input
                              type="color"
                              value={stop.color}
                              onChange={(e) => updateColorStop(stop.id, 'color', e.target.value)}
                              className="w-10 h-10 rounded-lg border-2 border-gray-200 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={stop.color}
                              onChange={(e) => updateColorStop(stop.id, 'color', e.target.value)}
                              className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                            />
                            <div className="flex-1">
                              <label className="block text-xs text-gray-600 mb-1">
                                Position: {stop.position}%
                              </label>
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={stop.position}
                                onChange={(e) => updateColorStop(stop.id, 'position', Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                            </div>
                            {colorStops.length > 2 && (
                              <button
                                onClick={() => removeColorStop(stop.id)}
                                className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                              >
                                <Trash2 size={14} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Options */}
                    <div className="space-y-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={repeating}
                          onChange={(e) => setRepeating(e.target.checked)}
                          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="text-sm font-medium text-gray-700">Repeating Gradient</span>
                      </label>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Blend Mode</label>
                        <select
                          value={gradientBlendMode}
                          onChange={(e) => setGradientBlendMode(e.target.value as BlendMode)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          {blendModeOptions.map((mode) => (
                            <option key={mode} value={mode}>{mode}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Images Controls */}
                {activeCategory === 'images' && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">Background Image URL</label>
                      <input
                        type="url"
                        value={backgroundImage}
                        onChange={(e) => setBackgroundImage(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">Quick Presets</label>
                      <div className="grid grid-cols-2 gap-2">
                        {imagePresets.map((preset) => (
                          <button
                            key={preset.name}
                            onClick={() => setBackgroundImage(preset.url)}
                            className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            {preset.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">Background Size</label>
                      <select
                        value={backgroundSize}
                        onChange={(e) => setBackgroundSize(e.target.value as BackgroundSize)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="auto">Auto</option>
                        <option value="cover">Cover</option>
                        <option value="contain">Contain</option>
                        <option value="custom">Custom</option>
                      </select>
                      
                      {backgroundSize === 'custom' && (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Width: {customBackgroundWidth}%
                            </label>
                            <input
                              type="range"
                              min="1"
                              max="500"
                              value={customBackgroundWidth}
                              onChange={(e) => setCustomBackgroundWidth(Number(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Height: {customBackgroundHeight}%
                            </label>
                            <input
                              type="range"
                              min="1"
                              max="500"
                              value={customBackgroundHeight}
                              onChange={(e) => setCustomBackgroundHeight(Number(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">Background Position</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-xs text-gray-600">X: {backgroundPositionX}%</label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={backgroundPositionX}
                            onChange={(e) => setBackgroundPositionX(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-xs text-gray-600">Y: {backgroundPositionY}%</label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={backgroundPositionY}
                            onChange={(e) => setBackgroundPositionY(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Repeat</label>
                        <select
                          value={backgroundRepeat}
                          onChange={(e) => setBackgroundRepeat(e.target.value as BackgroundRepeat)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="no-repeat">No Repeat</option>
                          <option value="repeat">Repeat</option>
                          <option value="repeat-x">Repeat X</option>
                          <option value="repeat-y">Repeat Y</option>
                          <option value="space">Space</option>
                          <option value="round">Round</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Attachment</label>
                        <select
                          value={backgroundAttachment}
                          onChange={(e) => setBackgroundAttachment(e.target.value as BackgroundAttachment)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="scroll">Scroll</option>
                          <option value="fixed">Fixed</option>
                          <option value="local">Local</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Blend Mode</label>
                        <select
                          value={imageBlendMode}
                          onChange={(e) => setImageBlendMode(e.target.value as BlendMode)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          {blendModeOptions.map((mode) => (
                            <option key={mode} value={mode}>{mode}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Opacity: {imageOpacity}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={imageOpacity}
                          onChange={(e) => setImageOpacity(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Shadows Controls */}
                {activeCategory === 'shadows' && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700">Box Shadows</label>
                        <button
                          onClick={addShadow}
                          className="flex items-center space-x-1 px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
                        >
                          <Plus size={14} />
                          <span>Add</span>
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        {shadows.map((shadow) => (
                          <div key={shadow.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
                            <div className="flex items-center justify-between">
                              <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={shadow.inset}
                                  onChange={(e) => updateShadow(shadow.id, 'inset', e.target.checked)}
                                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                />
                                <span className="text-sm font-medium text-gray-700">Inset</span>
                              </label>
                              {shadows.length > 1 && (
                                <button
                                  onClick={() => removeShadow(shadow.id)}
                                  className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                                >
                                  <Trash2 size={14} />
                                </button>
                              )}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                              <div className="space-y-2">
                                <label className="block text-xs text-gray-600">X: {shadow.x}px</label>
                                <input
                                  type="range"
                                  min="-50"
                                  max="50"
                                  value={shadow.x}
                                  onChange={(e) => updateShadow(shadow.id, 'x', Number(e.target.value))}
                                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="block text-xs text-gray-600">Y: {shadow.y}px</label>
                                <input
                                  type="range"
                                  min="-50"
                                  max="50"
                                  value={shadow.y}
                                  onChange={(e) => updateShadow(shadow.id, 'y', Number(e.target.value))}
                                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="block text-xs text-gray-600">Blur: {shadow.blur}px</label>
                                <input
                                  type="range"
                                  min="0"
                                  max="100"
                                  value={shadow.blur}
                                  onChange={(e) => updateShadow(shadow.id, 'blur', Number(e.target.value))}
                                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="block text-xs text-gray-600">Spread: {shadow.spread}px</label>
                                <input
                                  type="range"
                                  min="-50"
                                  max="50"
                                  value={shadow.spread}
                                  onChange={(e) => updateShadow(shadow.id, 'spread', Number(e.target.value))}
                                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <input
                                type="color"
                                value={shadow.color.slice(0, 7)}
                                onChange={(e) => updateShadow(shadow.id, 'color', e.target.value + shadow.color.slice(7))}
                                className="w-10 h-10 rounded-lg border-2 border-gray-200 cursor-pointer"
                              />
                              <input
                                type="text"
                                value={shadow.color}
                                onChange={(e) => updateShadow(shadow.id, 'color', e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={enableTextShadow}
                          onChange={(e) => setEnableTextShadow(e.target.checked)}
                          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="text-sm font-medium text-gray-700">Enable Text Shadow</span>
                      </label>
                      
                      {enableTextShadow && (
                        <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-2">
                              <label className="block text-xs text-gray-600">X: {textShadowX}px</label>
                              <input
                                type="range"
                                min="-20"
                                max="20"
                                value={textShadowX}
                                onChange={(e) => setTextShadowX(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-xs text-gray-600">Y: {textShadowY}px</label>
                              <input
                                type="range"
                                min="-20"
                                max="20"
                                value={textShadowY}
                                onChange={(e) => setTextShadowY(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-xs text-gray-600">Blur: {textShadowBlur}px</label>
                              <input
                                type="range"
                                min="0"
                                max="20"
                                value={textShadowBlur}
                                onChange={(e) => setTextShadowBlur(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <input
                              type="color"
                              value={textShadowColor.slice(0, 7)}
                              onChange={(e) => setTextShadowColor(e.target.value + textShadowColor.slice(7))}
                              className="w-10 h-10 rounded-lg border-2 border-gray-200 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={textShadowColor}
                              onChange={(e) => setTextShadowColor(e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Borders Controls */}
                {activeCategory === 'borders' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Width: {borderWidth}px
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={borderWidth}
                          onChange={(e) => setBorderWidth(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Style</label>
                        <select
                          value={borderStyle}
                          onChange={(e) => setBorderStyle(e.target.value as BorderStyle)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="none">None</option>
                          <option value="solid">Solid</option>
                          <option value="dashed">Dashed</option>
                          <option value="dotted">Dotted</option>
                          <option value="double">Double</option>
                          <option value="groove">Groove</option>
                          <option value="ridge">Ridge</option>
                          <option value="inset">Inset</option>
                          <option value="outset">Outset</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Color</label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="color"
                            value={borderColor}
                            onChange={(e) => setBorderColor(e.target.value)}
                            className="w-10 h-10 rounded-lg border-2 border-gray-200 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={borderColor}
                            onChange={(e) => setBorderColor(e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={uniformRadius}
                          onChange={(e) => setUniformRadius(e.target.checked)}
                          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="text-sm font-medium text-gray-700">Uniform Border Radius</span>
                      </label>
                      
                      {uniformRadius ? (
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Radius: {uniformBorderRadius}px
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={uniformBorderRadius}
                            onChange={(e) => {
                              const value = Number(e.target.value);
                              setUniformBorderRadius(value);
                              setBorderRadiusTopLeft(value);
                              setBorderRadiusTopRight(value);
                              setBorderRadiusBottomLeft(value);
                              setBorderRadiusBottomRight(value);
                            }}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Top Left: {borderRadiusTopLeft}px
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={borderRadiusTopLeft}
                              onChange={(e) => setBorderRadiusTopLeft(Number(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Top Right: {borderRadiusTopRight}px
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={borderRadiusTopRight}
                              onChange={(e) => setBorderRadiusTopRight(Number(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Bottom Left: {borderRadiusBottomLeft}px
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={borderRadiusBottomLeft}
                              onChange={(e) => setBorderRadiusBottomLeft(Number(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Bottom Right: {borderRadiusBottomRight}px
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={borderRadiusBottomRight}
                              onChange={(e) => setBorderRadiusBottomRight(Number(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Animations Controls */}
                {activeCategory === 'animations' && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">Animation Type</label>
                      <select
                        value={animationType}
                        onChange={(e) => setAnimationType(e.target.value as AnimationType)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="none">None</option>
                        <option value="pulse">Pulse</option>
                        <option value="bounce">Bounce</option>
                        <option value="spin">Spin</option>
                        <option value="ping">Ping</option>
                        <option value="fade">Fade</option>
                        <option value="slideIn">Slide In</option>
                        <option value="slideOut">Slide Out</option>
                      </select>
                    </div>

                    {animationType !== 'none' && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Duration: {animationDuration}s
                            </label>
                            <input
                              type="range"
                              min="0.1"
                              max="10"
                              step="0.1"
                              value={animationDuration}
                              onChange={(e) => setAnimationDuration(Number(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Delay: {animationDelay}s
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="5"
                              step="0.1"
                              value={animationDelay}
                              onChange={(e) => setAnimationDelay(Number(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Timing Function</label>
                            <select
                              value={animationTimingFunction}
                              onChange={(e) => setAnimationTimingFunction(e.target.value as TimingFunction)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                              <option value="linear">Linear</option>
                              <option value="ease">Ease</option>
                              <option value="ease-in">Ease In</option>
                              <option value="ease-out">Ease Out</option>
                              <option value="ease-in-out">Ease In Out</option>
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Direction</label>
                            <select
                              value={animationDirection}
                              onChange={(e) => setAnimationDirection(e.target.value as AnimationDirection)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                              <option value="normal">Normal</option>
                              <option value="reverse">Reverse</option>
                              <option value="alternate">Alternate</option>
                              <option value="alternate-reverse">Alternate Reverse</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="block text-sm font-medium text-gray-700">Iterations</label>
                          <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="iterations"
                                value="infinite"
                                checked={animationIterations === 'infinite'}
                                onChange={(e) => setAnimationIterations(e.target.value)}
                                className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                              />
                              <span className="text-sm">Infinite</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="iterations"
                                value="1"
                                checked={animationIterations === '1'}
                                onChange={(e) => setAnimationIterations(e.target.value)}
                                className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                              />
                              <span className="text-sm">Once</span>
                            </label>
                            <input
                              type="number"
                              min="1"
                              max="100"
                              value={animationIterations === 'infinite' ? 1 : animationIterations}
                              onChange={(e) => setAnimationIterations(e.target.value)}
                              className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Transforms Controls */}
                {activeCategory === 'transforms' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Translate</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            X: {translateX}px
                          </label>
                          <input
                            type="range"
                            min="-200"
                            max="200"
                            value={translateX}
                            onChange={(e) => setTranslateX(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Y: {translateY}px
                          </label>
                          <input
                            type="range"
                            min="-200"
                            max="200"
                            value={translateY}
                            onChange={(e) => setTranslateY(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Scale</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            X: {scaleX}
                          </label>
                          <input
                            type="range"
                            min="0.1"
                            max="3"
                            step="0.1"
                            value={scaleX}
                            onChange={(e) => setScaleX(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Y: {scaleY}
                          </label>
                          <input
                            type="range"
                            min="0.1"
                            max="3"
                            step="0.1"
                            value={scaleY}
                            onChange={(e) => setScaleY(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Rotate</h3>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Angle: {rotate}°
                        </label>
                        <input
                          type="range"
                          min="-360"
                          max="360"
                          value={rotate}
                          onChange={(e) => setRotate(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Skew</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            X: {skewX}°
                          </label>
                          <input
                            type="range"
                            min="-45"
                            max="45"
                            value={skewX}
                            onChange={(e) => setSkewX(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Y: {skewY}°
                          </label>
                          <input
                            type="range"
                            min="-45"
                            max="45"
                            value={skewY}
                            onChange={(e) => setSkewY(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Filters Controls */}
                {activeCategory === 'filters' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Blur: {blur}px
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={blur}
                          onChange={(e) => setBlur(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Brightness: {brightness}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={brightness}
                          onChange={(e) => setBrightness(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Contrast: {contrast}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={contrast}
                          onChange={(e) => setContrast(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Grayscale: {grayscale}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={grayscale}
                          onChange={(e) => setGrayscale(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Hue Rotate: {hueRotate}°
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="360"
                          value={hueRotate}
                          onChange={(e) => setHueRotate(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Saturate: {saturate}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={saturate}
                          onChange={(e) => setSaturate(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Sepia: {sepia}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sepia}
                          onChange={(e) => setSepia(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Opacity: {filterOpacity}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={filterOpacity}
                          onChange={(e) => setFilterOpacity(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Typography Controls */}
                {activeCategory === 'typography' && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">Preview Text</label>
                      <textarea
                        value={previewText}
                        onChange={(e) => setPreviewText(e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Font Family</label>
                        <select
                          value={fontFamily}
                          onChange={(e) => setFontFamily(e.target.value as FontFamily)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="Inter">Inter</option>
                          <option value="Arial">Arial</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Times">Times</option>
                          <option value="Courier">Courier</option>
                          <option value="Helvetica">Helvetica</option>
                          <option value="Verdana">Verdana</option>
                          <option value="custom">Custom</option>
                        </select>
                        {fontFamily === 'custom' && (
                          <input
                            type="text"
                            value={customFontFamily}
                            onChange={(e) => setCustomFontFamily(e.target.value)}
                            placeholder="Enter font family"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Font Weight</label>
                        <select
                          value={fontWeight}
                          onChange={(e) => setFontWeight(e.target.value as FontWeight)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="100">100 - Thin</option>
                          <option value="200">200 - Extra Light</option>
                          <option value="300">300 - Light</option>
                          <option value="400">400 - Normal</option>
                          <option value="500">500 - Medium</option>
                          <option value="600">600 - Semi Bold</option>
                          <option value="700">700 - Bold</option>
                          <option value="800">800 - Extra Bold</option>
                          <option value="900">900 - Black</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Font Size: {fontSize}px
                        </label>
                        <input
                          type="range"
                          min="8"
                          max="72"
                          value={fontSize}
                          onChange={(e) => setFontSize(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Line Height: {lineHeight}
                        </label>
                        <input
                          type="range"
                          min="0.8"
                          max="3"
                          step="0.1"
                          value={lineHeight}
                          onChange={(e) => setLineHeight(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Letter Spacing: {letterSpacing}px
                      </label>
                      <input
                        type="range"
                        min="-5"
                        max="10"
                        step="0.5"
                        value={letterSpacing}
                        onChange={(e) => setLetterSpacing(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Text Align</label>
                        <select
                          value={textAlign}
                          onChange={(e) => setTextAlign(e.target.value as TextAlign)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="left">Left</option>
                          <option value="center">Center</option>
                          <option value="right">Right</option>
                          <option value="justify">Justify</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Transform</label>
                        <select
                          value={textTransform}
                          onChange={(e) => setTextTransform(e.target.value as TextTransform)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="none">None</option>
                          <option value="uppercase">Uppercase</option>
                          <option value="lowercase">Lowercase</option>
                          <option value="capitalize">Capitalize</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Decoration</label>
                        <select
                          value={textDecoration}
                          onChange={(e) => setTextDecoration(e.target.value as TextDecoration)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="none">None</option>
                          <option value="underline">Underline</option>
                          <option value="overline">Overline</option>
                          <option value="line-through">Line Through</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Text Color</label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="color"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="w-10 h-10 rounded-lg border-2 border-gray-200 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={enableTextShadow}
                          onChange={(e) => setEnableTextShadow(e.target.checked)}
                          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="text-sm font-medium text-gray-700">Enable Text Shadow</span>
                      </label>
                      
                      {enableTextShadow && (
                        <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-2">
                              <label className="block text-xs text-gray-600">X: {textShadowX}px</label>
                              <input
                                type="range"
                                min="-20"
                                max="20"
                                value={textShadowX}
                                onChange={(e) => setTextShadowX(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-xs text-gray-600">Y: {textShadowY}px</label>
                              <input
                                type="range"
                                min="-20"
                                max="20"
                                value={textShadowY}
                                onChange={(e) => setTextShadowY(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-xs text-gray-600">Blur: {textShadowBlur}px</label>
                              <input
                                type="range"
                                min="0"
                                max="20"
                                value={textShadowBlur}
                                onChange={(e) => setTextShadowBlur(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <input
                              type="color"
                              value={textShadowColor.slice(0, 7)}
                              onChange={(e) => setTextShadowColor(e.target.value + textShadowColor.slice(7))}
                              className="w-10 h-10 rounded-lg border-2 border-gray-200 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={textShadowColor}
                              onChange={(e) => setTextShadowColor(e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Preview Panel */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                  Live Preview
                </h2>
                
                <div style={getPreviewStyle()}>
                  {activeCategory === 'typography' ? (
                    <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
                      {previewText}
                    </div>
                  ) : activeCategory === 'animations' && animationType !== 'none' ? (
                    <div className="text-white font-bold text-xl">
                      Animated Element
                    </div>
                  ) : activeCategory === 'transforms' ? (
                    <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 font-medium">
                      Transformed Element
                    </div>
                  ) : activeCategory === 'shadows' ? (
                    <div className="text-gray-800 font-medium">
                      Element with Shadow
                    </div>
                  ) : activeCategory === 'borders' ? (
                    <div className="text-gray-800 font-medium">
                      Element with Border
                    </div>
                  ) : activeCategory === 'images' && !backgroundImage ? (
                    <div className="text-gray-500 text-center">
                      <Image size={48} className="mx-auto mb-2 opacity-50" />
                      <p>Add an image URL to see preview</p>
                    </div>
                  ) : null}
                </div>

                {/* CSS Code Output */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">Generated CSS</h3>
                  <div className="relative">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-64 overflow-y-auto">
                      <code>{generateCSS() || '/* No styles applied */'}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0, -30px, 0); }
          70% { transform: translate3d(0, -15px, 0); }
          90% { transform: translate3d(0,-4px,0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideIn {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        @keyframes slideOut {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default App;