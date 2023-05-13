import { ApiType } from '../models/apiType';

export const fetchData = async (type: string) => {
  const response = await fetch(`http://localhost:3010/${type}`);
  const apiType: ApiType = await response.json();
  return apiType;
};
