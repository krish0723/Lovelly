import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import cors from "cors";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>){
    const response = await fetch("https://us-east-1.aws.data.mongodb-api.com/app/lovelly-zzfbc/endpoint/getProducts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': "YHoJk7bkjaLXzYu6GaM2bv2DWNl4zuniGFTX926hZob3K9KsrojtaxKYrPyH7M1S"
        },
        body: JSON.stringify({})
    }).then((res) => res.text());
    res.status(200).json(response);
}
