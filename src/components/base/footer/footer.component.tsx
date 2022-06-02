import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledFooter from './footer.styled';

const FooterComponent: React.FC<any> = ({}) => {
  return (
    <StyledFooter className="footer">
      <div className="footer-info">
        <h3 className="footer-logo">{process.env.NEXT_PUBLIC_TITLE}</h3>
        <div className="footer-desc">
          <p>
            부산광역시 수영구 수영로 594번길 107
            <span>|</span>
            대표번호 010-1234-1234
          </p>
          <p>
            대표이사: 허상원
            <span>|</span>
            사업자등록번호: 201-81-02823
          </p>
          <div className="footer-copyright">
            ©Copyright 2021 {process.env.NEXT_PUBLIC_TITLE} All rights reserved
          </div>
        </div>
      </div>

      <div className="footer-link">
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faYoutube as IconProp} />
        </a>
        <a href="https://www.instagram.com/pobsiz" target="_blank">
          <FontAwesomeIcon icon={faInstagram as IconProp} />
        </a>
        <a href="mailto:gjehdtjr911@gmail.com">
          <FontAwesomeIcon icon={faEnvelope as IconProp} />
        </a>
      </div>
    </StyledFooter>
  );
};

export default FooterComponent;
