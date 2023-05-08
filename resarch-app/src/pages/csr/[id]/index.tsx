import { TrialData } from '@/models/trialData';
import { checkString } from '@/utils/checkString';
import { getTrialData } from '@/utils/getTrialData';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CSRPage: NextPage = () => {
  const [trialData, setTrialData] = useState<TrialData>({ now: '', id: '' });
  const router = useRouter();

  const getData = async () => {
    if (!checkString(router.query.id)) return;
    const data = await getTrialData(router.query.id);
    setTrialData(data);
  };

  useEffect(() => {
    getData();
  }, [router.query.id]);

  return (
    <>
      <h1>CSRページ</h1>
      <p>now: {trialData.now}</p>
      <p>id: {trialData.id}</p>
    </>
  );
};

export default CSRPage;
