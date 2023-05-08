import { TrialData } from '@/pages/api/trial/[id]';
import { myAxiosInstance } from './myAxiosInstance';

export const getTrialData = async (id: string): Promise<TrialData> => {
  const res = await myAxiosInstance.get(`/api/trial/${id}`);
  const data: TrialData = res.data;
  return data;
};
