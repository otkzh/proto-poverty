import Head from 'next/head';
import React from 'react';
import tw, { css } from 'twin.macro';

const Container = css`
  ${tw`m-10 p-10 rounded bg-yellow-500`}
`;

const Otkzh: React.VFC = () => {
  return (
    <>
      <Head>
        <title>Nextでページを作る練習</title>
      </Head>
      <div css={Container}>
        <h1>Otkzh</h1>
        <p>Code for CATのおおたです</p>
      </div>
    </>
  );
};

export default Otkzh;
