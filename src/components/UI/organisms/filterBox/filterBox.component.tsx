import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledFilterBox from './filterBox.styled';
import { FilterBoxPropsType } from '.';

import Layout from 'Layouts';
import { SelectList } from 'Molecules';
import { FormatDate } from 'Utils';

const FilterBoxComponent: React.FC<FilterBoxPropsType> = (props) => {
  const [selList, setSelList] = useState<any[]>([null, null, null]);

  useEffect(() => {
    props.getList((state) => selList);
  }, [selList]);

  const MemoD1SL = useMemo(() => {
    return (
      <SelectList
        selectList={props.list}
        name="f"
        type="radio"
        boxHeight="30vh"
        handleClick={(idx, title, subtitle, data) => {
          setSelList([{ idx, title, subtitle, data }, null, null]);
        }}
      />
    );
  }, [props.list, selList]);

  const MemoD2SL = useMemo(() => {
    return (
      <>
        <FontAwesomeIcon icon={faAngleRight} />
        <SelectList
          selectList={props.list[selList[0]?.idx]?.list?.map((item, i) => ({
            idx: i,
            subtitle: item?.data?.nickname || '',
            ...item,
          }))}
          name="s"
          type="radio"
          boxHeight="30vh"
          handleClick={(idx, title, subtitle, data) => {
            setSelList((state) => [
              state[0],
              { idx, title, subtitle, data },
              null,
            ]);
          }}
        />
      </>
    );
  }, [selList[0], props.list]);

  const MemoD3SL = useMemo(() => {
    return (
      <>
        <FontAwesomeIcon icon={faAngleRight} />
        <SelectList
          selectList={props.list[selList[0]?.idx]?.list[selList[1]?.idx]?.list
            ?.filter((item) => item)
            .map((item, i) => {
              return {
                idx: i,
                subtitle: FormatDate(item?.data?.created_at) || '',
                ...item,
              };
            })}
          name="t"
          type="radio"
          boxHeight="30vh"
          handleClick={(idx, title, subtitle, data) => {
            setSelList((state) => [
              state[0],
              state[1],
              { idx, title, subtitle, data },
            ]);
          }}
        />
      </>
    );
  }, [selList[1], props.list]);

  return (
    // <Layout.Content>
    <StyledFilterBox>
      {props.depth === 1 ? (
        MemoD1SL
      ) : props.depth === 2 ? (
        <>
          {MemoD1SL}
          {selList[0] !== null ? MemoD2SL : null}
        </>
      ) : props.depth === 3 ? (
        <>
          {MemoD1SL}
          {selList[0] !== null ? MemoD2SL : null}
          {selList[0] !== null && selList[1] !== null ? MemoD3SL : null}
        </>
      ) : (
        MemoD1SL
      )}
    </StyledFilterBox>
    // </Layout.Content>
  );
};

export default FilterBoxComponent;
