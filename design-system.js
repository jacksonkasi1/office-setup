/**
 * Design System JavaScript Utilities
 * Provides dynamic theme management and design system functionality
 */

class DesignSystem {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupAccessibilityFeatures();
        this.setupResponsiveHelpers();
    }

    /**
     * Set up event listeners for interactions
     */
    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                this.handleKeyboardNavigation(e);
            });

            // Focus management
            document.addEventListener('focusin', (e) => {
                this.handleFocusManagement(e);
            });
        });
    }


    /**
     * Handle keyboard navigation
     * @param {KeyboardEvent} e - Keyboard event
     */
    handleKeyboardNavigation(e) {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
            this.closeAllModals();
        }

        // Tab key management for focus trapping
        if (e.key === 'Tab') {
            this.handleTabNavigation(e);
        }
    }

    /**
     * Handle focus management for accessibility
     * @param {FocusEvent} e - Focus event
     */
    handleFocusManagement(e) {
        // Add focus indicators
        if (e.target.matches('button, input, select, textarea, a[href], [tabindex]')) {
            e.target.classList.add('focus-visible');
        }
    }

    /**
     * Handle tab navigation for focus trapping
     * @param {KeyboardEvent} e - Keyboard event
     */
    handleTabNavigation(e) {
        const focusableElements = this.getFocusableElements();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }

    /**
     * Get all focusable elements in the current context
     * @returns {HTMLElement[]} Array of focusable elements
     */
    getFocusableElements() {
        return Array.from(document.querySelectorAll(
            'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
        )).filter(el => !el.disabled && el.offsetParent !== null);
    }

    /**
     * Close all modals and dropdowns
     */
    closeAllModals() {
        const modals = document.querySelectorAll('[data-modal]');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });

        const dropdowns = document.querySelectorAll('[data-dropdown]');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }

    /**
     * Set up accessibility features
     */
    setupAccessibilityFeatures() {
        // Add skip link
        this.createSkipLink();
        
        // Add ARIA live regions
        this.createLiveRegions();
        
        // Set up focus indicators
        this.setupFocusIndicators();
    }

    /**
     * Create skip link for keyboard navigation
     */
    createSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    /**
     * Create ARIA live regions for dynamic content
     */
    createLiveRegions() {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
    }

    /**
     * Set up focus indicators
     */
    setupFocusIndicators() {
        const style = document.createElement('style');
        style.textContent = `
            .focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 2px;
            }
            
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Set up responsive helpers
     */
    setupResponsiveHelpers() {
        // Add responsive breakpoint classes
        this.addResponsiveClasses();
        
        // Set up resize observer for responsive behavior
        this.setupResizeObserver();
    }

    /**
     * Add responsive utility classes
     */
    addResponsiveClasses() {
        const style = document.createElement('style');
        style.textContent = `
            .responsive-container {
                width: 100%;
                max-width: var(--breakpoint-2xl);
                margin: 0 auto;
                padding: 0 var(--spacing-4);
            }
            
            @media (min-width: 640px) {
                .responsive-container {
                    padding: 0 var(--spacing-6);
                }
            }
            
            @media (min-width: 1024px) {
                .responsive-container {
                    padding: 0 var(--spacing-8);
                }
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Set up resize observer for responsive behavior
     */
    setupResizeObserver() {
        if ('ResizeObserver' in window) {
            const resizeObserver = new ResizeObserver(entries => {
                entries.forEach(entry => {
                    const element = entry.target;
                    const width = entry.contentRect.width;
                    
                    // Add responsive classes based on width
                    element.classList.remove('responsive-sm', 'responsive-md', 'responsive-lg', 'responsive-xl');
                    
                    if (width >= 1536) {
                        element.classList.add('responsive-2xl');
                    } else if (width >= 1280) {
                        element.classList.add('responsive-xl');
                    } else if (width >= 1024) {
                        element.classList.add('responsive-lg');
                    } else if (width >= 768) {
                        element.classList.add('responsive-md');
                    } else {
                        element.classList.add('responsive-sm');
                    }
                });
            });

            // Observe main container
            const mainContainer = document.querySelector('.design-system-demo');
            if (mainContainer) {
                resizeObserver.observe(mainContainer);
            }
        }
    }

    /**
     * Announce message to screen readers
     * @param {string} message - Message to announce
     */
    announce(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }


    /**
     * Check if reduced motion is preferred
     * @returns {boolean} True if reduced motion is preferred
     */
    isReducedMotionPreferred() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    /**
     * Check if high contrast is preferred
     * @returns {boolean} True if high contrast is preferred
     */
    isHighContrastPreferred() {
        return window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches;
    }
}

/**
 * Utility functions for design system components
 */
class DesignSystemUtils {
    /**
     * Debounce function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     */
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Throttle function calls
     * @param {Function} func - Function to throttle
     * @param {number} limit - Time limit in milliseconds
     * @returns {Function} Throttled function
     */
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Generate unique ID
     * @returns {string} Unique ID
     */
    static generateId() {
        return Math.random().toString(36).substr(2, 9);
    }

    /**
     * Check if element is in viewport
     * @param {HTMLElement} element - Element to check
     * @returns {boolean} True if element is in viewport
     */
    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    /**
     * Smooth scroll to element
     * @param {HTMLElement} element - Element to scroll to
     * @param {Object} options - Scroll options
     */
    static smoothScrollTo(element, options = {}) {
        const defaultOptions = {
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        };
        
        element.scrollIntoView({ ...defaultOptions, ...options });
    }

    /**
     * Format currency
     * @param {number} amount - Amount to format
     * @param {string} currency - Currency code
     * @param {string} locale - Locale
     * @returns {string} Formatted currency string
     */
    static formatCurrency(amount, currency = 'USD', locale = 'en-US') {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(amount);
    }

    /**
     * Format date
     * @param {Date|string} date - Date to format
     * @param {string} locale - Locale
     * @param {Object} options - Format options
     * @returns {string} Formatted date string
     */
    static formatDate(date, locale = 'en-US', options = {}) {
        const defaultOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        
        return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(new Date(date));
    }

    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean} True if email is valid
     */
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validate phone number format
     * @param {string} phone - Phone number to validate
     * @returns {boolean} True if phone number is valid
     */
    static isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }
}

// Initialize design system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.designSystem = new DesignSystem();
    window.designSystemUtils = DesignSystemUtils;
    
    // Add global utility functions
    window.debounce = DesignSystemUtils.debounce;
    window.throttle = DesignSystemUtils.throttle;
    window.generateId = DesignSystemUtils.generateId;
    window.isInViewport = DesignSystemUtils.isInViewport;
    window.smoothScrollTo = DesignSystemUtils.smoothScrollTo;
    window.formatCurrency = DesignSystemUtils.formatCurrency;
    window.formatDate = DesignSystemUtils.formatDate;
    window.isValidEmail = DesignSystemUtils.isValidEmail;
    window.isValidPhone = DesignSystemUtils.isValidPhone;
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DesignSystem, DesignSystemUtils };
} 