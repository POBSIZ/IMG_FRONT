import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  FormEvent,
} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { AcademyCreatePropsType } from './academyCreate.types';
import StyledAcademyCreate from './academyCreate.styled';

import Layout from 'Layouts';

import { Address, IconInput, TextInput } from 'Molecules';
import { Button, Input, Select, Title } from 'Atoms';
import Link from 'next/link';

const AcademyCreateComponent: React.FC<AcademyCreatePropsType> = (props) => {
  const [name, setName] = useState<string>(''); // 학원이름
  const [presidentName, setPresidentName] = useState<string>(''); // 대표이름
  const [phone, setPhone] = useState<string>(''); // 대표번호
  const [address, setAddress] = useState<string>(''); // 주소
  const [zip, setZip] = useState<string>(''); // 우편번호
  const [addressDetail, setAddressDetail] = useState<string>(''); // 상세주소

  return (
    <Layout.Container>
      <StyledAcademyCreate>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            props.handleSubmit(
              name,
              presidentName,
              phone,
              address,
              zip,
              addressDetail,
            );
          }}
        >
          <Title>🏠 학원 생성</Title>

          <TextInput
            text="학원 상호"
            type="text"
            placeholder="학원 상호"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <TextInput
            text="대표자 이름"
            type="text"
            placeholder="대표자 이름"
            value={presidentName}
            required
            onChange={(e) => {
              setPresidentName(e.target.value);
            }}
          />

          <TextInput
            text="대표번호"
            type="text"
            placeholder="대표번호"
            value={phone}
            required
            onChange={(e) => {
              setPhone(
                e.target.value
                  .replace(/[^0-9]/g, '')
                  .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                  .replace(/(\-{1,2})$/g, ''),
              );
            }}
          />

          <div className="detail-wrapper">
            <>
              {address !== '' ? (
                <>
                  <TextInput
                    text="주소"
                    type="text"
                    placeholder="주소"
                    value={address}
                    required
                    disabled
                    onChange={() => {}}
                  />
                  <TextInput
                    text="우편번호"
                    type="text"
                    placeholder="우편번호"
                    value={zip}
                    required
                    disabled
                    onChange={() => {}}
                  />
                  <TextInput
                    text="상세주소"
                    type="text"
                    placeholder="상세주소"
                    value={addressDetail}
                    required
                    onChange={(e) => {
                      setAddressDetail(e.target.value);
                    }}
                  />
                  <Button
                    type="button"
                    backColor="primary"
                    onClick={() => {
                      setAddress('');
                      setZip('');
                    }}
                  >
                    주소 변경
                  </Button>
                </>
              ) : (
                <>
                  <span>학원 주소입력</span>
                  <Address setAddress={setAddress} setZipCode={setZip} />
                </>
              )}
            </>
          </div>

          <Button backColor="primary" type="submit">
            학원 생성
          </Button>
        </form>
      </StyledAcademyCreate>
    </Layout.Container>
  );
};

export default AcademyCreateComponent;
