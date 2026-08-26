import React from 'react';

export interface CurvyLineProps {
  variant?: 'gold' | 'gold-bright' | 'gold-subtle' | 'navy' | 'slate' | 'white' | 'slate-dark' | 'custom';
  color?: string;
  height?: number | string;
  strokeWidth?: number;
  pattern?: 'wave' | 'gentle' | 'double' | 'accent';
  className?: string;
  style?: React.CSSProperties;
}

export const CurvyLine: React.FC<CurvyLineProps> = ({
  variant = 'gold',
  color,
  height = 12,
  strokeWidth = 2,
  pattern = 'wave',
  className = '',
  style = {},
}) => {
  const getColor = () => {
    if (color) return color;
    switch (variant) {
      case 'gold':
        return '#D99A16';
      case 'gold-bright':
        return '#F0B323';
      case 'gold-subtle':
        return 'rgba(217, 154, 22, 0.4)';
      case 'navy':
        return '#06233D';
      case 'slate':
        return '#E2E8F0';
      case 'slate-dark':
        return '#334155';
      case 'white':
        return 'rgba(255, 255, 255, 0.3)';
      default:
        return '#D99A16';
    }
  };

  const strokeColor = getColor();
  const heightPx = typeof height === 'number' ? `${height}px` : height;

  if (pattern === 'double') {
    return (
      <div className={`w-full overflow-hidden leading-none ${className}`} style={{ height: heightPx, ...style }}>
        <svg
          className="w-full h-full block"
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 6 Q 30 1, 60 6 T 120 6 T 180 6 T 240 6 T 300 6 T 360 6 T 420 6 T 480 6 T 540 6 T 600 6 T 660 6 T 720 6 T 780 6 T 840 6 T 900 6 T 960 6 T 1020 6 T 1080 6 T 1140 6 T 1200 6"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
          <path
            d="M 0 18 Q 30 23, 60 18 T 120 18 T 180 18 T 240 18 T 300 18 T 360 18 T 420 18 T 480 18 T 540 18 T 600 18 T 660 18 T 720 18 T 780 18 T 840 18 T 900 18 T 960 18 T 1020 18 T 1080 18 T 1140 18 T 1200 18"
            stroke={strokeColor}
            strokeWidth={strokeWidth * 0.75}
            strokeOpacity="0.6"
            strokeDasharray="6 4"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (pattern === 'gentle') {
    return (
      <div className={`w-full overflow-hidden leading-none ${className}`} style={{ height: heightPx, ...style }}>
        <svg
          className="w-full h-full block"
          viewBox="0 0 1200 16"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 8 Q 75 2, 150 8 T 300 8 T 450 8 T 600 8 T 750 8 T 900 8 T 1050 8 T 1200 8"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (pattern === 'accent') {
    return (
      <div className={`overflow-hidden leading-none ${className}`} style={{ height: heightPx, ...style }}>
        <svg
          className="w-full h-full block"
          viewBox="0 0 300 16"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 8 Q 37.5 2, 75 8 T 150 8 T 225 8 T 300 8"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  // Default 'wave' pattern
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} style={{ height: heightPx, ...style }}>
      <svg
        className="w-full h-full block"
        viewBox="0 0 1200 20"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 10 Q 30 2, 60 10 T 120 10 T 180 10 T 240 10 T 300 10 T 360 10 T 420 10 T 480 10 T 540 10 T 600 10 T 660 10 T 720 10 T 780 10 T 840 10 T 900 10 T 960 10 T 1020 10 T 1080 10 T 1140 10 T 1200 10"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export interface CurvyDividerProps {
  variant?: 'gold' | 'gold-bright' | 'slate' | 'slate-dark' | 'white';
  pattern?: 'wave' | 'double' | 'gentle';
  height?: number;
  strokeWidth?: number;
  className?: string;
}

export const CurvyDivider: React.FC<CurvyDividerProps> = ({
  variant = 'gold',
  pattern = 'wave',
  height = 14,
  strokeWidth = 2,
  className = '',
}) => {
  return (
    <div className={`w-full relative z-10 pointer-events-none select-none ${className}`}>
      <CurvyLine variant={variant} pattern={pattern} height={height} strokeWidth={strokeWidth} />
    </div>
  );
};

export interface WavyTransitionProps {
  topColor: string; // Tailwind class or hex color (e.g., 'fill-white', 'fill-slate-50', 'fill-navy-primary', 'fill-navy-dark')
  bottomColor: string; // Tailwind class or hex color
  strokeColor?: string;
  height?: number;
  position?: 'top' | 'bottom';
  className?: string;
}

/**
 * WavyTransition renders a filled SVG shape between two section background colors,
 * ensuring the color boundary itself is organic & wavy with zero straight horizontal cuts.
 */
export const WavyTransition: React.FC<WavyTransitionProps> = ({
  topColor = '#FFFFFF',
  bottomColor = '#F8FAFC',
  strokeColor = '#D99A16',
  height = 24,
  className = '',
}) => {
  const heightPx = typeof height === 'number' ? `${height}px` : height;

  return (
    <div className={`w-full overflow-hidden leading-none relative pointer-events-none select-none ${className}`} style={{ height: heightPx }}>
      <svg
        className="w-full h-full block"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Section Fill (from top down to wave curve) */}
        <path
          d="M 0 0 L 1200 0 L 1200 20 Q 1050 8, 900 20 Q 750 32, 600 20 Q 450 8, 300 20 Q 150 32, 0 20 Z"
          fill={topColor}
        />
        {/* Bottom Section Fill (from bottom up to wave curve) */}
        <path
          d="M 0 40 L 1200 40 L 1200 20 Q 1050 8, 900 20 Q 750 32, 600 20 Q 450 8, 300 20 Q 150 32, 0 20 Z"
          fill={bottomColor}
        />
        {/* Organic Wave Stroke Line */}
        {strokeColor && (
          <path
            d="M 0 20 Q 150 32, 300 20 Q 450 8, 600 20 Q 750 32, 900 20 Q 1050 8, 1200 20"
            fill="none"
            stroke={strokeColor}
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
};
