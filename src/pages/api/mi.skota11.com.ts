// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from "node-fetch";
import AbortController from 'abort-controller';

const controller = new AbortController();
const timeout = setTimeout(() => {
  controller.abort();
}, 3000);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const status = await fetch('https://mi.skota11.com', {signal: controller.signal})
    .then(
        data => {
          if (data.status !==200) {
            return `${data.status} : サーバーが応答していないか、正常に動いていません。`;
          }else {
            return `${data.status} : 正常に動作しています。`
          }
            
        },
        err => {
            if (err.name === 'AbortError') {
                return "Error : サーバーが応答しませんでした。"
            }
        }
    )
    .finally(() => {
        clearTimeout(timeout);
    });
    console.log(status)
  res.status(200).json({main : status})
}
