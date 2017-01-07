var debug = (process.env.APP_DEBUG === 'true');

function log() {
    if (!debug) return;

    console.log.apply(null, arguments);
}

module.exports = {
    log
};
