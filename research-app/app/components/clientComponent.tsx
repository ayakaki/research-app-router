'use client';

import { fetchData } from '@/app/repositories/fetchData';
import React, { useEffect, useState } from 'react';
import { ApiType } from '../models/apiType';

type Props = {
  apiData: ApiType;
};

export const ClientComponent: React.FC<Props> = (props: Props) => {
  // client component にするために設定
  const [childApiData, setChildApiData] = useState<ApiType>();

  const fetchInitialData = async () => {
    const data = await fetchData('type-b');
    setChildApiData(data);
    console.log('clientComponent->', data);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <>
      <h2>ClientComponent部分</h2>
      <p>親コンポーネント（=ServerComponent）からの受取データ</p>
      <p>　props.apiData.id: {props.apiData.id}</p>
      <p>　props.apiData.type: {props.apiData.type}</p>
      <p>子コンポーネントでの取得データ</p>
      <p>
        　childApiData.type: {childApiData === undefined ? '' : childApiData.id}
      </p>
      <p>
        　childApiData.type:{' '}
        {childApiData === undefined ? '' : childApiData.type}
      </p>
    </>
  );
};
