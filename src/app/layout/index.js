import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import clsx from 'clsx'
import Header from './Header'
import SideBar from './SideBar'
import Body from './Body'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 56,
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64,
        },
    },
    shiftContent: {
        paddingLeft: 240,
    },
    content: {
        height: '100%',
    },
}))

const Layout = ({ children }) => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const classes = useStyles()
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true,
    })

    const handleSidebarOpen = () => {
        setOpenSidebar(true)
    }

    const handleSidebarClose = () => {
        setOpenSidebar(false)
    }

    const shouldOpenSidebar = isDesktop ? true : openSidebar

    return (
        <div
            className={clsx({
                [classes.root]: true,
                [classes.shiftContent]: isDesktop,
            })}
        >
            <Header onSidebarOpen={handleSidebarOpen} />
            <SideBar
                onClose={handleSidebarClose}
                open={shouldOpenSidebar}
                variant={isDesktop ? 'persistent' : 'temporary'}
            />
            <main className={classes.content}>
                <Body>{children}</Body>
            </main>
        </div>
    )
}

export default Layout
