// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TrialData } from '@/models/trialData';
import { checkString } from '@/utils/checkString';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TrialData>
) {
  const nowUTC: Date = new Date();
  const nowJST: string = new Date(nowUTC).toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
  });

  // レスポンスヘッダーにCORSを許可するオリジンを設定する
  res.setHeader('Access-Control-Allow-Origin', '*');

  // リクエストの'/api/trial/{id}'の{id}を取得する
  const { id } = req.query;

  if (!checkString(id)) {
    res.status(400).json({ now: nowJST, id: 'not include id' }); // 400 Bad Request
    return;
  }

  res.status(200).json({ now: nowJST, id: id });
}
