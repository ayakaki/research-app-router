'use client';

import { fetchData } from '@/app/services/fetchData';
import React, { useState } from 'react';
import { ApiType } from '../models/apiType';

type Props = {
  apiData: ApiType;
};

export const ClientComponent: React.FC<Props> = (props: Props) => {
  // client component にするために設定
  const [hoge, setHoge] = useState<string>();

  const fetchInitialData = async () => {
    const data = await fetchData('type-b');
    console.log(data);
  };

  fetchInitialData();
  return (
    <>
      <h2>ClientComponent部分</h2>
      <p>props.apiData.id: {props.apiData.id}</p>
      <p>props.apiData.type: {props.apiData.type}</p>
    </>
  );
};
