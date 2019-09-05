export const importProducts = async () => {
    const res = await import('../data.json')
    return res
} 