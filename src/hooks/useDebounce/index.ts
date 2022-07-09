import React, { useState, useCallback, useEffect } from 'react';
const useDebounce = () => {
  const [timer, setTimer] = useState<any>();
  return useCallback(
    (callbackFunc: any, delay: number) => {
      if (timer) clearTimeout(timer);
      setTimer(setTimeout(callbackFunc, delay));
    },
    [timer],
  );
};
export default useDebounce;
