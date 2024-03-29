import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

const CustomModal = ({
    showModal,
    setShowModal,
    children,
    description,
    label,
}) => {
    const classes = useStyles()

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <Modal
            className={classes.modal}
            open={showModal}
            onClose={handleCloseModal}
            aria-labelledby={label}
            aria-describedby={description}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={showModal}>
                <div className={classes.paper}>{children}</div>
            </Fade>
        </Modal>
    )
}

export default CustomModal
