// @ts-nocheck
var cloudscraper = require('cloudscraper');
var request = require('request');
var randomstring = require("randomstring");

randomByte = function () {
    return Math.round(Math.random() * 256);
}

export default function saveUser($username) {
    var url = $username;
    var time = 60;


    var int = setInterval(() => {

        var cookie = '';
        var useragent = '';
        cloudscraper.get(url, function (error, response) {
            if (error) {
                console.log('Error connect');
            } else {
                var parsed = JSON.parse(JSON.stringify(response));
                cookie = (parsed["request"]["headers"]["cookie"]);
                useragent = (parsed["request"]["headers"]["User-Agent"]);
            }
            // console.log(cookie + '/' + useragent)
            var rand = randomstring.generate({
                length: 10,
                charset: 'abcdefghijklmnopqstuvwxyz0123456789'
            });
            var ip = randomByte() + '.' +
                randomByte() + '.' +
                randomByte() + '.' +
                randomByte();
            const options = {
                url: url,
                headers: {
                    'User-Agent': useragent,
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                    'Upgrade-Insecure-Requests': '1',
                    'cookie': cookie,
                    'Origin': 'http://' + rand + '.com',
                    'Referrer': 'http://google.com/' + rand,
                    'X-Forwarded-For': ip
                }
            };

            request(options);
        });
    });

    setTimeout(() => clearInterval(int), time * 1000);
}