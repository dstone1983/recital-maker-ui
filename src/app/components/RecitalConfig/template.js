export const template = {
    background: '#cccccc',
    sameLine: false,
    style: {
        border: '1px solid #000000',
        color: '#000000',
    },
    headline: {
        value: 'My Recital',
        isItalic: true,
        isBold: true,
        fontSize: '24px',
    },
    subHeadline: {
        isItalic: true,
        isBold: true,
        fontSize: '16px',
        value: 'Test Subtitle',
    },
    dateTime: {
        date: '01/01/2020',
        time: '12:00pm - 3:00pm',
        isBold: false,
        isItalic: true,
        fontSize: '16px',
    },
    pages: [
        [
            {
                id: 1,
                name: 'Dustin Stone',
                time: '12:00pm',
                songList: [
                    {
                        title:
                            'test title O wosj asdf asdfw asdfw asdf wasf wasdf wasdfasdfw asdf 1',
                        composer: 'test composer 1',
                    },
                    {
                        title: 'test title 2',
                        composer: 'test composer 2',
                    },
                    {
                        title: 'test title 3',
                        composer: 'test composer 3',
                    },
                ],
            },
        ],
    ],
    musicians: [
        {
            id: 1,
            name: 'Dustin Stone',
            time: '12:00pm',
            songList: [
                {
                    title:
                        'test title O wosj asdf asdfw asdfw asdf wasf wasdf wasdfasdfw asdf 1',
                    composer: 'test composer 1',
                },
                {
                    title: 'test title 2',
                    composer: 'test composer 2',
                },
                {
                    title: 'test title 3',
                    composer: 'test composer 3',
                },
            ],
        },
    ],
}
