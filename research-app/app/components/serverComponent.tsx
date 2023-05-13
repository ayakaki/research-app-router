import { fetchData } from '@/app/services/fetchData';
import { ClientComponent } from './clientComponent';
import { ApiType } from '@/app/models/apiType';

const fetchInitialData = async () => {
  const data = await fetchData('type-a');
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
      <br />
      <ClientComponent apiData={apiData} />
    </>
  );
};
