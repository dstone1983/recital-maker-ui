import React from 'react'
import {
    AppBar,
    Hidden,
    Toolbar,
    Badge,
    Typography,
    IconButton,
} from '@material-ui/core'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import firebase from '../../config/firebase'
import { LibraryMusicTwoTone, ExitToApp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { logout_success } from '../../store/authReducer'

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none',
    },
    flexGrow: {
        flexGrow: 1,
    },
    signOutButton: {
        marginLeft: theme.spacing(1),
    },
    logo_heading: {
        color: '#fff',
        'margin-left': '15px',
        'font-size': '24px',
    },
}))

const Header = ({ className }) => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleLogout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch(logout_success())
            })
    }

    return (
        <AppBar className={clsx(classes.root, className)}>
            <Toolbar>
                <LibraryMusicTwoTone />
                <Typography className={classes.logo_heading} variant="h1">
                    Recital Maker
                </Typography>
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    <IconButton
                        onClick={handleLogout}
                        color="inherit"
                        className={classes.signOutButton}
                    >
                        <Badge>
                            <ExitToApp />
                        </Badge>
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default Header
