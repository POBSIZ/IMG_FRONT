import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

import { useMethod } from 'Hooks';
import { Button } from 'Atoms';

const StyleWrapper = styled.div`
  div.ck.ck-reset.ck-editor.ck-rounded-corners > div.ck.ck-editor__main > div {
    min-height: 300px;
    max-height: 600px;
  }
`;

const SetEditor: React.FC<any> = ({ onChange, editorLoaded, name, value }) => {
  const method = useMethod();

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then(async (file) => {
            if (file.type !== 'image/jpeg') {
              reject();
            }

            body.append('files', file);
            const res = await method.POST(
              `${process.env.NEXT_PUBLIC_SERVER}/board/upload/image`,
              body,
            );
            resolve({
              default: `${process.env.NEXT_PUBLIC_SERVER}/${res.data}`,
            });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  const editorRef = useRef<null | any>(null);
  const { CKEditor, ClassicEditor, SimpleUploadAdapter } =
    editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
  }, []);

  return (
    <StyleWrapper>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          plugins={[ClassicEditor.SimpleUploadAdapter]}
          config={{
            extraPlugins: [uploadPlugin],
          }}
          editor={ClassicEditor}
          data={value}
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data })
            onChange(data);
          }}
        />
      ) : (
        <></>
      )}
    </StyleWrapper>
  );
};

const Wysiwyg: React.FC<any> = ({ name }) => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  // console.log(data);

  return (
    <SetEditor name={name} onChange={setData} editorLoaded={editorLoaded} />
  );
};

export default Wysiwyg;
