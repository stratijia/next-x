import type { NextApiRequest, NextApiResponse } from 'next'
import request from 'request'

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    for(var i = 0; i < 50; i++) {
        const luanch = setInterval(() => {
            request(req.query.name as string)
        })
        setTimeout(() => clearInterval(luanch), 60 * 1000)
    }
    
    res.status(200).json({ message: `JK-${req.query.name}` })
}