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
