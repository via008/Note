// js 隔离（Proxy）

function WindowProxy() {
    const fakeWindow = {};
    return new Proxy(window, {
        get: (target, key) => {
            if (key in fakeWindow) {
                return fakeWindow[key];
            }
            return target[key];
        },
        set: (target, key, value) => {
            fakeWindow[key] = value;
        }
    })
}

function execScript(scriptText) {
    const proxy = new WindowProxy();
    new Function(proxy, scriptText);
}

