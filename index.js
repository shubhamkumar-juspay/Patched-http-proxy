const httpsproxy = require("https-proxy-agent")

class PatchedHttpsProxyAgent extends httpsproxy.HttpsProxyAgent {
    constructor(opts) {
        console.log(opts);
        super(opts);
        this.ca = opts.ca;
        this.rejectUnauthorized = opts.rejectUnauthorized;
    }

    async callback(req, opts) {
        return super.callback(req, Object.assign(opts, { ca: this.ca, rejectUnauthorized: this.rejectUnauthorized }));
    }
}

module.exports = PatchedHttpsProxyAgent;
