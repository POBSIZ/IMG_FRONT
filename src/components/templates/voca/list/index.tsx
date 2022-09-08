import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { nanoid } from 'nanoid';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

import StyledVocaList from './vocaList.styled';

import Layout from 'Layouts';
import { Title, Move, Button, Check, CheckButton } from 'Atoms';
import { FormatDate } from 'Utils';

import { QuizItem } from 'Templates/quiz/index/quiz.styled';
import { VocaApi } from 'api';
import { pushToastAsync } from 'Actions/toastAction';

const VocaListTemplate: React.FC<any> = (props) => {
  const vocaApi = VocaApi();
  const dispatch = useDispatch();

  const [isMerge, setIsMerge] = useState<boolean>(false);
  const [mergeList, setMergeList] = useState<string[]>([]);

  const mergeVoca = async () => {
    try {
      await vocaApi.create.merge(mergeList);
      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '생성하였습니다.',
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout.Container>
        <Title style={{ margin: '20px 0' }}>단어장 목록</Title>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <Move href="/voca/create" backColor="green">
            단어장 생성
          </Move>

          {isMerge ? (
            <Button
              backColor="primary"
              onClick={() => {
                setIsMerge((prev) => !prev);
                mergeVoca();
              }}
            >
              합치기
            </Button>
          ) : (
            <Button
              backColor="primary"
              onClick={() => {
                setIsMerge((prev) => !prev);
              }}
            >
              단어장 합치기
            </Button>
          )}
        </div>
        <Layout.Content>
          <StyledVocaList>
            {props.vocaList.map((vc) => (
              <QuizItem isTry={true} key={nanoid()}>
                <Link href={`/voca/${vc.voca_id}`}>
                  <a style={{ textDecoration: 'none' }}>
                    <div>
                      <h3>{vc.name}</h3>
                      <p>{FormatDate(vc.created_at)}</p>
                    </div>
                  </a>
                </Link>
                {isMerge && (
                  <Check
                    scale="L"
                    checked={mergeList.includes(vc.voca_id)}
                    onChange={(e) => {
                      setMergeList((prev) =>
                        e.target.checked
                          ? [...prev, vc.voca_id]
                          : prev.filter((p) => p !== vc.voca_id),
                      );
                    }}
                  />
                )}
              </QuizItem>
            ))}
          </StyledVocaList>
        </Layout.Content>
      </Layout.Container>
    </>
  );
};

export default VocaListTemplate;
