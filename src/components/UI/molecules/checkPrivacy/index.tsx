import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SetStateType } from 'Types';
import styled, { css } from 'styled-components';
import Layout from 'Layouts';
import { Button, Check } from 'Atoms';

export interface CheckPrivacyPropsType {
  setCheckPrivacy: SetStateType;
}

const StyledCheckPrivacy = styled.section`
  height: 220px;
  overflow-y: scroll;
  padding: 10%;
  text-align: left !important;
`;

const CheckPrivacy: React.FC<CheckPrivacyPropsType> = (props) => {
  return (
    <Layout.Content>
      <h3>개인정보 처리방침</h3>
      <Layout.Content style={{ backgroundColor: '#fff', marginBottom: '20px' }}>
        <StyledCheckPrivacy>
          <p></p>
          <p className="ls2 lh6 bs5 ts4">
            <span className="emphasis">
              {'<'} 이미지 어학원 {'>'}'img-english.com'이하 '이미지 어학원'{' '}
            </span>
            은는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
            보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
            위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>
          <p className="ls2">
            ○ 이 개인정보처리방침은 <span className="emphasis">2022</span>년
            <span className="emphasis">8</span>월{' '}
            <span className="emphasis">11</span>
            부터 적용됩니다.
          </p>
          <br />
          <p className="lh6 bs4">
            <strong>
              제1조(개인정보의 처리 목적)
              <br />
              <br />
              <span className="emphasis">
                {'<'} 이미지 어학원 {'>'}('img-english.com'이하 '이미지 어학원'){' '}
              </span>
              은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
              개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이
              변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를
              받는 등 필요한 조치를 이행할 예정입니다.
            </strong>
          </p>
          <ul className="list_indent2 mgt10">
            <p className="ls2">1. 홈페이지 회원가입 및 관리</p>
            <p className="ls2">
              회원 가입의사 확인, 회원자격 유지·관리, 서비스 부정이용 방지,
              만14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인,
              각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
            </p>
            <br />
          </ul>
          <br />
          <br />
          <p className="lh6 bs4">
            <strong>제2조(개인정보의 처리 및 보유 기간)</strong>
            <br />
            <br />①
            <span className="emphasis">
              {' '}
              {'<'} 이미지 어학원 {'>'}{' '}
            </span>
            은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
            개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서
            개인정보를 처리·보유합니다.
            <br />
            <br />② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
          </p>
          <ul className="list_indent2 mgt10">
            <li className="tt">1. 홈페이지 회원가입 및 관리</li>
            <li className="tt">
              {'<'}홈페이지 회원가입 및 관리{'>'}와 관련한 개인정보는
              수집.이용에 관한 동의일로부터{'<'}지체없이 파기{'>'}까지 위
              이용목적을 위하여 보유.이용됩니다.
            </li>
            <li>보유근거 : 회원 관리</li>
            <li>관련법령 : 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
            <li>예외사유 :</li>
          </ul>
          <br />
          <br />
          <p className="lh6 bs4">
            <strong>제3조(처리하는 개인정보의 항목) </strong>
            <br />
            <br />①{' '}
            <span className="emphasis">
              {' '}
              {'<'} 이미지 어학원 {'>'}{' '}
            </span>
            은(는) 다음의 개인정보 항목을 처리하고 있습니다.
          </p>
          <ul className="list_indent2 mgt10">
            <li className="tt">
              1{'<'} 홈페이지 회원가입 및 관리 {'>'}
            </li>
            <li>
              필수항목 : 휴대전화번호, 비밀번호, 로그인ID, 이름, 서비스 이용
              기록, 접속 로그, 쿠키
            </li>
            <li>선택항목 :</li>
          </ul>
          <br />
          <br />
          <p className="lh6 bs4">
            <strong>
              제4조(만 14세 미만 아동의 개인정보 처리에 관한 사항)
            </strong>
          </p>
          <p className="ls2">
            <br />
            <br />① 개인정보처리자명은(는) 만 14세 미만 아동에 대해 개인정보를
            수집할 때 법정대리인의 동의를 얻어 해당 서비스 수행에 필요한
            최소한의 개인정보를 수집합니다.
          </p>
          <p className="sub_p">• 필수항목 : 법정 대리인의 성명, 관계, 연락처</p>
          <p className="sub_p">
            ② 또한, 개인정보처리자명의 처리목적 관련 홍보를 위해 아동의
            개인정보를 수집할 경우에는 법정대리인으로부터 별도의 동의를
            얻습니다.
          </p>
          <p className="sub_p">
            ③ 개인정보처리자명은(는) 만 1 4세 미만 아동의 개인정보를 수집할
            때에는 아동에게 법정대리인의 성명, 연락처와 같이 최소한의 정보를
            요구할 수 있으며, 다음 중 하나의 방법으로 적법한 법정대리인이
            동의하였는지를 확인합니다.
          </p>
          <p className="sub_p">
            • 동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를
            표시하도록 하고 개인정보처리자가 그 동의 표시를 확인했음을
            법정대리인의 휴대전화 문자 메시지로 알리는 방법
          </p>
          <p className="sub_p">
            • 동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를
            표시하도록 하고 법정대리인의 신용카드·직불카드 등의 카드정보를
            제공받는 방법
          </p>
          <p className="sub_p">
            • 동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를
            표시하도록 하고 법정대리인의 휴대전화 본인인증 등을 통해 본인 여부를
            확인하는 방법
          </p>
          <p className="sub_p">
            • 동의 내용이 적힌 서면을 법정대리인에게 직접 발급하거나, 우편 또는
            팩스를 통하여 전달하고 법정대리인이 동의 내용에 대하여 서명날인 후
            제출하도록 하는 방법
          </p>
          <p className="sub_p">
            • 동의 내용이 적힌 전자우편을 발송하여 법정대리인으로부터 동의의
            의사표시가 적힌 전자우편을 전송받는 방법
          </p>
          <p className="sub_p">
            • 전화를 통하여 동의 내용을 법정대리인에게 알리고 동의를 얻거나
            인터넷주소 등 동의 내용을 확인할 수 있는 방법을 안내하고 재차 전화
            통화를 통하여 동의를 얻는 방법
          </p>
          <p className="sub_p">
            • 그 밖에 위와 준하는 방법으로 법정대리인에게 동의 내용을 알리고
            동의의 의사표시를 확인하는 방법
          </p>
          <br />
          <br />
          <p className="lh6 bs4">
            <strong>
              제5조(개인정보의 파기절차 및 파기방법)
              <span className="emphasis"></span>
            </strong>
          </p>
          <span className="emphasis">
            <p className="ls2">
              <br />① {'<'} 이미지 어학원 {'>'} 은(는) 개인정보 보유기간의 경과,
              처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당
              개인정보를 파기합니다.
              <br />
              <br />② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나
              처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를
              계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
              데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
              <br />
              1. 법령 근거 :<br />
              2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜
              <br />
              <br />③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
              <br />
              1. 파기절차
              <br />
              {'<'} 이미지 어학원 {'>'} 은(는) 파기 사유가 발생한 개인정보를
              선정하고, {'<'} 이미지 어학원 {'>'} 의 개인정보 보호책임자의
              승인을 받아 개인정보를 파기합니다.
              <br />
            </p>
            <p className="sub_p mgt10">2. 파기방법</p>
            <p className="sub_p">
              전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
              사용합니다.
            </p>
            종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
            파기합니다
            <p></p>
            <br />
            <br />
            <p className="lh6 bs4">
              <strong>
                제6조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한
                사항)
              </strong>
            </p>
            <p className="ls2">
              <br />
              <br />① 정보주체는 이미지 어학원에 대해 언제든지 개인정보
              열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
            </p>
            <p className="sub_p">
              ② 제1항에 따른 권리 행사는이미지 어학원에 대해 「개인정보 보호법」
              시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을
              통하여 하실 수 있으며 이미지 어학원은(는) 이에 대해 지체 없이
              조치하겠습니다.
            </p>
            <p className="sub_p">
              ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은
              자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리
              방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을
              제출하셔야 합니다.
            </p>
            <p className="sub_p">
              ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조
              제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수
              있습니다.
            </p>
            <p className="sub_p">
              ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
              대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
            </p>
            <p className="sub_p">
              ⑥ 이미지 어학원은(는) 정보주체 권리에 따른 열람의 요구,
              정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가
              본인이거나 정당한 대리인인지를 확인합니다.
            </p>
            <br />
            <br />
            <p className="lh6 bs4">
              <strong>
                제7조(개인정보의 안전성 확보조치에 관한 사항)
                <span className="emphasis">
                  <br />
                  <br />
                  {'<'} 이미지 어학원 {'>'}{' '}
                </span>
                은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
                있습니다.
              </strong>
            </p>
            <p className="sub_p mgt10">
              1. 정기적인 자체 감사 실시
              <br />
              개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체
              감사를 실시하고 있습니다.
              <br />
              <br />
              2. 개인정보 취급 직원의 최소화 및 교육
              <br />
              개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여
              개인정보를 관리하는 대책을 시행하고 있습니다.
              <br />
              <br />
              3. 개인정보의 암호화
              <br />
              이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
              본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화
              하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고
              있습니다.
              <br />
              <br />
              4. 접속기록의 보관 및 위변조 방지
              <br />
              개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고
              있으며,다만, 5만명 이상의 정보주체에 관하여 개인정보를 추가하거나,
              고유식별정보 또는 민감정보를 처리하는 경우에는 2년이상 보관,
              관리하고 있습니다.
              <br />
              또한, 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을
              사용하고 있습니다.
              <br />
              <br />
              5. 개인정보에 대한 접근 제한
              <br />
              개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
              부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
              조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
              접근을 통제하고 있습니다.
              <br />
              <br />
            </p>
            <br />
            <br />
            <p className="lh6 bs4">
              <strong>
                제8조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에
                관한 사항)
              </strong>
            </p>
            <p className="ls2">
              <br />
              <br />① 이미지 어학원 은(는) 이용자에게 개별적인 맞춤서비스를
              제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를
              사용합니다.
              <br />② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가
              이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC
              컴퓨터내의 하드디스크에 저장되기도 합니다.
              <br />
              가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에
              대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여
              이용자에게 최적화된 정보 제공을 위해 사용됩니다.
              <br />
              나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구{'>'}인터넷
              옵션{'>'}개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수
              있습니다.
              <br />
              다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할
              수 있습니다.
              <br />
              <br />
            </p>
            <p className="lh6 bs4">
              <strong>
                제9조(행태정보의 수집·이용·제공 및 거부 등에 관한 사항)
              </strong>
            </p>
            <p className="ls2">
              <br />
              <br />
              행태정보의 수집·이용·제공 및 거부등에 관한 사항
            </p>
            <p className="sub_p">
              {'<'}개인정보처리자명{'>'}은(는) 온라인 맞춤형 광고 등을 위한
              행태정보를 수집·이용·제공하지 않습니다.
            </p>
            <br />
            <br />
            <p className="lh6 bs4">
              <strong>
                제10조(추가적인 이용·제공 판단기준)
                <span className="emphasis"></span>
              </strong>
              <span className="emphasis">
                <br />
                <br />
                {'<'} 이미지 어학원 {'>'} 은(는) ｢개인정보 보호법｣ 제15조제3항
                및 제17조제4항에 따라 ｢개인정보 보호법 시행령｣ 제14조의2에 따른
                사항을 고려하여 정보주체의 동의 없이 개인정보를 추가적으로
                이용·제공할 수 있습니다.
                <br />
                이에 따라 {'<'} 이미지 어학원 {'>'} 가(이) 정보주체의 동의 없이
                추가적인 이용·제공을 하기 위해서 다음과 같은 사항을
                고려하였습니다.
                <br />▶ 개인정보를 추가적으로 이용·제공하려는 목적이 당초 수집
                목적과 관련성이 있는지 여부
              </span>
            </p>
            <span className="emphasis">
              <p className="sub_p"></p>
              <p className="sub_p"></p>
              <p className="sub_p">
                ▶ 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때 추가적인
                이용·제공에 대한 예측 가능성이 있는지 여부
              </p>
              <p className="sub_p"></p>
              <p className="sub_p"></p>
              <p className="sub_p">
                ▶ 개인정보의 추가적인 이용·제공이 정보주체의 이익을 부당하게
                침해하는지 여부
              </p>
              <p className="sub_p"></p>
              <p className="sub_p"></p>
              <p className="sub_p">
                ▶ 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지
                여부
              </p>
              <p className="sub_p"></p>
              <p className="sub_p"></p>
              <p className="sub_p"></p>
              <p className="sub_p"></p>
              <p className="sub_p"></p>
              <p className="sub_p">
                ※ 추가적인 이용·제공 시 고려사항에 대한 판단기준은 사업자/단체
                스스로 자율적으로 판단하여 작성·공개함
              </p>
              <br />
              <br />
              <p className="lh6 bs4">
                <strong>
                  제11조(가명정보를 처리하는 경우 가명정보 처리에 관한 사항)
                  <span className="emphasis">
                    <br />
                    <br />
                    {'<'} 이미지 어학원 {'>'} 은(는) 다음과 같은 목적으로
                    가명정보를 처리하고 있습니다.
                  </span>
                </strong>
              </p>
              <strong>
                <span className="emphasis">
                  <p className="sub_p"></p>
                  <p className="sub_p">▶ 가명정보의 처리 목적</p>
                  <p className="sub_p">- 직접작성 가능합니다.</p>
                  <p className="sub_p"></p>
                  <p className="sub_p">▶ 가명정보의 처리 및 보유기간</p>
                  <p className="sub_p">- 직접작성 가능합니다.</p>
                  <p className="sub_p"></p>
                  <p className="sub_p">
                    ▶ 가명정보의 제3자 제공에 관한 사항(해당되는 경우에만 작성)
                  </p>
                  <p className="sub_p">- 직접작성 가능합니다.</p>
                  <p className="sub_p"></p>
                  <p className="sub_p">
                    ▶ 가명정보 처리의 위탁에 관한 사항(해당되는 경우에만 작성)
                  </p>
                  <p className="sub_p">- 직접작성 가능합니다.</p>
                  <p className="sub_p"></p>
                  <p className="sub_p">▶ 가명처리하는 개인정보의 항목</p>
                  <p className="sub_p">- 직접작성 가능합니다.</p>
                  <p className="sub_p"></p>
                  <p className="sub_p">
                    ▶ 법 제28조의4(가명정보에 대한 안전조치 의무 등)에 따른
                    가명정보의 안전성 확보조치에 관한 사항
                  </p>
                  <p className="sub_p">- 직접작성 가능합니다.</p>
                  <p className="sub_p"></p>
                  <p className="sub_p"></p>
                  <p className="sub_p mgt30">
                    <strong>제12조 (개인정보 보호책임자에 관한 사항) </strong>
                  </p>
                  <p className="sub_p mgt10">
                    ① <span className="colorLightBlue">이미지 어학원</span>{' '}
                    은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                    개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을
                    위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                  </p>
                  <ul className="list_indent2 mgt10">
                    <li className="tt">▶ 개인정보 보호책임자</li>
                    <li>성명 :최성환</li>
                    <li>직책 :대표</li>
                    <li>직급 :대표</li>
                    <li>연락처 :01066898522, imgls2022@gmail.com,</li>
                  </ul>
                  <p className="sub_p">
                    ※ 개인정보 보호 담당부서로 연결됩니다.
                  </p>
                  <ul className="list_indent2 mgt10">
                    <li className="tt">▶ 개인정보 보호 담당부서</li>
                    <li>성명 :최성환</li>
                    <li>직책 :대표</li>
                    <li>직급 :대표</li>
                    <li>연락처 :01066898522, imgls2022@gmail.com,</li>
                  </ul>
                  <p className="sub_p">
                    ② 정보주체께서는 이미지 어학원 의 서비스(또는 사업)을
                    이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리,
                    피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로
                    문의하실 수 있습니다. 이미지 어학원 은(는) 정보주체의 문의에
                    대해 지체 없이 답변 및 처리해드릴 것입니다.
                  </p>
                  <p className="sub_p mgt30">
                    <strong>
                      제13조(개인정보의 열람청구를 접수·처리하는 부서)
                      <br />
                      정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람
                      청구를 아래의 부서에 할 수 있습니다.
                      <br />
                      {'<'} 이미지 어학원 {'>'}은(는) 정보주체의 개인정보
                      열람청구가 신속하게 처리되도록 노력하겠습니다.
                    </strong>
                  </p>
                  <ul className="list_indent2 mgt10">
                    <li className="tt">▶ 개인정보 열람청구 접수·처리 부서</li>
                    <li>성명 :최성환</li>
                    <li>직책 :대표</li>
                    <li>직급 :대표</li>
                    <li>연락처 :01066898522, imgls2022@gmail.com,</li>
                  </ul>
                  <br />
                  <br />
                  <p className="lh6 bs4">
                    <strong>
                      제14조(정보주체의 권익침해에 대한 구제방법)
                      <span className="emphasis"></span>
                    </strong>
                  </p>
                  <br />
                  <br />
                  정보주체는 개인정보침해로 인한 구제를 받기 위하여
                  개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터
                  등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타
                  개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기
                  바랍니다.
                  <br />
                  <br />
                  1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972
                  (www.kopico.go.kr)
                  <br />
                  2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
                  <br />
                  3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
                  <br />
                  4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
                  <br />
                  <br />
                  「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
                  정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한
                  요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여
                  권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에
                  따라 행정심판을 청구할 수 있습니다.
                  <br />
                  <br />
                  ※ 행정심판에 대해 자세한 사항은
                  중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기
                  바랍니다.
                  <br />
                  <br />
                  <p className="lh6 bs4">
                    <strong>
                      제15조(개인정보 처리방침 변경)
                      <span className="emphasis"></span>
                    </strong>
                  </p>
                  <br />
                  <p></p>
                  <p className="sub_p">
                    ① 이 개인정보처리방침은 2022년 8월 11부터 적용됩니다.
                  </p>
                  <p className="sub_p"></p>
                  <p className="sub_p"></p>
                  <p></p>
                </span>
              </strong>
            </span>
          </span>
        </StyledCheckPrivacy>
      </Layout.Content>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Check
          type="checkbox"
          id="privacy"
          scale="M"
          onChange={() => {
            props.setCheckPrivacy((state) => !state);
          }}
        />
        <label htmlFor="privacy">동의합니다.</label>
      </div>
    </Layout.Content>
  );
};

export default CheckPrivacy;
