import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RecitalActions from '../RecitalActions'

const useStyles = makeStyles({
    root: {
        '&:hover .actions': {
            display: 'block',
        },
    },
    songItem: {
        marginBottom: '2%',
        paddingRight: '2%',
        '& p': {
            marginTop: 0,
            marginBottom: '2px',
            lineHeight: '1em',
        },
    },
    nameColumn: {
        height: '100%',
    },
    songTitle: {
        fontWeight: 'bold',
    },
    composer: {
        fontStyle: 'italic',
    },
    songTime: {
        '& p': {
            margin: 0,
        },
    },
})

const RecitalItem = ({ musician, pageIndex, itemIndex, handleShowModal }) => {
    const classes = useStyles()

    return (
        <Grid item lg={12} className={classes.root}>
            <Grid container>
                <Grid item lg={3}>
                    <Grid
                        container
                        justify="space-between"
                        direction="column"
                        className={classes.nameColumn}
                    >
                        <div>{musician.name}</div>
                        <RecitalActions
                            handleShowModal={handleShowModal}
                            data={musician}
                            pageIndex={pageIndex}
                            itemIndex={itemIndex}
                        />
                    </Grid>
                </Grid>
                <Grid item lg={9}>
                    <Grid container>
                        <Grid item lg={musician.time ? 10 : 12}>
                            {musician.songList.map((song, index) => {
                                return (
                                    <section
                                        key={index}
                                        className={classes.songItem}
                                    >
                                        <p className={classes.songTitle}>
                                            {song.title}
                                        </p>
                                        <p className={classes.composer}>
                                            {song.composer}
                                        </p>
                                    </section>
                                )
                            })}
                        </Grid>
                        {musician.time && (
                            <Grid item lg={2} className={classes.songTime}>
                                <p>{musician.time}</p>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default RecitalItem
