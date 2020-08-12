import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { add_musician } from '../../store/musiciansReducer'
import { add_item, update_item } from '../../store/templateReducer'
import moment from 'moment'
import SongList from './SongList'

const useStyles = makeStyles({
    addMusicianForm: {
        width: '500px',
        '& h4, h5': {
            marginBottom: 0,
        },
        '& .MuiFormControl-root': {
            marginBottom: '10px',
        },
    },
    addButton: {
        marginTop: '20px',
    },
    songList: {
        listStyle: 'none',
        '& p': {
            margin: 0,
            lineHeight: '1.1em',
        },
    },
})

const AddMusicianModal = ({
    setShowModal,
    pageIndex,
    itemData,
    currentMusicianIndex,
    isEdit,
}) => {
    const { musician_list } = useSelector(state => state.musicians)
    const hasData = Object.keys(itemData).length > 0

    let musicianNameValue = ''

    if (hasData) {
        const filteredMusicianId = musician_list.filter(
            musician => musician.musician_id === itemData.player_id
        )

        if (filteredMusicianId.length > 0) {
            musicianNameValue = filteredMusicianId[0].name
        } else {
            musicianNameValue = itemData.name
        }
    }

    const dispatch = useDispatch()
    const classes = useStyles()
    const [musicianName, setMusicianName] = useState(musicianNameValue)
    const [songName, setSongName] = useState('')
    const [composerName, setComposerName] = useState('')
    const [playTime, setPlayTime] = useState(
        isEdit ? moment(itemData.time, 'h:mma').format('HH:mm') : '00:00'
    )
    const [songList, setSongList] = useState(isEdit ? itemData.songList : [])

    const handleInputOnChange = e => {
        const value = e.target.value

        switch (e.target.id) {
            case 'musician-name':
                setMusicianName(value)
                break
            case 'song-name':
                setSongName(value)
                break
            case 'composer-name':
                setComposerName(value)
                break
            default:
                break
        }
    }

    const handleAddSongItem = () => {
        setSongList([
            ...songList,
            {
                title: songName,
                composer: composerName,
            },
        ])
        setSongName('')
        setComposerName('')
    }

    const removeSongItem = index => {
        const cachedSongList = [...songList]
        cachedSongList.splice(index, 1)
        setSongList(cachedSongList)
    }

    const handlePlayTime = e => {
        setPlayTime(e.target.value)
    }

    const handleSubmit = () => {
        let player_id
        let name

        name = musicianName
        player_id = musician_list.length === 0 ? 0 : musician_list.length
        dispatch(add_musician(musicianName))

        const recitialItem = {
            pageIndex,
            musician: {
                isDefaultTemplate: false,
                player_id,
                name,
                time: moment(playTime, 'HH:mm').format('h:mma'),
                songList,
            },
        }

        if (isEdit) {
            console.log(currentMusicianIndex)
            recitialItem['musicianIndex'] = currentMusicianIndex
            dispatch(update_item(recitialItem))
        } else {
            dispatch(add_item(recitialItem))
        }

        setShowModal(false)
    }

    return (
        <div className={classes.addMusicianForm}>
            <h3>{isEdit ? 'Edit' : 'Add a'} recital entry</h3>
            <Grid container justify="flex-start">
                <Grid item lg={4}>
                    <Grid container>
                        <TextField
                            id="musician-name"
                            label="New Musician Name"
                            value={musicianName}
                            onChange={handleInputOnChange}
                        />
                        <TextField
                            id="time"
                            label="Play time"
                            type="time"
                            defaultValue={playTime}
                            onChange={handlePlayTime}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                        {musicianName && playTime && (
                            <>
                                <h4>Add Songs</h4>
                                <TextField
                                    id="song-name"
                                    label="Song Name"
                                    value={songName}
                                    onChange={handleInputOnChange}
                                />
                                <TextField
                                    id="composer-name"
                                    label="Composer Name"
                                    value={composerName}
                                    onChange={handleInputOnChange}
                                />
                                <Button
                                    disabled={!(composerName && songName)}
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleAddSongItem}
                                    className={classes.addButton}
                                >
                                    Add
                                </Button>
                            </>
                        )}
                    </Grid>
                </Grid>
                <SongList songList={songList} removeSongItem={removeSongItem} />
                {musicianName && songList.length > 0 && (
                    <Grid item lg={12}>
                        <Grid container justify="center">
                            <Button
                                onClick={handleSubmit}
                                variant="contained"
                                color="secondary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default AddMusicianModal
