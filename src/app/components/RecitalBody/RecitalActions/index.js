import React from 'react'
import { makeStyles } from '@material-ui/styles'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'
import { Grid, IconButton } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { delete_item } from '../../../store/templateReducer'

const useStyles = makeStyles({
    actions: {
        display: 'none',
    },
})

const RecitalActions = ({ pageIndex, itemIndex, handleShowModal, data }) => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleDelete = () => {
        dispatch(delete_item({ pageIndex, musicianIndex: itemIndex }))
    }

    const handleEdit = () => {
        handleShowModal(pageIndex, itemIndex, data)
    }

    return (
        <div className={`${classes.actions} actions`}>
            <Grid container>
                <IconButton onClick={handleEdit}>
                    <CreateOutlinedIcon />
                </IconButton>
                <IconButton onClick={handleDelete}>
                    <DeleteForeverOutlinedIcon />
                </IconButton>
            </Grid>
        </div>
    )
}

export default RecitalActions
