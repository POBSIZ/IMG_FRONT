import React, { useState, useCallback, useEffect } from 'react';

function useDebounce() {
  const [timer, setTimer] = useState<any>();
  return (callbackFunc: () => void, delay: number) => {
    if (timer) clearTimeout(timer);
    setTimer(setTimeout(callbackFunc, delay));
  };
}

export default useDebounce;
