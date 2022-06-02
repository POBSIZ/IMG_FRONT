import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import FooterComponent from './footer.component';

const Footer: React.FC<any> = (props) => {
  return (
    <>
      <FooterComponent {...props} />
    </>
  );
};

export default Footer;
