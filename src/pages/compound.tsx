import Head from 'next/head';
import React from 'react';
import tw, { css } from 'twin.macro';
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

const container = css`
  ${tw`mx-auto m-4 p-4 rounded bg-gray-600`}
`;

const Recharts = () => {
  const resource = 120;
  const rate = 0.04;
  const max = 10000;
  const data = [...Array(10)].map(() => {
    return compoundInterest(resource, rate, max);
  });
  return (
    <>
      <Head>
        <title>貧困可視化プロトタイプ：複利計算</title>
      </Head>
      <div css={container}>
        <main>
          <h1 tw='text-5xl text-white font-bold'>
            貧困可視化プロトタイプ：複利計算
          </h1>
          <h2 tw='text-3xl text-white'>
            東京都の生活保護被保護実人員（月平均人口千人当たり）
          </h2>
          <ResponsiveContainer width='95%' height={600}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis
                dataKey='year'
                padding={{ left: 20, right: 20 }}
                tick={{ fill: 'white' }}
              />
              <YAxis
                yAxisId={1}
                dataKey='value'
                type='number'
                tickCount={10}
                allowDecimals={false}
              />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='value'
                stroke='#387908'
                yAxisId={1}
              />
            </LineChart>
          </ResponsiveContainer>
        </main>
      </div>
    </>
  );
};

export default Recharts;
