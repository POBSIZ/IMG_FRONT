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
import {
  faPen,
  faCircleXmark,
  faDownload,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from 'Layouts';

import { Title, Button, Back } from 'Atoms';
import { EditText } from 'Molecules';
import { WordList, AddWords } from 'Organisms';
import { GetWordsByIdRes } from 'api/voca/types/get';

import StyledVocaContent, { StyledVocaEdit } from './vocaContent.styled';
import { WordEntity } from 'api/quiz/entity/word';
import { VocaWordEntity } from 'api/voca/entity/vocaWord';

const VocaContentComponent: React.FC<any> = (props) => {
  // props.content: GetWordsByIdRes;

  const [wordList, setWordList] = useState<VocaWordEntity[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(false);

  useEffect(() => {
    setWordList(props.content.word_list);
  }, [props.content.word_list]);

  const handleClick = async (_i: number | string, _vwid: string) => {
    await props.removeWord(_vwid);
    setWordList((prev) => prev.filter((p) => p !== prev[_i]));
  };

  return (
    <>
      <Layout.Container>
        <Back style={{ margin: '20px 0' }} />
        <Title style={{ margin: '20px 0' }}>
          <EditText>{props.content.name}</EditText>
        </Title>
        <Layout.Content>
          <StyledVocaContent>
            <div className="box">
              <h2>단어 목록</h2>
              <div>
                <a
                  href={`${process.env.NEXT_PUBLIC_SERVER}/voca/get/words/excel/${props.content.voca_id}`}
                >
                  <FontAwesomeIcon icon={faDownload} />
                </a>
                <Button
                  backColor="primary"
                  onClick={() => setIsEdit((prev) => !prev)}
                >
                  <>
                    {isEdit ? (
                      '완료'
                    ) : (
                      <>
                        <FontAwesomeIcon className="icon" icon={faPen} />
                        편집
                      </>
                    )}
                  </>
                </Button>
              </div>
            </div>

            <ul>
              {wordList.map((word, i) => {
                const isLabel =
                  i == 0
                    ? true
                    : wordList[i - 1]?.label === word.label
                    ? false
                    : true;

                return (
                  <li
                    key={nanoid()}
                    style={{
                      marginTop: isLabel ? '20px' : '0',
                      borderTop: isLabel ? '1px solid rgba(30,30,30,20%)' : '0',
                    }}
                  >
                    {isLabel ? <h2>{word.label}</h2> : null}
                    <p>
                      <span>
                        {isEdit && (
                          <FontAwesomeIcon
                            className="icon"
                            icon={faCircleXmark}
                            onClick={() => {
                              handleClick(i, String(word.vocaWord_id));
                            }}
                          />
                        )}{' '}
                        <FontAwesomeIcon
                          style={{ cursor: 'pointer' }}
                          icon={faPlayCircle}
                          onClick={() => {
                            props.getAudio(word.word_id.word);
                          }}
                        />{' '}
                        {word.word_id.word}
                      </span>
                      <span>{word.word_id.diacritic}</span>
                      <span>{word.word_id.meaning}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </StyledVocaContent>
        </Layout.Content>

        <div style={{ marginTop: '20px' }}>
          <div className="btns">
            {props.content.has_quiz ? (
              <Button
                style={{ marginBottom: '20px' }}
                backColor="red"
                onClick={() => {
                  props.removeQuiz();
                }}
              >
                퀴즈 삭제하기
              </Button>
            ) : (
              <Button
                style={{ marginBottom: '20px' }}
                backColor="green"
                onClick={() => {
                  props.createQuiz();
                }}
              >
                퀴즈 생성하기
              </Button>
            )}

            <Button
              style={{ marginBottom: '20px' }}
              backColor="primary"
              onClick={() => {
                setIsAdd((prev) => !prev);
              }}
            >
              {isAdd ? '닫기' : '단어 추가하기'}
            </Button>
          </div>

          {isAdd && (
            <StyledVocaEdit>
              <AddWords
                origin={props.content.origin}
                vocaId={props.content.voca_id}
                addVoca={props.addVoca}
                getWords={props.getWords}
                wordList={props.wordList}
                setList={props.setWordList}
              />
            </StyledVocaEdit>
          )}
        </div>
      </Layout.Container>
    </>
  );
};

export default VocaContentComponent;
