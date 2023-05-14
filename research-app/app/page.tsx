import Image from 'next/image';
import { Suspense } from 'react';
import { ServerComponent } from './components/serverComponent';

export default function Home() {
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
}
