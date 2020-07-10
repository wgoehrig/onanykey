"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function onAnyKey() {
    process.stdin.setRawMode(true);
    await new Promise((resolve) => {
        process.stdin.once("data", resolve);
        process.stdin.unref();
    });
    process.stdin.pause();
}
exports.onAnyKey = onAnyKey;
//# sourceMappingURL=index.js.map