import React, { useState, useCallback, useEffect } from 'react';
const useDebounce = () => {
  const [timer, setTimer] = useState<any>();
  return (callbackFunc: any, delay: number) => {
    if (timer) clearTimeout(timer);
    setTimer(setTimeout(callbackFunc, delay));
  };
};
export default useDebounce;
