import { NextPage } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { ServerComponent } from '../components/serverComponent';

const TrialPage: NextPage = () => {
  return (
    <>
      <h1>Trial Page です</h1>
      <br />
      <Suspense fallback={<>ローディング中。。</>}>
        {/* @ts-expect-error Server Component */}
        <ServerComponent />
      </Suspense>
    </>
  );
};

export default TrialPage;
