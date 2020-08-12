export const removeItemFromArray = (array, index, count = 1) => {
    return [...array.splice(index, count)]
}

export const addItemToArray = (array, item) => {
    return [...array, item]
}

export const addSong = (array, pageIndex, musician) => {
    const isDefault = array[pageIndex].filter(item => item.isDefaultTemplate)

    return array.map((page, index) => {
        if (index === pageIndex) {
            if (isDefault.length > 0) {
                return [musician]
            }

            return [...page, musician]
        }

        return page
    })
}
