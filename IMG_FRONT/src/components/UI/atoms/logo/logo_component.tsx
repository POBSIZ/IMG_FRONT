import React, { useEffect, useState, useRef } from 'react'; // HOC
import Link from 'next/link';

import StyledLogo from './logo_styled';

const LogoComponent: React.FC<any> = ({ href, children }) => {
  return (
    <>
      <StyledLogo>
        <Link href={href}>{children}</Link>
      </StyledLogo>
    </>
  );
};

export default LogoComponent;
