import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
    },
}))

const Body = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={4} justify="center">
                {children}
            </Grid>
        </div>
    )
}

export default Body
