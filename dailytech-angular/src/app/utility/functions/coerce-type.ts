

export function toNumber(v: unknown, fallback=0): number {
    if (v===null || v === undefined) return fallback;
    if(typeof v=== 'number') return Number.isFinite(v) ? v :fallback;
    if(typeof v==='string') {
        const s = v.trim();
        if (!s || s.toLowerCase() === 'null') return fallback;
        const n = Number(s);
        return Number.isFinite(n) ? n : fallback;
    }
    return fallback;    
}

export function toString(v: unknown, fallback=''): string {
    if (v===null || v === undefined) return fallback;
    if(typeof v=== 'string') return v;

    return String (v);
}