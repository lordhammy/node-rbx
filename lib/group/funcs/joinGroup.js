const post = require('../../util/post.js')
const cheerio = require('cheerio');


module.exports = async function (groupId) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://groups.roblox.com/v1/groups/${groupId}/users`
        post(url).then(res => {
            if (res.statusCode == 200) {
                resolve(true)
            } else reject("Please make sure your request is valid, status code: " + res.statusCode + ", status message: " + res.statusMessage);
        })
    })
    return newPromise;
}