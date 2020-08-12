export const addMusician = (musicianList, musician) => {
    const musician_id = musicianList.length === 0 ? 0 : musicianList.length
    console.log(musician)
    return [
        ...musicianList,
        {
            musician_id,
            name: musician,
        },
    ]
}
