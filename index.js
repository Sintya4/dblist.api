const fetch = require("node-fetch");
module.exports = class VOID {
  constructor(token, client) {
    this['token'] = token;
    this['client'] = client;
    return this;
  }
  server_count(message) {
  fetch(`https://dblist.ddns.net/api/auth/stats/${client.user.id}`, {
        method: 'POST',
        headers: {
        "authorization": this.token,
        "Content-Type": "application/json"
        },
        body: JSON.stringify({"server_count": this.client.guilds.cache.size}),
    })
    .then(a => {console.log("Server count posted.")}).catch(a => {console.log(a.message)});
  }
}
