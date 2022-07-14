import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { } from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { } from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from 'Layouts';
import StyledRegister from './register.styled';

import { Search } from 'Organisms';
import { Address, IconInput, TextInput } from 'Molecules';
import { Button, Input, Select } from 'Atoms';
import Link from 'next/link';

const RegisterComponent: React.FC<any> = (props) => {
  const [name, setName] = useState<string>(''); // 이름
  const [nickname, setNickname] = useState<string>(''); // 닉네임
  const [username, setUsername] = useState<string>(''); // 아이디
  const [password, setPassword] = useState<string>(''); // 비밀번호
  const [phone, setPhone] = useState<string>(''); // 전화번호
  const [role, setRole] = useState<'student' | 'parent' | 'insider' | string>(
    'student',
  ); // 권한 (학생, 학부모, 학원 관계자)

  const [school, setSchool] = useState<string>(''); // 학교
  const [grade, setGrade] = useState<string>(''); //학년

  const [academyId, setAcademyId] = useState(); // 학원 ID
  const [address, setAddress] = useState<string>(''); // 주소
  const [zipCode, setZipCode] = useState<string>(''); // 우편번호
  const [addressDetail, setAddressDetail] = useState<string>(''); // 상세주소
  const [academy, setAcademy] = useState<string>(''); // 학원

  const [isSearch, setIsSearch] = useState<boolean>(false); // 학원 검색 유무

  const setAcademyResult = useCallback((_idx, _title, _subtitle, _dataObj) => {
    // console.log(_dataObj);
    setAcademyId(_idx);
    setAddress(_dataObj.address);
    setZipCode(_dataObj.zip);
    setAddressDetail(_dataObj.address_detail);
    setAcademy(_title);
    setIsSearch((state) => !state);
  }, []);

  const roleMap = useMemo(() => {
    return {
      student: (
        <>
          <TextInput
            text="학교"
            type="text"
            placeholder="학교"
            value={school}
            required
            onChange={(e) => {
              setSchool(e.target.value);
            }}
          />
          <span>학년</span>
          <Select
            onChange={(e) => {
              setGrade(e.target.value);
            }}
          >
            <option value="" disabled selected style={{ display: 'none' }}>
              학년 선택
            </option>
            <option value="1학년">1학년</option>
            <option value="2학년">2학년</option>
            <option value="3학년">3학년</option>
            <option value="4학년">4학년</option>
            <option value="5학년">5학년</option>
            <option value="6학년">6학년</option>
          </Select>
          {isSearch ? (
            <>
              <Button
                type="button"
                backColor="primary"
                onClick={() => {
                  setIsSearch((state) => !state);
                }}
              >
                학원 검색하기
              </Button>
              <TextInput
                text="학원"
                type="text"
                placeholder="학원"
                value={academy}
                required
                disabled
                onChange={(e) => { }}
              />
            </>
          ) : (
            <Search
              getBaseUrl="/academy/search/"
              setSearchResult={setAcademyResult}
            />
          )}
        </>
      ),
      insider: (
        <>
          {isSearch ? (
            <>
              <Button
                type="button"
                backColor="primary"
                onClick={() => {
                  setIsSearch((state) => !state);
                }}
              >
                학원 입력하기
              </Button>
              <Search
                getBaseUrl="/academy/search/"
                setSearchResult={setAcademyResult}
              />
            </>
          ) : (
            <>
              <Button
                type="button"
                backColor="primary"
                onClick={() => {
                  setIsSearch(true);
                }}
              >
                학원 검색하기
              </Button>
              <TextInput
                text="학원 이름"
                type="text"
                placeholder="학원 이름"
                value={academy}
                required
                onChange={(e) => {
                  setAcademy(e.target.value);
                }}
              />
              {address !== '' ? (
                <>
                  <TextInput
                    text="주소"
                    type="text"
                    placeholder="주소"
                    value={address}
                    required
                    disabled
                    onChange={() => { }}
                  />
                  <TextInput
                    text="우편번호"
                    type="text"
                    placeholder="우편번호"
                    value={zipCode}
                    required
                    disabled
                    onChange={() => { }}
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
                      setZipCode('');
                    }}
                  >
                    주소 변경
                  </Button>
                </>
              ) : (
                <>
                  <span>학원 주소입력</span>
                  <Address setAddress={setAddress} setZipCode={setZipCode} />
                </>
              )}
            </>
          )}
        </>
      ),
    };
  }, [address, addressDetail, isSearch, academy]);

  return (
    <>
      <Layout.Container>
        <StyledRegister>
          <section>
            <h1>회원가입</h1>
            <p>
              아래 입력란에 필수 정보를 모두 <br />
              기입하신 후 회원가입 해주세요.
            </p>
          </section>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.handleSubmit(
                name,
                nickname,
                username,
                password,
                phone,
                role,
                school,
                grade,
                address,
                zipCode,
                addressDetail,
                academy,
                academyId,
              );
            }}
          >
            <TextInput
              text="이름"
              type="text"
              placeholder="이름"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <TextInput
              text="닉네임"
              type="text"
              placeholder="닉네임"
              value={nickname}
              required
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />

            <TextInput
              text="아이디"
              type="username"
              placeholder="아이디"
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <TextInput
              text="비밀번호"
              type="password"
              placeholder="비밀번호"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <TextInput
              text="전화번호"
              type="text"
              placeholder="전화번호"
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
              <span>가입목적</span>
              <Select
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="student">학생</option>
                <option value="parent">학부모</option>
                <option value="insider">학원관계자</option>
              </Select>

              {roleMap[role]}
            </div>

            <Button backColor="primary" type="submit">
              회원가입
            </Button>

            <Link className="login" href="/auth/login">
              로그인
            </Link>
          </form>
        </StyledRegister>
      </Layout.Container>
    </>
  );
};

export default RegisterComponent;
