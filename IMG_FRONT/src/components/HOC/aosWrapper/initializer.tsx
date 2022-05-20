import React, { ReactNode, ReactElement, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AosInitializer: React.FC<any> = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <>{props.children}</>;
};

export default AosInitializer;
