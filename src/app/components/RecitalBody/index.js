import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, IconButton } from '@material-ui/core'
import RecitalItem from './RecitalItem'
import RecitalHeader from './RecitalHeader'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

const useStyles = makeStyles(() => ({
    recitalPage: {
        boxSizing: 'border-box',
        width: '595.2756px',
        height: '841.8898px',
        border: '1px solid #000000',
        padding: '40px',
        position: 'relative',
        '& h1, h2': {
            textAlign: 'center',
        },
    },
    docBody: {
        boxSizing: 'border-box',
        height: '100%',
        padding: '20px',
    },
    headline: {
        margin: '5px 0',
        lineHeight: '1em',
    },
    subHeadline: {
        margin: '5px 0',
        lineHeight: '1em',
    },
    dateTime: {
        margin: '5px 0 20px',
        lineHeight: '.6em',
    },
    addButton: {
        padding: 0,
    },
    pageCount: {
        position: 'absolute',
        textAlign: 'center',
        left: '5px',
        bottom: '-10px',
    },
}))

const RecitalBody = ({
    template,
    pageIndex,
    musicians,
    handleShowModal,
    pageLength,
    setPagePercentage,
}) => {
    const innerBody = useRef()
    const contentRef = useRef()
    const classes = useStyles()
    const [currentPagePercentage, setCurrentPagePercentage] = useState(1)

    useEffect(() => {
        const percentage =
            contentRef.current.offsetHeight /
            (innerBody.current.offsetHeight - 40)

        if (pageLength - 1 === pageIndex) {
            setPagePercentage(percentage)
        }

        setCurrentPagePercentage(percentage)
    }, [musicians, pageIndex, pageLength, setPagePercentage])

    const showAddEditModal = () => {
        handleShowModal(pageIndex)
    }

    return (
        <>
            <div
                className={classes.recitalPage}
                style={{ backgroundColor: template.background }}
            >
                <div
                    ref={innerBody}
                    className={classes.docBody}
                    style={template.style}
                >
                    <div ref={contentRef}>
                        {pageIndex === 0 && (
                            <RecitalHeader
                                dateTime={template.dateTime}
                                headline={template.headline}
                                subHeadline={template.subHeadline}
                                sameLine={template.sameLine}
                            />
                        )}
                        <Grid container>
                            {musicians.map((musician, index) => {
                                return (
                                    <RecitalItem
                                        handleShowModal={handleShowModal}
                                        pageIndex={pageIndex}
                                        itemIndex={index}
                                        musician={musician}
                                        key={index}
                                    />
                                )
                            })}
                        </Grid>
                    </div>
                </div>
                {currentPagePercentage < 0.85 && (
                    <Grid container justify="center">
                        <IconButton
                            className={classes.addButton}
                            onClick={showAddEditModal}
                        >
                            <AddCircleOutlineIcon color="primary" />
                        </IconButton>
                    </Grid>
                )}
                <p className={classes.pageCount}>Page {pageIndex + 1}</p>
            </div>
        </>
    )
}

export default RecitalBody
