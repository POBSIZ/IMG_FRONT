import React, { ReactNode, ReactElement, useEffect } from 'react';
import AosInitializer from './initializer';

export interface AnimationType {
  children: ReactElement;
  animation:
    | `fade-up`
    | `fade-down`
    | `fade-left`
    | `fade-right`
    | `fade-up-right`
    | `fade-up-left`
    | `fade-down-right`
    | `fade-down-left`
    | `zoom-in`
    | `zoom-in-up`
    | `zoom-in-down`
    | `zoom-in-left`
    | `zoom-in-right`
    | `zoom-out`
    | `zoom-out-up`
    | `zoom-out-down`
    | `zoom-out-left`
    | `zoom-out-right`
    | `slide-up`
    | `slide-down`
    | `slide-right`
    | `slide-left`
    | `flip-left`
    | `flip-right`
    | `flip-up`
    | `flip-down`;
  delay?: number;
  duration?: number;
}

const AosWrapper: React.FC<AnimationType> = (props: AnimationType) => {
  return React.cloneElement(props.children, {
    'data-aos': props.animation,
    'data-aos-delay': props.delay,
    'data-aos-duration': props.duration,
  });
};

AosWrapper.defaultProps = {
  delay: 750,
  duration: 500,
};

export default AosWrapper;
export { AosInitializer };
