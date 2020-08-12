import React from 'react'
import { Grid, IconButton, Typography } from '@material-ui/core'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    songList: {
        listStyle: 'none',
        '& p': {
            margin: 0,
            lineHeight: '1.1em',
        },
    },
})

const SongList = ({ songList, removeSongItem }) => {
    const classes = useStyles()

    return (
        <Grid item lg={8}>
            {songList.length > 0 && (
                <ul className={classes.songList}>
                    {songList.map((song, index) => {
                        return (
                            <li key={index}>
                                <Grid
                                    container
                                    justify="space-evenly"
                                    alignItems="center"
                                >
                                    <Grid item lg={8}>
                                        <Typography>
                                            <strong>{song.title}</strong>
                                        </Typography>
                                        <Typography>
                                            <em>{song.composer}</em>
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <IconButton
                                            onClick={() =>
                                                removeSongItem(index)
                                            }
                                        >
                                            <CancelOutlinedIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </li>
                        )
                    })}
                </ul>
            )}
        </Grid>
    )
}

export default SongList
