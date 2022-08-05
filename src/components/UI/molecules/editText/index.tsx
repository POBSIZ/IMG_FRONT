import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledEditText from './editText.styled';
import { Button, Input } from 'Atoms';

export interface EditTextPropsType {
  children: string;
  name?: string;
}

const EditText: React.FC<EditTextPropsType> = (props) => {
  const [text, setText] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    setText(props.children);
  }, [props.children]);

  return (
    <>
      <StyledEditText>
        {isEdit ? (
          <>
            <Input
              type="text"
              placeholder="수정"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              type="button"
              onClick={() => {
                setIsEdit((prev) => !prev);
              }}
              backColor="primary"
            >
              <FontAwesomeIcon icon={faCheck} />
            </Button>
          </>
        ) : (
          <>
            {text}
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => {
                setIsEdit((prev) => !prev);
              }}
            />
          </>
        )}
      </StyledEditText>
      <Input
        type="text"
        name={props.name}
        value={text}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default EditText;
