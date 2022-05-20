import React, { useState, useCallback, useEffect } from 'react';
const useThrottle = () => {
  const [timer, setTimer] = useState<any>();
  return (callbackFunc: any, delay: number) => {
    if (!timer) {
      setTimer(
        setTimeout(() => {
          setTimer(null);
          callbackFunc();
        }, delay),
      );
    }
  };
};
export default useThrottle;
