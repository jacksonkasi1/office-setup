/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./design-system.js"
  ],
  theme: {
    extend: {
      // ===================================
      // COLOR EXTENSIONS
      // ===================================
      colors: {
        // Brand Colors
        'orange-red': '#FF4200',
        'gainsboro': '#E3E4E7',
        'eerie-black': '#222121',
        'blue-violet': '#8435F2',
        
        // Semantic Colors
        primary: {
          DEFAULT: '#FF4200',
          50: '#FFF5F2',
          100: '#FFE8E0',
          200: '#FFD1C0',
          300: '#FFB399',
          400: '#FF8A66',
          500: '#FF4200',
          600: '#E63A00',
          700: '#CC3300',
          800: '#B32B00',
          900: '#992200',
        },
        secondary: {
          DEFAULT: '#8435F2',
          50: '#F5F0FF',
          100: '#EBE0FF',
          200: '#D7C0FF',
          300: '#C399FF',
          400: '#AF66FF',
          500: '#8435F2',
          600: '#7A2FE6',
          700: '#7029CC',
          800: '#6623B3',
          900: '#5C1D99',
        },
        neutral: {
          DEFAULT: '#E3E4E7',
          50: '#F8F8F8',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        
        // Status Colors
        success: {
          DEFAULT: '#008000',
          50: '#F0FFF0',
          100: '#E0FFE0',
          200: '#C0FFC0',
          300: '#99FF99',
          400: '#66FF66',
          500: '#008000',
          600: '#007300',
          700: '#006600',
          800: '#005900',
          900: '#004C00',
        },
        warning: {
          DEFAULT: '#FFA500',
          50: '#FFF8F0',
          100: '#FFF0E0',
          200: '#FFE0C0',
          300: '#FFCC99',
          400: '#FFB366',
          500: '#FFA500',
          600: '#E69500',
          700: '#CC8500',
          800: '#B37500',
          900: '#996500',
        },
        error: {
          DEFAULT: '#FF4500',
          50: '#FFF5F2',
          100: '#FFE8E0',
          200: '#FFD1C0',
          300: '#FFB399',
          400: '#FF8A66',
          500: '#FF4500',
          600: '#E63E00',
          700: '#CC3700',
          800: '#B33000',
          900: '#992900',
        },
        info: {
          DEFAULT: '#ADD8E6',
          50: '#F0F8FA',
          100: '#E0F1F5',
          200: '#C0E3EB',
          300: '#99D1E0',
          400: '#66BBD1',
          500: '#ADD8E6',
          600: '#9CC2D0',
          700: '#8AACBA',
          800: '#7896A4',
          900: '#66808E',
        },
        
        // Priority/Status Tag Colors
        prospecting: '#8A2BE2',
        meeting: '#ADD8E6',
        negotiation: '#FFA500',
        won: '#008000',
        qualification: '#FF69B4',
        proposal: '#FF4500',
        
        // Background Colors
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8F8F8',
        'bg-tertiary': '#F5F5F5',
        'bg-sidebar': '#222121',
        'bg-overlay': 'rgba(0, 0, 0, 0.5)',
        
        // Text Colors
        'text-primary': '#222121',
        'text-secondary': '#616161',
        'text-tertiary': '#9E9E9E',
        'text-inverse': '#FFFFFF',
        'text-muted': '#BDBDBD',
        
        // Border Colors
        'border-light': '#EEEEEE',
        'border-medium': '#E0E0E0',
        'border-dark': '#BDBDBD',
      },
      
      // ===================================
      // TYPOGRAPHY EXTENSIONS
      // ===================================
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      lineHeight: {
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      
      // ===================================
      // SPACING EXTENSIONS
      // ===================================
      spacing: {
        '0-5': '0.125rem',
        '1-5': '0.375rem',
        '2-5': '0.625rem',
        '3-5': '0.875rem',
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // ===================================
      // BORDER RADIUS EXTENSIONS
      // ===================================
      borderRadius: {
        'base': '0.25rem',
        'md': '0.375rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      // ===================================
      // SHADOW EXTENSIONS
      // ===================================
      boxShadow: {
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      
      // ===================================
      // COMPONENT-SPECIFIC EXTENSIONS
      // ===================================
      height: {
        'button-sm': '2rem',
        'button-md': '2.5rem',
        'button-lg': '3rem',
        'button-xl': '3.5rem',
        'input-sm': '2rem',
        'input-md': '2.5rem',
        'input-lg': '3rem',
        'header': '4rem',
        'table-row': '3.5rem',
        'sidebar': '16rem',
        'sidebar-collapsed': '4rem',
      },
      width: {
        'sidebar': '16rem',
        'sidebar-collapsed': '4rem',
      },
      minHeight: {
        'button-sm': '2rem',
        'button-md': '2.5rem',
        'button-lg': '3rem',
        'button-xl': '3.5rem',
        'input-sm': '2rem',
        'input-md': '2.5rem',
        'input-lg': '3rem',
      },
      padding: {
        'card-sm': '1rem',
        'card-md': '1.5rem',
        'card-lg': '2rem',
        'table-cell': '1rem',
      },
      
      // ===================================
      // ANIMATION EXTENSIONS
      // ===================================
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      
      // ===================================
      // TRANSITION EXTENSIONS
      // ===================================
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      // ===================================
      // Z-INDEX EXTENSIONS
      // ===================================
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },
      
      // ===================================
      // GRID EXTENSIONS
      // ===================================
      gridTemplateColumns: {
        'sidebar-layout': 'auto 1fr',
        'sidebar-layout-collapsed': '4rem 1fr',
        'header-layout': 'auto 1fr auto',
        'card-layout': 'repeat(auto-fit, minmax(300px, 1fr))',
        'table-layout': 'auto 1fr auto auto auto auto',
      },
      gridTemplateRows: {
        'app-layout': 'auto 1fr',
        'card-layout': 'auto 1fr auto',
      },
    },
  },
  plugins: [
    // ===================================
    // CUSTOM PLUGINS
    // ===================================
    
    // Button Variants Plugin
    function({ addComponents, theme }) {
      const buttons = {
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: theme('fontWeight.medium'),
          borderRadius: theme('borderRadius.md'),
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer',
          border: 'none',
          outline: 'none',
          '&:focus': {
            outline: '2px solid',
            outlineColor: theme('colors.primary.500'),
            outlineOffset: '2px',
          },
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed',
          },
        },
        '.btn-sm': {
          height: theme('height.button-sm'),
          padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
          fontSize: theme('fontSize.sm'),
        },
        '.btn-md': {
          height: theme('height.button-md'),
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          fontSize: theme('fontSize.base'),
        },
        '.btn-lg': {
          height: theme('height.button-lg'),
          padding: `${theme('spacing.4')} ${theme('spacing.6')}`,
          fontSize: theme('fontSize.lg'),
        },
        '.btn-xl': {
          height: theme('height.button-xl'),
          padding: `${theme('spacing.5')} ${theme('spacing.8')}`,
          fontSize: theme('fontSize.xl'),
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.primary.600'),
          },
          '&:active': {
            backgroundColor: theme('colors.primary.700'),
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.white'),
          color: theme('colors.secondary.500'),
          border: `2px solid ${theme('colors.secondary.500')}`,
          '&:hover': {
            backgroundColor: theme('colors.secondary.500'),
            color: theme('colors.white'),
          },
        },
        '.btn-ghost': {
          backgroundColor: 'transparent',
          color: theme('colors.neutral.600'),
          border: `2px solid ${theme('colors.neutral.400')}`,
          '&:hover': {
            backgroundColor: theme('colors.neutral.100'),
            borderColor: theme('colors.neutral.500'),
          },
        },
        '.btn-danger': {
          backgroundColor: theme('colors.error.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.error.600'),
          },
        },
      }
      addComponents(buttons)
    },
    
    // Input Variants Plugin
    function({ addComponents, theme }) {
      const inputs = {
        '.input': {
          width: '100%',
          border: `2px solid ${theme('colors.neutral.300')}`,
          borderRadius: theme('borderRadius.md'),
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.normal'),
          transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          backgroundColor: theme('colors.white'),
          color: theme('colors.text.primary'),
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.primary.500'),
            boxShadow: `0 0 0 3px ${theme('colors.primary.100')}`,
          },
          '&:hover': {
            borderColor: theme('colors.neutral.400'),
          },
          '&:disabled': {
            backgroundColor: theme('colors.neutral.100'),
            borderColor: theme('colors.neutral.200'),
            color: theme('colors.neutral.500'),
            cursor: 'not-allowed',
          },
          '&::placeholder': {
            color: theme('colors.neutral.500'),
          },
        },
        '.input-sm': {
          height: theme('height.input-sm'),
          padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
          fontSize: theme('fontSize.sm'),
        },
        '.input-md': {
          height: theme('height.input-md'),
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          fontSize: theme('fontSize.base'),
        },
        '.input-lg': {
          height: theme('height.input-lg'),
          padding: `${theme('spacing.4')} ${theme('spacing.5')}`,
          fontSize: theme('fontSize.lg'),
        },
      }
      addComponents(inputs)
    },
    
    // Card Variants Plugin
    function({ addComponents, theme }) {
      const cards = {
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.base'),
          overflow: 'hidden',
        },
        '.card-header': {
          padding: theme('padding.card-md'),
          borderBottom: `1px solid ${theme('colors.border.light')}`,
        },
        '.card-body': {
          padding: theme('padding.card-md'),
        },
        '.card-footer': {
          padding: theme('padding.card-md'),
          borderTop: `1px solid ${theme('colors.border.light')}`,
          backgroundColor: theme('colors.bg.secondary'),
        },
      }
      addComponents(cards)
    },
    
    // Badge Variants Plugin
    function({ addComponents, theme }) {
      const badges = {
        '.badge': {
          display: 'inline-flex',
          alignItems: 'center',
          padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
          fontSize: theme('fontSize.xs'),
          fontWeight: theme('fontWeight.medium'),
          borderRadius: theme('borderRadius.full'),
          lineHeight: theme('lineHeight.tight'),
        },
        '.badge-prospecting': {
          backgroundColor: theme('colors.prospecting'),
          color: theme('colors.white'),
        },
        '.badge-meeting': {
          backgroundColor: theme('colors.meeting'),
          color: theme('colors.text.primary'),
        },
        '.badge-negotiation': {
          backgroundColor: theme('colors.negotiation'),
          color: theme('colors.white'),
        },
        '.badge-won': {
          backgroundColor: theme('colors.won'),
          color: theme('colors.white'),
        },
        '.badge-qualification': {
          backgroundColor: theme('colors.qualification'),
          color: theme('colors.white'),
        },
        '.badge-proposal': {
          backgroundColor: theme('colors.proposal'),
          color: theme('colors.white'),
        },
      }
      addComponents(badges)
    },
  ],
} 