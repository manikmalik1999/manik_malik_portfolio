import { 
    useState, 
    useEffect, 
    useRef, 
    useCallback, 
    Children,
    cloneElement,
    ReactNode,
    CSSProperties,
    memo 
  } from 'react';
  
  type AnimationType = 'fade' | 'slide' | 'scale' | 'rotate' | 'fadeSlide';
  type EasingPreset = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | string;
  
  interface ScrollEffectProps {
    type?: AnimationType;
    threshold?: number;
    staggerChildren?: number;
    className?: string;
    enterEasing?: EasingPreset;
    exitEasing?: EasingPreset;
    children: ReactNode;
    disabled?: boolean;
  }
  
  const ScrollEffect = memo(({
    type = 'fade',
    threshold = 30,
    staggerChildren = 0,
    className = '',
    enterEasing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    exitEasing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    children,
    disabled = false
  }: ScrollEffectProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const containerRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);
    const animationFrame = useRef<number>();
  
    const getAnimationStyles = useCallback((): CSSProperties => {
      const baseStyles = {
        transition: `all 0.5s ${isVisible ? enterEasing : exitEasing}`,
        willChange: 'transform, opacity'
      };
  
      switch(type) {
        case 'fadeSlide':
          return {
            ...baseStyles,
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : scrollDirection === 'down' ? '20px' : '-20px'})`
          };
        case 'scale':
          return {
            ...baseStyles,
            opacity: isVisible ? 1 : 0,
            transform: `scale(${isVisible ? 1 : 0.95})`
          };
        case 'rotate':
          return {
            ...baseStyles,
            opacity: isVisible ? 1 : 0,
            transform: `rotate(${isVisible ? 0 : scrollDirection === 'down' ? '2deg' : '-2deg'})`
          };
        default:
          return {
            ...baseStyles,
            opacity: isVisible ? 1 : 0
          };
      }
    }, [isVisible, scrollDirection, type, enterEasing, exitEasing]);
  
    const handleScroll = useCallback(() => {
      if (!containerRef.current || disabled) return;
  
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
  
      const element = containerRef.current;
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;
      const triggerAt = window.innerHeight * (threshold / 100);
  
      animationFrame.current = requestAnimationFrame(() => {
        setIsVisible(elementTop < triggerAt && elementTop + elementHeight > 0);
      });
    }, [threshold, disabled]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: threshold / 100 }
      );
  
      if (containerRef.current) observer.observe(containerRef.current);
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
        if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      };
    }, [handleScroll, threshold]);
  
    const staggeredChildren = Children.map(children, (child, index) => {
      if (!staggerChildren || !isVisible) return child;
      
      return cloneElement(child as React.ReactElement, {
        style: {
          transitionDelay: `${index * staggerChildren}s`,
          ...(child as React.ReactElement).props?.style
        }
      });
    });
  
    return (
      <div 
        ref={containerRef}
        className={className}
        style={getAnimationStyles()}
        aria-hidden={!isVisible}
        role="region"
      >
        {staggeredChildren}
      </div>
    );
  });
  
  // Animation Presets
  export const ScrollPresets = {
    FadeSlide: ({ children }: { children: ReactNode }) => (
      <ScrollEffect type="fadeSlide" enterEasing="cubic-bezier(0.4, 0, 0.2, 1)">
        {children}
      </ScrollEffect>
    ),
    ScaleUp: ({ children }: { children: ReactNode }) => (
      <ScrollEffect type="scale" threshold={50} staggerChildren={0.1}>
        {children}
      </ScrollEffect>
    ),
    SlideRotate: ({ children }: { children: ReactNode }) => (
      <ScrollEffect 
        type="rotate" 
        enterEasing="cubic-bezier(0.68, -0.55, 0.27, 1.55)"
        staggerChildren={0.15}
      >
        {children}
      </ScrollEffect>
    )
  };