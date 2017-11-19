const debug = (process.env.APP_DEBUG === 'true');

export function log() {
    if (!debug) return;

    console.log(...arguments);
}
