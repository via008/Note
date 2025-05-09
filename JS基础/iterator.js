Map.prototype[Symbol.iterator] = function() {
    const map = this;
    const vals = map.entries();
    let i = 0;
    return {
        next() {
            if (i < vals.length) {
                return { value: vals[i++], done: false }
            }
            return { done: true }
        }
    }
}