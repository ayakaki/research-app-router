# research-app-router

Next.js のバージョンが 13.4 に上がり、App Router が Stable 扱いとなった。App Router では、React Server Component (RSC) をフル活用できるため、RSC について抑えたく調査を行なった。

## RESEARCH CONTENTS

- RSC 記載のデータフェッチはサーバー側で行われる
- RSC の基本は、サーバー側でできる hydration(JavaScript の流し込み)はサーバー側で行なっておいて、ブラウザ側で処理するところ以外は事前にやっておこうという話
- Client Component は末端に寄せるのが Next.js によって推奨されている ※[参考](https://nextjs.org/docs/app/building-your-application/rendering#static-and-dynamic-rendering-on-the-server)
- 👆 とあるが、Clinent Component が親になれないわけではない ※[参考](https://zenn.dev/yumemi_inc/articles/next-13-app-overview#client-component-%E3%81%AF%E6%9C%AB%E7%AB%AF%E3%81%B8)
- Suspense と併せて記載するのが基本

## HOW TO USE

### ① API アプリを立ち上げる

- `cd api-app`
- `node index.js`

### ② フロントアプリを立ち上げる

- `cd research-app`
- `npm run dev` or `npm run build && npm run start`

## COMFIRM MOTION

### ブラウザの動き

![rsc-01](https://github.com/ayakaki/research-rsc/assets/65984887/5da9eb72-2bdf-4406-8a99-8c571dd88796)

### ネットワーク

![rsc_console](https://github.com/ayakaki/research-rsc/assets/65984887/2df4f27e-0f68-4041-83a2-defeeb1391d8)

## 参考記事

- AppRouter の基本：[Next.js App Router (app ディレクトリ) の逆引き辞典](https://zenn.dev/yumemi_inc/articles/next-13-app-overview)
- RSC の基本：[一言で理解する React Server Components](https://zenn.dev/uhyo/articles/react-server-components-multi-stage)
- Suspense 手法：[Next.js 13 の React Server Components(RSC) とデータフェッチ](https://zenn.dev/tfutada/articles/36ad71ab598019)
- サーバーコンポーネント利用時、エラーが出る問題：[https://zenn.dev/waarrk/articles/23732d8c4102d0](https://zenn.dev/waarrk/articles/23732d8c4102d0)
