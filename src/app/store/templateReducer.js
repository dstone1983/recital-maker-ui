import { createSlice } from '@reduxjs/toolkit'
import { addSong } from './helpers/currentTemplate'

const initialState = {
    background: '#fff',
    sameLine: false,
    style: {
        border: '1px solid #000000',
        color: '#000000',
    },
    headline: {
        value: 'Headline',
        isItalic: true,
        isBold: true,
        fontSize: '24px',
    },
    subHeadline: {
        isItalic: true,
        isBold: true,
        fontSize: '16px',
        value: 'Sub Headline',
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
                isDefaultTemplate: true,
                player_id: 0,
                name: 'Jon Doe',
                time: '12:00pm',
                songList: [
                    {
                        title:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                        composer: 'Lorem ipsum dolor',
                    },
                ],
            },
        ],
    ],
}

export const templateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
        change_background: (state, { payload }) => (state.background = payload),
        change_style: (state, { payload }) =>
            (state.style = {
                ...state.style,
                ...payload,
            }),
        update_headline: (state, { payload }) => {
            state.headline = {
                ...state.headline,
                ...payload,
            }
        },
        update_subHeadline: (state, { payload }) => {
            state.subHeadline = {
                ...state.subHeadline,
                ...payload,
            }
        },
        update_dateTime: (state, { payload }) =>
            (state.dateTime = {
                ...state.dateTime,
                ...payload,
            }),
        add_empty_page: state => {
            const cachedPages = [...state.pages]
            cachedPages.push([])
            state.pages = cachedPages
        },
        add_item: (state, { payload }) => {
            state.pages = addSong(
                state.pages,
                payload.pageIndex,
                payload.musician
            )
        },
        update_item: (state, { payload }) => {
            state.pages = [...state.pages].map(item => {
                return item.map((musician, index) => {
                    if (index === payload.musicianIndex) {
                        return payload.musician
                    }

                    return musician
                })
            })
        },
        delete_item: (state, { payload }) => {
            const cachedPages = [...state.pages]
            const { pageIndex, musicianIndex } = payload
            cachedPages[pageIndex].splice(musicianIndex, 1)

            state.pages = cachedPages
        },
    },
})

export const templateReducer = templateSlice.reducer
export const {
    change_background,
    change_style,
    update_headline,
    update_subHeadline,
    update_dateTime,
    add_empty_page,
    add_item,
    update_item,
    delete_item,
} = templateSlice.actions
