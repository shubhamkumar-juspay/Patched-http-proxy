const HttpsProxyAgent = require("https-proxy-agent")

export class PatchedHttpsProxyAgent extends HttpsProxyAgent {
    constructor(opts) {
        super(opts);
        this.ca = opts.ca;
    }

    async callback(req, opts) {
        return super.callback(req, Object.assign(opts, { ca: this.ca }));
    }
}