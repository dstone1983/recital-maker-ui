import React from 'react'
import { Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import Profile from './Profile'

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        [theme.breakpoints.up('lg')]: {
            marginTop: 64,
            height: 'calc(100% - 64px)',
        },
    },
    root: {
        backgroundColor: theme.palette.white,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: theme.spacing(2),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    nav: {
        marginBottom: theme.spacing(2),
    },
}))

const SideBar = ({ open, variant, onClose, className, ...rest }) => {
    const classes = useStyles()

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            open={true}
            variant={variant}
        >
            <div className={clsx(classes.root, className)}>
                <Profile />
            </div>
        </Drawer>
    )
}

export default SideBar
