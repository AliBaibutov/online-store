export function paginate(items, pageNumber, pageSize) {
    console.log(items);
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
