import { ApiType } from '../models/apiType';

export const fetchData = async (type: string, revalidateSpan?: number) => {
  const response = await fetch(`http://localhost:3010/${type}`, {
    next: { revalidate: revalidateSpan },
  });
  const apiType: ApiType = await response.json();
  return apiType;
};
