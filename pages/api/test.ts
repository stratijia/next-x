import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Record<string, any>>
) {

    fs.readdir(__dirname, (_, files) => {

        res.status(200).json({
            from: __dirname,
            items: files
        })
    })
}