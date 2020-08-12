const baseHeight = 841.8898 - 40 * 2 - 20 * 2 - 2

export const recitalItemSeparor = template => {
    const { headline, subHeadline, dateTime, sameLine } = template
    const headlineHeight = headline ? parseInt(headline.fontSize) + 10 : 0
    const subHeadlineHeight = subHeadline
        ? parseInt(subHeadline.fontSize) + 10
        : 0
    const dateTimeHeight = dateTime ? parseInt(dateTime.fontSize) + 25 : 0
}
