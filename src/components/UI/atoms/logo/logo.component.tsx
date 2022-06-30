import React, { useEffect, useState, useRef } from 'react'; // HOC
import Link from 'next/link';

import StyledLogo from './logo.styled';

const LogoComponent: React.FC<any> = (props) => {
  return (
    <>
      <StyledLogo>
        <Link href={props.href}>{props.children}</Link>
      </StyledLogo>
    </>
  );
};

export default LogoComponent;
