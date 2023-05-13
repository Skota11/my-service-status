// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from "node-fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const status = await (await fetch('https://temp.skota11.com')).json()
  res.status(200).json({main : status.ondo})
}
