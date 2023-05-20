import { fetchData } from '@/app/repositories/fetchData';
import { ClientComponent } from './clientComponent';
import { ServerComponentChild } from './serverComponentChild';
import { ApiType } from '@/app/models/apiType';

const fetchInitialData = async () => {
  const data = await fetchData('type-a', 3);
  console.log(data);
  return data;
};

export const ServerComponent = async () => {
  const apiData: ApiType = await fetchInitialData();

  return (
    <>
      <h2>ServerComponent部分</h2>
      <p>apiData.id: {apiData.id}</p>
      <p>apiData.type: {apiData.type}</p>
      <p>apiData.now: {apiData.now}</p>
      <br />
      <ClientComponent apiData={apiData} />
      {/* @ts-expect-error Server Component */}
      <ServerComponentChild text="hoge" />
    </>
  );
};
