import React from 'react'
import { Grid, IconButton } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    headlineInput: {
        width: '75%',
    },
})

const HeaderInputs = ({ setInput, defaultValue, dispatchAction }) => {
    const classes = useStyles()

    return (
        <Grid container justify="center">
            <TextField
                className={classes.headlineInput}
                id="outlined-multiline-static"
                label="Headline Text"
                onChange={e => setInput(e.target.value)}
                defaultValue={defaultValue}
                variant="outlined"
            />
            <IconButton onClick={dispatchAction}>
                <DoneIcon />
            </IconButton>
            <IconButton>
                <CancelOutlinedIcon />
            </IconButton>
        </Grid>
    )
}

export default HeaderInputs
