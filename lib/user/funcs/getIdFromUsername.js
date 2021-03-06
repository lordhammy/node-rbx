const fetch = require('../../util/fetch.js')


module.exports = async function(username) {
    var newPromise = new Promise(function(resolve, reject) {
        fetch(`https://api.roblox.com/users/get-by-username?username=${username}`, {headers:{'.ROBLOSECURITY' : process.env.Cookie}}).then(async res=>{

            var json = JSON.parse(res.body);            
            var id = json.Id;
            var errorMessage = json.errorMessage;
            var message = json.message;
            if (id) {
            return resolve(id);
            } else if (errorMessage || message) {
            reject(errorMessage || message || "Failed to get user by name, make sure the user exists and that the name is correct");
            }

        })
   })
    
    return newPromise
}