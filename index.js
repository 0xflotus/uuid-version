export function version(uuid) {
    return parseInt((BigInt(`0x${uuid.replace(/-/g, "")}`) >> 4n * 19n) & 0xfn);
};