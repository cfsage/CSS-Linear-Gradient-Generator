import { GradientPreset, ComponentTemplate, AnimationPreset, ColorPalette, TypographyScale } from '../types';

export const gradientPresets: GradientPreset[] = [
  {
    name: 'Sunset',
    type: 'linear',
    colors: [
      { id: '1', color: '#ff9a9e', position: 0 },
      { id: '2', color: '#fecfef', position: 50 },
      { id: '3', color: '#fecfef', position: 100 }
    ],
    direction: 'to bottom right'
  },
  {
    name: 'Ocean',
    type: 'linear',
    colors: [
      { id: '1', color: '#667eea', position: 0 },
      { id: '2', color: '#764ba2', position: 100 }
    ],
    direction: 'to right'
  },
  {
    name: 'Rainbow',
    type: 'linear',
    colors: [
      { id: '1', color: '#ff0000', position: 0 },
      { id: '2', color: '#ff8000', position: 16.66 },
      { id: '3', color: '#ffff00', position: 33.33 },
      { id: '4', color: '#80ff00', position: 50 },
      { id: '5', color: '#00ff80', position: 66.66 },
      { id: '6', color: '#0080ff', position: 83.33 },
      { id: '7', color: '#8000ff', position: 100 }
    ],
    direction: 'to right'
  },
  {
    name: 'Radial Burst',
    type: 'radial',
    colors: [
      { id: '1', color: '#ffeaa7', position: 0 },
      { id: '2', color: '#fab1a0', position: 50 },
      { id: '3', color: '#e17055', position: 100 }
    ],
    shape: 'circle',
    size: 'farthest-corner'
  },
  {
    name: 'Conic Wheel',
    type: 'conic',
    colors: [
      { id: '1', color: '#ff0000', position: 0 },
      { id: '2', color: '#00ff00', position: 33.33 },
      { id: '3', color: '#0000ff', position: 66.66 },
      { id: '4', color: '#ff0000', position: 100 }
    ]
  },
  {
    name: 'Midnight',
    type: 'linear',
    colors: [
      { id: '1', color: '#2c3e50', position: 0 },
      { id: '2', color: '#34495e', position: 100 }
    ],
    direction: 'to bottom'
  },
  {
    name: 'Aurora',
    type: 'linear',
    colors: [
      { id: '1', color: '#00c6ff', position: 0 },
      { id: '2', color: '#0072ff', position: 100 }
    ],
    direction: 'to top'
  },
  {
    name: 'Fire',
    type: 'radial',
    colors: [
      { id: '1', color: '#ff9a56', position: 0 },
      { id: '2', color: '#ff6b6b', position: 50 },
      { id: '3', color: '#ee5a24', position: 100 }
    ],
    shape: 'ellipse',
    size: 'farthest-corner'
  }
];

export const componentTemplates: ComponentTemplate[] = [
  {
    id: 'button-primary',
    name: 'Primary Button',
    category: 'Buttons',
    html: '<button class="btn-primary">Click Me</button>',
    css: `
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease;
    `,
    description: 'A modern gradient button with hover effects',
    tags: ['button', 'gradient', 'interactive']
  },
  {
    id: 'card-modern',
    name: 'Modern Card',
    category: 'Cards',
    html: '<div class="card"><h3>Card Title</h3><p>Card content goes here...</p></div>',
    css: `
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      backdrop-filter: blur(10px);
    `,
    description: 'A glassmorphism-style card component',
    tags: ['card', 'glassmorphism', 'modern']
  },
  {
    id: 'hero-section',
    name: 'Hero Section',
    category: 'Layout',
    html: '<section class="hero"><h1>Welcome</h1><p>Your amazing content here</p></section>',
    css: `
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 80px 20px;
      text-align: center;
      min-height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    description: 'A full-width hero section with gradient background',
    tags: ['hero', 'layout', 'gradient']
  }
];

export const animationPresets: AnimationPreset[] = [
  {
    id: 'fade-in',
    name: 'Fade In',
    keyframes: `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,
    duration: '0.5s',
    timingFunction: 'ease-in-out',
    description: 'Simple fade in animation'
  },
  {
    id: 'slide-up',
    name: 'Slide Up',
    keyframes: `
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `,
    duration: '0.6s',
    timingFunction: 'ease-out',
    description: 'Slide up with fade animation'
  },
  {
    id: 'bounce',
    name: 'Bounce',
    keyframes: `
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
        40%, 43% { transform: translate3d(0, -30px, 0); }
        70% { transform: translate3d(0, -15px, 0); }
        90% { transform: translate3d(0, -4px, 0); }
      }
    `,
    duration: '1s',
    timingFunction: 'ease-in-out',
    description: 'Bouncing animation effect'
  },
  {
    id: 'pulse',
    name: 'Pulse',
    keyframes: `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `,
    duration: '2s',
    timingFunction: 'ease-in-out',
    description: 'Gentle pulsing effect'
  }
];

export const colorPalettes: ColorPalette[] = [
  {
    id: 'modern-blues',
    name: 'Modern Blues',
    colors: ['#667eea', '#764ba2', '#4facfe', '#00f2fe', '#43e97b', '#38f9d7'],
    description: 'Cool blues and teals for modern designs'
  },
  {
    id: 'warm-sunset',
    name: 'Warm Sunset',
    colors: ['#ff9a9e', '#fecfef', '#ffecd2', '#fcb69f', '#ff8a80', '#ff7043'],
    description: 'Warm oranges and pinks inspired by sunsets'
  },
  {
    id: 'nature-greens',
    name: 'Nature Greens',
    colors: ['#56ab2f', '#a8e6cf', '#88d8a3', '#4ecdc4', '#44a08d', '#093637'],
    description: 'Fresh greens inspired by nature'
  },
  {
    id: 'royal-purples',
    name: 'Royal Purples',
    colors: ['#667eea', '#764ba2', '#9d50bb', '#6e48aa', '#8360c3', '#2ebf91'],
    description: 'Rich purples for elegant designs'
  }
];

export const typographyScales: TypographyScale[] = [
  {
    id: 'major-third',
    name: 'Major Third (1.25)',
    baseSize: 16,
    ratio: 1.25,
    sizes: {
      'xs': '0.64rem',
      'sm': '0.8rem',
      'base': '1rem',
      'lg': '1.25rem',
      'xl': '1.563rem',
      '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '3.052rem'
    }
  },
  {
    id: 'perfect-fourth',
    name: 'Perfect Fourth (1.33)',
    baseSize: 16,
    ratio: 1.33,
    sizes: {
      'xs': '0.563rem',
      'sm': '0.75rem',
      'base': '1rem',
      'lg': '1.33rem',
      'xl': '1.77rem',
      '2xl': '2.369rem',
      '3xl': '3.157rem',
      '4xl': '4.209rem'
    }
  },
  {
    id: 'golden-ratio',
    name: 'Golden Ratio (1.618)',
    baseSize: 16,
    ratio: 1.618,
    sizes: {
      'xs': '0.382rem',
      'sm': '0.618rem',
      'base': '1rem',
      'lg': '1.618rem',
      'xl': '2.618rem',
      '2xl': '4.236rem',
      '3xl': '6.854rem',
      '4xl': '11.089rem'
    }
  }
];