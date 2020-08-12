import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import firebase from '../../../config/firebase'
import {
    generateCustomUserObj,
    handleLogin,
} from '../../../Services/googleAuth'
import clsx from 'clsx'
import { Avatar, Typography, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { auth_success } from '../../../store/authReducer'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content',
    },
    avatar: {
        width: 60,
        height: 60,
    },
    name: {
        marginTop: theme.spacing(1),
    },
}))

const Profile = ({ className, ...rest }) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const { isLoggedIn, user } = useSelector(state => state.auth)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const userObj = generateCustomUserObj(user)
                dispatch(auth_success(userObj))
            }
        })
    }, [dispatch])

    if (!isLoggedIn) {
        return (
            <>
                <Typography>
                    Want to save templates and musicians sign in with google?
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleLogin}
                >
                    Log In
                </Button>
            </>
        )
    }

    return (
        <div {...rest} className={clsx(classes.root, className)}>
            <Avatar
                alt="Person"
                className={classes.avatar}
                src={user.photoURL ? user.photoURL : ''}
                to="/settings"
            />
            <Typography className={classes.name} variant="h4">
                {user.displayName}
            </Typography>
            <Typography variant="body2">{user.bio}</Typography>
        </div>
    )
}

export default Profile
