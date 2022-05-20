import React, { useEffect, useCallback, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Beforeunload } from 'react-beforeunload';

interface BlockChangePageProps {
  exitFunc: () => {} | void;
  condFunc: () => {} | void;
  children: ReactElement;
}

const BlockChangePage: React.FC<BlockChangePageProps> = (
  props: BlockChangePageProps,
) => {
  const router = useRouter();

  const exitFunc = useCallback(
    (e) => {
      router.events.emit('routeChangeError');
      const inputData = confirm('게임을 나가시겠습니까?');
      if (inputData) {
        props.exitFunc();
        return;
      } else {
        throw `routeChange aborted.`;
      }
    },
    [router],
  );

  useEffect(() => {
    props.condFunc();
    router.events.on('routeChangeStart', exitFunc);
    return () => {
      router.events.off('routeChangeStart', exitFunc);
    };
  }, []);

  return (
    <>
      <Beforeunload
        onBeforeunload={(event) => {
          event.preventDefault();
        }}
      >
        {props.children}
      </Beforeunload>
    </>
  );
};

export default BlockChangePage;
