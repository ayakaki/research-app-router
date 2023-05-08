// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { checkString } from '@/utils/checkString';
import type { NextApiRequest, NextApiResponse } from 'next';

export type TrialData = {
  now: string;
  id: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TrialData>
) {
  const nowUTC: Date = new Date();
  const nowJST: string = new Date(nowUTC).toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
  });

  // レスポンスヘッダーにCORSを許可するオリジンを設定する
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // リクエストの'/api/trial/{id}'の{id}を取得する
  const { id } = req.query;

  if (!checkString(id)) {
    res.status(400).json({ now: nowJST, id: '' }); // 400 Bad Request
    return;
  }

  res.status(200).json({ now: nowJST, id: id });
}
