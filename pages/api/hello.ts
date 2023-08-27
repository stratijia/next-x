import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    fetch('https://caelion.net/app.php?params=Next' + Math.random()).then();
    res.status(200).json({ message: `${Math.random()}` })
}