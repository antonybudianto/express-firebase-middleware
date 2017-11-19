'use strict';

var debug = process.env.APP_DEBUG === 'true';

function log() {
    var _console;

    if (!debug) return;

    (_console = console).log.apply(_console, arguments);
}

module.exports = {
    log: log
};