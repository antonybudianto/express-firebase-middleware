var debug = process.env.APP_DEBUG;

function log() {
    if (!debug) return;

    console.log.apply(null, arguments);
}

module.exports = {
    log
};
