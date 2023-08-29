import type { NextApiRequest, NextApiResponse } from 'next'
import saveUser from '@/saveUser'

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    saveUser(String(req.query.name))
    
    setTimeout(() => {
        res.status(200).json({ message: `CUSTOM-${req.query.name}` })
    }, 60 * 1000)
}