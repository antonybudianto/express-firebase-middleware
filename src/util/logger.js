const debug = (process.env.APP_DEBUG === 'true');

function log() {
    if (!debug) return;

    console.log(...arguments);
}

module.exports = {
    log
};
