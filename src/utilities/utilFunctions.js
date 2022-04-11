export function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

export function truncateText(text, limit) {
    const shortened = text.indexOf(' ', limit)
    if (shortened === -1) return text
    return text.substring(0, shortened)
}