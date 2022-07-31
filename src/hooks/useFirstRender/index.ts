import React, { useEffect, useRef, memo } from 'react';

export const useFirstRender = (...args: any) => {
  const ref = useRef(true);
  const firstRender = ref.current;
  // console.log(args);
  // console.log('ufr: ', firstRender, '\n\n');
  ref.current = false;
  return firstRender;
};

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};
