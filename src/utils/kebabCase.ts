// itemClick            -> item-click
export const kebabCase = (str: string | null): string | null => {
    if (!str) return null
    if (str.length > 1 && /[A-Z]/.test(str.charAt(0))) {
        str = str.charAt(0).toLowerCase() + str.substring(1)
    }
    return str.replace(/[A-Z]/g, (i) => '-' + i.toLowerCase())
}


// focus                -> focus
// updateModelValue     -> update:modelValue
// updateStart          -> update:start
export function emitName2ListenName(emitName: string) {
    const match = emitName.match(/update([A-Z])(.*)/)
    if(match) {
        return `update:${match[1].toLowerCase()}${match[2]}`
    }
    return kebabCase(emitName)!
}